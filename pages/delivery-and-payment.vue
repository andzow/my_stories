<template>
	<div>
		<DeliveryMyMain />
		<DeliveryMyAbout />
		<LazyUIMyAnimationLine
			duration="4"
			:arrAnimationLine="arrAnimationLine"
			v-if="arrAnimationLine && checkHydrate"
		/>
		<LazyUIMyNoise v-if="checkHydrate" />
	</div>
</template>

<script>
export default {
	setup() {
		useHead({
			title:
				'Доставка и оплата - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories',
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
					content: `Доставка и оплата - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories`,
				},
				{
					name: 'keywords',
					content:
						'доставка и оплата, модная женская одежда, интернет-магазин, стильная одежда, mystories',
				},
				{ name: 'format-detection', content: 'telephone=no' },
				{
					property: 'og:title',
					content:
						'Доставка и оплата - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories',
				},
				{
					property: 'og:description',
					content: `В интернет-магазине mystories вас ждет огромный выбор модной одежды различных размеров! Доставка по всей России.`,
				},
				{
					property: 'og:site_name',
					content:
						'Интернет-магазин модной женской одежды и доставкой по всей России | MyStories',
				},
				{
					property: 'og:image',
					content: '/Preload/collectionF.webp',
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
			if (window.innerWidth > 930) {
				this.arrAnimationLine = [
					{
						name: '.header__logo',
						defaultLine: false,
						indent: 'left',
					},
					{
						name: '.about__info_image',
						defaultLine: false,
						widthTo: true,
						indent: 'left',
					},
					{
						name: '.main__delivery_title',
						defaultLine: false,
						indent: 'left',
					},
					{
						name: '.main__delivery_number',
						defaultLine: false,
						indent: 'left',
					},
				]
				return
			}
			this.arrAnimationLine = [
				{ name: '.header__logo', defaultLine: false, indent: 'left' },

				{
					name: '.header__interaction_cart',
					defaultLine: false,
					indent: 'left',
					widthTo: true,
				},
			]
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
