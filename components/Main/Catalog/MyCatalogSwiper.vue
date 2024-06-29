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
    :breakpoints="{
      876: {
        slidesPerView: 2.7,
      },
      434: {
        slidesPerView: 1.5,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: -1,
      },
    }"
  >
    <swiper-slide
      class="catalog__img"
      v-for="(item, idx) in arrCatalog"
      :key="item.imageSrc"
      :class="['catalog__img' + (idx + 1)]"
    >
      <NuxtImg
        class="catalog__image"
        :src="item.imageSrc"
        loading="lazy"
        alt="фотографии каталога майсторис"
      />
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
          imageSrc: "/Main/catalog1.webp",
        },
        {
          imageSrc: "/Main/catalog2.webp",
        },
        {
          imageSrc: "/Main/catalog3.webp",
        },
        {
          imageSrc: "/Main/catalog4.webp",
        },
        {
          imageSrc: "/Main/catalog5.webp",
        },
        {
          imageSrc: "/Main/catalog6.webp",
        },
        {
          imageSrc: "/Main/catalog7.webp",
        },
        {
          imageSrc: "/Main/catalog8.webp",
        },

        {
          imageSrc: "/Main/catalog9.webp",
        },
        {
          imageSrc: "/Main/catalog10.webp",
        },
        {
          imageSrc: "/Main/catalog11.webp",
        },

        {
          imageSrc: "/Main/catalog12.webp",
        },
        {
          imageSrc: "/Main/catalog13.webp",
        },
        {
          imageSrc: "/Main/catalog14.webp",
        },

        {
          imageSrc: "/Main/catalog15.webp",
        },
        {
          imageSrc: "/Main/catalog16.webp",
        },
      ],
      arrAnimationOpacityGsap: [],
      useGsapAnimationOpacity: useGsapAnimationOpacity,
      swiperAutoPlay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      scrollTriggerGsap: null,
    };
  },
  methods: {
    initAnimationArr() {
      this.arrCatalog.forEach((el, idx) => {
        this.arrAnimationOpacityGsap.push(`.catalog__img${idx + 1}`);
      });
    },
    initGsapScrollTrigger() {
      this.scrollTriggerGsap = gsap.to(".catalog__content", {
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
  unmounted() {
    if (this.scrollTriggerGsap) {
      this.scrollTriggerGsap.revert();
    }
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
.catalog__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.catalog__btn {
  position: absolute;
  top: 85%;
  left: 43%;
  min-width: 266px;
  z-index: 12;
}
@media screen and (max-width: 1400px) {
  .catalog__btn {
    position: absolute;
    top: 83%;
    left: 41%;
    min-width: 266px;
  }
}
@media screen and (max-width: 1154px) {
  .catalog__btn {
    position: absolute;
    top: 83%;
    left: 40%;
    min-width: 206px;
  }
}
@media screen and (max-width: 976px) {
  .catalog__btn {
    position: absolute;
    top: 83%;
    left: 39%;
    min-width: 206px;
  }
}
@media screen and (max-width: 820px) {
  .catalog__btn {
    position: absolute;
    top: 83%;
    left: 38%;
    min-width: 206px;
  }
}
@media screen and (max-width: 720px) {
  .catalog__btn {
    position: absolute;
    top: 83%;
    left: 36.5%;
    min-width: 206px;
  }
}
@media screen and (max-width: 640px) {
  .catalog__btn {
    position: absolute;
    top: 83%;
    left: 32.5%;
    min-width: 206px;
  }
}
@media screen and (max-width: 550px) {
  .catalog__btn {
    position: absolute;
    top: 83%;
    left: 30.5%;
    min-width: 206px;
  }
}
@media screen and (max-width: 470px) {
  .catalog__btn {
    position: absolute;
    top: 82%;
    left: 27.5%;
    min-width: 206px;
  }
}
@media screen and (max-width: 420px) {
  .catalog__btn {
    position: absolute;
    top: 80%;
    left: 25.5%;
    min-width: 206px;
  }
}
@media screen and (max-width: 378px) {
  .catalog__btn {
    position: absolute;
    top: 80%;
    left: 22.5%;
    min-width: 206px;
  }
}
@media screen and (max-width: 340px) {
  .catalog__btn {
    position: absolute;
    top: 80%;
    left: 16.5%;
    min-width: 206px;
  }
}
</style>
