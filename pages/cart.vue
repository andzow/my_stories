<template>
  <div>
    <CartMyMain />
    <CartMySlider />
    <UIMyAnimationLine
      v-if="arrAnimationLine"
      duration="4"
      :arrAnimationLine="arrAnimationLine"
    />
    <UIMyNoise />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrAnimationLine: null,
    };
  },
  methods: {
    initLine() {
      if (window.innerWidth > 936) {
        this.arrAnimationLine = [
          { name: ".header__logo", defaultLine: false, indent: "left" },
          { name: ".header__ul", defaultLine: false, indent: "left" },
          {
            name: ".header__ul",
            defaultLine: false,
            indent: "left",
            widthTo: true,
          },
          {
            name: ".header__interaction_search",
            defaultLine: false,
            indent: "left",
          },
        ];
      } else {
        this.animationDuration = "13";
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

<style scoped></style>
