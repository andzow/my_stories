<template>
  <section class="catalog">
    <div class="catalog__content">
      <MainCatalogMyCatalogSwiper v-if="checkSwiper" />
    </div>
    <div class="catalog__btn">
      <UIButtonMyButton
        info="каталог"
        fontSize="24"
        variant="white"
        data-cursor-class="animateCursor"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      checkSwiper: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.checkSwiper = true;
    }, 0);
  },
  watch: {},
};
</script>

<style scoped>
.catalog {
  position: relative;
  margin-bottom: 106px;
  width: 100vw;
  max-height: 790px;
  min-height: 790px;
  overflow: hidden;
  z-index: 12;
}
.catalog__content {
  display: flex;
  width: 100%;
}
</style>
