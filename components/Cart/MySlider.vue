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
      await nextTick(() => {
        this.arrNew = [
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
        ];
      });
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
