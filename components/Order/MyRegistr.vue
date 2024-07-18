<template>
  <div class="registr">
    <div class="registr__content">
      <div class="register__option">
        <label class="register__label">
          <input
            type="checkbox"
            v-model="selectedOption"
            class="register__custom"
          />
          <span class="register__custom_radio"></span>
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
import PromoServices from "~/http/services/PromoServices";
import MailServices from "~/http/services/MailServices";

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
    };
  },
  methods: {
    async createMailDocument(item, arr) {
      try {
        const { inputVal: fullName } = item.buyer.inputsInfo[0];
        const [firstName, middleName, surName] = fullName.split(" ");
        if (this.useInputMobile.length > 18) {
          let splitNumber = this.useInputMobile.split("");
          splitNumber.splice(this.useInputMobile.length - 1, 1);
          this.useInputMobile = splitNumber.join("");
        }
        const cleanedPhoneNumber = this.useInputMobile.replace(/\D/g, "");
        const setObj = {
          name: fullName,
          firstName: firstName,
          middleName: middleName,
          surName: surName,
          phone: cleanedPhoneNumber,
          items: arr,
          ...item.buyer.codeCity,
          index_to: item.buyer.codeCity.index,
          address: item.buyer.codeCity["original-address"],
          promocode: item.promocode.promocodeText,
          amount: item.promocode.summ,
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
        const { data } = await MailServices.payment(setObj);
        window.open(data.confirmation.confirmation_url, "_self");
        localStorage.clear();
        this.useLengthCart = null;
        // this.checkVarible = 0;
        // this.counterCheck = true;
        // this.loadingButton = false;
      } catch {}
    },
    async createCdekDocument(item, arr) {
      try {
        const codePvzCdek = item?.buyer?.codeCity?.code;
        let { inputVal: fullName } = codePvzCdek
          ? item.buyer.inputsInfo[0]
          : item.buyer[0];
        if (this.useInputMobile.length > 18) {
          let splitNumber = this.useInputMobile.split("");
          splitNumber.splice(this.useInputMobile.length - 1, 1);
          this.useInputMobile = splitNumber.join("");
        }
        const cleanedPhoneNumber = this.useInputMobile.replace(/\D/g, "");
        const regionAddress =
          "г. " +
          this.useActiveRegion.settlement +
          ", " +
          this.useActiveRegion.region +
          ", ";
        const setObj = {
          name: fullName,
          phone: cleanedPhoneNumber,
          items: arr,
          promocode: item.promocode.promocodeText,
          amount: item.promocode.summ,
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
        const { data } = await MailServices.payment(setObj);
        window.open(data.confirmation.confirmation_url, "_self");
        localStorage.clear();
        this.useLengthCart = null;
        // this.checkVarible = 0;
        // this.counterCheck = true;
        // this.loadingButton = false;
      } catch {}
    },
    async redirectPayment(item) {
      if (this.counterCheck) {
        return;
      }
      const checkPromocode = await this.checkPromocode(
        item.promocode.promocodeText
      );
      if (checkPromocode !== "success") {
        alert(checkPromocode);
      } else {
        const arrProducts = JSON.parse(localStorage.getItem("cart"));
        const newArrProducts = arrProducts.map((el) => ({
          ...el,
          quantity: el.counter,
          price:
            typeof el.price === "string"
              ? parseInt("13 000".replace(/\s/g, ""))
              : el.price,
        }));
        if (this.useactivePvzMail) {
          await this.createMailDocument(item, newArrProducts);
        } else {
          await this.createCdekDocument(item, newArrProducts);
        }
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
          return data.info;
        }
        return "success";
      } catch {
        return "Промокод уже использован";
      }
    },
    getInformationUser() {
      if (!this.deliveryOptions || !this.selectedOption) return;
      this.useOrderInfo = {};
      this.loadingButton = true;
    },
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
  width: 20px;
  height: 20px;
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
