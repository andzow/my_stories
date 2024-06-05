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
          images: [
            {
              imageSrc: "../Primer/catalog1.webp",
            },
            {
              imageSrc: "../Primer/catalog2.png",
            },
            {
              imageSrc: "../Primer/catalog3.webp",
            },

            {
              imageSrc: "../Primer/catalog5.webp",
            },
            {
              imageSrc: "../Primer/catalog3.webp",
            },

            {
              imageSrc: "../Primer/catalog5.webp",
            },
            {
              imageSrc: "../Primer/catalog3.webp",
            },

            {
              imageSrc: "../Primer/catalog5.webp",
            },
          ],
        },
        {
          name: "сарафан",
          price: "2 800",
          images: [
            {
              imageSrc: "../Primer/catalog3.webp",
            },
            {
              imageSrc: "../Primer/catalog11.webp",
            },
          ],
        },
        {
          name: "сарочка",
          price: "7 800",
          images: [
            {
              imageSrc: "../Primer/catalog7.webp",
            },
            {
              imageSrc: "../Primer/catalog2.png",
            },
            {
              imageSrc: "../Primer/catalog3.webp",
            },
          ],
        },
        {
          name: "платье",
          price: "1 800",
          images: [
            {
              imageSrc: "../Primer/catalog13.webp",
            },
            {
              imageSrc: "../Primer/catalog2.png",
            },
            {
              imageSrc: "../Primer/catalog3.webp",
            },
          ],
        },
        {
          name: "кофта",
          price: "9 800",
          sale: "5 200",
          images: [
            {
              imageSrc: "../Primer/catalog9.webp",
            },
            {
              imageSrc: "../Primer/catalog2.png",
            },
            {
              imageSrc: "../Primer/catalog3.webp",
            },

            {
              imageSrc: "../Primer/catalog5.webp",
            },
            {
              imageSrc: "../Primer/catalog3.webp",
            },

            {
              imageSrc: "../Primer/catalog5.webp",
            },
          ],
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
      this.arrAnimationGsapPrices.push(".new__btn");
    },
  },
  mounted() {
    this.initAnimationArr();
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
