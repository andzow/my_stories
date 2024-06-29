<template>
  <div class="preloader">
    <div class="preloader__content">
      <div class="preloader__text">
        <div
          class="preload__item"
          :class="['preload__item' + (idx + 1)]"
          v-for="(item, idx) in arrItem"
          :key="item"
        >
          {{ item }}
        </div>
        <span class="preloader__span">...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      arrItem: ["M", "Y ", "S", "T", "O", "R", "I", "E", "S"],
      gsapArr: [],
    };
  },
  mounted() {
    let delayEl = 0.2;
    this.arrItem.forEach((el, idx) => {
      const nameClass = ".preload__item" + (idx + 1);
      const tl = gsap.timeline({
        defaults: { ease: "linear" },
      });
      gsap.to(".preload__item" + (idx + 1), {
        y: 0,
        delay: 0.1 + delayEl,
      });
      delayEl += 0.1;
    });
  },
};
</script>

<style></style>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ede9df;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}
.preload__item {
  transform: translateY(20px);
  transition: all 0.3s ease;
}
.preloader__text {
  display: flex;
  align-items: center;
  font-size: 35px;
  font-weight: 400;
  color: var(--brown);
  letter-spacing: 10px;
}
.preloader__span {
  font-family: "Inter", sans-serif;
}
</style>
