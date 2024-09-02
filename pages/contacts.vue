<template>
	<div>
		<ContactsMyMain />
		<LazyUIMyAnimationLine
			duration="2"
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
				'Контакты - Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
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
					content: `Свяжитесь с нами в интернет-магазине mystories. Мы предлагаем модную женскую одежду различных размеров и доставку по всей России.`,
				},
				{
					name: 'keywords',
					content:
						'контакты, модная женская одежда, интернет-магазин, стильная одежда, mystories',
				},
				{ name: 'format-detection', content: 'telephone=no' },
				{
					property: 'og:title',
					content:
						'Контакты - Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
				},
				{
					property: 'og:description',
					content: `Свяжитесь с нами в интернет-магазине mystories. Мы предлагаем модную женскую одежду различных размеров и доставку по всей России`,
				},
				{
					property: 'og:site_name',
					content:
						'Контакты - Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
				},
				{
					property: 'og:image',
					content: '/Preload/contacts.webp',
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
						name: '.main__image_img',
						defaultLine: false,
						share: true,
						indent: 'left',
					},
					{
						name: '.main__about_title',
						defaultLine: false,
						indent: 'left',
					},
					{
						name: '.header__interaction_btn',
						defaultLine: false,
						indent: 'left',
					},
				]
			} else {
				this.arrAnimationLine = [
					{
						name: '.header__logo',
						defaultLine: false,
						indent: 'left',
					},
					{
						name: '.header__interaction_cart',
						defaultLine: false,
						widthTo: true,
						indent: 'left',
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
