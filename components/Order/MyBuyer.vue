<template>
  <div class="buyer">
    <OrderUIMyTitle>покупатель</OrderUIMyTitle>
    <div class="buyer__content">
      <div class="buyer__item" v-for="(item, idx) in arrBuyerInput" :key="item">
        <div
          class="buyer__span"
          :class="{ activeSpan: arrErrors.includes(item.name) }"
        >
          {{ item.name }}
        </div>
        <OrderUIMyInput
          v-if="!item.mask"
          v-model="item.inputVal"
          data-cursor-class="animateCursor"
          :active="arrErrors.includes(item.name) ? true : false"
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
          :class="{ activeInp: arrErrors.includes(item.name) }"
          v-imask="maskInp"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { IMaskDirective } from "vue-imask";

export default {
  data() {
    return {
      maskInp: {
        mask: "+{7} (000)-000-00-00",
      },
      arrBuyerInput: [
        {
          name: "фио*",
          regExp: /[^-А-ЯA-Z\x27а-яa-z]/,
          regExpWord: "Фио должен быть корректным",
          mask: false,
          lengthWord: 120,
          textArea: false,
          inputVal: "",
        },
        {
          name: "Адрес доставки*",
          regExp: /^[a-zA-Zа-яА-Я0-9\s.,/()-]{5,}$/,
          regExpWord: "Адрес доставки должен быть корректным",
          lengthWord: 200,
          mask: false,
          textArea: false,
          inputVal: "",
        },
        {
          name: "телефон Telegram / WhatsApp*",
          regExpWord: "Номер телефона должен быть корректным",
          regExp: false,
          mask: true,
          textArea: false,
          inputVal: "",
        },
        {
          name: "комментарий к заказу*",
          regExp: /^[a-zA-Zа-яА-Я0-9\s.,/()-]*$/,
          regExpWord: "Комментарий должен быть корректным",
          mask: false,
          lengthWord: 300,
          textArea: true,
          inputVal: "",
          optional: true,
        },
      ],
      useOrderInfo: useOrderInfo(),
      arrErrors: [],
      completeNumberPhone: false,
    };
  },
  methods: {
    checkErrors() {
      this.arrBuyerInput.forEach((el) => {
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
  },
  watch: {
    useOrderInfo(val) {
      if (val) {
        const checkError = this.checkErrors();
        if (checkError) {
          this.useOrderInfo.buyer = this.arrBuyerInput;
          return;
        }
        delete this.useOrderInfo.buyer;
      }
    },
  },
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
  max-width: 80%;
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
.activeInp {
  border: 1px solid red;
}
</style>
