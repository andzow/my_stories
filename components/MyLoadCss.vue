<template>
  <div class="css"></div>
</template>

<script>
export default {
  props: {
    apple: {},
    checkRoute: Boolean,
  },
  mounted() {
    if (this.checkRoute) {
      document.documentElement.classList.add("dynamicStyleOn");
      return;
    }
    if (this.apple) {
      document.documentElement.classList.add("dynamicStyleOn");
      return;
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
  cursor: pointer !important;
}
.dynamicStyleOn a {
  cursor: pointer !important;
}
.dynamicStyleOn .catalog__image_link {
  cursor: pointer !important;
}
.dynamicStyleOn .new__item_card {
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
