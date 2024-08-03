<div class="logo-container">
	<div class="circle" />
	<div class="logo">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			width="24px"
			viewBox="0 -960 960 960"
			fill="#000000"
			><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg
		>
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.logo-container {
		display: inline-block;
		position: relative;
		width: 30px; /* Adjust as needed */
		height: 30px; /* Adjust as needed to fit the circle and logo */
	}

	.logo {
		width: 24px;
		height: 24px;
	}

	.circle {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: var(--color--card-background); /* Adjust color as needed */
		position: absolute;
		top: -3px;
		left: -3px;
		z-index: -10;
	}
</style>
