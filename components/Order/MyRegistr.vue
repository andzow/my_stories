<template>
  <div class="registr">
    <div class="registr__content">
      <div class="register__option">
        <label class="register__label" data-cursor-class="animateCursor">
          <input
            type="checkbox"
            v-model="selectedOption"
            class="register__custom"
          />
          <span class="register__custom_radio"></span>
          <div class="register__details">
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь c
            <NuxtLink class="register__link" :to="'/'"
              >политикой конфиденциальности</NuxtLink
            >
          </div>
        </label>
      </div>
    </div>
    <div class="register__btn">
      <UIButtonMyButton
        aria-label="оформить заказ"
        info="оформить заказ"
        fontSize="26"
        data-cursor-class="animateCursor"
        bigSize="bigSize"
        :heightEl="'60px'"
        :loadingBtn="loadingButton"
        @click="getInformationUser"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
      option: "option",
      allObjectsOrder: ["region", "delivery", "payment", "buyer", "promocode"],
      allObjectCheck: [],
      useOrderInfo: useOrderInfo(),
      checkVarible: 0,
      deliveryOptions: useDeliveryArr(),
      objSet: useDeliveryObj(),
      useBuyerAddress: useBuyerAddress(),
      objSetPayment: {
        name: "Алексей",
        phone: "+7 242 423 34 34",
        adress: "Г. Киров, ул. Молодая гвардия 32, д. 120",
        promocode: "САНЯ - ВАДИЛА",
        comments: "Я хочу на мальдивы",
        amount: 1300.0,
        items: [
          {
            name: "Product 1",
            quantity: 2,
            price: 300.0,
          },
          {
            name: "Product 2",
            quantity: 1,
            price: 400.0,
          },
        ],
        delivery: {
          name: "CDEK",
          quantity: 1,
          price: 300.0,
        },
      },
      loadingButton: useLoadingButton(),
      errorCheck: false,
    };
  },
  methods: {
    redirectPayment(item) {
      console.log(item);
      this.checkVarible = 0;
    },
    getInformationUser() {
      if (!this.deliveryOptions) return;
      this.useOrderInfo = {};
      this.loadingButton = true;
    },
  },

  watch: {
    useOrderInfo: {
      handler(val) {
        if (val && this.deliveryOptions) {
          for (let key in val) {
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
                console.log("cancel payment");
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
  cursor: pointer;
  margin-right: 10px;
  transition: border-color 0.4s ease;
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
</style>
