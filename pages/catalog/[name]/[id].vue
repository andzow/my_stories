<template>
  <div>
    <CatalogIdMyMain />
    <CatalogIdMyCatalog />
    <UIMyNoise />
    <Transition name="fade-alert">
      <UIMyAlertCart v-if="useAlertCart" />
    </Transition>
  </div>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";
export default {
  data() {
    return {
      useReplaceOrDeleteWordQuery: useReplaceOrDeleteWordQuery,
      useAlertCart: useAlertCart(),
    };
  },
  methods: {
    async replaceRoute(querySettings) {
      this.checkBlock = true;
    },
    initApp() {
      this.replaceRoute();
    },
  },
  created() {
    this.initApp();
    this.useAlertCart = false;
  },
  async mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
  },
};
</script>

<style scoped>
.fade-alert-enter-from {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.4s ease;
}
.fade-alert-enter-to {
  transform: translateY(0px);
  opacity: 1;
  transition: all 0.4s ease;
}
.fade-alert-leave-from {
  transform: translateY(0px);
  opacity: 1;
  transition: all 0.4s ease;
}
.fade-alert-leave-to {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.4s ease;
}
</style>
