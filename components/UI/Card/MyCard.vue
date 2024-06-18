<template>
  <div class="card" :class="['card' + (idx + 1)]">
    <div class="card__content">
      <div class="card__image" :class="['card__image' + (idx + 1)]">
        <div
          class="card__photo"
          data-cursor-class="animateCursor"
          :style="{
            height: heightImage ? heightImage : '',
          }"
        >
          <div class="card__loading_block" v-if="!loadImages">
            <UIMyLoadItem />
          </div>
          <div
            class="card__im"
            @click="$router.push(`/catalog/${item.name}/${item.id}`)"
            v-if="initSwiper"
          >
            <UICardMyCardImage
              :images="item.images"
              :idx="idx"
              :sale="!item.sale ? false : item.sale"
              :item="item"
              @loadPhoto="loadImages = true"
            />
          </div>
        </div>
      </div>
      <h3
        class="card__name"
        :class="['card__name' + (idx + 1)]"
        v-show="!item.loading"
      >
        {{ item.name + ` &nbsp;&nbsp;( &nbsp;${item.color}&nbsp; )` }}
      </h3>
      <div class="card__load" v-if="item.loading">
        <UIMyLoadingItem :item="{ loading: true }" :index="0" height="30px" />
      </div>
      <div class="card__prices" :class="['card__prices' + (idx + 1)]">
        <div class="card__price" v-show="!item.loading">
          {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
          ₽
        </div>
        <div class="card__loadd" v-if="item.loading">
          <UIMyLoadingItem :item="{ loading: true }" :index="0" height="25px" />
        </div>
        <div class="card__sale" v-if="item?.discount">
          {{ item.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} ₽
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    idx: Number,
    heightImage: String,
  },
  data() {
    return {
      arrNewStyleTexture: null,
      useCursor: useCursor(),
      initSwiper: false,
      loadImages: false,
    };
  },
  methods: {
    async initApp() {
      await nextTick(() => {
        this.useCursor = true;
        this.$emit("activeLine");
      });
    },
  },
  mounted() {
    this.initSwiper = true;
    setTimeout(() => {
      this.initApp();
    }, 0);
  },
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
  /* overflow: hidden; */
}
.card__loading_block {
  width: 100%;
  height: 665px;
  margin-bottom: 15px;
}
.card__name {
  font-weight: 400;
  font-size: 22px;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 20px;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.card__prices {
  display: flex;
  align-items: center;
  animation-name: animationOpacity;
  animation-duration: 1s;
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
.card__load {
  width: 100%;
  margin-bottom: 20px;
  width: 60%;
}
.card__loadd {
  width: 30%;
}
@keyframes animationOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
