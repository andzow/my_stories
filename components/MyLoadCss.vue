<template>
  <div class="css"></div>
</template>

<script>
export default {
  props: {
    apple: {},
  },
  mounted() {
    if (this.apple) {
      document.documentElement.classList.add("dynamicStyleOn");
    }
    document.documentElement.classList.add("dynamicStyle");
  },
};
</script>
<style>
.dynamicStyle {
  cursor: none !important;
}
.dynamicStyle button {
  cursor: none !important;
}
.dynamicStyle a {
  cursor: none !important;
}
.dynamicStyleOn {
  cursor: auto !important;
}
.dynamicStyleOn button {
  cursor: auto !important;
}
.dynamicStyleOn a {
  cursor: auto !important;
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
