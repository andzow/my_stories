<template>
  <swiper
    class="new__swiper"
    :slidesPerView="4"
    :slidesPerGroup="1"
    :spaceBetween="25"
    :speed="500"
    v-if="arrNew"
  >
    <swiper-slide class="new__slide" v-for="(item, idx) in arrNew" :key="item">
      <MainNewMyNewItem
        :item="item"
        :class="['new__item' + (idx + 1)]"
        :idx="idx"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  data() {
    return {
      arrNew: null,
      arrAnimationOpacityGsap: [],
      arrAnimationGsapPrices: [],
      useGsapAnimationOpacity: useGsapAnimationOpacity,
    };
  },
  methods: {
    async initArr() {
      try {
        const res = await ProductController.getNew();
        this.arrNew = res;
        this.initAnimationArr();
      } catch {}
    },
    initAnimationArr() {
      nextTick(() => {
        this.arrNew.forEach((el, idx) => {
          this.arrAnimationOpacityGsap.push(`.new__item_image${idx + 1}`);
          this.arrAnimationGsapPrices.push(
            `.new__item_name${idx + 1}`,
            `.new__item_prices${idx + 1}`
          );
        });
        this.arrAnimationGsapPrices.push(".new__btn");
        this.playAnimationGsap();
      });
    },
    playAnimationGsap() {
      this.useGsapAnimationOpacity(
        this.arrAnimationOpacityGsap,
        ".new",
        false,
        0.4
      );
      this.useGsapAnimationOpacity([".new__title", ".new__number"], ".new");
      this.useGsapAnimationOpacity(
        this.arrAnimationGsapPrices,
        ".new__item_name1",
        true
      );
    },
  },
  mounted() {
    this.initArr();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped>
.new__swiper {
  margin-bottom: 40px;
}
</style>
