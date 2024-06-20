<template>
  <div class="slider">
    <div class="slider__content">
      <swiper
        v-if="arrNew"
        class="slider_sw"
        :slidesPerView="4"
        :slidesPerGroup="1"
        :spaceBetween="25"
        :speed="500"
      >
        <swiper-slide
          class="slider__slide"
          v-for="(item, idx) in arrNew"
          :key="item"
        >
          <UICardMyCard heightImage="576px" :item="item" :idx="idx" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  data() {
    return {
      arrNew: null,
      useGsapAnimationOpacity: useGsapAnimationOpacity,
    };
  },
  methods: {
    async initApp() {
      try {
        const res = await ProductController.getNew();
        this.arrNew = res;
      } catch {}
    },
  },
  mounted() {
    this.initApp();
    this.useGsapAnimationOpacity([".slider"], ".main");
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped>
.slider {
  position: relative;
  width: 100%;
  padding-bottom: 56px;
  z-index: 17;
  opacity: 0;
}
.slider__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  min-height: 576px;
}
</style>
