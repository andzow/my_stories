export default defineNuxtConfig({
  devtools: { enabled: false },
  plugins: [
    "~/plugins/animate.connect.js",
    "~/plugins/v-click-outside.js",
    "~/plugins/v-preload.js",
  ],
  css: ["~/assets/style/main.css", "~/assets/style/fonts.css"],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  routeRules: {
    "/": { delayHydration: "mount" },
    "/catalog/": { delayHydration: false },
    "/catalog/:id/:id/": { delayHydration: false },
    "/admin": { ssr: false },
    "/login": { ssr: false },
  },
  ssr: true,
  components: true,
  modules: ["@nuxt/image", "nuxt-delay-hydration"],
  // delayHydration: {
  //   debug: process.env.NODE_ENV === "development",
  // },
});
