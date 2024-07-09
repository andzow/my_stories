<template>
  <div class="spinner" :class="{ disableBack: backgroundDisable }">
    <div class="spinner__container"></div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundDisable: Boolean,
  },
  mounted() {},
};
</script>

<style scoped>
.spinner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #c1a999;
  animation: loading 1.5s infinite ease-in-out;
  z-index: 10;
}

.disableBack {
  background-color: rgba(0, 0, 0, 0);
}
.spinner__container {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 5px solid #fff;
  border-top: 5px solid #c1a999;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
  }
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
