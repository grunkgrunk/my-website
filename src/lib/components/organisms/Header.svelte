<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="container">
	<header>
		<nav class="container">
			<div class="logo">
				<a href="{base}/">Home</a>
			</div>
			<div class="links">
				<a href="{base}/#projects">Projects</a>
				<a href="{base}/about">About</a>
			</div>
		</nav>
	</header>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
	@import '$lib/scss/_mixins.scss';

	header {
		padding: 30px 0;

		.container {
			display: flex;
			align-items: center;
			gap: 30px;
		}

		.logo {
			flex: 1;
		}

		a {
			color: var(--color--text);
		}

		.links {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 30px;
		}
	}
</style>
