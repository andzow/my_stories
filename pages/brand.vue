<template>
  <div>
    <NuxtErrorBoundary>
      <BrandMyMain />
    </NuxtErrorBoundary>
    <section class="index">
      <BrandMyAbout />
      <BrandMyPhrase />
      <BrandMyFacts />
      <BrandMySubscribe />
      <LazyUIMyAnimationLine
        duration="7"
        :arrAnimationLine="arrAnimationLine"
        v-if="arrAnimationLine && checkHydrate"
      />
      <LazyUIMyNoise v-if="checkHydrate && !$device.isSafari" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrAnimationLine: null,
      checkHydrate: useCheckHydration(),
    };
  },
  methods: {
    initLine() {
      if (window.innerWidth > 1100) {
        this.arrAnimationLine = [
          { name: ".header__logo", defaultLine: false, indent: "left" },
          {
            name: ".about__information_li1",
            defaultLine: false,
            indent: "left",
            widthTo: true,
          },
          {
            name: ".about__text",
            defaultLine: false,
            indent: "left",
          },
          {
            name: ".about__text",
            defaultLine: false,
            indent: "left",
            widthTo: true,
          },
        ];
      } else if (window.innerWidth > 767) {
        this.arrAnimationLine = [
          { name: ".header__logo", defaultLine: false, indent: "left" },
          {
            name: ".about__mob_img",
            defaultLine: false,
            indent: "left",
            widthTo: true,
          },
          {
            name: ".header__interaction_search",
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
      } else {
        this.arrAnimationLine = [
          { name: ".header__logo", defaultLine: false, indent: "left" },
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
    bodyEl.style.overflow = "auto";
    this.initLine();
  },
};
</script>

<style scoped>
.index {
  position: relative;
  background-color: var(--yellow);
  width: 100vw;
  z-index: 15;
}
</style>
