<template>
  <div>
    <MainMyMain />
    <section class="index">
      <MainCollectionMyCollection />
      <MainBrandMyBrand />
      <MainMyAddition />
      <MainCatalogMyCatalog />
      <MainNewMyNew />
      <UIMyAnimationLine duration="7" :arrAnimationLine="arrAnimationLine" />
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
