<template>
  <section class="new">
    <div class="new__content">
      <div class="new__header">
        <h2 class="new__title">( &nbsp;новинки&nbsp; )</h2>
        <div class="new__number">( &nbsp;3&nbsp; )</div>
      </div>
      <MainNewMyNewSwiper v-if="checkSwiper" />
      <div class="new__btn">
        <UIButtonMyButton
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
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.checkSwiper = true;
    }, 0);
  },
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
  max-height: 800px;
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
</style>
