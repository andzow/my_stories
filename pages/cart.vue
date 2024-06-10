<template>
  <div>
    <CartMyMain />
    <CartMySlider />
    <UIMyNoise />
  </div>
</template>

<script>
export default {
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
  },
};
</script>

<style scoped></style>
