<template>
	<div></div>
</template>

<script>
export default {
	setup() {
		useHead({
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
		return {}
	},
	created() {
		this.$router.replace({
			path: '/catalog',
		})
	},
}
</script>

<style scoped></style>
