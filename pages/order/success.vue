<template>
  <div>
    <SuccessMyMain />
    <LazyUIMyNoise v-if="checkHydrate" />
  </div>
</template>

<script>
export default {
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
