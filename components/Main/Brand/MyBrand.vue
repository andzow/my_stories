<template>
  <section class="brand">
    <div class="brand__content">
      <div class="brand__name">
        <img class="brand__logo" src="@/assets/images/Main/brandLogo.svg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.brand {
  position: relative;
  padding-bottom: 136px;
  width: 100vw;
  z-index: 10;
}
.brand__content {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}
.brand__name {
  transform: translateX(-70px);
}
/* .brand__name {
  position: absolute;
  top: 0;
  left: -2%;
} */
</style>
