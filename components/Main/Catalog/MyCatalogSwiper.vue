<template>
  <swiper
    class="catalog__swiper"
    :loop="true"
    :centeredSlides="true"
    :allowTouchMove="false"
    :autoplay="swiperAutoPlay"
    :slidesPerView="2.7"
    :slidesPerGroup="1"
    :spaceBetween="-3"
    :speed="800"
    :modules="modules"
  >
    <swiper-slide
      class="catalog__img"
      v-for="(item, idx) in arrCatalog"
      :key="item.imageSrc"
      :style="{
        background: `url(${item.imageSrc}) no-repeat`,
        backgroundSize: 'cover',
      }"
      :class="['catalog__img' + (idx + 1)]"
    >
    </swiper-slide>
  </swiper>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default {
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  data() {
    return {
      arrCatalog: [
        {
          imageSrc: "../Main/catalog1.webp",
        },
        {
          imageSrc: "../Main/catalog2.webp",
        },
        {
          imageSrc: "../Main/catalog3.webp",
        },
        {
          imageSrc: "../Main/catalog4.webp",
        },
        {
          imageSrc: "../Main/catalog5.webp",
        },
        {
          imageSrc: "../Main/catalog6.webp",
        },
        {
          imageSrc: "../Main/catalog7.webp",
        },
        {
          imageSrc: "../Main/catalog8.webp",
        },

        {
          imageSrc: "../Main/catalog9.webp",
        },
        {
          imageSrc: "../Main/catalog10.webp",
        },
        {
          imageSrc: "../Main/catalog11.webp",
        },

        {
          imageSrc: "../Main/catalog12.webp",
        },
        {
          imageSrc: "../Main/catalog13.webp",
        },
        {
          imageSrc: "../Main/catalog14.webp",
        },

        {
          imageSrc: "../Main/catalog15.webp",
        },
        {
          imageSrc: "../Main/catalog16.webp",
        },
      ],
      arrAnimationOpacityGsap: [],
      useGsapAnimationOpacity: useGsapAnimationOpacity,
      swiperAutoPlay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    };
  },
  methods: {
    initAnimationArr() {
      this.arrCatalog.forEach((el, idx) => {
        this.arrAnimationOpacityGsap.push(`.catalog__img${idx + 1}`);
      });
    },
    initGsapScrollTrigger() {
      gsap.to(".catalog__content", {
        scrollTrigger: {
          trigger: ".catalog__content",
          start: "top 80%",
          end: "105% 100%",
          markers: false,
        },
      });
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.initAnimationArr();
    this.useGsapAnimationOpacity(
      this.arrAnimationOpacityGsap,
      ".catalog__swiper"
    );
  },

  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
.catalog__img {
  display: block;
  margin: 0;
  opacity: 0;
  height: 790px;
  border: 1px solid rgba(0, 0, 0, 0);
}
.catalog__btn {
  position: absolute;
  top: 85%;
  left: 43%;
  min-width: 266px;
  z-index: 12;
}
</style>
