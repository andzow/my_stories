<template>
  <section class="main">
    <div class="main__content">
      <div class="main__about">
        <h1 class="main__title" v-html="arrActive.title"></h1>
        <div class="main__span">{{ arrActive.year }}</div>
      </div>
    </div>
    <div
      class="main__paralax"
      :style="{
        background: `url('${arrActive.backgroundPhotoSrc}') no-repeat`,
        backgroundSize: 'cover',
      }"
    ></div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  props: {
    arrActive: Object,
  },
  data() {
    return {
      useGsapAnimationOpacity: useGsapAnimationOpacity,
    };
  },
  methods: {
    setAnimateParallax() {
      gsap.to(".main__paralax", {
        scrollTrigger: {
          trigger: ".main",
          start: "50px top",
          scrub: true,
        },
        duration: 1,
        scale: 1.1,
      });
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      this.setAnimateParallax();
      this.useGsapAnimationOpacity([".main__title", ".main__span"], ".main");
    }, 10);
  },
};
</script>

<style scoped>
.main {
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
.main__paralax {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
.main__content {
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 17;
}
.main__about {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
}
.main__title {
  color: var(--yellow);
  font-weight: 300;
  font-size: 36px;
  margin-bottom: 66px;
  opacity: 0;
}
.main__span {
  color: var(--yellow);
  font-weight: 300;
  font-size: 16px;
  opacity: 0;
}
</style>
