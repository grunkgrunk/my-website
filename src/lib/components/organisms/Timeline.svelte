<script>
	import BlogPostCard from '../molecules/BlogPostCard.svelte';
</script>

<div class="experience">
	<h2>Work experience</h2>
	<div class="parent">
		<div class="timeline">
			<div class="content">
				<h2>2023</h2>
				<BlogPostCard
					href="https://www.itu.dk/"
					title="IT University of Copenhagen"
					excerpt="Taught courses in linear algebra, probability theory and discrete mathematics."
				/>
			</div>
			<div class="content">
				<h2>2018</h2>
				<BlogPostCard
					href="https://www.trustpilot.com/"
					title="Trustpilot"
					excerpt="
At Trustpilot, I worked as a full-stack developer, utilizing AWS, Octopus, and Jenkins. I contributed to aligning embedded review widgets with the company's rebranding efforts."
				/>
			</div>

			<div class="content">
				<h2>2017</h2>
				<BlogPostCard
					href="https://mentordanmark.dk/"
					title="MentorDanmark"
					excerpt="Worked on automating the process of matching a student with a teacher. Also helped in writing tests in C#"
				/>
			</div>

			<div class="content">
				<h2>2016</h2>
				<BlogPostCard
					href="https://mentordanmark.dk/"
					title="MentorDanmark"
					excerpt="Taught mathematics to primary school students."
				/>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.experience {
		padding: 50px 0;
	}
	h2 {
		text-align: center;
		background: var(--color--page-background);
	}
	.content {
		h2 {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
	.parent {
		display: flex;
		justify-content: center;
		padding-top: 50px;
	}

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 40px;
		max-width: 500px;
		position: relative;
		padding-left: 20px;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 60px; /* Positioning the line */
		top: 0;
		bottom: 0;
		width: 2px; /* Thickness of the line */
		background-color: var(--color--primary); /* Color of the line */
		transform: scaleY(0.93);
	}

	.content {
		display: flex;
		flex-direction: row;
		gap: 40px;
		align-items: center;
		position: relative;
	}
</style>
