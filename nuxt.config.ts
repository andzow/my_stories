// https://nuxt.com/docs/api/configuration/nuxt-config
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
  hooks: {
    "render:route": (url, result, context) => {
      result.html = result.html.replace(/rel="prefetch"/g, 'rel="preload"');
    },
  },

  ssr: true,
  modules: ["@nuxt/image"],
});
