<template>
  <div class="slider">
    <div class="slider__images" v-if="imagesArr">
      <CatalogIdSliderMyItem
        v-for="(item, idx) in imagesArr"
        :key="item"
        :item="item"
        :idx="idx"
        :activeIdx="activeIdx"
        @load="loadContent = true"
        :typeVideo="typeVideo"
        :lengthItems="imagesArr?.length"
        @loadVideo="getLoadVideo"
      />
    </div>
    <CatalogIdSliderMyProgressBar
      :lengthItems="imagesArr?.length"
      :activeIdx="activeIdx"
      :duratinAnimate="duratinAnimate"
      v-if="loadContent && checkDuration"
      @prev="prevSlide"
      @next="nextSlide"
    />
    <Transition>
      <div class="slider__loading" v-if="!loadContent && typeVideo">
        <UIMyLoadItem />
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useProductObject: useProductObject(),
      imagesArr: null,
      activeIdx: 0,
      loadContent: false,
      timeOut: null,
      duratinAnimate: "",
      checkDuration: false,
      durationDelay: 0,
      typeVideo: false,
      videolElement: null,
    };
  },
  methods: {
    startAnimationLine() {
      const activeItem = this.imagesArr[this.activeIdx];
      if (activeItem.type === "img") {
        this.duratinAnimate = "5s";
        this.durationDelay = 5000;
        this.checkDuration = true;
        this.setTimeValue();
        return;
      }
      const videoEl = this.videolElement;
      videoEl.currentTime = "0";
      this.duratinAnimate = videoEl.duration + "s";
      this.durationDelay = videoEl.duration * 1000;
      videoEl.play().catch((error) => {});
      this.setTimeValue();
    },
    getLoadVideo(videoEl) {
      this.loadContent = true;
      this.videolElement = videoEl;
      this.startAnimationLine();
    },
    setTimeValue() {
      this.timeOut = setTimeout(() => {
        if (this.activeIdx === this.imagesArr.length - 1) {
          clearTimeout(this.timeOut);
          this.activeIdx = 0;
          this.startAnimationLine();
          return;
        }
        this.activeIdx += 1;
        this.startAnimationLine();
      }, this.durationDelay);
    },
    leavePage() {
      if (!document.hidden) {
        if (this.activeIdx === this.imagesArr.length - 1) {
          clearTimeout(this.timeOut);
          this.activeIdx = 0;
          this.startAnimationLine();
          return;
        }
        clearTimeout(this.timeOut);
        this.activeIdx += 1;
        this.startAnimationLine();
      }
    },
    prevSlide() {
      if (this.timeOut) {
        clearTimeout(this.timeOut);
      }
      if (this.activeIdx === 0) {
        this.activeIdx = this.imagesArr.length - 1;
      } else {
        this.activeIdx -= 1;
      }
      this.startAnimationLine();
    },
    nextSlide() {
      if (this.timeOut) {
        clearTimeout(this.timeOut);
      }
      if (this.activeIdx === this.imagesArr.length - 1) {
        this.activeIdx = 0;
      } else {
        this.activeIdx += 1;
      }
      this.startAnimationLine();
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
    document.addEventListener("visibilitychange", this.leavePage);
  },
  created() {
    const videoItem = this.useProductObject.product[0]?.video;
    this.imagesArr = this.useProductObject.product[0].images.map((el) => ({
      srcContent: el,
      type: "img",
    }));
    const { isMobile } = useDevice();
    if (videoItem && !isMobile) {
      this.imagesArr.push({ srcContent: videoItem, type: "video" });
      this.typeVideo = true;
    }
  },

  watch: {
    loadContent(val) {
      if (val && !this.typeVideo) {
        this.startAnimationLine();
      }
    },
  },
  unmounted() {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    document.removeEventListener("visibilitychange", this.leavePage);
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: calc(100vh - 140px);
}
.slider__images {
  position: relative;
  height: 100%;
  z-index: 4;
}
.slider__loading {
  position: absolute;
  height: 100.5%;
  width: 100.5%;
  transform: translateY(-1px) translateX(-1px);
  top: 0;
  left: 0;
  z-index: 5;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@media screen and (max-width: 1340px) {
  .slider {
    height: 500px;
  }
}
@media screen and (max-width: 936px) {
  .slider {
    height: 808px;
    margin-bottom: 50px;
  }
  .slider__loading {
    padding: 0 10%;
  }
}
@media screen and (max-width: 686px) {
  .slider {
    height: 748px;
    margin-bottom: 35px;
  }
  .slider__loading {
    padding: 0 0;
  }
}
@media screen and (max-width: 556px) {
  .slider {
    height: 578px;
  }
}
@media screen and (max-width: 450px) {
  .slider {
    height: 480px;
  }
}
</style>
