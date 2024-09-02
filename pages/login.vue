<template>
	<LoginMyLogin />
</template>

<script>
export default {
	setup() {
		useHead({
			title:
				'Страница входа в аккаунт - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories',
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
}
</script>

<style></style>
