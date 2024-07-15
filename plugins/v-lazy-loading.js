export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("lazy-loading", {
    beforeMount(elementHtml, binding) {
      let checkRepeat = false;
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.01,
      };
      let callback = (en, observer) => {
        const [entries] = en;
        if (entries.isIntersecting && !checkRepeat) {
          elementHtml.src = binding.value.src;
          if (typeof binding.value.onLoad === "function") {
            binding.value.onLoad();
          }
          checkRepeat = true;
        }
      };
      binding.instance.observer = new IntersectionObserver(callback, options);
      binding.instance.observer.observe(elementHtml);
    },
    updated(elementHtml, binding) {
      if (!binding?.instance?.observer) {
        return;
      }
      binding.instance.observer.unobserve(elementHtml);
      setTimeout(() => {
        binding.instance.observer.observe(elementHtml);
      }, 100);
    },
    beforeUnmount(elementHtml, binding) {
      if (!binding.instance.observer) {
        return;
      }
      binding.instance.observer.disconnect();
      delete binding.instance.observer;
    },
  });
});
