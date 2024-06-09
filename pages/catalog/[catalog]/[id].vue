<template>
  <h1>{{ $route.params.id }}</h1>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";
export default {
  async mounted() {
    const data = await ProductController.productOne(this.$route)
    console.log(data)
  },
};
</script>

<style></style>
