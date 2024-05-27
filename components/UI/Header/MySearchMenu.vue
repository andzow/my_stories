<template>
  <div class="search__menu" v-auto-animate>
    <UIHeaderMySearchItem v-for="item in arrMenu" :key="item" :item="item" />
  </div>
</template>

<script>
export default {
  props: {
    arrMenu: { type: Array },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.search__menu {
  max-height: 470px;
  padding-right: 20px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
