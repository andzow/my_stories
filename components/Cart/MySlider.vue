<template>
  <section class="slider">
    <swiper
      class="slider__cart"
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
      <swiper-slide
        class="slider__slide"
        v-for="(item, idx) in arrNew.filter((el, idx) => idx <= 5)"
        :key="item"
      >
        <UINewMyItem :item="item" :idx="idx" />
      </swiper-slide>
    </swiper>
    <UINewMyMobile
      :arrNew="arrNew.filter((el, idx) => idx <= 2)"
      v-if="arrNew"
    />
  </section>
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
        const res = await ProductController.getRandomCard();
        console.log(res);
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
        this.playAnimationGsap();
      });
    },
    playAnimationGsap() {
      this.useGsapAnimationOpacity(
        this.arrAnimationOpacityGsap,
        ".slider",
        false,
        0.4
      );
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
.slider {
  position: relative;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 56px;
  padding-right: 30px;
  padding-left: 30px;
  margin: 0 auto;
  max-width: 1920px;
  z-index: 17;
}
@media screen and (max-width: 768px) {
  .slider {
    padding-top: 20px;
  }
}
@media screen and (max-width: 468px) {
  .slider__cart {
    display: none;
  }
}
</style>
