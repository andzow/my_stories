<template>
  <div>
    <CatalogIndexMyMain @activeLine="activeLine = true" />

    <LazyUIMyNoise v-if="checkHydrate && !$device.isSafari" />
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
      await this.$router.replace({
        path: "/catalog",
        query: querySettings,
      });
      this.checkBlock = true;
    },
    async initRoute() {
      const queryRoutePrice = useRoute().query;
      const readyQueryChapter = this.useReplaceOrDeleteWordQuery(
        "chapter",
        false,
        true
      );
      const readyQueryPrice = this.useReplaceOrDeleteWordQuery(
        "min",
        !queryRoutePrice.min ? "0" : useRoute().query.min,
        false,
        {
          check: true,
          value: "0",
        }
      );
      const readyQueryPriceMax = this.useReplaceOrDeleteWordQuery(
        "max",
        !queryRoutePrice.max ? "35000" : useRoute().query.max,
        false,
        {
          check: true,
          value: "12000",
        }
      );
      const readyQueryWithoutName = this.useReplaceOrDeleteWordQuery(
        "size",
        false,
        true
      );
      const settingsObj = {};
      const newArr = [
        readyQueryChapter,
        readyQueryWithoutName,
        readyQueryPrice,
        readyQueryPriceMax,
      ].filter((el) => Object.values(el)[0]);
      newArr.forEach((el) => {
        const [[key, value]] = Object.entries(el);
        settingsObj[key] = value;
      });
      this.replaceRoute(settingsObj);
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
          { name: ".card1", defaultLine: false, indent: "left" },
          {
            name: ".card2",
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
    this.initGsap();
  },
  watch: {},
};
</script>

<style scoped></style>
