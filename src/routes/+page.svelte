<script>
	import FireParticles from '$lib/FireParticles.svelte';
	import GetRektNow from '$lib/GetRektNow.svelte';
</script>

<div class="mx-auto max-w-4xl py-10 text-white">
	<div class="flex">
		<div style="z-index:2;" class="left-margin">
			<h1 class="mb-4 mt-40 text-9xl font-bold">COMET</h1>
			<p class="mb-14 ml-4 text-2xl" style="font-family:fantasy">
				It's like bitcoin but 1000x better.
			</p>
			<GetRektNow></GetRektNow>
		</div>
		<FireParticles />
	</div>
</div>

<style>
	@media (min-width: 1200px) {
		.left-margin {
			margin-left: -10%;
		}
	}
</style>
