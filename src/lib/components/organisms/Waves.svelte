<div class="waves-container" />

<style lang="scss">
	@import '$lib/scss/_breakpoints.scss';
	.waves-container {
		background: linear-gradient(0deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
		width: 100%;
		height: 100%;
		z-index: 999;

		@include for-phone-only {
			height: min(75vh, 400px);
		}
	}

	.waves {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 15vh;
		/*Fix for safari gap*/
		min-height: 100px;
		max-height: 150px;
	}

	/* Animation */
	.parallax > use {
		@media screen and (prefers-reduced-motion: no-preference) {
			animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
		}
	}
	.parallax > use:nth-child(1) {
		animation-delay: -2s;
		animation-duration: 7s;
	}
	.parallax > use:nth-child(2) {
		animation-delay: -3s;
		animation-duration: 10s;
	}
	.parallax > use:nth-child(3) {
		animation-delay: -4s;
		animation-duration: 13s;
	}
	.parallax > use:nth-child(4) {
		animation-delay: -5s;
		animation-duration: 20s;
	}
	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}
</style>
