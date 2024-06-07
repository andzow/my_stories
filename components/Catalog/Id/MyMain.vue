<template>
  <section class="main">
    <div class="main__content">
      <CatalogIdMySlider />
      <CatalogIdMyAbout />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
  padding-top: 150px;
  margin-bottom: 96px;
  z-index: 17;
}
.main__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
}
</style>
