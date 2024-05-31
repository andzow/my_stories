<template>
  <swiper
    class="new__swiper"
    :slidesPerView="4"
    :slidesPerGroup="1"
    :spaceBetween="25"
    :speed="500"
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
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  data() {
    return {
      arrNew: [
        {
          name: "платье",
          price: "4 800",
          sale: "5 200",
          imageSrc: "../Primer/новинки1.png",
        },
        {
          name: "сарафан",
          price: "2 800",
          imageSrc: "../Primer/новинки2.png",
        },
        {
          name: "сарочка",
          price: "7 800",
          imageSrc: "../Primer/новинки3.png",
        },
        {
          name: "платье",
          price: "1 800",
          imageSrc: "../Primer/новинки3.png",
        },
        {
          name: "кофта",
          price: "9 800",
          sale: "5 200",
          imageSrc: "../Primer/новинки3.png",
        },
      ],
      arrAnimationOpacityGsap: [],
      arrAnimationGsapPrices: [],
      useGsapAnimationOpacity: useGsapAnimationOpacity,
    };
  },
  methods: {
    initAnimationArr() {
      this.arrNew.forEach((el, idx) => {
        this.arrAnimationOpacityGsap.push(`.new__item_image${idx + 1}`);
        this.arrAnimationGsapPrices.push(
          `.new__item_name${idx + 1}`,
          `.new__item_prices${idx + 1}`
        );
      });
      this.arrAnimationOpacityGsap = [
        ...this.arrAnimationOpacityGsap,
        ".new__title",
        ".new__number",
      ];
      this.arrAnimationGsapPrices.push(".new__btn");
    },
  },
  mounted() {
    this.initAnimationArr();
    this.useGsapAnimationOpacity(
      this.arrAnimationOpacityGsap,
      ".new__item_content"
    );
    this.useGsapAnimationOpacity(
      this.arrAnimationGsapPrices,
      ".new__item_name1",
      true
    );
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
