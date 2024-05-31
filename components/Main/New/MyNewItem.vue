<template>
  <div class="new__item">
    <div class="new__item_content">
      <div class="new__item_image" :class="['new__item_image' + (idx + 1)]">
        <div class="new__item_photo" cursor-class="animateCursor">
          <div
            class="new__item_texture"
            v-for="item in arrNewStyleTexture"
            :key="item"
            :style="{
              top: item.topStyle,
              left: item.leftStyle,
            }"
          >
            sale
          </div>
          <img
            width="451"
            height="578"
            class="new__item_img"
            :src="item.imageSrc"
            alt="Новинки"
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
  methods: {
    initArrSale() {
      if (!this.item?.sale) return;
      this.arrNewStyleTexture = [1, 2, 3].map((el, idx) => {
        return {
          topStyle: Math.floor(Math.random() * 100) + "%",
          leftStyle: Math.floor(Math.random() * 100) + "%",
        };
      });
    },
  },
  mounted() {
    this.initArrSale();
  },
};
</script>

<style scoped>
.new__item_image {
  position: relative;
  margin-bottom: 15px;
  height: 100%;
  opacity: 0;
  overflow: hidden;
}
.new__item_photo {
  position: relative;
  width: 451px;
  height: 578px;
  overflow: hidden;
}
.new__item_img {
  position: relative;
  height: 100%;
  transition: all 0.4s ease;
  z-index: 5;
}
.new__item_img:hover {
  transform: scale(1.1);
}
.new__item_texture {
  position: absolute;
  font-weight: 300;
  font-size: 24px;
  color: var(--yellow);
  z-index: 6;
}
/* .new__item_texture {
  position: absolute;
  top: 10%;
  left: 20%;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/Main/textureSale.svg");
  z-index: 6;
} */
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
