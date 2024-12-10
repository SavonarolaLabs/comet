<script>
	import GetRektNowAda from './GetRektNowAda.svelte';
	import GetRektNowErgo from './GetRektNowErgo.svelte';
</script>

<div class="container">
	<GetRektNowErgo text="D'ONT BUY Σ" />
	<div class="my-6"></div>
	<GetRektNowAda text="D'ONT BUY ₳" />
</div>

<style lang="postcss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 639px) {
		.container {
			transform: scale(0.7);
		}
	}
</style>
