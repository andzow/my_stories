<template>
	<div>
		<CatalogIndexMyMain @activeLine="activeLine = true" />
		<LazyUIMyNoise v-if="checkHydrate" />
		<LazyUIMyAnimationLine
			:duration="animationDuration"
			:arrAnimationLine="arrAnimationLine"
			v-if="arrAnimationLine && checkHydrate"
		/>
	</div>
</template>

<script>
export default {
	setup() {
		useHead({
			title:
				'Каталог | Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
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
					content: `Изучите наш каталог в mystories, где представлены самые актуальные коллекции женской одежды. Доставка по всей России.`,
				},
				{
					name: 'keywords',
					content:
						'каталог, модная женская одежда, интернет-магазин, коллекции, mystories',
				},
				{ name: 'format-detection', content: 'telephone=no' },
				{
					property: 'og:title',
					content:
						'Каталог | Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
				},
				{
					property: 'og:description',
					content: `Изучите наш каталог в mystories, где представлены самые актуальные коллекции женской одежды. Доставка по всей России.`,
				},
				{
					property: 'og:site_name',
					content:
						'Каталог | Интернет-магазин модной женской одежды с доставкой по всей России | MyStories',
				},
				{
					property: 'og:image',
					content: '/Lookbook/letniy5.webp',
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
			arrFilterChapter: useArrFilterChapter(),
			arrFilterSize: useArrFilterSize(),
			minVal: useMinVal(),
			maxVal: useMaxVal(),
			useReplaceOrDeleteWordQuery: useReplaceOrDeleteWordQuery,
			activeLine: false,
			arrAnimationLine: null,
			animationDuration: '11',
			checkHydrate: useCheckHydration(),
			searchVisible: true,
		}
	},
	methods: {
		async replaceRoute(querySettings) {
			const queryPath = useRoute().query
			if (!queryPath?.chapter) {
				queryPath.chapter = 'все'
			}
			await useRouter().replace({
				path: '/catalog',
				query: { ...queryPath, ...querySettings },
			})
			// this.checkBlock = true;
		},
		async initRoute() {
			const queryRoutePrice = useRoute().query
			const readyQueryChapter = this.useReplaceOrDeleteWordQuery(
				'chapter',
				'все',
				false
			)
			this.replaceRoute(queryRoutePrice, readyQueryChapter)
		},
		initGsap() {
			if (window.innerWidth > 936) {
				this.arrAnimationLine = [
					{ name: '.header__logo', defaultLine: false, indent: 'left' },
					{
						name: '.header__interaction_search',
						defaultLine: false,
						indent: 'left',
					},
					{ name: '.catalog__item1', defaultLine: false, indent: 'left' },
					{
						name: '.catalog__item3',
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
	created() {
		this.initRoute()
	},
	mounted() {
		const bodyEl = document.body
		bodyEl.style.overflow = 'auto'
		this.initGsap()
	},
	watch: {},
}
</script>

<style scoped>
.blur {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	backdrop-filter: blur(5px);
	/* background: rgba(0, 0, 0, 0.6); */
	z-index: 20;
}
</style>
