<template>
  <UIMyHeader />
  <div>
    <ErrorMyMain />
    <UIMyNoise />
    <UIMyCursor />
    <UIMyCursorCircle />
  </div>
  <UIMyFooter />
</template>

<script>
export default {
  mounted() {
    document.body.style.overflow = "auto";
  },
};
</script>

<style></style>
