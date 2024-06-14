<template>
  <div class="promocode" id="promocode">
    <div class="promocode__content">
      <div class="promocode__name">Ваш заказ</div>
      <div class="promocode__summ">
        Сумма заказа: <span class="promocode__span">10 400 ₽</span>
      </div>
      <div class="promocode__delivery">
        Доставка: <span class="promocode__span">305 ₽</span>
      </div>
      <form class="promocode__form" @submit.prevent>
        <div class="promocode__label">{{ promocodeText }}</div>
        <div class="promocode__block">
          <input
            @input="typePromocode"
            type="text"
            class="promocode__input"
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
        итого: <span class="promocode__span">10 705 ₽</span>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      inputVal: "",
      promocodeText: "промокод",
      promocodeState: "",
      inputPrimer: ["active"],
      useCursor: useCursor(),
      timeLine: null,
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
    checkPromocode() {
      const checkPromocode = this.inputPrimer.includes(this.inputVal);
      if (checkPromocode) {
        this.promocodeState = "success";
        this.promocodeText = "промокод применен";
        document.querySelector(".promocode__input").disabled = true;
        return;
      }
      this.promocodeText = "промокод введен не верно";
      this.promocodeState = "reject";
    },
    initEndTrigger() {
      return;
    },
    initScrollTrigger() {
      this.timeLine = gsap.timeline({
        scrollTrigger: {
          trigger: ".main__menu",
          start: () => "top top",
          end: () =>
            `bottom ${
              document.getElementById("promocode").getBoundingClientRect()
                .height + "px"
            }`,
          pin: ".promocode",
          markers: false,
        },
      });
    },
  },
  mounted() {
    setTimeout(() => {
      nextTick(() => {
        this.initScrollTrigger();
      });
    }, 0);
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
