<template>
  <div>
    <CatalogIndexMyMain @activeLine="activeLine = true" />

    <LazyUIMyNoise v-if="checkHydrate" />
    <LazyUIMyAnimationLine
      :duration="animationDuration"
      :arrAnimationLine="arrAnimationLine"
      v-if="arrAnimationLine && checkHydrate"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrFilterChapter: useArrFilterChapter(),
      arrFilterSize: useArrFilterSize(),
      minVal: useMinVal(),
      maxVal: useMaxVal(),
      useReplaceOrDeleteWordQuery: useReplaceOrDeleteWordQuery,
      activeLine: false,
      arrAnimationLine: null,
      animationDuration: "11",
      checkHydrate: useCheckHydration(),
    };
  },
  methods: {
    async replaceRoute(querySettings) {
      const queryPath = useRoute().query;
      if (!queryPath?.chapter) {
        queryPath.chapter = "все";
      }
      await useRouter().replace({
        path: "/catalog",
        query: { ...queryPath, ...querySettings },
      });
      // this.checkBlock = true;
    },
    async initRoute() {
      const queryRoutePrice = useRoute().query;
      const readyQueryChapter = this.useReplaceOrDeleteWordQuery(
        "chapter",
        "все",
        false
      );
      this.replaceRoute(queryRoutePrice, readyQueryChapter);
      // console.log(readyQueryChapter);
      // const readyQueryPrice = this.useReplaceOrDeleteWordQuery(
      //   "min",
      //   !queryRoutePrice.min ? "0" : useRoute().query.min,
      //   false,
      //   {
      //     check: true,
      //     value: "0",
      //   }
      // );
      // const readyQueryPriceMax = this.useReplaceOrDeleteWordQuery(
      //   "max",
      //   !queryRoutePrice.max ? "35000" : useRoute().query.max,
      //   false,
      //   {
      //     check: true,
      //     value: "12000",
      //   }
      // );
      // const readyQueryWithoutName = this.useReplaceOrDeleteWordQuery(
      //   "size",
      //   false,
      //   true
      // );
      // const settingsObj = {};
      // const newArr = [readyQueryChapter].filter((el) => Object.values(el)[0]);
      // newArr.forEach((el) => {
      //   const [[key, value]] = Object.entries(el);
      //   settingsObj[key] = value;
      // });
    },
    initGsap() {
      if (window.innerWidth > 936) {
        this.arrAnimationLine = [
          { name: ".header__logo", defaultLine: false, indent: "left" },
          {
            name: ".header__interaction_search",
            defaultLine: false,
            indent: "left",
          },
          { name: ".catalog__item1", defaultLine: false, indent: "left" },
          {
            name: ".catalog__item3",
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
  created() {
    this.initRoute();
  },
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
    this.initGsap();
  },
  watch: {},
};
</script>

<style scoped></style>
