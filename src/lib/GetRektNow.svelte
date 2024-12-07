<script lang="ts">
	// No logic needed
	export let text = 'BUY NOW';
</script>

<div class="flex items-center justify-center">
	<a
		href="https://dex.mewfinance.com/ergo/swap?base=0000000000000000000000000000000000000000000000000000000000000000&quote=0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b&initialPoolId=1f01dc8e29806d96ca0b79f8e798cd8cfce51c0e676aaedf6ab3464b37da9dfd"
		class="cta"
	>
		<span>{text}</span>
		<span>
			<svg
				width="66px"
				height="43px"
				style="margin-top:6px"
				viewBox="0 0 66 43"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="arrow" fill="none" fill-rule="evenodd">
					<path
						class="one"
						d="M40.154,3.895l3.822-3.755a0.5,0.5,0,0,1,.701.002L65.692,20.785a1,1,0,0,1,.012,1.414l-21.015,20.65a0.5,0.5,0,0,1-.701-.003L40.155,39.107a0.5,0.5,0,0,1,.003-0.708L56.994,21.857a0.5,0.5,0,0,0-.003-0.707L40.155,4.608a0.5,0.5,0,0,1-.001-0.713Z"
						fill="#FFFFFF"
					/>
					<path
						class="two"
						d="M20.154,3.895l3.822-3.755a0.5,0.5,0,0,1,.701.002L45.692,20.785a1,1,0,0,1,.012,1.414l-21.015,20.65a0.5,0.5,0,0,1-.701-.003L20.155,39.107a0.5,0.5,0,0,1,.003-0.708L36.994,21.857a0.5,0.5,0,0,0-.003-0.707L20.155,4.608a0.5,0.5,0,0,1-.001-0.713Z"
						fill="#FFFFFF"
					/>
					<path
						class="three"
						d="M0.154,3.895L3.976,0.139a0.5,0.5,0,0,1,.701.002L25.692,20.785a1,1,0,0,1,.012,1.414l-21.015,20.65a0.5,0.5,0,0,1-.701-.003L0.155,39.107a0.5,0.5,0,0,1,.003-0.708L16.994,21.857a0.5,0.5,0,0,0-.003-0.707L0.155,4.608a0.5,0.5,0,0,1-.001-0.713Z"
						fill="#FFFFFF"
					/>
				</g>
			</svg>
		</span>
	</a>
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Poppins:900i');

	* {
		box-sizing: border-box;
	}

	.cta {
		display: flex;
		padding: 10px 45px;
		text-decoration: none;
		font-family: 'Poppins', sans-serif;
		font-size: 40px;
		color: white;
		background: #6225e6;
		transition: 1s;
		box-shadow: 6px 6px 0 rgb(173, 14, 14);
		transform: skewX(-15deg);
		position: relative;
	}

	.cta:focus {
		outline: none;
	}

	.cta:hover {
		transition: 0.5s;
		box-shadow: 10px 10px 0 #fbc638;
	}

	.cta span:nth-child(2) {
		transition: 0.5s;
		margin-right: 0;
	}

	.cta:hover span:nth-child(2) {
		margin-right: 45px;
	}

	.cta span {
		transform: skewX(15deg);
	}

	.cta span:nth-child(2) {
		width: 20px;
		margin-left: 30px;
		position: relative;
		top: 12%;
	}

	/* SVG Animations */
	path.one {
		transition: transform 0.4s;
		transform: translateX(-60%);
	}

	path.two {
		transition: transform 0.5s;
		transform: translateX(-30%);
	}

	.cta:hover path.three {
		animation: color_anim 1s infinite 0.2s;
	}

	.cta:hover path.one {
		transform: translateX(0);
		animation: color_anim 1s infinite 0.6s;
	}

	.cta:hover path.two {
		transform: translateX(0);
		animation: color_anim 1s infinite 0.4s;
	}

	@keyframes color_anim {
		0% {
			fill: white;
		}
		50% {
			fill: #fbc638;
		}
		100% {
			fill: white;
		}
	}
</style>
