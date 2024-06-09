<template>
  <swiper
    class="catalog__swiper"
    :slidesPerView="4"
    :slidesPerGroup="1"
    :spaceBetween="25"
    :speed="500"
  >
    <swiper-slide
      class="catalog__slide"
      v-for="(item, idx) in arrNew"
      :key="item"
    >
      <UICardMyCard heightImage="576px" :item="item" :idx="idx" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  data() {
    return {
      arrNew: null,
    };
  },
  methods: {
    async initApp() {
      await nextTick(() => {
        this.arrNew = [
          {
            name: "платье",
            price: "4 800",
            sale: "5 200",
            images: [
              {
                imageSrc: "../../Primer/catalog1.webp",
              },
              {
                imageSrc: "../../Primer/catalog2.png",
              },
              {
                imageSrc: "../../Primer/catalog3.webp",
              },

              {
                imageSrc: "../../Primer/catalog5.webp",
              },
              {
                imageSrc: "../../Primer/catalog3.webp",
              },

              {
                imageSrc: "../../Primer/catalog5.webp",
              },
              {
                imageSrc: "../../Primer/catalog3.webp",
              },

              {
                imageSrc: "../../Primer/catalog5.webp",
              },
            ],
          },
          {
            name: "сарафан",
            price: "2 800",
            images: [
              {
                imageSrc: "../../Primer/catalog3.webp",
              },
              {
                imageSrc: "../../Primer/catalog11.webp",
              },
            ],
          },
          {
            name: "сарочка",
            price: "7 800",
            images: [
              {
                imageSrc: "../../Primer/catalog7.webp",
              },
              {
                imageSrc: "../../Primer/catalog2.png",
              },
              {
                imageSrc: "../../Primer/catalog3.webp",
              },
            ],
          },
          {
            name: "платье",
            price: "1 800",
            images: [
              {
                imageSrc: "../../Primer/catalog13.webp",
              },
              {
                imageSrc: "../../Primer/catalog2.png",
              },
              {
                imageSrc: "../../Primer/catalog3.webp",
              },
            ],
          },
          {
            name: "кофта",
            price: "9 800",
            sale: "5 200",
            images: [
              {
                imageSrc: "../../Primer/catalog9.webp",
              },
              {
                imageSrc: "../../Primer/catalog2.png",
              },
              {
                imageSrc: "../../Primer/catalog3.webp",
              },

              {
                imageSrc: "../../Primer/catalog5.webp",
              },
              {
                imageSrc: "../../Primer/catalog3.webp",
              },

              {
                imageSrc: "../../Primer/catalog5.webp",
              },
            ],
          },
        ];
      });
    },
  },
  mounted() {
    this.initApp();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped>
.catalog__swiper {
  min-height: 600px;
}
</style>
