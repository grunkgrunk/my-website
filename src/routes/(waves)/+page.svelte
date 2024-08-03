<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import Header from '$lib/components/organisms/Header.svelte';

	import SeparationLine from '$lib/components/organisms/SeparationLine.svelte';
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Gradient from '$lib/components/organisms/Gradient.svelte';

	import type { Feature, BlogPost } from '$lib/utils/types';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
	};

	let { posts } = data;
</script>

<Gradient />
<div class="intro">
	<Header />
	<Hero />
	<div />
	<div id="projects">
		<SeparationLine />
	</div>
</div>

<ContentSection title="Projects" octothorb={true}>
	<div class="grid">
		{#each posts as post}
			<BlogPostCard
				title={post.title}
				coverImage={post.coverImage}
				excerpt={post.excerpt}
				slug={post.slug}
				tags={post.tags}
			/>
		{/each}
	</div>
</ContentSection>
<Footer />

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.intro {
		height: 100vh;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}
	}
</style>
