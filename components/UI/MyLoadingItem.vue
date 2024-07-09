<template>
  <div
    class="loading__item"
    :style="{
      width: item.width ? item.width : '100%',
      height: height ? height : '',
      marginBottom: margin ? margin : '',
    }"
    :key="index"
  ></div>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number,
    height: String,
    margin: String,
  },
};
</script>

<style scoped>
.loading__item {
  margin-bottom: 15px;
  width: 100%;
  height: 20px;
  background: #c1a999;
  border-radius: 2px;
  animation: loading 1.5s infinite ease-in-out;
}

@keyframes loading {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
