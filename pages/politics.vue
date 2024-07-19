<template>
  <div>
    <PoliticsMyMain />
    <LazyUIMyNoise v-if="checkHydrate" />
  </div>
</template>

<script>
import politicsData from "~/assets/json/politics.json";

export default {
  setup() {
    useHead({
      title:
        "Политика конфиденциальности - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories",
      meta: [
        {
          name: "description",
          content: `Политика конфиденциальности - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories`,
        },
        {
          name: "keywords",
          content:
            "Политика конфиденциальности, модная женская одежда, интернет-магазин, стильная одежда, mystories",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content:
            "Политика конфиденциальности - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories",
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
      politics: politicsData,
      checkHydrate: useCheckHydration(),
    };
  },
  mounted() {
    document.body.style.overflow = "auto";
  },
};
</script>

<style scoped></style>
