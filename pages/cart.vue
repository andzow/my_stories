<template>
	<div>
		<CartMyMain />
		<CartMySlider />
		<LazyUIMyAnimationLine
			v-if="arrAnimationLine && checkHydrate"
			duration="4"
			:arrAnimationLine="arrAnimationLine"
		/>
		<LazyUIMyNoise v-if="checkHydrate" />
	</div>
</template>

<script>
export default {
	setup() {
		useHead({
			title:
				'Корзина - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories',
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
			if (window.innerWidth > 936) {
				this.arrAnimationLine = [
					{ name: '.header__logo', defaultLine: false, indent: 'left' },
					{ name: '.header__ul', defaultLine: false, indent: 'left' },
					{
						name: '.header__ul',
						defaultLine: false,
						indent: 'left',
						widthTo: true,
					},
					{
						name: '.header__interaction_search',
						defaultLine: false,
						indent: 'left',
					},
				]
			} else {
				this.animationDuration = '13'
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

<style scoped></style>
