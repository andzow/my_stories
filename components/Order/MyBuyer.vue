<template>
  <div class="buyer">
    <OrderUIMyTitle>покупатель</OrderUIMyTitle>
    <div class="buyer__content">
      <div class="buyer__item" v-for="item in arrBuyerInput" :key="item">
        <div class="buyer__span">{{ item.name }}</div>
        <OrderUIMyInput
          v-if="!item.mask"
          v-model="item.inputVal"
          data-cursor-class="animateCursor"
        />
        <input
          v-else
          class="order__input"
          type="text"
          data-cursor-class="animateCursor"
          :value="item.inputVal"
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
          regExp: /[^a-zA-Zа-яА-Я0-9]/,
          regExpWord: "Фио должен быть корректным",
          mask: false,
          inputVal: "",
        },
        {
          name: "Адрес доставки*",
          regExp: /^[а-яА-Я0-9,\.\s]+$/,
          regExpWord: "Адрес доставки должен быть корректным",
          mask: false,
          inputVal: "",
        },
        {
          name: "телефон Telegram / WhatsApp*",
          regExpWord: "Номер телефона должен быть корректным",
          regExp: false,
          mask: true,
          inputVal: "",
        },
        {
          name: "комментарий к заказу*",
          regExp: /[^a-zA-Z0-9]/g,
          regExpWord: "Комментарий должен содержать минимум 5 символов",
          mask: false,
          inputVal: "",
        },
      ],
    };
  },
  methods: {},
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
}
.order__input {
  width: 100%;
  box-sizing: border-box;
  background: white;
  padding: 13px 20px;
  border: none;
  font-weight: 300;
  font-size: 18px;
  color: var(--brown);
  transition: all 0.4s ease;
}
</style>
