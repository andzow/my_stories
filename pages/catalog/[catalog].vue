<template>
  <div>
    <CatalogIdMyMain />
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
      await this.$router.replace({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          color: querySettings.color,
          colorName: "Красный",
        },
      });
      this.checkBlock = true;
    },
    initApp() {
      const readyQueryChapter = this.useReplaceOrDeleteWordQuery(
        "color",
        "red"
      );
      this.replaceRoute(readyQueryChapter);
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
