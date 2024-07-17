<template>
  <div class="mobile">
    <UINewMyItem
      v-for="(item, idx) in arrNew"
      :key="item"
      :item="item"
      :idx="idx"
    />
  </div>
</template>

<script>
export default {
  props: {
    arrNew: Array,
  },
  mounted() {},
};
</script>

<style scoped>
.mobile {
  display: none;
  flex-direction: column;
  row-gap: 45px;
  margin-bottom: 35px;
}
@media screen and (max-width: 468px) {
  .mobile {
    display: flex;
  }
}
</style>
