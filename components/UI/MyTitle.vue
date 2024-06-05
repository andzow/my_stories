<template>
  <h1 class="main__title">( &nbsp;{{ name }}&nbsp; )</h1>
</template>

<script>
export default {
  props: {
    title: String,
    name: String,
    fontSize: String,
    fontWeight: String,
  },
  data() {
    return {
      useGsapAnimationOpacity: useGsapAnimationOpacity,
      arrClassNameForAnimation: [".main__title"],
    };
  },
  computed: {},
  mounted() {
    this.useGsapAnimationOpacity(this.arrClassNameForAnimation, ".main__title");
  },
};
</script>

<style scoped>
.main__title {
  color: var(--brandname);
  font-weight: 300;
  font-size: 116px;
  opacity: 0;
}
</style>
