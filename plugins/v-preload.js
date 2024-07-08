export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("preload", {
    mounted(el, binding) {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (binding.value) {
              binding.value();
            }
            observer.unobserve(entry.target);
          }
        });
      };
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(el);

      el._intersectionObserver = observer;
    },
    beforeUnmount(el) {
      if (el._intersectionObserver) {
        el._intersectionObserver.disconnect();
        delete el._intersectionObserver;
      }
    },
  });
});
