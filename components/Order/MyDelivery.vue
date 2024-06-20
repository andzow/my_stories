<template>
  <div class="delivery">
    <OrderUIMyTitle>способ доставки</OrderUIMyTitle>
    <div class="delivery__content">
      <div
        v-for="(option, index) in deliveryOptions"
        :key="index"
        class="delivery__option"
      >
        <label
          class="delivery__label"
          :for="index"
          data-cursor-class="animateCursor"
        >
          <input
            type="radio"
            :id="`delivery__option${index + 1}`"
            :value="index"
            v-model="selectedOption"
            class="delivery__custom"
          />
          <span
            class="delivery__custom_radio"
            @click="selectedOption = index"
          ></span>
          <div class="delivery__details">
            <div class="delivery__name">{{ option.name }}</div>
            <div class="delivery__price">{{ option.price }} ₽</div>
            <div class="delivery__description">{{ option.description }}</div>
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
      selectedOption: 0,
      deliveryOptions: [
        {
          name: "СДЭК (доставка курьером) 4-5 дней",
          price: 495,
          description: "доставка заказа курьером компании сдэк",
        },
        {
          name: "СДЭК (постамат) 4-5 дней",
          price: 305,
          description: "сдэк (постамат)",
        },
        {
          name: "СДЭК (самовывоз) 4-5 дней",
          price: 305,
          description:
            "доставка заказа в один из пунктов самовывоза компании сдэк",
        },
        {
          name: "Почта России 5-7 дней",
          price: 205,
          description: "доставка заказа в один из пунктов почты россии",
        },
      ],
      useOrderInfo: useOrderInfo(),
    };
  },
  watch: {
    useOrderInfo(val) {
      if (val && (this.selectedOption || this.selectedOption <= 0)) {
        const elHtml = this.deliveryOptions[this.selectedOption];
        this.useOrderInfo.delivery = elHtml;
      }
    },
  },
};
</script>

<style scoped>
.delivery {
  padding: 20px 15px;
  border: 1px solid #af9280;
}
.delivery__option {
  margin-bottom: 35px;
  display: flex;
  align-items: flex-start;
}

.delivery__custom {
  display: none;
}
.delivery__label {
  display: flex;
  align-items: flex-start;
}

.delivery__custom + .delivery__custom_radio {
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

.delivery__custom + .delivery__custom_radio::before {
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

.delivery__custom:checked + .delivery__custom_radio::before {
  width: 12px;
  height: 12px;
}

.delivery__custom:checked + .delivery__custom_radio {
  border-color: #af9280;
}

.delivery__details {
  display: inline-block;
  vertical-align: middle;
}
.delivery__name {
  font-weight: 300;
  font-size: 20px;
  color: var(--brown);
  line-height: 15px;
  text-transform: lowercase;
  margin-bottom: 20px;
}
.delivery__price {
  font-weight: 400;
  font-size: 26px;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 5px;
}
.delivery__description {
  font-weight: 300;
  font-size: 15px;
  color: var(--brown);
  text-transform: lowercase;
  max-width: 450px;
}
</style>
