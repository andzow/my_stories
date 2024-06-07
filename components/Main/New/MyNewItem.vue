<template>
  <div class="new__item" :class="['new__item' + (idx + 1)]">
    <div class="new__item_content">
      <div
        class="new__item_image"
        :class="['new__item_image' + (idx + 1)]"
        data-cursor-class="animateCursor"
      >
        <div class="new__item_photo">
          <MainNewMyNewImage
            :images="item.images"
            :idx="idx"
            :sale="!item.sale ? false : item.sale"
            :item="item"
          />
        </div>
      </div>
      <h3 class="new__item_name" :class="['new__item_name' + (idx + 1)]">
        {{ item.name }}
      </h3>
      <div class="new__item_prices" :class="['new__item_prices' + (idx + 1)]">
        <div class="new__item_price">{{ item.price }} ₽</div>
        <div class="new__item_sale" v-if="item?.sale">{{ item.sale }} ₽</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    idx: Number,
  },
  data() {
    return {
      arrNewStyleTexture: null,
    };
  },
};
</script>

<style scoped>
.new__item_image {
  position: relative;
  margin-bottom: 15px;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
}
.new__item_photo {
  position: relative;
  width: 451px;
  height: 560px;
  overflow: hidden;
}
.new__item_name {
  font-weight: 400;
  font-size: 22px;
  color: var(--brown);
  margin-bottom: 20px;
  opacity: 0;
}
.new__item_prices {
  display: flex;
  align-items: center;
  opacity: 0;
}
.new__item_price {
  font-weight: 400;
  font-size: 20px;
  color: var(--brown);
}
.new__item_sale {
  font-weight: 400;
  font-size: 20px;
  color: var(--brown);
  margin-left: 84px;
  text-decoration: line-through;
}
</style>
