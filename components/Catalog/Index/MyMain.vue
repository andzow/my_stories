<template>
  <section class="main">
    <h1 class="main__title">Каталог | Mystories</h1>
    <div class="main__content">
      <CatalogIndexMyFilter />
      <CatalogIndexMyCatalog @activeLine="$emit('activeLine')" />
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
  padding-top: 120px;
  padding-bottom: 96px;
  z-index: 17;
}
.main__title {
  position: absolute;
  top: 0;
  opacity: 0;
}
.main__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(2, 20% 80%);
}
@media screen and (max-width: 1240px) {
  .main__content {
    grid-template-columns: repeat(2, 25% 75%);
  }
}
@media screen and (max-width: 1100px) {
  .main__content {
    grid-template-columns: repeat(2, 25% 75%);
  }
}
@media screen and (max-width: 1020px) {
  .main__content {
    grid-template-columns: repeat(2, 30% 70%);
  }
}
@media screen and (max-width: 836px) {
  .main__content {
    display: flex;
    flex-direction: column;
  }
}
</style>
