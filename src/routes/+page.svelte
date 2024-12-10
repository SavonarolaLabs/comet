<script>
	import DontBuy from '$lib/DontBuy.svelte';
	import FireParticles from '$lib/FireParticles.svelte';
	import Footer from '$lib/Footer.svelte';
	import GetRektNow from '$lib/GetRektNowAda.svelte';
	import GetRektNowErgo from '$lib/GetRektNowErgo.svelte';
	import Memes from '$lib/Memes.svelte';
	import Roadmap from '$lib/Roadmap.svelte';
	import Whitepaper from '$lib/Whitepaper.svelte';
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
	<div class="stars absolute inset-0" style="z-index:0">
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
				<h1
					class="comic-neue-bold-italic mb-4 text-center text-8xl font-bold sm:mt-40 sm:text-left sm:text-9xl"
				>
					COMET
				</h1>
				<p
					class="mb-20 ml-4 flex items-center text-center text-2xl sm:text-left"
					style="font-family: fantasy"
				>
					It's like <img
						src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
						width="40px"
						style="padding-bottom:10px"
						class="mx-2"
						alt=""
					/>
					but
					<span class="bold-scale mx-3 pb-1">1000x</span> better.
				</p>
				<div class="mt200"></div>
				<DontBuy></DontBuy>
			</div>
			<FireParticles />
		</div>
	</div>
</div>
<div class="flex w-full justify-center">
	<Roadmap></Roadmap>
</div>
<div class="mt-40 flex w-full justify-center">
	<Memes></Memes>
</div>
<div class="flex w-full justify-center">
	<Whitepaper></Whitepaper>
</div>
<div class="my-20 flex w-full justify-center">
	<DontBuy></DontBuy>
</div>
<Footer></Footer>

<style>
	@media (max-width: 639px) {
		.mt200 {
			margin-top: 500px;
		}
	}
	.stars {
		background-color: black;
		animation: fadeToTransparent 30s infinite alternate;
	}

	@keyframes fadeToTransparent {
		0% {
			background-color: black;
		}
		100% {
			background-color: transparent;
		}
	}

	.comic-neue-bold-italic {
		font-family: 'Comic Neue', serif;
		font-weight: 700;
		font-style: italic;
	}
	@media (max-width: 639px) {
		.left-margin {
			width: 100vw;
		}
	}
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
