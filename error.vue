<template>
  <UIMyHeader />
  <div v-lazy-hydrate="() => (checkHydrate = true)">
    <ErrorMyMain />
    <UIMyNoise />
  </div>
  <UIMyFooter />
</template>

<script>
export default {
  data() {
    return { checkMobile: null, checkHydrate: true };
  },
  methods: {
    isMobileDevice() {
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

      const userAgent = navigator.userAgent;

      return mobileRegex.test(userAgent);
    },
  },
  mounted() {
    this.checkMobile = this.isMobileDevice();
    document.body.style.overflow = "auto";
  },
};
</script>

<style></style>
