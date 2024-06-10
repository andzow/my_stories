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
          muted
          preload="metadata"
          :data-index-video="idx"
        >
          <source :src="item.videoSrc" />
        </video>
      </div>
    </swiper-slide>
    <div class="slider__controls">
      <div class="slider__pagination"></div>
      <CatalogIdSliderMyControl
        v-if="swiper"
        @prev="controlSlidePrev"
        @next="controlSlideNext"
      />
      <CatalogIdSliderMyProgress
        :changeProgress="changeProgress"
        :activeDurationVideo="activeDurationVideo"
        @change="(changeProgress = false), (activeDurationVideo = null)"
        @nextSlide="nextSlide"
      />
    </div>
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
          videoSrc: "../../Primer/video.mp4",
          id: 0,
        },
        {
          imageSrc: "../../Primer/catalog9.webp",
          id: 0,
        },
        {
          imageSrc: "../../Primer/catalog13.webp",
          id: 1,
        },
        {
          imageSrc: "../../Primer/catalog11.webp",
          id: 1,
        },
      ],
      checkLoad: false,
      swiper: null,
      changeProgress: false,
      activeIdx: null,
      activeDurationVideo: null,
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
    controlSlidePrev() {
      this.swiper.slidePrev();
      this.changeProgress = true;
    },
    controlSlideNext() {
      this.swiper.slideNext();
      this.changeProgress = true;
    },
    nextSlide() {
      this.swiper.slideNext();
      this.onSlideChange();
    },
    onSwiperInit(instance) {
      this.swiper = instance;
      this.activeIdx = this.swiper.activeIndex;
      this.setDurationVideo();
    },
    setDurationVideo() {
      const videoElement = document.querySelector(
        `[data-index-video="${this.activeIdx}"]`
      );
      if (videoElement) {
        videoElement.currentTime = "0";
        this.activeDurationVideo = videoElement.duration;
        videoElement.play();
      }
      this.changeProgress = true;
    },
    onSlideChange() {
      this.activeIdx = this.swiper.activeIndex;
      this.setDurationVideo();
    },
    loadImage(srcImage) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = srcImage;
        img.onload = () => {
          resolve(true);
        };
      });
    },
    loadVideo(srcVideo) {
      return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.src = srcVideo;
        video.onloadeddata = () => {
          resolve(true);
        };
      });
    },
    loadContent() {
      const arrPromise = [];
      this.arrSlider.forEach((el) => {
        if (el.imageSrc) {
          arrPromise.push(this.loadImage(el.imageSrc));
          return;
        }
        arrPromise.push(this.loadVideo(el.videoSrc));
      });
      Promise.all(arrPromise)
        .then(() => {
          this.checkLoad = true;
        })
        .catch(() => {
          this.checkLoad = true;
        });
    },
  },
  mounted() {
    this.loadContent();
    // this.arrSlider.forEach((item) =>
    //   this.checkImage(item.imageSrc, item.videoSrc)
    // );
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && this.swiper) {
        this.activeIdx = this.swiper.activeIndex;
        this.setDurationVideo();
      }
    });
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
  height: 775px;
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
  position: relative;
  max-height: 727px;
  min-height: 727px;
  max-width: 95%;
}
.slider__controls {
  position: absolute;
  left: 0%;
  top: 0;
  height: 100%;
  width: 100%;
  max-width: 96%;
  z-index: 19;
}
.slider__video {
  height: 727px;
  width: 100%;
  object-fit: cover;
}
.slider__load {
  max-width: 100%;
  max-height: 727px;
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
  height: 727px;
  object-fit: cover;
}

.slider__pagination {
  position: absolute;
  bottom: 8%;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2% 0 1%;
  column-gap: 1%;
}
</style>
