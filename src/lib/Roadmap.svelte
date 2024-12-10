<script lang="ts">
	const items = [
		{
			date: '1 November 2021',
			title: 'Comet was born',
			description: 'THE meme token was born'
		},
		{
			title: 'Comet token added ergomixer',
			description:
				'Mix your $Comet and stay anonymous With <a class="underline text-blue-500" href="https://github.com/ergoMixer/ergoMixBack" target="_blank" rel="noopener noreferrer">ErgoMixer</a>'
		},
		{
			title: 'Refundable Ico & Decentralized Lottery',
			description: '$Comet slave devs made some smart contracts for fun'
		},
		{
			title: '$COMET(HODL)',
			description:
				'Hodl your $Comet <a class="underline text-blue-500" href="https://comet.phoenixfi.app/" target="_blank" rel="noopener noreferrer">here</a>'
		},
		{
			title: '$COMET bridged to multi chains using Rosen Bridge',
			description:
				'Bridge your $Comet using <a class="underline text-blue-500" href="https://app.rosen.tech" target="_blank" rel="noopener noreferrer">Rosen Bridge</a>'
		},
		{
			title: 'Rekt',
			description: 'Rekt is scheduled'
		}
	];
</script>

<div>
	<div class="my-10 text-6xl font-bold text-white" id="roadmap">Roadmap</div>
	<ol class="relative ml-2 max-w-[760px] border-s border-gray-200 dark:border-gray-700">
		{#each items as item}
			<li class="mb-10 ms-4">
				<div
					class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-[#6225e6] border-gray-900 dark:bg-gray-700"
				></div>
				{#if item.date}
					<time class="mb-1 text-sm font-normal leading-none text-gray-700">{item.date}</time>
				{/if}
				<h3 class="text-2xl font-semibold text-gray-900 dark:text-white">{@html item.title}</h3>
				<p class="mb-4 text-base text-sm text-gray-200">
					{@html item.description}
				</p>
			</li>
		{/each}
	</ol>
</div>
