<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let duration = 100; // Optional: allow duration customization
	export let delay = 0;
	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

{#if isVisible}
	<div transition:fade={{ duration, delay }}>
		<slot />
	</div>
{/if}
