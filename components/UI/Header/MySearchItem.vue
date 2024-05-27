<template>
  <div class="search__item">
    <div class="search__item_image">
      <img class="search__item_img" :src="item.imageSrc" />
    </div>
    <p class="search__item_title">{{ item.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.search__item {
  padding: 20px 0;
  border-top: 1px solid #d2bcae;
  display: flex;
  align-items: center;
}
.search__item_title {
  margin-left: 40px;
  font-size: 20px;
  font-weight: 400;
}
.search__item_img {
  width: 80px;
  height: 114px;
  object-fit: cover;
}
</style>
