<template>
  <div class="search__item">
    <div class="search__item_image">
      <img
        class="search__item_img"
        :src="item.imageSrc"
        data-cursor-class="animateCursor"
        @click="setPage"
      />
    </div>
    <p
      class="search__item_title"
      data-cursor-class="animateCursor"
      @click="setPage"
    >
      {{ item.name + item.color }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    setPage() {
      this.$emit("close", this.item);
    },
  },
};
</script>

<style scoped>
.search__item {
  position: relative;
  padding: 20px 0;
  border-top: 1px solid #d2bcae;
  display: flex;
  align-items: center;
}
.search__item_title {
  margin-left: 40px;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  text-transform: lowercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.search__item_img {
  min-width: 80px;
  width: 80px;
  height: 114px;
  object-fit: cover;
}
@media screen and (max-width: 996px) {
  .search__item_title {
    font-size: 18px;
    margin-left: 20px;
  }
  .search__item_img {
    width: 82px;
    height: 94px;
    object-fit: cover;
  }
}
@media screen and (max-width: 568px) {
  .search__item_title {
    font-size: 16px;
    margin-left: 20px;
  }
}
</style>
