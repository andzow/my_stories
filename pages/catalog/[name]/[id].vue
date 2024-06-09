<template>
  <h1>{{ $route.params.id }}</h1>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";

export default {
  async mounted() {
    const res = await ProductController.productOne(this.$route.params);
  },
};
</script>

<style></style>
