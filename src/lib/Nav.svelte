<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="bg-orange-600 text-white">
	<div class="container mx-auto flex items-center justify-between p-4" style="z-index:10;">
		<a href="/" class="comic-neue-bold-italic text-3xl">COMET</a>
		{#if isMenuOpen}
			<div
				class="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-6 bg-red-500 md:hidden"
			>
				<button on:click={toggleMenu} class="absolute right-4 top-4 text-white">
					<X size={32} />
				</button>

				<a
					href="/"
					class="text-xl {$page.url.pathname === '/' ? 'font-bold underline' : ''}"
					on:click={toggleMenu}
				>
					Home
				</a>
				<a
					href="#roadmap"
					class="text-xl {$page.url.pathname === '/roadmap' ? 'font-bold underline' : ''}"
					on:click={toggleMenu}
				>
					Roadmap
				</a>
				<a
					href="/whitepaper"
					class="text-xl {$page.url.pathname === '/whitepaper' ? 'font-bold underline' : ''}"
					on:click={toggleMenu}
				>
					MEME
				</a>

				<div class="flex flex-col space-y-4">
					<a
						href="https://dex.mewfinance.com/ergo/swap?base=0000000000000000000000000000000000000000000000000000000000000000&quote=0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b&initialPoolId=1f01dc8e29806d96ca0b79f8e798cd8cfce51c0e676aaedf6ab3464b37da9dfd"
						class="rekt rounded px-6 py-2 text-lg hover:bg-yellow-400 hover:text-black"
					>
						Get Rekt
					</a>
				</div>
			</div>
		{/if}

		<div class="hidden items-center space-x-4 md:flex">
			<a href="#roadmap" class="comic-neue-bold-italic text-lg hover:underline">Roadmap</a>
			<a href="#memes" class="comic-neue-bold-italic text-lg hover:underline">Memes</a>
			<a href="/whitepaper" class="comic-neue-bold-italic text-lg hover:underline">Whitepaper</a>

			<div class="flex space-x-2">
				<a
					href="https://dex.mewfinance.com/ergo/swap?base=0000000000000000000000000000000000000000000000000000000000000000&quote=0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b&initialPoolId=1f01dc8e29806d96ca0b79f8e798cd8cfce51c0e676aaedf6ab3464b37da9dfd"
					class="rekt rounded px-6 py-2 text-lg hover:bg-yellow-400 hover:text-black"
				>
					Get Rekt
				</a>
			</div>
		</div>

		<button on:click={toggleMenu} class="text-white md:hidden">
			<Menu size={32} />
		</button>
	</div>
</nav>

<style>
	.rekt {
		background-color: #6225e6;
	}
	.comic-neue-bold-italic {
		font-family: 'Comic Neue', serif;
		font-weight: 700;
		font-style: italic;
	}
</style>
