<template>
	<div>
		<NuxtErrorBoundary>
			<BrandMyMain />
		</NuxtErrorBoundary>
		<section class="index">
			<BrandMyAbout />
			<BrandMyPhrase />
			<BrandMyFacts />
			<BrandMySubscribe />
			<LazyUIMyAnimationLine
				duration="7"
				:arrAnimationLine="arrAnimationLine"
				v-if="arrAnimationLine && checkHydrate"
			/>
			<LazyUIMyNoise v-if="checkHydrate" />
		</section>
	</div>
</template>

<script>
export default {
	setup() {
		useHead({
			title:
				'О бренде - Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.png',
				},
			],
			meta: [
				{
					name: 'description',
					content: `Откройте для себя бренд mystories в нашем интернет-магазине. Мы предлагаем широкий ассортимент модной женской одежды различных размеров и доставку по всей России.`,
				},
				{
					name: 'keywords',
					content:
						'о бренде, модная женская одежда, интернет-магазин, стильная одежда, mystories',
				},
				{ name: 'format-detection', content: 'telephone=no' },
				{
					property: 'og:title',
					content:
						'О бренде - Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
				},
				{
					property: 'og:description',
					content: `Откройте для себя бренд mystories в нашем интернет-магазине. Мы предлагаем широкий ассортимент модной женской одежды различных размеров и доставку по всей России.`,
				},
				{
					property: 'og:site_name',
					content:
						'О бренде - Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
				},
				{
					property: 'og:image',
					content: '/Preload/brandBack.webp',
				},
				{ property: 'og:type', content: 'website' },
				{ property: 'og:locale', content: 'ru_RU' },
			],
			charset: 'utf-8',
			htmlAttrs: { lang: 'ru-RU' },
		})
	},
	data() {
		return {
			arrAnimationLine: null,
			checkHydrate: useCheckHydration(),
		}
	},
	methods: {
		initLine() {
			if (window.innerWidth > 1100) {
				this.arrAnimationLine = [
					{ name: '.header__logo', defaultLine: false, indent: 'left' },
					{
						name: '.about__information_li1',
						defaultLine: false,
						indent: 'left',
						widthTo: true,
					},
					{
						name: '.about__text',
						defaultLine: false,
						indent: 'left',
					},
					{
						name: '.about__text',
						defaultLine: false,
						indent: 'left',
						widthTo: true,
					},
				]
			} else if (window.innerWidth > 767) {
				this.arrAnimationLine = [
					{ name: '.header__logo', defaultLine: false, indent: 'left' },
					{
						name: '.about__mob_img',
						defaultLine: false,
						indent: 'left',
						widthTo: true,
					},
					{
						name: '.header__interaction_search',
						defaultLine: false,
						indent: 'left',
					},
					{
						name: '.header__interaction_cart',
						defaultLine: false,
						indent: 'left',
						widthTo: true,
					},
				]
			} else {
				this.arrAnimationLine = [
					{ name: '.header__logo', defaultLine: false, indent: 'left' },
					{
						name: '.header__interaction_cart',
						defaultLine: false,
						indent: 'left',
						widthTo: true,
					},
				]
			}
		},
	},
	mounted() {
		const bodyEl = document.body
		bodyEl.style.overflow = 'auto'
		this.initLine()
	},
}
</script>

<style scoped>
.index {
	position: relative;
	background-color: var(--yellow);
	width: 100vw;
	z-index: 15;
}
</style>
