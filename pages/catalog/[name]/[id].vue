<template>
  <div>
    <RenderCacheable :async-data-keys="['product']" :max-age="3600">
      <CatalogIdMyMain />
    </RenderCacheable>
    <CatalogIdMyCatalog />
    <LazyUIMyNoise v-if="checkHydrate" />
    <LazyUIMyAnimationLine
      duration="6"
      :arrAnimationLine="arrAnimationLine"
      v-if="arrAnimationLine && checkHydrate"
    />
    <Transition name="fade-alert">
      <UIMyAlertCart v-if="useAlertCart" />
    </Transition>
  </div>
</template>

<script setup>
const route = useRoute().params;
const { data } = await useFetch(
  usePageUrlAsyncData() + "product/" + `${route.name}/${route.id}`
);

const product = data.value.product[0];
useHead({
  title: `Купить ${route.name.toLowerCase()} ${product.color.toLowerCase()} - Интернет-магазин модной женской одежды с доставкой по всей России | MyStories`,
  meta: [
    {
      name: "description",
      content: `${product.text}, характеристика: ${product.characteristic}`,
    },
    {
      name: "keywords",
      content: `${product.name}, модная женская одежда, интернет-магазин, коллекции, mystories`,
    },
    { name: "format-detection", content: "telephone=no" },
    {
      property: "og:title",
      content: `${
        route.name
      }, ${product.color.toLowerCase()} - Интернет-магазин модной женской одежды с доставкой по всей России | MyStories`,
    },
    {
      property: "og:description",
      content: `${product.text}`,
    },
    {
      property: "og:site_name",
      content: `Интернет-магазин модной женской одежды с доставкой по всей России | MyStories`,
    },
    {
      property: "og:image",
      content: usePageUrlAsyncData() + product.images[0],
    },
  ],
});
</script>
<script>
export default {
  data() {
    return {
      useReplaceOrDeleteWordQuery: useReplaceOrDeleteWordQuery,
      useAlertCart: useAlertCart(),
      arrAnimationLine: null,
      checkHydrate: useCheckHydration(),
    };
  },
  methods: {
    async replaceRoute(querySettings) {
      this.checkBlock = true;
    },
    initApp() {
      this.replaceRoute();
    },
    initGsap() {
      if (window.innerWidth > 936) {
        this.arrAnimationLine = [
          {
            name: ".header__logo",
            defaultLine: false,
            indent: "left",
          },
          {
            name: ".about",
            defaultLine: false,
            indent: "left",
          },
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
  created() {
    this.initApp();
    this.useAlertCart = false;
  },
  async mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
    setTimeout(() => {
      this.initGsap();
    }, 100);
  },
  watch: {},
};
</script>

<style scoped>
.fade-alert-enter-from {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.4s ease;
}
.fade-alert-enter-to {
  transform: translateY(0px);
  opacity: 1;
  transition: all 0.4s ease;
}
.fade-alert-leave-from {
  transform: translateY(0px);
  opacity: 1;
  transition: all 0.4s ease;
}
.fade-alert-leave-to {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.4s ease;
}
</style>
