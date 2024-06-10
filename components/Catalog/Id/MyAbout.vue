<template>
  <div class="about">
    <div class="about__header">
      <h1 class="about__header_title">
        {{ `( &nbsp;${$route.params.name}&nbsp; )` }}
      </h1>
      <div class="about__header_arcticle">8723913108</div>
    </div>
    <div class="about_price">
      <div class="about__price_text">
        <span class="about__price_summ">4 800 </span
        ><span class="about__price_span">₽</span>
      </div>
      <div class="about__price_text">
        <span class="about__price_summ">4 800 </span
        ><span class="about__price_span">₽</span>
      </div>
    </div>
    <div class="about__dolyami">
      <img :src="'../../Primer/dolyami.png'" />
    </div>
    <CatalogIdAboutMyAboutSize />
    <CatalogIdAboutMyAboutColor />
    <div class="about__buttons">
      <div class="about__buttons_btn">
        <UIButtonMyButton
          @click="addToCart"
          class="about__size_btn"
          aria-label="добавить в корзину"
          :active="true"
          info="добавить в корзину"
          padding="15px 0"
          fontSize="20"
          bigSize="bigSize"
          data-cursor-class="animateCursor"
          variant="average"
        />
      </div>
      <div class="about__buttons_btn">
        <UIButtonMyButton
          class="about__size_btn"
          aria-label="написать в телеграм"
          info="написать в телеграм"
          padding="15px 0"
          fontSize="20"
          data-cursor-class="animateCursor"
        />
      </div>
    </div>
    <CatalogIdAboutMyAboutDescription />
    <CatalogIdAboutMyAboutInfo />
  </div>
</template>

<script>
export default {
  data() {
    return {
      useAlertCart: useAlertCart(),
      primerObj: {
        name: "манжет белый",
        size: "L",
        price: "28 400",
        color: "red",
        counter: 1,
        fullprice: "1151551",
        imageSrc: "../../Primer/catalog1.png",
      },
      arrObj: [],
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
    addToCart() {
      if (this.useAlertCart) return;
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
}
.about__price_text:nth-child(2) {
  margin-left: 136px;
  text-decoration: line-through;
}
.about__dolyami {
  margin-bottom: 50px;
}
.about__buttons {
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  column-gap: 15px;
  margin-bottom: 65px;
}
</style>
