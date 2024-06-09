<template>
  <section class="catalog">
    <div class="catalog__content">
      <CatalogIdCatalogMySwiper />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.catalog {
  position: relative;
  width: 100%;
  margin-bottom: 96px;
  z-index: 17;
}
.catalog__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
