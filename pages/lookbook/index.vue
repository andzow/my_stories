<template>
  <div>
    <LookbookMyMain @openSection="checkAnimation = true" />
    <section class="index" v-if="checkAnimation">
      <LookbookMyAbout />
      <LookbookMySummer />
      <LookbookMyAwakening />
      <LazyUIMyAnimationLine
        duration="7"
        :arrAnimationLine="arrAnimationLine"
        v-if="arrAnimationLine && checkHydrate"
      />
    </section>
    <LazyUIMyAnimationLine
      duration="7"
      :arrAnimationLine="arrAnimationLine"
      v-if="arrAnimationLine && checkHydrate"
    />
  </div>
</template>

<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      checkAnimation: false,
      useCursor: useCursor(),
      arrAnimationLine: null,
      checkHydrate: useCheckHydration(),
    };
  },
  methods: {
    initLine() {
      if (window.innerWidth > 834) {
        this.arrAnimationLine = [
          {
            name: ".header__logo",
            defaultLine: false,
            indent: "left",
          },
          {
            name: ".about__text",
            defaultLine: false,
            widthTo: true,
            indent: "left",
          },
          {
            name: ".summer__photo",
            defaultLine: false,
            indent: "left",
            widthTo: true,
          },
          {
            name: ".header__interaction_btn",
            defaultLine: false,
            indent: "left",
          },
        ];
      } else {
        this.arrAnimationLine = [
          {
            name: ".header__logo",
            defaultLine: false,
            indent: "left",
          },
          {
            name: ".header__interaction_cart",
            defaultLine: false,
            indent: "left",
            widthTo: true,
          },
        ];
      }
    },
  },
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "hidden";
    this.initLine();
  },
  watch: {
    checkAnimation(val) {
      const bodyEl = document.body;
      bodyEl.style.overflow = "auto";
      setTimeout(() => {
        this.useCursor = true;
      }, 0);
    },
  },
};
</script>

<!-- <style>
body {
  overflow: hidden;
}
</style> -->
