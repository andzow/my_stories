<template>
  <div>
    <SuccessMyMain />
    <LazyUIMyNoise v-if="checkHydrate" />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title:
        "Заказ был успешно обработан  - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories",
    });
  },
  data() {
    return {
      checkHydrate: useCheckHydration(),
    };
  },
  mounted() {
    document.body.style.overflow = "auto";
  },
};
</script>

<style></style>
