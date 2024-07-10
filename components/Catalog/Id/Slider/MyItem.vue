<template>
  <div class="slider__item" :class="{ activeImageSlider: activeIdx === idx }">
    <NuxtImg
      v-if="item.type === 'img'"
      class="slider__item_imgs"
      :src="serverUrl + item.srcContent"
      alt="Фотография товара"
      format="webp"
    />
    <video
      v-if="item.type === 'video'"
      class="slider__item_video"
      autoplay
      muted
      loop
      preload="metadata"
      playsinline
    ></video>
    <Transition>
      <div class="slider__item_loading" v-if="!checkLoadImg && !typeVideo">
        <UIMyLoadItem />
      </div>
    </Transition>
  </div>
</template>

<script>
import { USE_SERVER } from "~/url";

export default {
  props: {
    idx: Number,
    item: Object,
    activeIdx: Number,
    typeVideo: Boolean,
    lengthItems: Number,
  },
  data() {
    return {
      serverUrl: USE_SERVER,
      checkLoadImg: false,
    };
  },
  methods: {
    async loadPromise() {
      const loadImg = await fetch(this.serverUrl + this.item.srcContent);
      await new Promise((resolve, reject) => {
        const img = new Image();
        img.src = loadImg.url;
        img.onload = () => {
          resolve(true);
        };
      });
      this.$emit("load");
      this.checkLoadImg = true;
    },
    async fetchVideo(mediaElem) {
      await fetch(this.serverUrl + this.item.srcContent)
        .then((resp) => resp.blob())
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          mediaElem.src = blobUrl;
          mediaElem.hidden = false;
          mediaElem.pause();
          mediaElem.onloadedmetadata = () => {
            this.checkLoadImg = true;
            this.$emit("loadVideo", mediaElem);
          };
        });
    },
    loadPromiseVideo() {
      const mediaElem = document.querySelector(".slider__item_video");
      this.fetchVideo(mediaElem);
    },
  },
  mounted() {
    if (!this.typeVideo) {
      this.loadPromise();
    } else if (this.typeVideo && this.item.type === "video") {
      this.loadPromiseVideo();
    }
  },
};
</script>

<style scoped>
.slider__item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.4s ease;
}
.activeImageSlider {
  opacity: 1;
}
.slider__item_loading {
  position: absolute;
  top: 0;
  left: 0;
  height: 100.5%;
  width: 100.5%;
  transform: translateY(-1px) translateX(-1px);
  z-index: 5;
}
.slider__item_imgs {
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 4;
}
.slider__item_video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 4;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@media screen and (max-width: 936px) {
  .slider__item {
    padding: 0 10%;
  }
}
@media screen and (max-width: 686px) {
  .slider__item {
    padding: 0 0;
  }
}
</style>
