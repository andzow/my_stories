<template>
  <div>
    <CatalogIndexMyMain />
    <UIMyNoise />
  </div>
</template>

<script>
export default {
  data() {
    return {
      useReplaceOrDeleteWordQuery: useReplaceOrDeleteWordQuery,
      arrFilterChapter: useArrFilterChapter(),
      arrFilterSize: useArrFilterSize(),
      checkBlock: false,
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
        "все"
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
  },
  created() {
    this.initRoute();
  },
  mounted() {
    this.arrFilterChapter = [
      {
        name: "все",
      },
      {
        name: "Весна-лето 2024",
      },
      {
        name: "топ продаж",
      },
      {
        name: "платья",
      },
      {
        name: "сарафаны",
      },
      {
        name: "рубашки, топы",
      },
      {
        name: "юбки",
      },
      {
        name: "брюки",
      },
      {
        name: "пиджаки, жакеты",
      },
      {
        name: "костюмы",
      },
      {
        name: "воротнички, манжеты, подюбники",
      },

      {
        name: "свитеры, водолазки",
      },

      {
        name: "куртки, фуфайки",
      },
    ];
    this.arrFilterSize = [
      {
        name: "s",
      },
      {
        name: "m",
      },
      {
        name: "l",
      },

      {
        name: "xl",
      },
      {
        name: "2xl",
      },
    ];
    this.useCatalogItems;
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
  },
  watch: {},
};
</script>

<style scoepd></style>
