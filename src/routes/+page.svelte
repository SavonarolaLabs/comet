<script>
	import FireParticles from '$lib/FireParticles.svelte';
	import GetRektNow from '$lib/GetRektNow.svelte';
	import Roadmap from '$lib/Roadmap.svelte';
	import { onMount } from 'svelte';

	let stars = [];

	onMount(() => {
		stars = new Array(200).fill(0).map(() => ({
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			r: Math.random() * 2 + 1
		}));

		function update() {
			stars = stars.map((star) => {
				star.x -= star.r;
				if (star.x < 0) {
					star.x = window.innerWidth;
					star.y = Math.random() * window.innerHeight;
				}
				return star;
			});
			requestAnimationFrame(update);
		}

		requestAnimationFrame(update);
	});
</script>

<div class="relative min-h-screen">
	<!-- Star Background -->
	<div class="absolute inset-0" style="z-index:0">
		{#each stars as star}
			<div
				class="star"
				style="transform: translate({star.x}px, {star.y}px) scale({star.r}); opacity: {star.r / 3};"
			></div>
		{/each}
	</div>

	<!-- Page Content -->
	<div class="relative z-10 mx-auto max-w-4xl py-10 text-white">
		<div class="flex" style="z-index:2;">
			<div class="left-margin">
				<h1 class="mb-4 mt-40 text-9xl font-bold">COMET</h1>
				<p class="mb-20 ml-4 text-2xl" style="font-family: fantasy">
					It's like bitcoin but <span class="bold-scale mx-3">1000x</span> better.
				</p>
				<GetRektNow />
			</div>
			<FireParticles />
		</div>
	</div>
</div>
<div class="flex w-full justify-center">
	<Roadmap></Roadmap>
</div>

<style>
	.left-margin {
		z-index: 10;
	}
	@media (min-width: 1200px) {
		.left-margin {
			margin-left: -10%;
		}
	}

	@import url('https://fonts.googleapis.com/css2?family=Fantasy&display=swap');

	.font-fantasy {
		font-family: fantasy;
	}

	.bold-scale {
		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
		display: inline-block;
		animation: scaleLoop 1.5s ease-in-out infinite;
	}

	@keyframes scaleLoop {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.3);
		}
	}

	.star {
		position: absolute;
		width: 2px;
		height: 2px;
		background: white;
		border-radius: 50%;
		pointer-events: none;
	}
</style>
