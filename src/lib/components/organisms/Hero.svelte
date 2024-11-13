<section id="hero">
	<h1 class="hello">Hi, I'm Daniel.</h1>
	<p class="intro">
		I have a master's degree in Mathematics and enjoy being creative, making both useful and useless things.
	</p>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;

		.hello {
			text-align: center;
		}

		.intro {
			text-align: center;
			font-weight: 500;
			font-size: 1.4rem;
			width: min(70%, 400px);
			@include for-phone-only {
				font-size: 1rem;
			}
		}
	}
</style>
