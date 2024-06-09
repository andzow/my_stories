<template>
  <div>
    <CatalogIdMyMain />
    <CatalogIdMyCatalog />
    <UIMyNoise />
  </div>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";
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
  async mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
    const data = await ProductController.productOne(this.$route.params)
  },
};
</script>

<style scoped></style>
