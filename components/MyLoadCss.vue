<template>
  <div class="css"></div>
</template>

<script>
export default {
  props: {
    checkRoute: Boolean,
  },
  mounted() {
    if (this.checkRoute) {
      document.documentElement.classList.add("dynamicStyleOn");
      return;
    }
  },
};
</script>
<style>
.dynamicStyleOn {
  cursor: auto !important;
}
.dynamicStyleOn button,
a,
input {
  cursor: pointer !important;
}
</style>
<style scoped>
.css {
  display: none;
  opacity: 0;
  height: 0;
}
/* * {
  cursor: none !important;
}
button {
  cursor: none !important;
} */
</style>
