<template>
  <div class="price__loading">
    <div class="price__loading_title">
      <UIMyLoadingItem :item="{ loading: true }" :index="0" height="20px" />
    </div>
    <div class="price__loading_block">
      <UIMyLoadingItem
        :item="{ loading: true }"
        :index="0"
        height="30px"
        margin="0px"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.price__loading_title {
  margin-bottom: 15px;
}
</style>
