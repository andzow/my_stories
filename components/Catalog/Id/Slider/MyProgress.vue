<template>
  <div class="slider__progress" ref="sliderProgress"></div>
</template>

<script>
export default {
  props: {
    changeProgress: Boolean,
  },
  data() {
    return {
      activeDuration: null,
    };
  },
  methods: {
    async initActivePagination() {
      nextTick(() => {
        const elHtmlProgress = document.querySelector(".slider__progress");
        const elHtmlActiveBtn = document.querySelector(
          ".slider__swiper .swiper-pagination-bullet-active"
        );
        elHtmlActiveBtn.appendChild(elHtmlProgress);
        this.$refs.sliderProgress.style.animationDuration = "2s";
      });
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
        this.initActivePagination();
        this.$emit("change");
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
  animation-name: nanex;
  animation-duration: 7s;
  animation-timing-function: linear;
  z-index: 19;
}
@keyframes nanex {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
