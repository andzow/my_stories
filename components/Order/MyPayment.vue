<template>
  <div class="payment">
    <OrderUIMyTitle>способ оплаты</OrderUIMyTitle>
    <div class="payment__content">
      <div
        v-for="(option, index) in paymentOptions"
        :key="index"
        class="payment__option"
      >
        <label
          class="payment__label"
          :for="`payment__label${index + 1}`"
          data-cursor-class="animateCursor"
        >
          <input
            type="radio"
            :id="`payment__label${index + 1}`"
            :value="`payment__label${index + 1}`"
            v-model="selectedOption"
            class="payment__custom"
          />
          <span class="payment__custom_radio"></span>
          <div class="payment__details">
            <div class="payment__name">{{ option.name }}</div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: "payment__label1",
      paymentOptions: [
        {
          name: "Банковской картой",
          price: 495,
          description: "доставка заказа курьером компании сдэк",
        },
        {
          name: "Оплата покупок частями",
          price: 305,
          description: "сдэк (постамат)",
        },
      ],
    };
  },
};
</script>

<style scoped>
.payment {
  padding: 20px 15px;
  border: 1px solid #af9280;
}
.payment__option {
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
}

.payment__custom {
  display: none;
}
.payment__label {
  display: flex;
  align-items: flex-start;
}

.payment__custom + .payment__custom_radio {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1.2px solid #af9280;
  background-color: #fff;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  transition: border-color 0.4s ease;
}

.payment__custom + .payment__custom_radio::before {
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

.payment__custom:checked + .payment__custom_radio::before {
  width: 12px;
  height: 12px;
}

.payment__custom:checked + .payment__custom_radio {
  border-color: #af9280;
}

.payment__details {
  display: inline-block;
  vertical-align: middle;
}
.payment__name {
  font-weight: 300;
  font-size: 20px;
  color: var(--brown);
  line-height: 15px;
  text-transform: lowercase;
}
</style>
