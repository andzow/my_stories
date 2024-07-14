export default defineNuxtConfig({
  devtools: { enabled: false },
  plugins: [
    "~/plugins/animate.connect.js",
    "~/plugins/v-click-outside.js",
    "~/plugins/v-lazy-loading.js",
  ],
  css: ["~/assets/style/main.css", "~/assets/style/fonts.css"],
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  app: {
    head: {
      title: "Интернет-магазин одежды | MyStories",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.png",
        },
      ],
      htmlAttrs: { lang: "ru-RU" },
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  routeRules: {
    "/": { delayHydration: "mount" },
    "/catalog/": { delayHydration: false },
    "/catalog/:id/:id": { delayHydration: false },
    "/admin": { ssr: false },
    "/login": { ssr: false },
  },
  sitemap: {
    exclude: ["/login", "/admin", "/order", "/order/**", "/cart"],
    sources: ["/api/sitemap"],
  },
  site: {
    url: "https://xn--80aqckmmfdf.xn--p1ai",
  },
  ssr: true,
  components: true,
  modules: [
    "@nuxt/image",
    "nuxt-delay-hydration",
    "@nuxtjs/device",
    "@nuxtjs/sitemap",
  ],
  delayHydration: {
    debug: process.env.NODE_ENV === "development",
  },
});
