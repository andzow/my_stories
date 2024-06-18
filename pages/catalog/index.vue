<template>
  <div>
    <CatalogIndexMyMain @activeLine="activeLine = true" />
    <UIMyNoise />
    <UIMyAnimationLine
      duration="13"
      :arrAnimationLine="arrAnimationLine"
      :fixed="true"
      v-if="activeLine"
    />
  </div>
</template>

<script>
import CategoryController from "@/http/controllers/CategoryController";

export default {
  data() {
    return {
      arrFilterChapter: useArrFilterChapter(),
      arrFilterSize: useArrFilterSize(),
      minVal: useMinVal(),
      maxVal: useMaxVal(),
      useReplaceOrDeleteWordQuery: useReplaceOrDeleteWordQuery,

      activeLine: false,
      arrAnimationLine: [
        { name: ".header__content", defaultLine: false, indent: "left" },
        { name: ".card1", defaultLine: false, indent: "left" },
        {
          name: ".header__li3",
          defaultLine: false,
          indent: "left",
        },
        {
          name: ".header__interaction_search",
          defaultLine: false,
          indent: "left",
        },
      ],
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
    async initFilter() {
      try {
        const res = await CategoryController.getCategory(this.$route.query);
        this.arrFilterChapter = res.categorys;
        this.arrFilterSize = res.uniqueNameArray;
        this.minVal = !res.minPrice ? 0 : res.minPrice;
        this.maxVal = !res.maxPrice ? 35000 : res.maxPrice;
      } catch {}
    },
    initScrollTrigger() {
      this.useFilterFlout();
    },
  },
  created() {
    this.initRoute();
  },
  mounted() {
    this.initFilter();
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
  },
  watch: {},
};
</script>

<style></style>
