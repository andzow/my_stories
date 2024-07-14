<template>
  <div class="page">
    <MainMyMain />
    <section class="index">
      <MainCollectionMyCollection />
      <MainBrandMyBrand />
      <MainMyAddition />

      <LazyUIMyAnimationLine
        v-if="arrAnimationLine && checkHydrate"
        duration="9"
        :arrAnimationLine="arrAnimationLine"
      />
      <LazyUIMyNoise v-if="checkHydrate" />
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    // useHead({
    //   link: [
    //     {
    //       rel: "preload",
    //       as: "image",
    //       href: "../Preload/additionF.webp",
    //     },
    //     {
    //       rel: "preload",
    //       as: "image",
    //       href: "../Preload/collectionF.webp",
    //     },
    //     {
    //       rel: "preload",
    //       as: "image",
    //       href: "../Preload/collectionS.webp",
    //     },
    //   ],
    // });
  },
  data() {
    return {
      arrAnimationLine: null,
      checkHydrate: useCheckHydration(),
      checkPreload: useCheckPreload(),
    };
  },
  methods: {
    initScrollTrigger() {
      if (window.innerWidth <= 990) {
        this.arrAnimationLine = [
          { name: ".header__logo", defaultLine: false, indent: "left" },
          {
            name: ".header__interaction_cart",
            defaultLine: false,
            indent: "left",
            widthTo: true,
          },
          { name: "", defaultLine: false, indent: "left" },
          {
            name: "",
            defaultLine: false,
            share: true,
            indent: "left",
          },
        ];
        return;
      }
      this.arrAnimationLine = [
        { name: ".header__logo", defaultLine: false, indent: "left" },
        { name: ".addition__img", defaultLine: false, indent: "left" },
        {
          name: ".collection__new_title",
          defaultLine: false,
          indent: "left",
          widthTo: true,
        },
        {
          name: ".collection__photo_img",
          defaultLine: false,
          share: true,
          indent: "left",
        },
      ];
    },
  },
  mounted() {
    this.initScrollTrigger();
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
