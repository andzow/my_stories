<template>
	<div>
		<LookbookMyMain @openSection="checkAnimation = true" />
		<section class="index" v-if="checkAnimation">
			<LookbookMyAbout />
			<LookbookMySummer />
			<LookbookMyAwakening />
			<LazyUIMyAnimationLine
				duration="7"
				:arrAnimationLine="arrAnimationLine"
				v-if="arrAnimationLine && checkHydrate"
			/>
			<LazyUIMyNoise v-if="checkHydrate" />
		</section>
		<LazyUIMyAnimationLine
			duration="7"
			:arrAnimationLine="arrAnimationLine"
			v-if="arrAnimationLine && checkHydrate"
		/>
	</div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
	setup() {
		useHead({
			title:
				'Лукбук | Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
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
					content: `Откройте для себя лукбук от mystories, где представлены актуальные образы и стильные комбинации женской одежды. Мы предлагаем доставку по всей России.`,
				},
				{
					name: 'keywords',
					content:
						'лукбук, модная женская одежда, интернет-магазин, стильные образы, mystories',
				},
				{ name: 'format-detection', content: 'telephone=no' },
				{
					property: 'og:title',
					content:
						'Лукбук | Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
				},
				{
					property: 'og:description',
					content: `Откройте для себя лукбук от mystories, где представлены актуальные образы и стильные комбинации женской одежды. Мы предлагаем доставку по всей России.`,
				},
				{
					property: 'og:site_name',
					content:
						'Лукбук | Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
				},
				{
					property: 'og:image',
					content: '/Preload/collectionS.webp',
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
			checkAnimation: false,
			useCursor: useCursor(),
			arrAnimationLine: null,
			checkHydrate: useCheckHydration(),
		}
	},
	methods: {
		initLine() {
			if (window.innerWidth > 834) {
				this.arrAnimationLine = [
					{
						name: '.header__logo',
						defaultLine: false,
						indent: 'left',
					},
					{
						name: '.about__text',
						defaultLine: false,
						widthTo: true,
						indent: 'left',
					},
					{
						name: '.summer__photo',
						defaultLine: false,
						indent: 'left',
						widthTo: true,
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
						indent: 'left',
						widthTo: true,
					},
				]
			}
		},
	},
	mounted() {
		const bodyEl = document.body
		bodyEl.style.overflow = 'hidden'
		this.initLine()
	},
	watch: {
		checkAnimation(val) {
			const bodyEl = document.body
			bodyEl.style.overflow = 'auto'
			setTimeout(() => {
				this.useCursor = true
			}, 0)
		},
	},
}
</script>

<!-- <style>
body {
  overflow: hidden;
}
</style> -->
