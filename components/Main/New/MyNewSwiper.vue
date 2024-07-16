<template>
  <swiper
    class="new__swiper"
    :slidesPerView="4"
    :slidesPerGroup="1"
    :spaceBetween="25"
    :speed="500"
    :freemode="true"
    :breakpoints="{
      1154: {
        slidesPerView: 4,
      },
      876: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      470: {
        slidesPerView: 1.5,
      },
      0: {
        slidesPerView: 1,
      },
    }"
    v-if="arrNew"
  >
    <swiper-slide class="new__slide" v-for="(item, idx) in arrNew" :key="item">
      <UINewMyItem :item="item" :idx="idx" :activeOpacity="true" />
    </swiper-slide>
  </swiper>
  <UINewMyMobile :arrNew="arrNew.filter((el, idx) => idx <= 2)" v-if="arrNew" />
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
          this.arrAnimationOpacityGsap.push(`.new__item_images${idx + 1}`);
          this.arrAnimationGsapPrices.push(
            `.new__item_title${idx + 1}`,
            `.new__item_summ${idx + 1}`
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
        ".new__item_title1",
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
@media screen and (max-width: 468px) {
  .new__swiper {
    display: none;
  }
}
</style>
