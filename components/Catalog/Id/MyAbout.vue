<template>
  <div class="about">
    <div class="about__header">
      <div class="about__header_block">
        ( &nbsp;
        <h1 class="about__header_title">{{ $route.params.name }}</h1>
        &nbsp; )
      </div>
      <div class="about__header_arcticle">
        {{ arrProduct.articul }}
      </div>
    </div>
    <div class="about_price">
      <div class="about__price_text">
        <span class="about__price_summ"
          >{{
            arrProduct[`${!arrProduct.discount ? "price" : "discount"}`]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }} </span
        ><span class="about__price_span"> ₽</span>
      </div>
      <div class="about__price_text" v-if="arrProduct?.discount">
        <span class="about__price_summ"
          >{{
            arrProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }} </span
        ><span class="about__price_span">₽</span>
      </div>
    </div>
    <div class="about__dolyami">
      <!-- <img :src="'../../Primer/dolyami.png'" /> -->
    </div>

    <CatalogIdAboutMyAboutSize
      v-if="arrProductSize"
      :arrProductSize="arrProductSize"
      :getSize="getSize"
      @getIndex="setCart"
    />

    <CatalogIdAboutMyAboutColor :arrProduct="arrProduct" />
    <div class="about__buttons">
      <div class="about__buttons_btn">
        <UIButtonMyButton
          @click="setSize"
          class="about__size_btn"
          aria-label="добавить в корзину"
          info="добавить в корзину"
          padding="15px 15px"
          fontSize="20"
          bigSize="bigSize"
          data-cursor-class="animateCursor"
          variant="average"
        />
      </div>

      <div class="about__buttons_btn">
        <UIButtonMyButton
          @click="redirectTelegram"
          class="about__size_btn"
          aria-label="написать в телеграм"
          info="написать в телеграм"
          padding="15px 15px"
          fontSize="20"
          data-cursor-class="animateCursor"
        />
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
      useFormatNumberToPrice: useFormatNumberToPrice,
      useLengthCart: useLengthCart(),
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
    redirectTelegram() {
      window.open("https://t.me/mystorieszakaz", "_blank");
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
          sizeEl === this.primerObj.size.toLowerCase() &&
          el.id === this.primerObj.id
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
        id: product.id,
        articul: product.articul.toString(),
        name: product.name.toLowerCase(),
        size: size,
        price: product[!product.discount ? "price" : "discount"],
        color: product.color.toLowerCase(),
        counter: 1,
        fullprice: "",
        imageSrc: USE_SERVER + product.images[0],
        width: product.width,
        height: product.height,
        weight: product.weight,
        length: product.lenght,
      };
      this.useAlertCart = this.primerObj;
      this.addToCart();
      this.getSize = false;
    },
    initCartLength() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart || cart?.length <= 0) {
        this.useLengthCart = null;
      } else {
        this.useLengthCart = cart.length;
      }
    },
    addToCart() {
      const arrLocaleStore = JSON.parse(localStorage.getItem("cart"));
      if (!arrLocaleStore || arrLocaleStore?.length <= 0) {
        this.arrObj.push(this.primerObj);
        localStorage.setItem("cart", JSON.stringify(this.arrObj));
        this.useAlertCart = this.primerObj;
        this.initCartLength();
        return;
      }
      const checkIdx = this.checkInCart(arrLocaleStore);
      if (checkIdx === -1) {
        arrLocaleStore.push(this.primerObj);
        localStorage.setItem("cart", JSON.stringify(arrLocaleStore));
        this.useAlertCart = this.primerObj;
        this.initCartLength();
        return;
      }
      const newObj = this.summPrice(arrLocaleStore, checkIdx);
      arrLocaleStore.splice(checkIdx, 1, newObj);
      localStorage.setItem("cart", JSON.stringify(arrLocaleStore));
      this.useAlertCart = this.primerObj;
      this.initCartLength();
    },
  },
  created() {
    const val = this.useProductObject;
    this.arrProduct = val.product[0];

    this.arrProductSize = JSON.parse(val.product[0].dimension);
  },
};
</script>

<style>
@media screen and (max-width: 1100px) {
  .about__size_btn .button__btn {
    font-size: 17px !important;
    padding: 13px 13px !important;
  }
}
</style>
<style scoped>
.about {
  position: relative;
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

@media screen and (max-width: 1820px) {
  .about {
    margin-left: 65px;
  }
}
@media screen and (max-width: 1400px) {
  .about__header_block {
    font-size: 45px;
  }
  .about__header_title {
    font-size: 45px;
  }
}
@media screen and (max-width: 1100px) {
  .about__header_block {
    font-size: 36px;
  }
  .about__header_title {
    font-size: 36px;
  }
  .about__price_text {
    font-size: 18px;
  }
  .about__header_arcticle {
    font-size: 15px;
  }
  .about {
    margin-right: 0px;
  }
}
@media screen and (max-width: 936px) {
  .about {
    margin: 0;
    padding: 0 10%;
    width: 100%;
  }
}
@media screen and (max-width: 686px) {
  .about {
    margin: 0;
    padding: 0 0%;
  }
  .about__buttons {
    margin-bottom: 35px;
  }
}
@media screen and (max-width: 498px) {
  .about__header {
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    row-gap: 20px;
  }
  .about__buttons {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
}
</style>
