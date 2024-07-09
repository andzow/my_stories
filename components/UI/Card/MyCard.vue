<template>
  <div class="card" :class="['card' + (idx + 1)]">
    <div
      class="card__image_loading"
      v-if="!loadImages"
      :style="{
        height: heightImage ? heightImage : '',
      }"
    >
      <UIMyLoadItem />
    </div>
    <div class="card__content">
      <div
        class="card__image"
        :class="['card__image' + (idx + 1)]"
        @click="$router.push(`/catalog/${item.name}/${item.id}`)"
      >
        <div
          class="card__photo"
          data-cursor-class="animateCursor"
          :style="{
            height: heightImage ? heightImage : '',
          }"
        >
          <div class="card__im">
            <NuxtErrorBoundary>
              <UICardMyCardImage
                :images="item.images"
                :idx="idx"
                :sale="!item.sale ? false : item.sale"
                :item="item"
                @loadPhoto="loadImages = true"
            /></NuxtErrorBoundary>
          </div>
        </div>
      </div>
      <h3
        class="card__name"
        :class="(['card__name' + (idx + 1)], { activeText: loadImages })"
      >
        {{ item.name + ` &nbsp;&nbsp;( &nbsp;${item.color}&nbsp; )` }}
      </h3>
      <div class="card__load" v-if="!loadImages">
        <UIMyLoadingItem :item="{ loading: true }" :index="0" height="30px" />
        <div class="card_l">
          <UIMyLoadingItem :item="{ loading: true }" :index="0" height="25px" />
        </div>
      </div>
      <div class="card__prices" :class="['card__prices' + (idx + 1)]">
        <div class="card__price" v-if="loadImages">
          {{
            item[`${!item.discount ? "price" : "discount"}`]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          ₽
        </div>

        <div class="card__sale" v-if="item?.discount && loadImages">
          {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} ₽
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
    initWidth() {
      const elementsCard = document.querySelectorAll(".card");
      elementsCard.forEach((el, idx) => {
        const elHtmlBlock = document.querySelector(".card" + (idx + 1));
        const setStyleP = document.querySelector(
          ".card" + (idx + 1) + " .card__name"
        );
        if (elHtmlBlock.getBoundingClientRect()) {
          setStyleP.style.width =
            elHtmlBlock.getBoundingClientRect().width + "px";
        }
      });
    },
  },
  mounted() {
    this.initSwiper = true;
    this.initWidth();
    setTimeout(() => {
      this.initApp();
    }, 0);
  },
};
</script>

<style scoped>
.card {
  position: relative;
}
.card__image_loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 665px;
}

.card__image {
  position: relative;
  margin-bottom: 15px;
  height: 100%;
  overflow: hidden;
}
.card__photo {
  position: relative;
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
  text-transform: lowercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  width: 100%;
  display: none;
  transition: all 1s ease;
}
.activeText {
  display: block;
}
.card__prices {
  display: flex;
  align-items: center;
}
.card__price {
  font-weight: 400;
  font-size: 20px;
  color: var(--brown);
  /* animation-name: animationOpacity;
  animation-duration: 1s; */
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
.card_l {
  max-width: 40%;
}
@keyframes animationOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media screen and (max-width: 1820px) {
  .card__image_loading {
    height: 625px;
  }
  .card__photo {
    height: 625px;
  }
  .card__loading_block {
    height: 625px;
  }
}
@media screen and (max-width: 1730px) {
  .card__image_loading {
    height: 585px;
  }
  .card__photo {
    height: 585px;
  }
  .card__loading_block {
    height: 585px;
  }
}
@media screen and (max-width: 1630px) {
  .card__image_loading {
    height: 535px;
  }
  .card__photo {
    height: 535px;
  }
  .card__loading_block {
    height: 535px;
  }
}
@media screen and (max-width: 1540px) {
  .card__image_loading {
    height: 465px;
  }
  .card__photo {
    height: 465px;
  }
  .card__loading_block {
    height: 465px;
  }
}
@media screen and (max-width: 1400px) {
  .card__name {
    font-size: 20px;
  }
  .card__price {
    font-size: 18px;
  }
  .card__sale {
    font-size: 18px;
  }
}
@media screen and (max-width: 1240px) {
  .card__image_loading {
    height: 370px;
  }
  .card__photo {
    height: 370px;
  }
  .card__loading_block {
    height: 370px;
  }
}
@media screen and (max-width: 1100px) {
  .card__name {
    font-size: 18px;
  }
  .card__price {
    font-size: 16px;
  }
  .card__sale {
    font-size: 16px;
  }
}
@media screen and (max-width: 1100px) {
  .card__name {
    font-size: 18px;
  }
  .card__price {
    font-size: 16px;
  }
  .card__sale {
    font-size: 16px;
  }
}
@media screen and (max-width: 1020px) {
  .card__name {
    font-size: 17px;
  }
  .card__price {
    font-size: 15px;
  }
  .card__sale {
    font-size: 15px;
  }
  .card__image_loading {
    height: 300px;
  }
  .card__photo {
    height: 300px;
  }
  .card__loading_block {
    height: 300px;
  }
}
@media screen and (max-width: 952px) {
  .card__image_loading {
    height: 430px;
  }
  .card__photo {
    height: 430px;
  }
  .card__loading_block {
    height: 430px;
  }
}
@media screen and (max-width: 900px) {
  .card__image_loading {
    height: 380px;
  }
  .card__photo {
    height: 380px;
  }
  .card__loading_block {
    height: 380px;
  }
}
@media screen and (max-width: 836px) {
  .card__image_loading {
    height: 495px;
  }
  .card__photo {
    height: 495px;
  }
  .card__loading_block {
    height: 495px;
  }
}
@media screen and (max-width: 730px) {
  .card__image_loading {
    height: 445px;
  }
  .card__photo {
    height: 445px;
  }
  .card__loading_block {
    height: 445px;
  }
}
@media screen and (max-width: 688px) {
  .card__image_loading {
    height: 400px;
  }
  .card__photo {
    height: 400px;
  }
  .card__loading_block {
    height: 400px;
  }
}
@media screen and (max-width: 588px) {
  .card__image_loading {
    height: 320px;
  }
  .card__photo {
    height: 320px;
  }
  .card__loading_block {
    height: 320px;
  }
}
@media screen and (max-width: 466px) {
  .card__name {
    font-size: 20px;
  }
  .card__price {
    font-size: 18px;
  }
  .card__sale {
    font-size: 18px;
  }
  .card__image_loading {
    height: 475px;
  }
  .card__photo {
    height: 475px;
  }
  .card__loading_block {
    height: 475px;
  }
}
@media screen and (max-width: 400px) {
  .card__image_loading {
    height: 390px;
  }
  .card__photo {
    height: 390px;
  }
  .card__loading_block {
    height: 390px;
  }
}
</style>
