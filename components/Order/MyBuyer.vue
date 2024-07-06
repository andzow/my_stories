<template>
  <div class="buyer">
    <OrderUIMyTitle>покупатель</OrderUIMyTitle>
    <div class="buyer__content">
      <div
        class="buyer__item"
        v-for="(item, idx) in !useactivePvzMail ? arrBuyerInput : inputsPochta"
        :key="item"
      >
        <div
          class="buyer__span"
          :class="{
            activeSpan: arrErrors.includes(item.name) || item.textError !== '',
          }"
        >
          {{ item.textError === "" ? item.name : item.textError }}
        </div>
        <OrderUIMyInput
          v-if="!item.mask"
          v-model="item.inputVal"
          :item="item"
          data-cursor-class="animateCursor"
          :active="
            arrErrors.includes(item.name) || item.textError !== ''
              ? true
              : false
          "
          :textArea="item.textArea"
        />
        <input
          v-else
          class="order__input"
          type="text"
          data-cursor-class="animateCursor"
          :value="item.inputVal"
          @input="setValueMask(item, idx, $event)"
          @complete="onComplete"
          :class="{
            activeInp: arrErrors.includes(item.name) || item.textError !== '',
          }"
          :placeholder="item?.placeholder ? item?.placeholder : ''"
          v-imask="maskInp"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { IMaskDirective } from "vue-imask";
import debounce from "lodash.debounce";
import CdekController from "~/http/controllers/CdekController";
import MailServices from "~/http/services/MailServices";

export default {
  data() {
    return {
      maskInp: {
        mask: "+{7} (000)-000-00-00",
      },
      arrBuyerInput: [
        {
          name: "фио*",
          regExp:
            /^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/,
          regExpWord: "Фио должен быть корректным",
          mask: false,
          lengthWord: 320,
          textArea: false,
          inputVal: "",
          textError: "",
          placeholder: "Иванов Иван Иванович",
        },
        {
          name: "телефон Telegram / WhatsApp*",
          regExpWord: "Номер телефона должен быть корректным",
          regExp: false,
          mask: true,
          textArea: false,
          inputVal: useInputMobile(),
          textError: "",
          placeholder: "+7 (999)-999-99-99",
        },
        {
          name: "Адрес доставки*",
          regExp: /^[A-Za-zА-Яа-яЁё0-9\s,./№-]+$/,
          regExpWord: "Адрес доставки должен быть корректным",
          lengthWord: 200,
          mask: false,
          textArea: true,
          inputVal: useBuyerAddress(),
          textError: "",
          placeholder: "ул. Азовская, дом. 35 корп. 3 подъезд 8",
        },
        {
          name: "комментарий к заказу",
          regExp: /^[a-zA-Zа-яА-Я0-9\s.,/()-]*$/,
          regExpWord: "Комментарий должен быть корректным",
          mask: false,
          lengthWord: 300,
          textArea: true,
          inputVal: "",
          optional: true,
          textError: "",
        },
      ],
      inputsPochta: [
        {
          name: "фио*",
          regExp:
            /^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/,
          regExpWord: "Фио должен быть корректным",
          mask: false,
          lengthWord: 320,
          textArea: false,
          inputVal: "",
          textError: "",
          placeholder: "Иванов Иван Иванович",
        },
        {
          name: "телефон Telegram / WhatsApp*",
          regExpWord: "Номер телефона должен быть корректным",
          regExp: false,
          mask: true,
          textArea: false,
          inputVal: useInputMobile(),
          textError: "",
          placeholder: "+7 (999)-999-99-99",
        },
        {
          name: "Улица*",
          regExp: /^[A-Za-zА-Яа-яЁё0-9\s,./№-]+$/,
          regExpWord: "Улица должен быть корректным",
          lengthWord: 200,
          mask: false,
          textArea: false,
          inputVal: useInputStreet(),
          textError: "",
          placeholder: "Ул. Московская, стр.1,",
        },
        {
          name: "Дом*",
          regExp: /^[A-Za-zА-Яа-яЁё0-9\s,./№-]+$/,
          regExpWord: "Дом должен быть корректным",
          lengthWord: 200,
          mask: false,
          textArea: false,
          inputVal: useInputHouse(),
          textError: "",
          placeholder: "д. 158",
        },
        {
          name: "Квартира/офис",
          regExp: /^[A-Za-zА-Яа-яЁё0-9\s,./№-]+$/,
          regExpWord: "Дом должен быть корректным",
          lengthWord: 200,
          mask: false,
          textArea: false,
          inputVal: useInputApartment(),
          textError: "",
          offMask: true,
          placeholder: "кв. 24",
        },
        {
          name: "Корпус",
          regExp: /^[A-Za-zА-Яа-яЁё0-9\s,./№-]+$/,
          regExpWord: "Корпус должен быть корректным",
          lengthWord: 200,
          mask: false,
          textArea: false,
          inputVal: useInputCorpus(),
          textError: "",
          offMask: true,
          placeholder: "корп. 3",
        },
        {
          name: "комментарий к заказу",
          regExp: /^[a-zA-Zа-яА-Я0-9\s.,/()-]*$/,
          regExpWord: "Комментарий должен быть корректным",
          mask: false,
          lengthWord: 300,
          textArea: true,
          inputVal: "",
          optional: true,
          textError: "",
        },
      ],
      objSet: useDeliveryObj(),
      useOrderInfo: useOrderInfo(),
      arrErrors: useCheckErrors(),
      completeNumberPhone: false,
      useActiveAddress: useActiveAddress(),
      useFilterDeliveryPackages: useFilterDeliveryPackages,
      deliveryOptions: useDeliveryArr(),
      selectedOption: useIndexDelivery(),
      useSelectedSamovivos: useSelectedSamovivos(),
      useBuyerAddress: useBuyerAddress(),
      usePvzCode: usePvzCode(),
      useactivePvzMail: useActivePvzMail(),
      useInputStreet: useInputStreet(),
      useInputHouse: useInputHouse(),
      useInputApartment: useInputApartment(),
      useInputCorpus: useInputCorpus(),
      useActiveRegion: useActiveRegion(),
      useCursor: useCursor(),
      debouncedMethod: debounce(async (val) => {
        try {
          const checkError = this.checkErrors();
          if (!checkError || this.deliveryOptions?.loadText) {
            this.useOrderInfo.buyer = false;
            return;
          }
          const street = this.useInputStreet;
          const house = this.useInputHouse;
          const apartment = this.useInputApartment;
          const corpus = this.useInputCorpus;
          if (val && this.useactivePvzMail && !this.deliveryOptions?.loadText) {
            const region = this.useActiveRegion;
            const fullAddress = `${street}, ${house}${
              corpus ? `, ${corpus}` : ""
            }${apartment ? `, ${apartment}` : ""}`;
            const addressPvzMail = await this.setNormalizeAddress(fullAddress);
            const qualityCode = addressPvzMail["validation-code"];
            if (
              qualityCode !== "VALIDATED" &&
              qualityCode !== "OVERRIDDEN" &&
              qualityCode !== "CONFIRMED_MANUALLY" &&
              addressPvzMail?.length !== 0
            ) {
              this.checkNormalizeError();
              this.useOrderInfo.buyer = false;
              return;
            }
            this.inputsPochta[2].textError = "";
            this.inputsPochta[3].textError = "";
            const address = JSON.parse(JSON.stringify(this.inputsPochta));
            this.useOrderInfo.buyer = {
              inputsInfo: address,
              codeCity: addressPvzMail,
            };
            return;
          }
          if (
            val &&
            this.useSelectedSamovivos &&
            !this.deliveryOptions?.loadText &&
            !this.useactivePvzMail
          ) {
            if (checkError) {
              const item = this.arrBuyerInput[2].inputVal;
              const response = await this.getPvz(item);

              if (response) {
                const address = JSON.parse(JSON.stringify(this.arrBuyerInput));
                if (this.usePvzCode) {
                  this.useOrderInfo.buyer = {
                    inputsInfo: address,
                    codeCity: this.usePvzCode,
                  };
                } else {
                  delete this.useOrderInfo?.buyer;
                  this.useOrderInfo.buyer = {
                    inputsInfo: address,
                  };
                }
                this.arrBuyerInput[2].textError = "";
              } else {
                this.useOrderInfo.buyer = false;
                this.arrBuyerInput[2].textError =
                  "на данный адрес доставка не осуществляется";
              }
              return;
            }
          } else if (
            val &&
            !this.useSelectedSamovivos &&
            !this.deliveryOptions?.loadText &&
            !this.useactivePvzMail
          ) {
            const fullAddress = this.arrBuyerInput[2].inputVal;
            const addressPvzMail = await this.setNormalizeAddress(
              fullAddress,
              true
            );
            const qualityCode = addressPvzMail["validation-code"];
            if (
              qualityCode !== "VALIDATED" &&
              qualityCode !== "OVERRIDDEN" &&
              qualityCode !== "CONFIRMED_MANUALLY" &&
              addressPvzMail?.length !== 0
            ) {
              this.checkNormalizeError();
              this.useOrderInfo.buyer = false;
              return;
            }
            this.arrBuyerInput[2].textError = "";
            if (checkError) {
              const address = JSON.parse(JSON.stringify(this.arrBuyerInput));
              if (this.arrBuyerInput[2].inputVal?.length < 0) {
                this.useOrderInfo.buyer = false;
              }
              this.useOrderInfo.buyer = address;
            }
          }
        } catch {}
      }, 300),
    };
  },
  methods: {
    checkErrors() {
      const activePvz = this.useactivePvzMail;
      this[!activePvz ? "arrBuyerInput" : "inputsPochta"].forEach((el) => {
        if (el?.offMask) return;
        const getIndexErrors = this.arrErrors.findIndex(
          (elName) => elName === el.name
        );
        if (!el.mask) {
          const testMask = el.regExp.test(el.inputVal);
          const lengthEl = el.inputVal.length;
          if ((!testMask || lengthEl >= el.lengthWord) && getIndexErrors < 0) {
            this.arrErrors.push(el.name);
          } else if (testMask && getIndexErrors >= 0 && lengthEl < 120) {
            this.arrErrors.splice(getIndexErrors, 1);
          }
          return;
        }
        if (el.inputVal.length < 18 && getIndexErrors < 0) {
          this.arrErrors.push(el.name);
        } else if (el.inputVal.length >= 18 && getIndexErrors >= 0) {
          this.arrErrors.splice(getIndexErrors, 1);
        }
      });
      if (this.arrErrors.length <= 0) {
        return true;
      }
      return false;
    },
    setValueMask(item, idx, e) {
      const itemEl = item;
      itemEl.inputVal = e.target.value;
      this.arrBuyerInput.splice(idx, 1, itemEl);
    },
    async getPvz(textInp) {
      //Очистить переменную кода доставки
      delete this.objSet.to_location.code;
      if (!this.useBuyerAddress || this.useBuyerAddress?.length <= 0)
        return false;
      const packagesArr = this.useFilterDeliveryPackages();
      this.objSet.packages = packagesArr;
      this.objSet.to_location.address = textInp;
      const response = await CdekController.getOptions(this.objSet);
      if (!response) {
        return false;
      }
      return true;
    },
    async setNormalizeAddress(item, check) {
      try {
        const region = this.useActiveRegion;
        const address = `г ${region.settlement}, ${region.region}, ${item}`;
        const {
          data: [data],
        } = await MailServices.normalizeAddress({
          originalAddress: address,
        });
        return data;
      } catch {
        if (check) {
          return "VALIDATED";
        }
        return [];
      }
    },
    checkNormalizeError() {
      if (!this.useactivePvzMail) {
        this.arrBuyerInput[2].textError = "Такого адреса не существует";
        const findIndexError = this.arrErrors.findIndex(
          (nameEl) => nameEl === "Адрес доставки*"
        );
        if (findIndexError === -1) {
          this.arrErrors.push("Адрес доставки*");
          return;
        }
        this.arrErrors.splice(findIndexError, 1);
        return;
      }
      this.inputsPochta[2].textError = "Такой улицы не существует";
      this.inputsPochta[3].textError = "Такого дома не существует";
      const arrError = [
        {
          name: "Улица*",
        },
        {
          name: "Дом*",
        },
      ];
      arrError.forEach((el) => {
        const findIndexError = this.arrErrors.findIndex(
          (nameEl) => nameEl === el.name
        );
        if (findIndexError === -1) {
          this.arrErrors.push(el.name);
          return;
        }
        this.arrErrors.splice(findIndexError, 1);
      });
    },
  },
  watch: {
    deliveryOptions: {
      handler(val) {
        this.arrBuyerInput[2].textError = "";
        this.arrBuyerInput[0].inputVal = "";
        this.inputsPochta[0].inputVal = "";
      },
      deep: true,
    },
    selectedOption() {
      this.useCursor = false;
      setTimeout(() => {
        this.useCursor = true;
      }, 10);
      this.arrErrors = [];
      this.arrBuyerInput[2].textError = "";
      this.usePvzCode = null;
      this.arrBuyerInput[0].inputVal = "";
      this.inputsPochta[0].inputVal = "";
    },
    useBuyerAddress(val) {
      // console.log(val);
    },
    async useOrderInfo(val) {
      this.debouncedMethod(val);
    },
  },
  unmounted() {
    this.arrErrors = [];
    this.useStartCheck = false;
  },
  mounted() {},

  directives: {
    imask: IMaskDirective,
  },
};
</script>

<style scoped>
.buyer {
  padding: 20px 15px 25px 15px;
  border: 1px solid #af9280;
}
.buyer__content {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 20px;
  max-width: 100%;
}
.buyer__span {
  font-weight: 400;
  font-size: 15px;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 8px;
  transition: all 0.4s ease;
}
.activeSpan {
  color: red;
}
.order__input {
  width: 100%;
  box-sizing: border-box;
  background: white;
  padding: 13px 20px;
  font-weight: 300;
  font-size: 18px;
  color: var(--brown);
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.4s ease;
}
.order__input::placeholder {
  color: #d2bcae;
}
.activeInp {
  border: 1px solid red;
}
@media screen and (max-width: 930px) {
  .order__input {
    font-size: 16px;
  }
  .buyer__content {
    column-gap: 20px;
  }
}
@media screen and (max-width: 680px) {
  .buyer__content {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 80px;
  }
}
</style>
