<template>
  <div>
    <MainMyMain />
    <section class="index">
      <MainCollectionMyCollection />
      <MainBrandMyBrand />
      <MainMyAddition />
      <MainCatalogMyCatalog />
      <MainNewMyNew />
      <UIMyAnimationLine duration="8" />
      <UIMyNoise />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.index {
  position: relative;
  background-color: var(--yellow);
  width: 100vw;
  z-index: 15;
}
</style>
