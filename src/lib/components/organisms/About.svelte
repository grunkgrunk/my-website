<script>
</script>

<section id="about">
	<div class="item">
		<h2>Education</h2>
		<p>I hold a Bachelor's degree in Mathematics from the University of Copenhagen and am nearing completion of my Master's in Mathematics.</p>
	</div>

	<div class="item">
		<h2>Volunteering</h2>
		<p>
			I have taught kids how to code at <a href="https://codingpirates.dk/">Coding Pirates</a> and volunteered
			at a summer camp for kids.
		</p>
	</div>
	<div class="item">
		<h2>Free time</h2>
		<p>I enjoy hanging out with friends, making video games, and playing the trombone.</p>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		gap: 50px;

		h2 {
			font-size: 1.2rem;
			font-family: var(--font--title);
			font-weight: 700;
		}
		p {
			margin-top: 5px;
			font-size: 0.9rem;
			hyphens: auto;
			max-width: 350px;
		}
		.item {
			border-left: 1px solid black;
			width: 90%;
			padding-left: 10px;
		}
	}
</style>
