<script lang="ts">
	import { dev } from '$app/environment';
	import Alert from '$lib/icons/alert.svelte';
	import About from '../organisms/About.svelte';
	import { base } from '$app/paths';

	export let src: string;
	export let alt: string;
	export let fullBleed: boolean | undefined = undefined;

	export let formats: string[] = ['avif', 'webp', 'png', 'gif'];
	export let widths: string[] | undefined = undefined;

	// src = `/${base}${src}`;
	$: fileName = src.split('.')[0];
	$: fileExtension = src.split('.').slice(-1)[0];

	function buildSrcset() {
		if (dev) return;

		let srcset = '';

		if (widths) {
			for (let i = 0; i < widths.length; i++) {
				srcset += `${fileName}-${widths[i]}.${formats[0]} ${widths[i]}w`;

				if (i < widths.length - 1) {
					srcset += ', ';
				}
			}
		} else {
			for (let i = 0; i < formats.length; i++) {
				srcset += `${fileName}.${formats[i]}`;

				if (i < formats.length - 1) {
					srcset += ', ';
				}
			}
		}

		return srcset;
	}
</script>

{#if fileExtension === 'mp4'}
	<video autoplay loop>
		<source src={base + src} type="video/mp4" />
	</video>
{:else}
	<img
		srcset={buildSrcset()}
		src={base + src}
		{alt}
		loading="lazy"
		decoding="async"
		class:full-bleed={fullBleed}
	/>
{/if}

<style lang="scss">
	img,
	video {
		width: 100%;
		height: 100%;
		object-fit: contain;
		margin: 0;
	}
</style>
