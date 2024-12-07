<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';

	// Constants for particle system configuration
	const SPAWN_X = 1.5; // Adjust this for X spawn location
	const SPAWN_Y = -1; // Adjust this for Y spawn location
	const PARTICLE_ROTATION_ANGLE = Math.PI / 4; // Rotation angle for particles (default: 45 degrees)

	interface FireParticleConfig {
		colorRamp: number[][];
		scaleSpeed: number;
		maxAge: number;
		rotationAngle?: number; // Optional custom rotation angle
	}

	class FireParticle {
		private obj: THREE.Mesh;
		private direction: THREE.Vector3;
		private scaleSpeed: number;
		private curAge: number;
		private colorRamp: number[][];
		private parent: ParticleSystem;
		private maxAge: number;
		private rotationAngle: number;

		constructor(parent: ParticleSystem, baseParticle: THREE.Mesh, config: FireParticleConfig) {
			this.parent = parent;
			this.colorRamp = config.colorRamp;
			this.maxAge = config.maxAge;
			this.scaleSpeed = config.scaleSpeed;
			this.rotationAngle = config.rotationAngle ?? PARTICLE_ROTATION_ANGLE;
			this.init(baseParticle);
		}

		private randomFloat(a: number, b: number): number {
			return Math.random() * (b - a) + a;
		}

		private partToHex(part: number): string {
			const hex = Math.floor(part).toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		}

		private interpolateColor(start: number[], end: number[], t: number): number[] {
			return [
				start[0] * (1 - t) + end[0] * t,
				start[1] * (1 - t) + end[1] * t,
				start[2] * (1 - t) + end[2] * t
			];
		}

		update(scene: THREE.Scene): void {
			if (
				Math.abs(this.parent.pos.x - this.obj.position.x) > 10 ||
				Math.abs(-this.parent.pos.y - this.obj.position.y) > 10
			) {
				this.obj.scale.x *= 0.8;
				this.obj.scale.y *= 0.8;
				this.obj.scale.z *= 0.8;
			}

			const point = this.curAge / this.maxAge;
			const pointRem = point % 1;
			let color: number[];

			if (Math.floor(point) >= this.colorRamp.length - 1) {
				color = this.colorRamp[this.colorRamp.length - 1];
			} else {
				const startColorIndex = Math.floor(point);
				const start = this.colorRamp[startColorIndex];
				const end = this.colorRamp[startColorIndex + 1];
				color = this.interpolateColor(start, end, pointRem);
			}

			const hexColor = parseInt(
				this.partToHex(color[0]) + this.partToHex(color[1]) + this.partToHex(color[2]),
				16
			);

			(this.obj.material as THREE.MeshBasicMaterial).color.setHex(hexColor);
			this.curAge++;

			if (this.obj.scale.x < 0.01) {
				this.init(this.obj);
				return;
			}

			this.obj.position.x += this.direction.x;
			this.obj.position.y += this.direction.y;
			this.obj.position.z += this.direction.z;

			this.obj.scale.x *= this.scaleSpeed;
			this.obj.scale.y *= this.scaleSpeed;
			this.obj.scale.z *= this.scaleSpeed;
		}

		init(baseParticle: THREE.Mesh): void {
			const baseYDirection = this.randomFloat(-0.1, -0.05);
			const adjustedY = baseYDirection + this.parent.mouseYFactor * 0.02;

			this.direction = new THREE.Vector3(
				this.randomFloat(-0.05, -0.01), // strongly negative X for left
				adjustedY, // negative with slight mouse Y influence
				this.randomFloat(-0.01, 0.01)
			);
			this.scaleSpeed = this.randomFloat(0.8, 0.99);
			this.curAge = 0;

			if (this.obj) {
				this.parent.scene.remove(this.obj);
			}

			this.obj = baseParticle.clone() as THREE.Mesh;
			this.obj.position.set(
				this.parent.obj.position.x + this.randomFloat(-0.2, 0.2),
				this.parent.obj.position.y,
				this.parent.obj.position.z + this.randomFloat(-0.2, 0.2)
			);
			this.obj.scale.set(1, 2, 1);
			this.obj.material = (this.obj.material as THREE.MeshBasicMaterial).clone();

			for (let i = 0; i < this.randomFloat(0, 100); i++) {
				this.update(this.parent.scene);
			}

			this.parent.scene.add(this.obj);
		}
	}

	class ParticleSystem {
		scene: THREE.Scene;
		obj: THREE.Group;
		pos: THREE.Vector3;
		particles: FireParticle[];
		private camera: THREE.PerspectiveCamera;
		private baseParticle: THREE.Mesh;
		public mouseYFactor: number = 0;

		constructor(
			scene: THREE.Scene,
			camera: THREE.PerspectiveCamera,
			size: number,
			config: FireParticleConfig
		) {
			this.scene = scene;
			this.camera = camera;
			this.obj = new THREE.Group();
			this.pos = new THREE.Vector3(0, 0, 0);

			this.obj.position.set(SPAWN_X, SPAWN_Y, 0);
			this.particles = [];

			this.createBaseParticle(config.rotationAngle);
			this.init(size, config);
		}

		private createBaseParticle(rotationAngle?: number): void {
			const geometry = new THREE.PlaneGeometry(1, 1, 1);
			geometry.rotateZ(rotationAngle ?? PARTICLE_ROTATION_ANGLE);

			const positions = geometry.attributes.position;
			if (positions) {
				for (let i = 0; i < positions.count; i++) {
					const y = positions.getY(i);
					if (Math.round(y) !== 0) {
						positions.setX(i, 0);
						positions.setZ(i, 0);
					}
				}
				positions.needsUpdate = true;
			}

			this.baseParticle = new THREE.Mesh(
				geometry,
				new THREE.MeshBasicMaterial({ color: 0xffffff, emissive: 0x555555 })
			);
		}

		init(size: number, config: FireParticleConfig): void {
			for (let i = 0; i < size; i++) {
				const particle = new FireParticle(this, this.baseParticle, config);
				this.particles.push(particle);
			}

			this.scene.add(this.obj);
		}

		update(mouse: [number, number], width: number, height: number): void {
			this.mouseYFactor = mouse[1] / height - 0.5;
			this.particles.forEach((particle) => particle.update(this.scene));
		}
	}

	export let particleCount = 99;
	export let width = window.innerWidth;
	export let height = window.innerHeight;

	let canvas: HTMLCanvasElement;
	let renderer: THREE.WebGLRenderer;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let particleSystem: ParticleSystem;
	let mouse: [number, number] = [width / 2, height / 2];
	let animationFrame: number;

	const fireConfig: FireParticleConfig = {
		colorRamp: [
			[255, 255, 0], // Yellow
			[255, 136, 34], // Orange
			[255, 17, 68], // Red
			[153, 136, 136] // Gray
		],
		scaleSpeed: 0.95,
		maxAge: 40,
		rotationAngle: Math.PI / 4
	};

	function setupScene() {
		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas });
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(20, width / height, 0.1, 1000);

		renderer.setSize(width, height);
		renderer.setPixelRatio(window.devicePixelRatio);

		scene.background = null;
		camera.position.z = 50;

		particleSystem = new ParticleSystem(scene, camera, particleCount, fireConfig);

		// Load the static image and place it at the spawn point
		const loader = new THREE.TextureLoader();
		loader.load('./chou.png', (texture) => {
			const imgMaterial = new THREE.MeshBasicMaterial({
				map: texture,
				transparent: true
			});
			imgMaterial.map.colorSpace = THREE.SRGBColorSpace;
			const imgGeometry = new THREE.PlaneGeometry(1, 1);
			const imgMesh = new THREE.Mesh(imgGeometry, imgMaterial);
			imgMesh.position.set(0.5, 0.7, 0);
			imgMesh.scale.set(10, 10, 0);
			imgMesh.rotation.z = THREE.MathUtils.degToRad(40);
			scene.add(imgMesh);
		});
	}

	function render() {
		renderer.render(scene, camera);
		particleSystem.update(mouse, width, height);
		animationFrame = requestAnimationFrame(render);
	}

	function handleMouseMove(e: MouseEvent) {
		mouse = [e.clientX, e.clientY];
	}

	function handleResize() {
		width = window.innerWidth;
		height = window.innerHeight;

		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
	}

	let hoverDirection = 1;
	function animateHover() {
		canvas.style.transform = `translateY(${Math.sin(Date.now() * 0.002) * 10}px) rotate(40deg)`;
		requestAnimationFrame(animateHover);
	}
	onMount(() => {
		setupScene();
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('resize', handleResize);
		animationFrame = requestAnimationFrame(render);
		animateHover();
	});

	onMount(() => {});

	onDestroy(() => {
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('resize', handleResize);
		if (animationFrame) cancelAnimationFrame(animationFrame);
	});
</script>

<canvas
	bind:this={canvas}
	style="z-index:0;position: absolute; top: 0; right: 20; transform: rotate(40deg);"
/>

<style>
	canvas {
		background: transparent;
	}
</style>
