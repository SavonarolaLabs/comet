<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="bg-orange-600 text-white">
	<div class="container mx-auto flex items-center justify-between p-4">
		<a href="/" class="text-2xl font-bold">COMET</a>
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
					href="/whitepaper"
					class="text-xl {$page.url.pathname === '/whitepaper' ? 'font-bold underline' : ''}"
					on:click={toggleMenu}
				>
					Whitepaper
				</a>
				<a
					href="/roadmap"
					class="text-xl {$page.url.pathname === '/roadmap' ? 'font-bold underline' : ''}"
					on:click={toggleMenu}
				>
					Roadmap
				</a>

				<div class="flex flex-col space-y-4">
					<button class="rounded bg-orange-600 px-6 py-2 text-lg hover:bg-orange-700">
						Connect Wallet
					</button>
					<button class="rounded bg-red-600 px-6 py-2 text-lg hover:bg-red-700"> Get Rekt </button>
				</div>
			</div>
		{/if}

		<div class="hidden items-center space-x-4 md:flex">
			<a href="/whitepaper" class="hover:underline">Whitepaper</a>
			<a href="/roadmap" class="hover:underline">Roadmap</a>

			<div class="flex space-x-2">
				<button class="rounded bg-orange-600 px-3 py-1 hover:bg-orange-700">
					Connect Wallet
				</button>
				<button class="rounded bg-red-600 px-3 py-1 hover:bg-red-700"> Get Rekt </button>
			</div>
		</div>

		<button on:click={toggleMenu} class="text-white md:hidden">
			<Menu size={32} />
		</button>
	</div>
</nav>

<style>
	/* Add any additional mobile-specific styles here if needed */
</style>
