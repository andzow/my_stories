export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", {
    beforeMount(el, binding) {
      el.preventFirstClick = true;

      el.clickOutsideEvent = function (event) {
        if (el.preventFirstClick) {
          el.preventFirstClick = false;
          return;
        }

        const testElement = document.getElementById("test");
        if (
          testElement &&
          (testElement.contains(event.target) || testElement === event.target)
        ) {
          return;
        }

        if (!(el == event.target || el.contains(event.target))) {
          binding.value(event);
        }
      };
      document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener("click", el.clickOutsideEvent);
    },
  });
  nuxtApp.vueApp.directive("lazy-hydrate", {
    beforeMount(el, binding, vnode) {
      const callback = binding.value;

      const lazyHydrate = () => {
        callback();
        document.body.removeEventListener("mousemove", lazyHydrate);
        document.body.removeEventListener("scroll", lazyHydrate);
        document.body.removeEventListener("keydown", lazyHydrate);
        document.body.removeEventListener("click", lazyHydrate);
        document.body.removeEventListener("touchstart", lazyHydrate);
        document.body.removeEventListener("wheel", lazyHydrate);
      };
      document.body.addEventListener("mousemove", lazyHydrate);
      document.body.addEventListener("scroll", lazyHydrate);
      document.body.addEventListener("keydown", lazyHydrate);
      document.body.addEventListener("click", lazyHydrate);
      document.body.addEventListener("touchstart", lazyHydrate);
      document.body.addEventListener("wheel", lazyHydrate);
    },
  });
});
