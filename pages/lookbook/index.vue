<template>
  <div>
    <LookbookMyMain @openSection="checkAnimation = true" />
    <section class="index" v-if="checkAnimation">
      <LookbookMyAbout />
      <LookbookMySummer />
      <LookbookMyAwakening />
      <UIMyAnimationLine duration="5" :arrAnimationLine="arrAnimationLine" />
    </section>
    <UIMyNoise />
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
      arrAnimationLine: [
        {
          name: ".header__content",
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
      ],
    };
  },
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "hidden";
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

<style>
body {
  overflow: hidden;
}
</style>
