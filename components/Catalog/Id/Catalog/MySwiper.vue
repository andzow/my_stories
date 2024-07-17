<template>
  <swiper
    class="catalog__swiper"
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
      class="catalog__slide"
      v-for="(item, idx) in arrNew.filter((el, idx) => idx <= 5)"
      :key="item"
    >
      <UINewMyItem :item="item" :idx="idx" />
    </swiper-slide>
  </swiper>
  <UINewMyMobile :arrNew="arrNew.filter((el, idx) => idx <= 2)" v-if="arrNew" />
</template>

<script>
import ProductController from "@/http/controllers/ProductController";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import axios from "axios";

export default {
  data() {
    return {
      arrNew: null,
      arrAnimationOpacityGsap: [],
      arrAnimationGsapPrices: [],
      useGsapAnimationOpacity: useGsapAnimationOpacity,
      usePageUrlAsyncData: usePageUrlAsyncData(),
    };
  },
  methods: {
    async initArr() {
      try {
        const route = this.$route.params;
        const { data } = await axios.get(
          `${this.usePageUrlAsyncData}product/${route.name}/${route.id}`
        );
        this.arrNew = data.other;
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
        ".catalog__swiper"
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

  watch: {},
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped>
.catalog__swiper {
  margin-bottom: 40px;
}
@media screen and (max-width: 468px) {
  .catalog__swiper {
    display: none;
  }
}
</style>
