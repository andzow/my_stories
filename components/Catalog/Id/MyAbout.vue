<template>
  <div class="about">
    <div class="about__header">
      <div class="about__header_block" v-show="arrProduct">
        ( &nbsp;
        <h1 class="about__header_title">{{ $route.params.name }}</h1>
        &nbsp; )
      </div>
      <div class="about__heade_loading" v-if="!arrProduct">
        <UIMyLoadingItem :item="{ loading: true }" height="60px" margin="0px" />
      </div>
      <div class="about__header_arcticle" v-if="arrProduct">
        {{ arrProduct.articul }}
      </div>
      <div class="about__header_load" v-else>
        <UIMyLoadingItem :item="{ loading: true }" height="30px" margin="0px" />
      </div>
    </div>
    <div class="about_price">
      <div class="about__price_text" v-if="arrProduct">
        <span class="about__price_summ"
          >{{
            arrProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }} </span
        ><span class="about__price_span"> ₽</span>
      </div>
      <div class="about__price_load" v-else>
        <UIMyLoadingItem :item="{ loading: true }" height="30px" margin="0px" />
      </div>
      <div class="about__price_text" v-if="arrProduct && arrProduct?.discount">
        <span class="about__price_summ"
          >{{
            arrProduct.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }} </span
        ><span class="about__price_span">₽</span>
      </div>
      <div class="about__price_loading" v-if="!arrProduct">
        <UIMyLoadingItem :item="{ loading: true }" height="30px" margin="0px" />
      </div>
    </div>
    <div class="about__dolyami" v-if="arrProduct">
      <img :src="'../../Primer/dolyami.png'" />
    </div>
    <div class="about__dolyami_loading" v-else>
      <UIMyLoadingItem :item="{ loading: true }" height="50px" margin="0px" />
    </div>
    <CatalogIdAboutMyAboutSize
      v-if="arrProductSize"
      :arrProductSize="arrProductSize"
      :getSize="getSize"
      @getIndex="setCart"
    />
    <div class="about__load_title" v-if="!arrProduct">
      <UIMyLoadingItem :item="{ loading: true }" height="20px" margin="0px" />
    </div>
    <div class="about__load_size" v-if="!arrProduct">
      <UIMyLoadingItem
        :item="{ loading: true }"
        height="50px"
        margin="0px"
        v-for="item in 3"
        :key="item"
      />
    </div>
    <CatalogIdAboutMyAboutColor :arrProduct="arrProduct" />
    <div class="about__buttons">
      <div class="about__buttons_btn" v-if="arrProduct">
        <UIButtonMyButton
          @click="setSize"
          class="about__size_btn"
          aria-label="добавить в корзину"
          info="добавить в корзину"
          padding="15px 0"
          fontSize="20"
          bigSize="bigSize"
          data-cursor-class="animateCursor"
          variant="average"
        />
      </div>
      <div class="about__buttons_load" v-else>
        <UIMyLoadingItem :item="{ loading: true }" height="60px" margin="0px" />
      </div>
      <div class="about__buttons_btn" v-if="arrProduct">
        <UIButtonMyButton
          class="about__size_btn"
          aria-label="написать в телеграм"
          info="написать в телеграм"
          padding="15px 0"
          fontSize="20"
          data-cursor-class="animateCursor"
        />
      </div>
      <div class="about__buttons_load" v-else>
        <UIMyLoadingItem :item="{ loading: true }" height="60px" margin="0px" />
      </div>
    </div>
    <CatalogIdAboutMyAboutDescription :arrProduct="arrProduct" />
    <CatalogIdAboutMyAboutInfo :arrProduct="arrProduct" />
  </div>
</template>

<script>
import { USE_SERVER } from "~/url";

export default {
  props: {
    useProductObject: {},
  },
  data() {
    return {
      useAlertCart: useAlertCart(),
      primerObj: null,
      getSize: false,
      arrObj: [],
      arrProduct: null,
      arrProductSize: null,
    };
  },
  methods: {
    summPrice(localeArr, idx) {
      const localeObj = localeArr[idx];
      const newCounter = localeObj.counter + 1;
      const priceConvert = this.priceConvert(localeObj) * newCounter;
      return {
        ...localeObj,
        fullPrice: priceConvert,
        counter: newCounter,
      };
    },
    priceConvert(el) {
      return parseInt(el.price.toString().replace(/\s/g, ""), 10);
    },
    checkInCart(arrLocal) {
      return arrLocal.findIndex((el) => {
        const name = el.name.toLowerCase();
        let priceConvertEl = this.priceConvert(el);
        let priceConvertObj = this.priceConvert(this.primerObj);

        let colorEl = el.color.toLowerCase();
        let sizeEl = el.size.toLowerCase();
        if (
          name === this.primerObj.name.toLowerCase() &&
          priceConvertEl === priceConvertObj &&
          colorEl === this.primerObj.color.toLowerCase() &&
          sizeEl === this.primerObj.size.toLowerCase()
        ) {
          return true;
        }
      });
    },
    setSize() {
      this.getSize = true;
    },
    setCart(idx) {
      if (this.useAlertCart) {
        this.getSize = false;
        return;
      }
      const product = this.arrProduct;
      const size = JSON.parse(product.dimension)[idx]?.name;
      this.primerObj = {
        name: product.name.toLowerCase(),
        size: size,
        price: product.price,
        color: product.color.toLowerCase(),
        counter: 1,
        fullprice: "",
        imageSrc: USE_SERVER + product.images[0],
      };
      this.useAlertCart = this.primerObj;
      this.addToCart();
      this.getSize = false;
    },
    addToCart() {
      const arrLocaleStore = JSON.parse(localStorage.getItem("cart"));
      if (!arrLocaleStore || arrLocaleStore?.length <= 0) {
        this.arrObj.push(this.primerObj);
        localStorage.setItem("cart", JSON.stringify(this.arrObj));
        this.useAlertCart = this.primerObj;
        return;
      }
      const checkIdx = this.checkInCart(arrLocaleStore);
      if (checkIdx === -1) {
        arrLocaleStore.push(this.primerObj);
        localStorage.setItem("cart", JSON.stringify(arrLocaleStore));
        this.useAlertCart = this.primerObj;
        return;
      }
      const newObj = this.summPrice(arrLocaleStore, checkIdx);
      arrLocaleStore.splice(checkIdx, 1, newObj);
      localStorage.setItem("cart", JSON.stringify(arrLocaleStore));
      this.useAlertCart = this.primerObj;
    },
  },
  unmounted() {},
  watch: {
    useProductObject(val) {
      if (val) {
        this.arrProduct = val.product[0];
        this.arrProductSize = JSON.parse(val.product[0].dimension);
      }
    },
  },
};
</script>

<style scoped>
.about {
  margin-left: 135px;
  margin-right: 69px;
}
.about__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
}
.about__header_block {
  display: flex;
  font-weight: 400;
  font-size: 50px;
  color: var(--brown);
  align-items: center;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.about__header_title {
  font-weight: 400;
  font-size: 50px;
  color: var(--brown);
  text-transform: lowercase;
}
.about__header_arcticle {
  font-weight: 300;
  font-size: 16px;
  color: var(--brown);
  text-transform: lowercase;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.about__heade_loading {
  width: 30%;
}
.about__header_load {
  width: 10%;
}
.about__price_load {
  width: 25%;
}
.about__price_loading {
  margin-left: 90px;
  width: 15%;
}
.about__dolyami_loading {
  width: 40%;
  margin-bottom: 50px;
}
.about__load_title {
  width: 15%;
  margin-bottom: 10px;
}
.about__load_size {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  width: 50%;
}
.about_price {
  display: flex;
  align-items: center;
  margin-bottom: 35px;
}
.about__price_text {
  font-weight: 500;
  font-size: 20px;
  color: var(--brown);
  text-transform: lowercase;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.about__price_text:nth-child(2) {
  margin-left: 136px;
  text-decoration: line-through;
}
.about__dolyami {
  margin-bottom: 50px;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.about__buttons {
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  column-gap: 15px;
  margin-bottom: 65px;
}
.about__buttons_btn {
  animation-name: animationOpacity;
  animation-duration: 1s;
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
