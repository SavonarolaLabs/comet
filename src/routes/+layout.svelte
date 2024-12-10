<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Nav />

<div
	class="cut relative min-h-screen bg-[radial-gradient(ellipse_at_top_right,_#f0803c_0%,_#e45b3c_80%)]"
>
	{@render children()}
</div>

<style>
	.cut {
		max-width: 100vw;
		overflow-x: hidden;
		position: relative;
	}
</style>
