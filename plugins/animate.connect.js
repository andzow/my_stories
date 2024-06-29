import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import VueLazyLoad from "vue3-lazyload";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(autoAnimatePlugin, {
    duration: 1000,
  });
  nuxtApp.vueApp.use(VueLazyLoad);
});
