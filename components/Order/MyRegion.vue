<template>
  <div class="region">
    <OrderUIMyTitle>регион доставки</OrderUIMyTitle>
    <form class="region__form" @submit.prevent>
      <div class="region__label">Город*</div>
      <div class="region__block">
        <input
          class="region__input"
          type="text"
          placeholder="введите название города..."
          @input="debouncedSearch"
          v-model="inpVal"
        />
        <div class="region__img">
          <button class="region__btn" data-cursor-class="animateCursor">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#D2BCAE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#D2BCAE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <Transition name="fade-dropdown">
          <OrderMyRegionCitys
            v-if="activeDropdown && arrCitys.length > 0"
            @close="activeDropdown = false"
            @keydown.esc="activeDropdown = false"
            :arrCitys="arrCitys"
            @setCity="setCity"
          />
        </Transition>
      </div>
    </form>
  </div>
</template>

<script>
import CdekController from "~/http/controllers/CdekController";
import debounce from "lodash.debounce";

export default {
  data() {
    return {
      inpVal: "Москва, Россия",
      activeDropdown: false,
      useOrderInfo: useOrderInfo(),
      useCursor: useCursor(),
      arrCitys: [],
      deliveryOptions: useDeliveryArr(),
      useDeliveryLoad: useDeliveryLoad,
      objSet: useDeliveryObj(),
      useDeliveryPrice: useDeliveryPrice(),
      useCityCode: useCityCode(),
      activeTextEmpty: "",
      debouncedSearch: debounce(async () => {
        try {
          const response = await CdekController.getCity({ name: this.inpVal });
          this.arrCitys = response;
          if (this.inpVal.length > 0) {
            this.activeDropdown = true;
          } else {
            this.activeDropdown = false;
          }
          this.useCursor = true;
        } catch {}
      }, 200),
    };
  },
  methods: {
    changeSumm() {
      const parseCart = JSON.parse(localStorage.getItem("cart"));
      const localArr = parseCart;
      if (localArr.length >= 2 || localArr[0].counter >= 2) {
        return true;
      }
      return false;
    },
    async setRegion() {
      try {
        const response = await CdekController.getCity({ name: this.inpVal });
        this.arrCitys = response;
        if (this.inpVal.length > 0) {
          this.activeDropdown = true;
        } else {
          this.activeDropdown = false;
        }
        this.useCursor = true;
      } catch {}
    },
    async setCity(arr, idx) {
      try {
        const item = arr[idx];
        this.deliveryOptions = false;
        this.inpVal =
          item.city +
          (item.city === item.region
            ? ", " + item.country
            : ", " + item.region + ", " + item.country);
        this.activeDropdown = false;

        this.objSet.to_location.code = item.code;
        const response = await CdekController.getOptions(this.objSet);
        if (!response) {
          this.deliveryOptions = {
            loadText: "Для данного населенного пункта тарифы отсутствуют",
          };
          this.useDeliveryPrice = 0;
          return;
        }
        const check = this.changeSumm();
        const newArr = this.useDeliveryLoad(check, response);
        this.useDeliveryPrice = newArr[0].sumDelivery;
        this.deliveryOptions = newArr;
        this.useCityCode = item.code;
      } catch {
        this.deliveryOptions = {
          loadText: "Для данного населенного пункта тарифы отсутствуют",
        };
        this.useDeliveryPrice = 0;
      }
    },
  },
  watch: {
    useOrderInfo(val) {
      if (val) {
        this.useOrderInfo.region = this.inpVal;
      }
    },
  },
};
</script>

<style scoped>
.region {
  padding: 20px 15px;
  border: 1px solid #af9280;
  margin-bottom: 10px;
}
.region__label {
  font-weight: 400;
  font-size: 15px;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 8px;
}
.region__block {
  position: relative;
}
.region__input {
  width: 100%;
  box-sizing: border-box;
  background: white;
  padding: 13px 20px;
  border: none;
  font-weight: 300;
  font-size: 18px;
  color: var(--brown);
  /* text-transform: lowercase; */
  transition: all 0.4s ease;
}
.region__input::placeholder {
  color: var(--brown);
}
.region__img {
  position: absolute;
  top: 26%;
  right: 2%;
}
.region__btn {
  display: flex;
}
.fade-dropdown-enter-from {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
}
.fade-dropdown-enter-to {
  opacity: 1;
  transform: translateY(0px);
  transition: all 0.4s ease;
}
.fade-dropdown-leave-from {
  opacity: 1;
  transform: translateY(0px);
  transition: all 0.4s ease;
}
.fade-dropdown-leave-to {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
}
</style>
