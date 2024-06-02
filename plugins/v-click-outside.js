export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-outside', {
      beforeMount(el, binding) {
        el.preventFirstClick = true;

        el.clickOutsideEvent = function (event) {
          if (el.preventFirstClick) {
            el.preventFirstClick = false;
            return;
          }
          
          const testElement = document.getElementById('test');
          if (testElement && (testElement.contains(event.target) || testElement === event.target)) {
            return;
          }

          if (!(el == event.target || el.contains(event.target))) {
            binding.value(event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
      },
      unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
      },
    });
  });