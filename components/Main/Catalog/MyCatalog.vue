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
        @click="$router.push('/catalog')"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      checkSwiper: false,
      checkPreload: useCheckPreload(),
      checkHydrate: useCheckHydration(),
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
@media screen and (max-width: 1600px) {
  .catalog {
    max-height: 650px;
    min-height: 650px;
  }
}
@media screen and (max-width: 1240px) {
  .catalog {
    max-height: 585px;
    min-height: 585px;
  }
}
@media screen and (max-width: 1154px) {
  .catalog {
    margin-bottom: 56px;
  }
}
@media screen and (max-width: 976px) {
  .catalog {
    max-height: 535px;
    min-height: 535px;
  }
}
@media screen and (max-width: 876px) {
  .catalog {
    max-height: 655px;
    min-height: 655px;
  }
}
@media screen and (max-width: 576px) {
  .catalog {
    max-height: 555px;
    min-height: 555px;
  }
}
@media screen and (max-width: 434px) {
  .catalog {
    max-height: 100%;
    min-height: 100%;
    height: 85vh;
  }
}
</style>
