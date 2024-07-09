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
    v-if="arrSlider"
  >
    <div class="slider__back"></div>
    <swiper-slide
      class="slider__slide"
      v-for="(item, idx) in arrSlider"
      :key="item.id"
    >
      <div class="slider__card">
        <img
          class="slider__imgs"
          :src="item.imageSrc"
          width="620"
          height="737"
          alt="Фотография товара"
        />
        <video
          v-if="!item.imageSrc"
          class="slider__video"
          :poster="item.videoSrc"
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
        v-if="checkLoad"
        :useProductObject="useProductObject"
        :changeProgress="changeProgress"
        :activeDurationVideo="activeDurationVideo"
        @change="(changeProgress = false), (activeDurationVideo = null)"
        @nextSlide="nextSlide"
      />
    </div>
  </swiper>
  <div class="slider__load" v-if="!checkLoad">
    <UIMyLoadItem />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Pagination } from "swiper/modules";
import { USE_SERVER } from "~/url";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default {
  props: {
    useProductObject: {},
  },
  data() {
    return {
      arrSlider: null,
      checkLoad: useCheckLoad(),
      swiper: null,
      changeProgress: false,
      activeIdx: null,
      activeDurationVideo: null,
      urlServer: USE_SERVER,
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
  computed: {},
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
        videoElement.play().catch((error) => {});
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
    async getImage() {
      await Promise.all(
        this.arrSlider.map(async (el, idx) => {
          if (idx > 1) return true;
          const response = await fetch(el.imageSrc);
          return this.loadImage(response.url);
        })
      );
      this.checkLoad = true;
    },
    isMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/android/i.test(userAgent)) {
        return true;
      }

      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return true;
      }

      if (/windows phone/i.test(userAgent)) {
        return true;
      }

      if (
        /blackberry|webos|opera mini|opera mobi|bada|tizen|windows ce|palm/i.test(
          userAgent
        )
      ) {
        return true;
      }

      return false;
    },
  },
  mounted() {
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && this.swiper) {
        this.activeIdx = this.swiper.activeIndex;
        this.setDurationVideo();
      }
    });
  },
  unmounted() {
    this.checkLoad = false;
  },
  watch: {
    useProductObject(val) {
      setTimeout(() => {
        if (val) {
          let arrImages = val.product[0].images.map((el) => ({
            imageSrc: this.urlServer + el,
          }));
          const objVideo = val.product[0].video ? val.product[0].video : false;
          if (objVideo && !this.isMobile()) {
            setTimeout(() => {
              const mediaElem = document.querySelector(".slider__video");
              fetch(this.urlServer + objVideo)
                .then((resp) => resp.blob())
                .then((blob) => {
                  const blobUrl = URL.createObjectURL(blob);
                  mediaElem.src = blobUrl;
                  mediaElem.hidden = false;
                  arrImages = [...arrImages, { videoSrc: blobUrl }];
                  this.checkLoad = true;
                });
            }, 0);
            arrImages = [...arrImages, { videoSrc: this.urlServer + objVideo }];
            this.arrSlider = arrImages;
            // this.loadContent();
            return arrImages;
          }
          this.arrSlider = arrImages;
          this.getImage();
          // this.loadContent();
          // return arrImages;
        }
      }, 1000);
    },
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
  padding-bottom: 20px;
  transition: all 0.4s ease;
}
.slider__back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 140px);
  background: rgba(0, 0, 0, 0.18);
  margin-bottom: 50px;
  z-index: 9;
}
.activeSwiper {
  position: relative;
  opacity: 1;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
@keyframes animationOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.slider__slide {
  position: relative;
  min-height: 100%;
  max-width: 100%;
  z-index: 31;
}
.slider__controls {
  position: absolute;
  top: 0;
  left: 0%;
  height: calc(100vh - 90px);
  width: 100%;
  max-width: 100%;
  z-index: 19;
}
.slider__video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.slider__load {
  max-width: 100%;
  height: calc(100vh - 140px);
  padding-bottom: 0px;
  opacity: 1;
  transition: all 0.4s ease;
}
.disableLoad {
  opacity: 0;
}
.slider__card {
  position: relative;
  width: 100%;
  height: calc(100vh - 120px);
  padding-bottom: 20px;
}

.slider__imgs {
  position: relative;
  width: 100%;
  height: 100%;
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
@keyframes animationOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media screen and (max-width: 1600px) {
  .slider__controls {
    height: calc(100vh - 95px);
  }
  .slider__card {
    height: calc(100vh - 125px);
  }
  .slider__load {
    height: calc(100vh - 125px);
  }
  .slider__back {
    height: calc(100vh - 145px);
    margin-bottom: 50px;
  }
}
@media screen and (max-height: 790px) and (max-width: 1720px) {
  .slider__controls {
    height: calc(100vh - 105px);
  }
}
@media screen and (max-width: 1240px) {
  .slider__controls {
    height: calc(100vh - 140px);
  }
  .slider__card {
    height: calc(100vh - 155px);
  }
  .slider__load {
    height: calc(100vh - 175px);
  }
  .slider__back {
    height: calc(100vh - 175px);
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 1100px) {
  .slider__controls {
    height: 578px;
  }
  .slider__card {
    height: 568px;
  }
  .slider__load {
    height: 548px;
  }
  .slider__back {
    height: 548px;
  }
}
@media screen and (max-width: 936px) {
  .slider__swiper {
    max-width: 80%;
    padding-bottom: 96px;
  }
  .slider__controls {
    height: 808px;
  }
  .slider__card {
    height: 788px;
  }
  .slider__load {
    opacity: 0;
  }
  .slider__back {
    height: 768px;
  }
}
@media screen and (max-width: 680px) {
  .slider__swiper {
    max-width: 100%;
  }
  .slider__load {
    height: 768px;
    opacity: 1;
    width: 100%;
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 556px) {
  .slider__load {
    height: 578px;
  }
  .slider__controls {
    height: 612px;
  }
  .slider__card {
    height: 598px;
  }
  .slider__back {
    height: 578px;
  }
}
@media screen and (max-width: 498px) {
  .slider__swiper {
    padding-bottom: 66px;
  }
}
@media screen and (max-width: 450px) {
  .slider__swiper {
    padding-bottom: 46px;
  }
  .slider__load {
    height: 480px;
  }
  .slider__controls {
    height: 505px;
  }
  .slider__card {
    height: 500px;
  }
  .slider__back {
    height: 480px;
  }
}
@media screen and (max-width: 378px) {
  .slider__load {
    height: 410px;
  }
  .slider__controls {
    height: 430px;
  }
  .slider__card {
    height: 430px;
  }
  .slider__back {
    height: 410px;
  }
}
</style>
