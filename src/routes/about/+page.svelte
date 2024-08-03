<script>
	import About from '$lib/components/organisms/About.svelte';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';


	import Gradient from '$lib/components/organisms/Gradient.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
</script>

<Gradient />
<Header />
<div class="container">
	<div class="intro">
		<About />
		<div class="image-container">
			<div class="image">
				<Image src="/images/me.png" alt="An image of me." />
			</div>
			<Socials />
		</div>
	</div>
</div>
<Footer />

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	h1 {
		text-align: center;
	}

	.intro {
		padding-top: 50px;
		padding-bottom: 50px;
		display: flex;
		flex-direction: row;
		gap: 100px;
		justify-content: center;
		align-items: start;
		@include for-phone-only {
			flex-direction: column-reverse;
			align-items: center;
		}
	}

	.image {
		width: 190px;
		height: 190px;
		margin-bottom: 16px;
		filter: drop-shadow(0px 4px 1px #b0b4b7);
	}
	.image-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.image,
	.socials {
		display: flex;
		justify-content: center;
		width: 100%;
	}
</style>
