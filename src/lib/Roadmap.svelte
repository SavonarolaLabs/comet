<script lang="ts">
	const items = [
		{ date: 'November 1, 2021', title: 'Comet was born', description: 'THE meme token was born' },
		{
			date: 'December 6, 2021',
			title: 'Comet token added ergomixer',
			description:
				'Comet token added on ergomixer so you can sent your comet anonymously and pay for your hookers.'
		},
		{
			date: 'February 6, 2022',
			title: 'First nft gamlbing pre sales series',
			description: 'We launch our successfull nft gamlbing series'
		},
		{
			date: 'February 14, 2022',
			title: '10k wallets Airdrop with one transtaction',
			description:
				'We successfully did 10K wallets airdrop with only one transtaction and we broke a record.'
		},
		{
			date: 'March 6, 2022',
			title: 'Pre-Sales',
			description: 'First Pre sales of COMET token.Presale price: 1erg= 200k COMET tokens.'
		},
		{
			date: 'March, 2022',
			title: 'Refundable Ico',
			description: 'COMET will do the First refundable ICO in ergo blockhain'
		},
		{
			date: 'April, 2022',
			title: 'Ergodex listing',
			description: 'COMET token will be listed on ergodex'
		},
		{ date: '2022', title: 'MINING COMET', description: 'Miners will get COMET token rewards.' },
		{ date: '2022', title: 'Burn COMET', description: 'Burn your $COMET in our Website' },
		{
			date: '2022',
			title: 'Comet Wallets',
			description:
				'Comet will launch their comet wallets. Wallets like nautilus, satergo and ergo mobile wallet will try to copy us.'
		},
		{
			date: '2022',
			title: 'Comet oniric lottery 3D NFTs',
			description: 'The holders of the NFTs will earn rewards from the upcoming Lottery forever!'
		},
		{
			date: '2022',
			title: 'Rektorry(lottery)',
			description: 'Soon lottery from COMET, Buy only if you want to get rekt'
		},
		{ date: '2023', title: '$COMET(HODL)', description: 'Comet hodl app' },
		{
			date: '2023',
			title: '$COMET hodls on dear life NFT collection',
			description:
				'Comet hodls on dear life collection is a hand draw nft collection made by lycan that holders have special comet Hodl utilities and watcher revenue airdrops'
		},
		{
			date: '2023',
			title: '$COMET Rosen Watcher',
			description: 'Comet plans on running a Rosen bridge Watcher'
		},
		{
			date: '2023',
			title: '$COMET bridge to Cardano',
			description: '$COMET were bridge to cardano through Rosen bridge.'
		},
		{ date: '2024', title: 'Staking COMET', description: 'You will be able to Stake COMET TOKEN' },
		{
			date: '2024',
			title: '$COMET Burn Dao',
			description:
				'$COMET OG members will create questions/polls and $COMET holders will be able to vote by burning their $COMET Tokens.'
		}
	];
</script>

<ol class="relative border-s border-gray-200 dark:border-gray-700">
	{#each items as item}
		<li class="mb-10 ms-4">
			<div
				class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-[#6225e6] border-gray-900 dark:bg-gray-700"
			></div>
			<time class="mb-1 text-sm font-normal leading-none text-orange-200">{item.date}</time>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
			<p class="mb-4 text-base font-normal text-gray-300">{item.description}</p>
		</li>
	{/each}
</ol>
