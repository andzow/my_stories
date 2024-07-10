export default defineNuxtConfig({
  devtools: { enabled: false },
  plugins: [
    "~/plugins/animate.connect.js",
    "~/plugins/v-click-outside.js",
    "~/plugins/v-preload.js",
  ],
  css: ["~/assets/style/main.css", "~/assets/style/fonts.css"],
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
    // pageTransition: {
    //   name: "page",
    //   mode: "out-in",
    // },
  },
  routeRules: {
    // "/": { delayHydration: "mount" },
    // "/catalog/": { delayHydration: false },
    // "/catalog/:id/:id/": { delayHydration: false },
    "/admin": { ssr: false },
    "/login": { ssr: false },
  },
  ssr: true,
  components: true,
  modules: ["@nuxt/image", "@nuxtjs/device"],
  // delayHydration: {
  //   debug: process.env.NODE_ENV === "development",
  // },
});
