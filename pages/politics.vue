<template>
	<div>
		<PoliticsMyMain />
		<LazyUIMyNoise v-if="checkHydrate" />
	</div>
</template>

<script>
import politicsData from '~/assets/json/politics.json'

export default {
	setup() {
		useHead({
			title:
				'Политика конфиденциальности - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories',
			viewport: 'width=device-width, initial-scale=1',
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.png',
				},
				{
					rel: 'preload',
					as: 'image',
					href: '/Lookbook/letniy/letniyBack.webp',
				},
				{
					rel: 'preload',
					as: 'image',
					href: '/Lookbook/awakening/awakeningBack.webp',
				},
			],
			meta: [
				{
					name: 'description',
					content: `Политика конфиденциальности - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories`,
				},
				{
					name: 'keywords',
					content:
						'Политика конфиденциальности, модная женская одежда, интернет-магазин, стильная одежда, mystories',
				},
				{ name: 'format-detection', content: 'telephone=no' },
				{
					property: 'og:title',
					content:
						'Политика конфиденциальности - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories',
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
			politics: politicsData,
			checkHydrate: useCheckHydration(),
		}
	},
	mounted() {
		document.body.style.overflow = 'auto'
	},
}
</script>

<style scoped></style>
