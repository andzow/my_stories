<template>
  <section class="main">
    <h1 class="main__title">( &nbsp;Каталог&nbsp; )</h1>
    <div class="main__content">
      <CatalogIndexMyFilter />
      <CatalogIndexMyCatalog />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
  min-height: 700px;
  padding-top: 150px;
  padding-bottom: 96px;
  z-index: 17;
}
.main__title {
  position: absolute;
  top: 0;
  opacity: 0;
  /* max-width: 1920px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 36px;
  color: var(--brown);
  padding: 0 30px 60px 30px; */
}
.main__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(2, 20% 80%);
}
</style>
