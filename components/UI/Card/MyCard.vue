<template>
  <div class="card" :class="['card' + (idx + 1)]">
    <div class="card__content">
      <div class="card__image" :class="['card__image' + (idx + 1)]">
        <div class="card__photo" cursor-class="animateCursor">
          <UICardMyCardImage
            v-if="item.images"
            :images="item.images"
            :idx="idx"
            :sale="!item.sale ? false : item.sale"
            :item="item"
          />
        </div>
      </div>
      <h3 class="card__name" :class="['card__name' + (idx + 1)]">
        {{ item.name }}
      </h3>
      <div class="card__prices" :class="['card__prices' + (idx + 1)]">
        <div class="card__price">{{ item.price }} ₽</div>
        <div class="card__sale" v-if="item?.sale">{{ item.sale }} ₽</div>
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
  mounted() {},
};
</script>

<style scoped>
.card__image {
  position: relative;
  margin-bottom: 15px;
  height: 100%;

  overflow: hidden;
}
.card__photo {
  position: relative;
  width: 490px;
  height: 665px;

  overflow: hidden;
}
.card__name {
  font-weight: 400;
  font-size: 22px;
  color: var(--brown);
  margin-bottom: 20px;
}
.card__prices {
  display: flex;
  align-items: center;
}
.card__price {
  font-weight: 400;
  font-size: 20px;
  color: var(--brown);
}
.card__sale {
  font-weight: 400;
  font-size: 20px;
  color: var(--brown);
  margin-left: 84px;
  text-decoration: line-through;
}
</style>
