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
      // title:
      //   "Интернет-магазин модной женской одежды и доставкой по всей России | MyStories",
      // charset: "utf-8",
      // viewport: "width=device-width, initial-scale=1",
      // link: [
      //   {
      //     rel: "icon",
      //     type: "image/x-icon",
      //     href: "/favicon.png",
      //   },
      //   {
      //     rel: "preload",
      //     as: "image",
      //     href: "/Lookbook/letniy/letniyBack.webp",
      //   },
      //   {
      //     rel: "preload",
      //     as: "image",
      //     href: "/Lookbook/awakening/awakeningBack.webp",
      //   },
      // ],script: [
      script: [
        {
          type: "text/javascript",
          innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(98619510, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });`,
        },
      ],
      noscript: [
        {
          innerHTML: `<div><img src="https://mc.yandex.ru/watch/98619510" style="position:absolute; left:-9999px;" alt="" /></div>`,
        },
      ],
      // meta: [
      //   {
      //     name: "yandex-verification",
      //     content: "5a131032bb264c6a",
      //   },
      //   {
      //     name: "google-site-verification",
      //     content: "NR92c5qUhMC4FIIKMI1j_tARazWwxOMpdg23B0KEBnI",
      //   },
      // ],
      //   htmlAttrs: { lang: "ru-RU" },
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  routeRules: {
    "/": { delayHydration: "mount" },
    "/catalog/**": { delayHydration: false },
    "/lookbook/**": { delayHydration: false },
    "/brand/**": { delayHydration: false },
    "/contacts": { delayHydration: false },
    "/delivery-and-payment": { delayHydration: false },
    "/politics": { delayHydration: false },
    "/order/**": { delayHydration: false },
    "/dogovor": { delayHydration: false },
    "/cart": { delayHydration: false },
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
    "nuxt-multi-cache",
  ],
  multiCache: {
    component: {
      enabled: true,
    },
    data: {
      enabled: true,
    },
  },
  delayHydration: {
    debug: process.env.NODE_ENV === "development",
  },
});
