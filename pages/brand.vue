<template>
  <div>
    <BrandMyMain />
    <section class="index">
      <BrandMyAbout />
      <BrandMyPhrase />
      <BrandMyFacts />
      <BrandMySubscribe />
      <UIMyAnimationLine duration="4" :arrAnimationLine="arrAnimationLine" />
      <UIMyNoise />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrAnimationLine: [
        { name: ".header__content", defaultLine: false, indent: "left" },
        {
          name: ".facts__images_photo",
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
      ],
    };
  },
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
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
