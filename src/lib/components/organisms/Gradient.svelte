<script lang="ts">
	export let placement: 'top' | 'bottom' = 'top';
	export let from = '#f3cf91';
	export let to = '#f4f8fb';
</script>

<div
	class="gradient-background"
	class:bottom={placement === 'bottom'}
	class:top={placement === 'top'}
/>

<style lang="scss">
	.gradient-background {
		position: absolute;
		left: 0;
		width: 100%;
		height: 300px;
		background: linear-gradient(to bottom, #fef3db, var(--color--page-background));
		z-index: -1;
		top: 0;

		&.bottom {
			bottom: 0;
		}
	}
</style>
