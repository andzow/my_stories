<template>
  <div>
    <CatalogIdMyMain />
    <CatalogIdMyCatalog />
    <UIMyNoise />
  </div>
</template>

<script>
export default {
  data() {
    return {
      useReplaceOrDeleteWordQuery: useReplaceOrDeleteWordQuery,
    };
  },
  methods: {
    async replaceRoute(querySettings) {
      // await this.$router.replace({
      //   path: this.$route.path,
      //   query: {
      //     color: "#fsadfdsafsadf",
      //     colorName: "Красный",
      //   },
      // });
      this.checkBlock = true;
    },
    initApp() {
      this.replaceRoute();
    },
  },
  created() {
    this.initApp();
  },
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
  },
};
</script>

<style scoped></style>
