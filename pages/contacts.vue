<template>
  <div>
    <ContactsMyMain />
    <UIMyAnimationLine
      duration="2"
      :arrAnimationLine="arrAnimationLine"
      v-if="arrAnimationLine"
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
      if (window.innerWidth > 930) {
        this.arrAnimationLine = [
          {
            name: ".header__logo",
            defaultLine: false,
            indent: "left",
          },
          {
            name: ".main__image_img",
            defaultLine: false,
            share: true,
            indent: "left",
          },
          {
            name: ".main__about_title",
            defaultLine: false,
            indent: "left",
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
            widthTo: true,
            indent: "left",
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
