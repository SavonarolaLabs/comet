<script lang="ts">
	interface GalleryItem {
		src: string;
		alt: string;
		caption: string;
		href?: string;
	}

	export let items: GalleryItem[] = [
		{
			src: './comet-erg.png',
			alt: 'Comet-erg',
			caption: 'Comet-erg'
		},
		{
			src: './comet-musk.png',
			alt: 'Musk holds Comet',
			caption: 'Musk holds Comet'
		},
		{
			src: './comet-gold.png',
			alt: 'Comet is the new gold',
			caption: 'Comet is the new gold'
		},
		{
			src: 'https://pbs.twimg.com/media/GeLqg8DXUAAmdpu?format=jpg&name=large',
			alt: 'Do your #NFTs get airdrops? 🤔 Don’t miss out!',
			caption: 'Do your #NFTs get airdrops? 🤔 Don’t miss out!',
			href: 'https://x.com/CometMooning/status/1865311284326965386'
		},
		{
			src: 'https://pbs.twimg.com/media/GeL1iiVbEAAiF_L?format=jpg&name=900x900',
			alt: 'Thanks, Comet ^^',
			caption: 'Thanks, Comet ^^',
			href: 'https://x.com/coinchitchat/status/1865323506399166859'
		},
		{
			src: 'https://pbs.twimg.com/media/GeHqHIGWkAAstZ6?format=jpg&name=large',
			alt: 'Are you ready? 👀',
			caption: 'Are you ready? 👀',
			href: 'https://x.com/CometMooning/status/1865029134402932829'
		}
	];
</script>

<ul class="grid grid-cols-2 gap-4 md:grid-cols-3">
	{#each items as item}
		<li>
			<a href={item.href ?? ''}>
				<figure
					class="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
				>
					<img src={item.src} alt={item.alt} class="w-full object-cover" />
					<figcaption
						class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center text-white"
					>
						{item.caption}
					</figcaption>
				</figure>
			</a>
		</li>
	{/each}
</ul>

<style>
	* {
		box-sizing: border-box;
	}

	body {
		font-family: Lato, sans-serif;
		margin: 0;
		padding: 1rem;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(20, 20, 20, 1);
	}

	img {
		width: 100%;
		display: block;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		transition: transform 1000ms;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		max-width: 100%;
		width: 70rem;
	}

	figure {
		margin: 0;
		position: relative;
		overflow: hidden;
	}

	figure::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 200%;
		height: 200%;
		background: rgba(0, 0, 0, 0.5);
		transform-origin: center;
		opacity: 0;
		transform: scale(2);
		transition: opacity 300ms;
	}

	figcaption {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		place-items: center;
		text-align: center;
		padding: 1rem;
		color: white;
		font-size: 1.2rem;
		z-index: 1;
		opacity: 0;
		transition:
			opacity 600ms,
			transform 600ms;
	}

	a:is(:hover, :focus) figure::after {
		opacity: 1;
	}

	a:is(:hover, :focus) figcaption {
		opacity: 1;
		transition: opacity 600ms;
	}

	@media (prefers-reduced-motion: no-preference) {
		figcaption {
			transform: translate3d(0, 2rem, 0);
		}

		figure::after {
			border-radius: 50%;
			opacity: 1;
			transform: scale(0);
			transition: transform 900ms;
		}

		a:is(:hover, :focus) figure::after {
			transform: scale(2.5);
		}

		a:is(:hover, :focus) figcaption {
			opacity: 1;
			transform: translate3d(0, 0, 0);
			transition:
				opacity 600ms 400ms,
				transform 600ms 400ms;
		}

		a:is(:hover, :focus) img {
			transform: scale(1.2);
		}
	}
</style>
