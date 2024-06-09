<template>
  <h1>{{ $route.params.id }}</h1>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style></style>
