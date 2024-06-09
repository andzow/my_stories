<template>
  <section class="brand">
    <div class="brand__content">
      <div class="brand__name">
        <img class="brand__logo" src="@/assets/images/Main/brand.svg" />
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
.brand__name {
  transform: translateX(-70px);
}
.brand__logo {
  width: 100vw;
}
/* .brand__name {
  position: absolute;
  top: 0;
  left: -2%;
} */
</style>
