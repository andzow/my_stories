<template>
  <swiper
    class="slider__swiper"
    :slidesPerView="1"
    :slidesPerGroup="1"
    :effect="'fade'"
    :loop="false"
    :rewind="true"
    :allowTouchMove="true"
    :pagination="pagination"
    :modules="modules"
    :speed="400"
    @swiper="onSwiperInit"
    @slideChange="onSlideChange"
    :class="{ activeSwiper: checkLoad }"
  >
    <swiper-slide
      class="slider__slide"
      v-for="(item, idx) in arrSlider"
      :key="item.id"
    >
      <div class="slider__card">
        <img
          v-if="item.imageSrc"
          class="slider__imgs"
          :src="item.imageSrc"
          height="737px"
          alt="Фотография товара"
        />
        <video
          v-else
          class="slider__video"
          :poster="item.videoSrc"
          type="video/mp4"
          autoplay
          muted
          loop
          preload="metadata"
          :data-index="idx"
          playsinline
        >
          <source :src="item.videoSrc" />
        </video>
      </div>
    </swiper-slide>
    <div class="slider__pagination"></div>
    <CatalogIdSliderMyControl
      v-if="swiper"
      @prev="swiper.slidePrev()"
      @next="swiper.slideNext()"
    />
    <CatalogIdSliderMyProgress
      :changeProgress="changeProgress"
      @change="changeProgress = false"
    />
  </swiper>
  <div class="slider__load" v-show="!checkLoad">
    <UIMyLoadItem />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default {
  data() {
    return {
      arrSlider: [
        {
          imageSrc: "../../Primer/catalog9.webp",
          id: 0,
        },
        {
          videoSrc: "../../Primer/video.mp4",
          id: 0,
        },
        {
          imageSrc: "../../Primer/catalog2.png",
          id: 1,
        },
        {
          imageSrc: "../../Primer/catalog3.webp",
          id: 2,
        },
      ],
      checkLoad: false,
      swiper: null,
      changeProgress: false,
    };
  },
  setup() {
    const pagination = { el: ".slider__pagination", clickable: false };
    const modules = [EffectFade, Pagination];
    return {
      pagination,
      modules,
    };
  },
  methods: {
    onSwiperInit(instance) {
      this.swiper = instance;
      const activeIdx = this.swiper.activeIndex;
    },
    onSlideChange() {
      const activeIdx = this.swiper.activeIndex;
      console.log(activeIdx);
      // const element = document.querySelector('[data-index="0"]');
      this.changeProgress = true;
    },
    checkImage(src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        this.checkLoad = true;
      };
    },
    videoLoad() {},
  },
  mounted() {
    this.arrSlider.forEach((item) => this.checkImage(item.imageSrc));
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.slider__swiper {
  position: absolute;
  opacity: 0;
  max-width: 100%;
  margin-right: 250px;
  height: 785px;
  overflow: hidden;
  transition: all 0.4s ease;
}
.activeSwiper {
  position: relative;
  opacity: 1;
  animation-name: nanex;
  animation-duration: 0.4s;
}
@keyframes nanex {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.slider__slide {
  max-height: 737px;
  min-height: 737px;
}
.slider__video {
  height: 737px;
  width: 100%;
  object-fit: cover;
}
.slider__load {
  max-width: 100%;
  max-height: 737px;
  opacity: 1;
  transition: all 0.4s ease;
}
.disableLoad {
  opacity: 0;
}
.slider__card {
  height: 100%;
}
.slider__imgs {
  width: 100%;
  height: 737px;
  object-fit: cover;
}
.slider__pagination {
  position: absolute;
  left: 0;
  bottom: 8%;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  padding: 0 20px;
  z-index: 19;
}
</style>
