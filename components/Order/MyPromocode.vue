<template>
  <div class="promocode" id="order__promocode" v-show="deliveryOptions">
    <div class="promocode__content">
      <div class="promocode__name">Ваш заказ</div>
      <div class="promocode__summ">
        Сумма заказа:
        <span class="promocode__span" v-if="summ && checkSumm"
          >{{ summ.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} ₽</span
        >
      </div>
      <div class="promocode__delivery">
        Доставка:
        <span class="promocode__span"
          >{{ useDeliveryPrice === 0 ? "бесплатно" : useDeliveryPrice + " ₽" }}
        </span>
      </div>
      <form class="promocode__form" @submit.prevent>
        <div class="promocode__label">{{ promocodeText }}</div>
        <div class="promocode__block">
          <input
            @input="typePromocode"
            type="text"
            class="promocode__input"
            data-cursor-class="animateCursor"
            v-model="inputVal"
            :class="{
              activeStateType: promocodeState === 'type',
              activeStateSuccess: promocodeState === 'success',
              activeStateReject: promocodeState === 'reject',
            }"
          />
          <Transition>
            <button
              class="promocode__btn"
              type="submit"
              v-if="promocodeState === 'type'"
              @click="checkPromocode"
              data-cursor-class="animateCursor"
            >
              <svg
                width="19"
                height="15"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.49951H17.8038"
                  stroke="#A48A77"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9375 1L17.9981 7.5L11.9375 14"
                  stroke="#A48A77"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </Transition>
          <Transition>
            <div
              class="promocode__icon success"
              v-if="promocodeState === 'success'"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#EDE9DF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                  stroke="#EDE9DF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Transition>
          <Transition>
            <div
              class="promocode__icon reject"
              v-if="promocodeState === 'reject'"
              data-cursor-class="animateCursor"
              @click="resetPromocode"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#E37070"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.17188 14.8299L14.8319 9.16992"
                  stroke="#E37070"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8319 14.8299L9.17188 9.16992"
                  stroke="#E37070"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Transition>
        </div>
      </form>
      <div class="promocode__full">
        итого:
        <span class="promocode__span" v-if="fullSumm && checkSumm"
          >{{
            fullSumm.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          ₽</span
        >
      </div>
    </div>
  </div>
  <div class="promocode__load" v-show="!deliveryOptions">
    <UIMyLoadItem :backgroundDisable="true" />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PromoServices from "~/http/services/PromoServices";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      inputVal: "",
      promocodeText: "промокод",
      promocodeState: "",
      inputPrimer: ["active"],
      useCursor: useCursor(),
      timeLine: useScrollTriggerTimeLine(),
      deliveryOptions: useDeliveryArr(),
      fullSumm: 0,
      summ: 0,
      useOrderInfo: useOrderInfo(),
      activePromocode: "",
      useDeliveryPrice: useDeliveryPrice(),
      selectedOption: useIndexDelivery(),
      localStorageArr: null,
      checkSumm: false,
      checkLoadPromocode: false,
      useactivePvzMail: useActivePvzMail(),
      useInputMobile: useInputMobile(),
      arrErrors: useCheckErrors(),
      useActiveRegion: useActiveRegion(),
      useCursor: useCursor(),
      discountedPrice: 0,
      discountSumm: 0,
      objMobile: {
        name: "телефон Telegram / WhatsApp*",
      },
    };
  },
  methods: {
    typePromocode() {
      const inpValLength = this.inputVal.length;
      const state = this.promocodeState;
      if (inpValLength > 0) {
        this.promocodeState = "type";
      } else {
        this.promocodeState = "";
      }
      this.useCursor = true;
    },
    async checkPromocode() {
      try {
        const { data } = await PromoServices.checkPromo({
          promo: this.inputVal,
        });
        const elHtml = document.querySelector(".promocode__input");
        if (data.status !== "error") {
          this.discountSumm = parseInt(data.discount);
          this.discountedPrice = (this.fullSumm * this.discountSumm) / 100;
          this.fullSumm = Math.ceil(this.fullSumm - this.discountedPrice);
          this.promocodeState = "success";
          this.promocodeText = `промокод применен / ${this.discountSumm}%`;
          this.activePromocode = this.inputVal;
          elHtml.disabled = true;
        } else {
          this.promocodeText = `промокод введен неверно или срок его действия истек`;
          this.promocodeState = "";
          this.inputVal = "";
          elHtml.disabled = false;
        }
      } catch {
        this.promocodeText = `промокод введен неверно или срок его действия истек`;
        this.inputVal = "";
        this.promocodeState = "";
        elHtml.disabled = false;
      }
    },
    initPromocode() {
      const parseCart = JSON.parse(localStorage.getItem("cart"));
      this.localStorageArr = parseCart;
      parseCart.forEach((el) => {
        let number = el.price;
        if (typeof number !== "number") {
          number = number.match(/\d+/g);
          number = parseInt(number.join(""));
        }
        const fullSumme = number * el.counter;
        this.fullSumm += fullSumme;
      });
      this.summ = this.fullSumm;
    },
    initScrollTrigger() {
      if (!document.getElementById("order__promocode")?.getBoundingClientRect())
        return;

      if (window.innerWidth > 1276) {
        this.timeLine = gsap.timeline({
          scrollTrigger: {
            trigger: ".main__menu",
            start: () => "top top",
            end: () =>
              `bottom ${
                document
                  .getElementById("order__promocode")
                  .getBoundingClientRect()
                  ? document
                      .getElementById("order__promocode")
                      .getBoundingClientRect().height + "px"
                  : ""
              }`,
            pin: ".promocode",
            markers: false,
            invalidateOnRefresh: true,
          },
        });
      }
    },
    changeSumm() {
      this.checkSumm = true;
      const localArr = this.localStorageArr;
      if (localArr?.length >= 2 || localArr[0]?.counter >= 2) {
        this.useDeliveryPrice = 0;
        this.fullSumm = this.summ;
        return true;
      }
      return false;
    },
    resetPromocode() {
      this.promocodeText = "промокод";
      this.promocodeState = "";
      this.inputVal = "";
      this.discountedPrice = 0;
      this.discountSumm = 0;
      document.querySelector(".promocode__input").disabled = false;
    },
  },
  mounted() {
    this.initPromocode();
    this.changeSumm();
  },
  watch: {
    useOrderInfo(val) {
      if (val) {
        this.useOrderInfo.promocode = {
          promocodeText: this.activePromocode,
          summ: this.fullSumm,
          summDelivery: this.useDeliveryPrice,
        };
      }
    },
    promocodeState(val) {
      if (val === "reject") {
        this.useCursor = false;
        setTimeout(() => {
          this.useCursor = true;
        }, 10);
      }
    },
    useDeliveryPrice(val) {
      const fullSummPrice = this.summ + val;
      if (this.discountSumm !== 0 && this.discountedPrice !== 0) {
        this.discountedPrice = (fullSummPrice * this.discountSumm) / 100;
        this.fullSumm = Math.ceil(fullSummPrice - this.discountedPrice);
      } else {
        this.fullSumm = fullSummPrice;
      }
      this.checkFirstLoad = true;
    },
    selectedOption() {
      if (this.discountSumm === 0) {
        this.resetPromocode();
      }
      setTimeout(() => {
        nextTick(() => {
          this.timeLine.scrollTrigger.refresh();
        });
      }, 0);
    },
    useActiveRegion(val) {
      if (this.discountSumm === 0) {
        this.resetPromocode();
      }
    },
    deliveryOptions() {
      setTimeout(() => {
        nextTick(() => {
          if (!this.checkLoadPromocode) {
            this.initScrollTrigger();
            this.checkLoadPromocode = true;
          }
          if (this.timeLine) {
            this.timeLine.scrollTrigger.refresh();
          }
        });
      }, 0);
    },
  },
  unmounted() {
    // if (this.timeLine) {
    //   this.timeLine.kill();
    // }
  },
};
</script>

<style scoped>
.promocode {
  position: relative;
  width: 100%;
  background: #afb19e;
  padding: 20px 15px 25px 15px;
  z-index: 9999;
}
.promocode__name {
  font-weight: 200;
  font-size: 24px;
  color: var(--yellow);
  text-transform: lowercase;
  margin-bottom: 15px;
}
.promocode__summ {
  font-weight: 200;
  font-size: 18px;
  color: var(--yellow);
  text-transform: lowercase;
  margin-bottom: 15px;
}
.promocode__span {
  font-weight: 400;
}
.promocode__delivery {
  font-weight: 200;
  font-size: 18px;
  color: var(--yellow);
  text-transform: lowercase;
  margin-bottom: 30px;
}
.promocode__form {
  margin-bottom: 10px;
}
.promocode__label {
  font-weight: 400;
  font-size: 15px;
  color: var(--yellow);
  text-transform: lowercase;
  margin-bottom: 8px;
}
.promocode__block {
  position: relative;
}
.promocode__input {
  width: 100%;
  box-sizing: border-box;
  padding: 13px 20px;
  border: none;
  font-weight: 300;
  font-size: 18px;
  color: var(--brown);
  background: #caccb7;
  height: 47px;
  transition: all 0.4s ease;
}
.activeStateType {
  background: #f9f5ee;
}
.activeStateSuccess {
  background: none;
  color: var(--yellow);
  border: 1px solid var(--yellow);
}
.activeStateReject {
  background: #f9f5ee;
  color: red;
}
.promocode__btn {
  display: flex;
  position: absolute;
  top: 35%;
  right: 4%;
}
.promocode__icon {
  display: flex;
  position: absolute;
  top: 26%;
  right: 4%;
}
.promocode__full {
  font-weight: 300;
  font-size: 28px;
  color: var(--yellow);
  text-transform: lowercase;
}
.promocode__load {
  width: 100%;
  height: 300px;
  border: 1px solid var(--brown);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media screen and (max-width: 1276px) {
  .promocode {
    margin-top: 10px;
  }
}
</style>
