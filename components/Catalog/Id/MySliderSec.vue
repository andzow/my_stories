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
    />
    <Transition>
      <div class="slider__loadin" v-if="!loadContent && typeVideo">
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
        this.duratinAnimate = "1s";
        this.durationDelay = 1000;
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
    if (videoItem) {
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
.slider__loadin {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
}
</style>
