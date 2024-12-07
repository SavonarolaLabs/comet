<script lang="ts">
	import { TwitterIcon, GithubIcon, SendIcon } from 'lucide-svelte';
</script>

<footer class="container mx-auto px-4 py-8 text-white">
	<hr class="my-4 border-t border-gray-300" />

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		<div>
			<a href="/" class="inline-block">
				<img
					alt="Comet Logo"
					src="./chou.png"
					class="h-8 w-8 transition-opacity hover:opacity-75"
				/>
			</a>
			<p class="mt-12 text-xs text-gray-200">© 2021 Comet. All rights reserved.</p>
		</div>

		<div>
			<p class="mb-2 font-semibold uppercase">COMET</p>
			<ul class="space-y-1">
				<li><a href="#whitepaper" class="hover:underline">Whitepaper</a></li>
				<li><a href="#memes" class="hover:underline">Memes</a></li>
				<li><a href="#roadmap" class="hover:underline">Roadmap</a></li>
			</ul>
		</div>

		<div>
			<p class="mb-2 font-semibold uppercase">SOCIAL</p>
			<div class="flex space-x-4">
				<a
					href="https://twitter.com/CometMooning"
					aria-label="Twitter"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-blue-500"
				>
					<TwitterIcon class="h-6 w-6" />
				</a>
				<a
					href="https://discord.gg/p4A9KD5GRg"
					aria-label="Discord"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-purple-500"
				>
					<svg
						width="26"
						height="26"
						viewBox="0 0 192 192"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						><path
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="12"
							d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10"
						/><ellipse cx="71" cy="101" fill="white" rx="13" ry="15" /><ellipse
							cx="121"
							cy="101"
							fill="white"
							rx="13"
							ry="15"
						/></svg
					>
				</a>
				<a
					href="https://github.com/CometCommunity"
					aria-label="GitHub"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-gray-700"
				>
					<GithubIcon class="h-6 w-6" />
				</a>
				<a
					href="https://t.me/CometErgoCommunity"
					aria-label="Telegram"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-blue-400"
				>
					<SendIcon class="h-6 w-6" />
				</a>
			</div>
		</div>
	</div>
</footer>
