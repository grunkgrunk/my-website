<script>
	import Image from '$lib/components/atoms/Image.svelte';

	let gifs = [
		{
			filename: 'mandelbrot_0',
			href: 'https://x.com/DGrunkin/status/1134730295616376832'
		},
		{
			filename: 'circles_0',
			href: 'https://x.com/DGrunkin/status/1000113549727993857'
		},
		{
			filename: 'relationship_0',
			href: 'https://x.com/DGrunkin/status/1000738538051325953'
		},
		{
			filename: 'goomba_0',
			href: 'https://x.com/DGrunkin/status/1017132880126988289'
		}
	];
</script>

<div class="gifs">
	{#each gifs as gif}
		<a href={gif.href}>
			<Image src="/images/posts/tweetcarts/{gif.filename}.gif" alt={gif.href} />
		</a>
	{/each}
</div>

<style lang="scss">
	.gifs {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px; // space between grid items
	}
	.img {
		margin: 0;
	}
</style>
