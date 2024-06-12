<template>
  <div class="slider__progress" ref="sliderProgress"></div>
</template>

<script>
export default {
  props: {
    activeDurationVideo: {},
    changeProgress: Boolean,
  },
  data() {
    return {
      activeDuration: null,
      timeOut: null,
    };
  },
  methods: {
    timeOutFunc() {
      clearTimeout(this.timeOut);
      this.timeOut = null;
      this.$emit("nextSlide");
    },
    async initActivePagination() {
      nextTick(() => {
        const elHtmlProgress = document.querySelector(".slider__progress");
        const elHtmlActiveBtn = document.querySelector(
          ".slider__swiper .swiper-pagination-bullet-active"
        );
        elHtmlActiveBtn.appendChild(elHtmlProgress);
        this.$refs.sliderProgress.style.animationDuration = this.activeDuration;
      });
    },
    initChangeFunc() {
      let duration = !this.activeDurationVideo
        ? 5000
        : this.activeDurationVideo * 1000;
      this.timeOut = setTimeout(() => this.timeOutFunc(), duration);
      this.activeDuration = !this.activeDurationVideo
        ? "5s"
        : this.activeDurationVideo + "s";
      this.initActivePagination();
      this.$emit("change");
    },
  },
  mounted() {
    setTimeout(() => {
      this.initActivePagination();
    }, 0);
  },
  watch: {
    changeProgress(val) {
      if (val) {
        if (this.timeOut) {
          clearTimeout(this.timeOut);
          this.timeOut = null;
        }
        this.initChangeFunc();
      }
    },
  },
};
</script>

<style scoped>
.slider__progress {
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  transform: translateX(0%);
  background: #ffffff;
  animation-name: animateProgressBar;
  animation-timing-function: linear;
  z-index: 19;
}
@keyframes animateProgressBar {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
