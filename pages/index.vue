<template>
  <div class="page">
    <MainMyMain />
    <section class="index">
      <MainCollectionMyCollection />
      <MainBrandMyBrand />
      <MainMyAddition />
      <MainCatalogMyCatalog />
      <MainNewMyNew />
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
    useHead({
      title:
        "Интернет-магазин модной женской одежды и доставкой по всей России | MyStories",
      meta: [
        {
          name: "description",
          content: `В интернет-магазине mystories вас ждет огромный выбор модной одежды различных размеров! Доставка по всей России.`,
        },
        {
          name: "keywords",
          content:
            "женская мода, модная женская одежда, интернет-магазин, стильная одежда, mystories",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content:
            "Интернет-магазин модной женской одежды и доставкой по всей России | MyStories",
        },
        {
          property: "og:description",
          content: `В интернет-магазине mystories вас ждет огромный выбор модной одежды различных размеров! Доставка по всей России.`,
        },
        {
          property: "og:site_name",
          content:
            "Интернет-магазин модной женской одежды и доставкой по всей России | MyStories",
        },
        {
          property: "og:image",
          content: "/Preload/collectionF.webp",
        },
      ],
    });
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
