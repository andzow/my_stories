<template>
  <div class="new__item" :class="['new__item' + (idx + 1)]">
    <div class="new__item_content">
      <div
        class="new__item_image"
        :class="['new__item_image' + (idx + 1)]"
        data-cursor-class="animateCursor"
        @click="
          $router.push(item.name ? `/catalog/${item?.name}/${item?.id}` : '/')
        "
      >
        <div class="new__item_loading" v-show="!checkLoad">
          <UIMyLoadItem />
        </div>
        <div class="new__item_photo">
          <MainNewMyNewImage
            :images="item.images"
            :idx="idx"
            :sale="!item.sale ? false : item.sale"
            :item="item"
            @load="checkLoad = true"
          />
        </div>
      </div>
      <h3 class="new__item_name" :class="['new__item_name' + (idx + 1)]">
        {{ item.name }}
      </h3>
      <div class="new__item_prices" :class="['new__item_prices' + (idx + 1)]">
        <div class="new__item_price">
          {{
            item[`${!item.discount ? "price" : "discount"}`]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          ₽
        </div>
        <div class="new__item_sale" v-if="item?.discount">
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
  },
  data() {
    return {
      arrNewStyleTexture: null,
      checkLoad: false,
    };
  },
  mounted() {},
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
.new__item_loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 580px;
  z-index: 15;
}
.new__item_discount {
  position: absolute;
  top: 10%;
  left: 20%;
  background: url("@/assets/images/Main/textureSale.svg");
  width: 100%;
  height: 580px;
  z-index: 3;
}
.new__item_photo {
  position: relative;
  width: 451px;
  height: 580px;
  overflow: hidden;
}
.new__item_name {
  font-weight: 400;
  font-size: 22px;
  color: var(--brown);
  margin-bottom: 20px;
  text-transform: lowercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
@media screen and (max-width: 1630px) {
  .new__item_loading {
    height: 450px;
  }
  .new__item_discount {
    height: 450px;
  }
  .new__item_photo {
    height: 450px;
  }
}
@media screen and (max-width: 1400px) {
  .new__item_name {
    font-size: 20px;
  }
}
@media screen and (max-width: 1255px) {
  .new__item_loading {
    height: 400px;
  }
  .new__item_discount {
    height: 400px;
  }
  .new__item_photo {
    height: 400px;
  }
}
@media screen and (max-width: 1255px) {
  .new__item_loading {
    height: 400px;
  }
  .new__item_discount {
    height: 400px;
  }
  .new__item_photo {
    height: 400px;
  }
}
@media screen and (max-width: 1154px) {
  .new__item_loading {
    height: 450px;
  }
  .new__item_discount {
    height: 450px;
  }
  .new__item_photo {
    height: 450px;
  }
}
@media screen and (max-width: 1000px) {
  .new__item_loading {
    height: 400px;
  }
  .new__item_discount {
    height: 400px;
  }
  .new__item_photo {
    height: 400px;
  }
}
@media screen and (max-width: 876px) {
  .new__item_loading {
    height: 480px;
  }
  .new__item_discount {
    height: 480px;
  }
  .new__item_photo {
    height: 480px;
  }
}
@media screen and (max-width: 761px) {
  .new__item_loading {
    height: 400px;
  }
  .new__item_discount {
    height: 400px;
  }
  .new__item_photo {
    height: 400px;
  }
}
@media screen and (max-width: 670px) {
  .new__item_loading {
    height: 400px;
  }
  .new__item_discount {
    height: 400px;
  }
  .new__item_photo {
    height: 400px;
  }
}
@media screen and (max-width: 576px) {
  .new__item_loading {
    height: 430px;
  }
  .new__item_discount {
    height: 430px;
  }
  .new__item_photo {
    height: 430px;
  }
}
@media screen and (max-width: 480px) {
  .new__item_loading {
    height: 400px;
  }
  .new__item_discount {
    height: 400px;
  }
  .new__item_photo {
    height: 400px;
  }
}
@media screen and (max-width: 470px) {
  .new__item_loading {
    height: 440px;
  }
  .new__item_discount {
    height: 440px;
  }
  .new__item_photo {
    height: 440px;
  }
}
@media screen and (max-width: 410px) {
  .new__item_loading {
    height: 420px;
  }
  .new__item_discount {
    height: 420px;
  }
  .new__item_photo {
    height: 420px;
  }
}
@media screen and (max-width: 360px) {
  .new__item_loading {
    height: 390px;
  }
  .new__item_discount {
    height: 390px;
  }
  .new__item_photo {
    height: 390px;
  }
}
/* @media screen and (max-width: 600px) {
  .new__item_loading {
    height: 380px;
  }
  .new__item_discount {
    height: 380px;
  }
  .new__item_photo {
    height: 380px;
  }
} */
</style>
