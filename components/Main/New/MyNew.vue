<template>
  <section class="new">
    <div class="new__content">
      <div class="new__header">
        <h2 class="new__title">( &nbsp;новинки&nbsp; )</h2>
        <div class="new__number">( &nbsp;3&nbsp; )</div>
      </div>
      <NuxtErrorBoundary>
        <MainNewMyNewSwiper />
      </NuxtErrorBoundary>
      <div class="new__btn">
        <UIButtonMyButton
          @click="$router.push('/catalog')"
          aria-label="смотреть все"
          info="смотреть все"
          fontSize="24"
          data-cursor-class="animateCursor"
          bigSize="bigSize"
        />
      </div>
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
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.new {
  position: relative;
  width: 100vw;
  padding-bottom: 96px;
  overflow: hidden;
  z-index: 15;
}
.new__content {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
  min-height: 800px;
  /* max-height: 800px; */
}
.new__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
.new__title {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  opacity: 0;
}
.new__number {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  opacity: 0;
}
.new__swiper {
  margin-bottom: 40px;
}
.new__btn {
  opacity: 0;
}
@media screen and (max-width: 1630px) {
  .new__content {
    min-height: 700px;
    max-height: 700px;
  }
}
@media screen and (max-width: 1400px) {
  .new__title {
    font-size: 30px;
  }
  .new__number {
    font-size: 30px;
  }
}
@media screen and (max-width: 1154px) {
  .new {
    padding-bottom: 50px;
  }
  .new__content {
    min-height: auto;
    max-height: 800px;
  }
}
@media screen and (max-width: 1100px) {
  .new__number {
    font-size: 26px;
  }
}
@media screen and (max-width: 468px) {
  .new__content {
    min-height: auto;
    max-height: 100%;
    height: 100%;
  }
  .new__btn {
    opacity: 1;
  }
}
</style>
