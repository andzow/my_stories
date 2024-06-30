export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/style/main.css"],
  plugins: ["~/plugins/animate.connect.js", "~/plugins/v-click-outside.js"],

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  routeRules: {
    "/admin": { ssr: false },
    "/login": { ssr: false },
  },
  ssr: true,
  modules: ["@nuxt/image"],
});
