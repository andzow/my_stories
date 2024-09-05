<template>
  <div class="registr">
    <div class="registr__content">
      <div class="register__option">
        <label class="register__label" :for="true">
          <input
            type="checkbox"
            v-model="selectedOption"
            class="register__custom"
          />
          <span
            class="register__custom_radio"
            @click="selectedOption = !selectedOption"
          ></span>
          <div class="register__details">
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь c
            <NuxtLink class="register__link" :to="'/politics'"
              >политикой конфиденциальности</NuxtLink
            >
          </div>
        </label>
      </div>
    </div>
    <div class="register__btn">
      <UIButtonMyButton
        :disableButton="checkRadio"
        class="registr__button"
        aria-label="оформить заказ"
        info="оформить заказ"
        fontSize="24"
        data-cursor-class="animateCursor"
        bigSize="bigSize"
        :heightEl="'60px'"
        :loadingBtn="loadingButton"
        numberClass="55"
        @click="getInformationUser"
      />
    </div>
  </div>
</template>

<script>
import MailServices from "~/http/services/MailServices";
import PromoServices from "~/http/services/PromoServices";

export default {
  data() {
    return {
      selectedOption: false,
      option: "option",
      allObjectsOrder: ["region", "delivery", "payment", "buyer", "promocode"],
      allObjectCheck: [],
      useOrderInfo: useOrderInfo(),
      checkVarible: 0,
      deliveryOptions: useDeliveryArr(),
      objSet: useDeliveryObj(),
      useActiveRegion: useActiveRegion(),
      useBuyerAddress: useBuyerAddress(),
      loadingButton: useLoadingButton(),
      errorCheck: false,
      counterCheck: false,
      checkRadio: true,
      useInputMobile: useInputMobile(),
      useactivePvzMail: useActivePvzMail(),
      useLengthCart: useLengthCart(),
      useSummDolyami: useSummDolyami(),
      useDiscountSumm: useDiscountSumm(),
    };
  },
  methods: {
    async createMailDocument(item, arr, splitNumberN) {
      try {
        const { inputVal: fullName } = item.buyer.inputsInfo[0];
        const [firstName, middleName, surName] = fullName.split(" ");
        const getItemsAmount = this.summItems(arr, item);
        const setObj = {
          name: fullName,
          firstName: firstName,
          middleName: middleName,
          surName: surName,
          phone: splitNumberN,
          items: getItemsAmount.items,
          ...item.buyer.codeCity,
          index_to: item.buyer.codeCity.index,
          adress: item.buyer.codeCity["original-address"],
          promocode: item.promocode.promocodeText,
          amount: getItemsAmount.amountAllPrice,
          comments:
            item.buyer.inputsInfo[item.buyer.inputsInfo.length - 1].inputVal,
          mail_type: item.delivery.ship,
          delivery: {
            name: "Почта России",
            quantity: 1,
            price: item.promocode.summDelivery,
          },
        };
        delete setObj.index;
        delete setObj["original-address"];
        delete setObj["region-guid"];
        delete setObj["validation-code"];
        delete setObj["place-guid"];
        delete setObj["address-type"];
        delete setObj["quality-code"];
        delete setObj["street-guid"];
        delete setObj["region"];
        delete setObj["id"];
        setObj.region = this.useActiveRegion.region;

        if (item.payment === "yookassa") {
          const { data } = await MailServices.payment(setObj);
          window.open(data.confirmation.confirmation_url, "_self");
          localStorage.clear();
          this.useLengthCart = null;
        } else if (item.payment === "dolyami") {
          const { data } = await MailServices.paymentDolyami(setObj);
          window.open(data.link, "_self");
          localStorage.clear();
          this.useLengthCart = null;
        }
      } catch {
        alert(
          "Адрес доставки указан неверно, либо регион не соответствует адресу доставки"
        );
        this.loadingButton = false;
      }
    },
    async createCdekDocument(item, arr, splitNumberN) {
      try {
        const codePvzCdek = item?.buyer?.codeCity?.code;
        let { inputVal: fullName } = codePvzCdek
          ? item.buyer.inputsInfo[0]
          : item.buyer[0];

        const regionAddress =
          "г. " +
          this.useActiveRegion.settlement +
          ", " +
          this.useActiveRegion.region +
          ", ";
        const getItemsAmount = this.summItems(arr, item);

        const setObj = {
          name: fullName,
          phone: splitNumberN,
          items: getItemsAmount.items,
          promocode: item.promocode.promocodeText,
          amount: getItemsAmount.amountAllPrice,
          place: codePvzCdek
            ? item.buyer.codeCity.city
            : this.useActiveRegion.settlement,
          adress: codePvzCdek
            ? regionAddress + item.buyer.inputsInfo[2].inputVal
            : regionAddress + item.buyer[2].inputVal,
          shipment_point: "KRV2",
          tariff_code: item.delivery.codeTariff,
          comments: codePvzCdek
            ? item.buyer.inputsInfo[3].inputVal
            : item.buyer[3].inputVal,
          delivery: {
            name: "СДЕК",
            quantity: 1,
            price: item.promocode.summDelivery,
          },
        };
        if (codePvzCdek) {
          setObj.delivery_point = codePvzCdek;
        }
        if (item.payment === "yookassa") {
          const { data } = await MailServices.payment(setObj);
          window.open(data.confirmation.confirmation_url, "_self");
          localStorage.clear();
          this.useLengthCart = null;
        } else if (item.payment === "dolyami") {
          const { data } = await MailServices.paymentDolyami(setObj);
          window.open(data.link, "_self");
          localStorage.clear();
          this.useLengthCart = null;
        }
      } catch {
        alert(
          "Адрес доставки указан неверно, либо регион не соответствует адресу доставки"
        );
        this.loadingButton = false;
      }
    },
    async redirectPayment(item) {
      if (this.counterCheck) {
        return;
      }
      const checkPromocode = await this.checkPromocode(
        item.promocode.promocodeText
      );
      let splitNumberN = this.useInputMobile;
      if (this.useInputMobile.length > 18) {
        splitNumberN = this.useInputMobile.split("");
        splitNumberN.splice(this.useInputMobile.length - 1, 1);
        splitNumberN = splitNumberN.join("");
      }
      splitNumberN = splitNumberN.replace(/\D/g, "");
      const checkLiveNumber = await this.checkAtLiveNumber(splitNumberN);
      if (!checkLiveNumber) {
        alert("Указанный номер телефона не зарегистрирован");
        this.loadingButton = false;
        return;
      }
      if (checkPromocode !== "success") {
        alert(checkPromocode);
      } else {
        const arrProducts = JSON.parse(localStorage.getItem("cart"));
        const newArrProducts = arrProducts.map(el => ({
          ...el,
          quantity: el.counter,
          price:
            typeof el.price === "string"
              ? parseInt(el.price.replace(/\s/g, ""))
              : el.price,
        }));
        if (this.useactivePvzMail) {
          await this.createMailDocument(item, newArrProducts, splitNumberN);
        } else {
          await this.createCdekDocument(item, newArrProducts, splitNumberN);
        }
      }
    },
    async checkAtLiveNumber(num) {
      try {
        const response = await MailServices.checkLivePhone({
          phone: num,
        });
        if (response) {
          return true;
        }
        return false;
      } catch {
        return false;
      }
    },
    async checkPromocode(name) {
      try {
        if (name.length === 0) {
          return "success";
        }
        if (this.useInputMobile.length > 18) {
          let splitNumber = this.useInputMobile.split("");
          splitNumber.splice(this.useInputMobile.length - 1, 1);
          this.useInputMobile = splitNumber.join("");
        }

        const { data } = await PromoServices.setPromo({
          promo: name,
          phone: this.useInputMobile,
        });

        if (data.status === "error") {
          this.loadingButton = false;
          return data.info;
        }
        return "success";
      } catch {
        this.loadingButton = false;
        return "Промокод уже использован";
      }
    },
    summItems(arr, item) {
      if (!this.useDiscountSumm || this.useDiscountSumm === 0) {
        return {
          amountAllPrice: item.promocode.summ,
          items: arr,
        };
      }
      const arrDiscount = arr.map(el => {
        const discount = el.price * (this.useDiscountSumm / 100);
        const newPrice = el.price - discount;
        const roundedPrice = parseFloat(newPrice.toFixed(2));
        return {
          ...el,
          price: roundedPrice,
        };
      });
      const summPrice = arrDiscount.reduce((acc, item) => {
        const price = item.counter * item.price;
        acc += price;
        return acc;
      }, 0);
      return {
        amountAllPrice: summPrice + item.promocode.summDelivery,
        items: arrDiscount,
      };
    },
    getInformationUser() {
      if (!this.deliveryOptions || !this.selectedOption) return;
      this.useOrderInfo = {};
      this.loadingButton = true;
    },
  },
  unmounted() {
    this.useInputMobile = "";
  },
  mounted() {
    // const elButton = document.querySelector(".button__btn_disable");
    // elButton.disabled = true;
  },
  watch: {
    useOrderInfo: {
      handler(val) {
        if (val && this.deliveryOptions) {
          for (let key in val) {
            this.counterCheck = false;
            if (val[key] === false) {
              this.errorCheck = true;
            }
            const checkVar = this.allObjectsOrder.includes(key);
            const checkVarArr = this.allObjectCheck.includes(key);

            if (checkVar && !checkVarArr) {
              this.checkVarible += 1;
              this.allObjectCheck.push(key);
            }
            if (this.checkVarible === this.allObjectsOrder.length) {
              if (this.errorCheck) {
                this.errorCheck = false;
                this.loadingButton = false;
                this.checkVarible = 0;
                this.allObjectCheck = [];
                return;
              }
              this.redirectPayment(this.useOrderInfo);
              this.checkVarible = 0;
              this.allObjectCheck = [];
            }
          }
        }
      },
      deep: true,
    },
    selectedOption(val) {
      if (val) {
        this.checkRadio = false;
      } else {
        this.checkRadio = true;
      }
    },
  },
};
</script>

<style scoped>
.register__option {
  margin-bottom: 25px;
  display: flex;
  align-items: flex-start;
}

.register__custom {
  display: none;
}
.register__label {
  display: flex;
  align-items: flex-start;
}
.register__custom + .register__custom_radio {
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  border: 1.2px solid #af9280;
  background-color: #fff;
  display: inline-block;
  position: relative;
  margin-right: 10px;
  transition: border-color 0.4s ease;
  cursor: pointer;
}

.register__custom + .register__custom_radio::before {
  content: "";
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: #af9280;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease, height 0.4s ease, background-color 0.4s ease;
}

.register__custom:checked + .register__custom_radio::before {
  width: 12px;
  height: 12px;
}

.register__custom:checked + .register__custom_radio {
  border-color: #af9280;
}
.registr__content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.register__details {
  font-weight: 300;
  font-size: 18px;
  color: var(--brown);
  text-transform: lowercase;
  line-height: 18px;
}
.register__link {
  text-decoration: underline;
}
@media screen and (max-width: 1400px) {
  .register__details {
    font-size: 16px;
  }
}
@media screen and (max-width: 1276px) {
  .registr__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>
