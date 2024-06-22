<template>
  <div class="delivery">
    <OrderUIMyTitle>способ доставки</OrderUIMyTitle>
    <div class="delivery__content">
      <div
        class="delivery__bl"
        v-if="deliveryOptions && deliveryOptions?.length > 0"
      >
        <div
          v-for="(option, index) in getArr"
          :key="index"
          class="delivery__option"
        >
          <div class="delivery__item">
            <label class="delivery__label" :for="index">
              <input
                type="radio"
                :id="`delivery__option${index + 1}`"
                :value="index"
                v-model="selectedOption"
                class="delivery__custom"
              />
              <span
                class="delivery__custom_radio"
                data-cursor-class="animateCursor"
                @click="
                  (selectedOption = index),
                    (useDeliveryPrice = deliveryOptions[index].sumDelivery)
                "
              ></span>
              <div class="delivery__details">
                <div class="delivery__name">
                  {{
                    option.name + " " + option.deliveryTime + " " + option.day
                  }}
                </div>
                <div class="delivery__price">{{ option.sumDelivery }} ₽</div>
                <div class="delivery__description">
                  {{ option.des }}
                </div>
              </div>
            </label>
          </div>
          <div
            class="delivery__btn"
            v-if="option.name.toLowerCase().includes('самовывоз')"
          >
            <UIButtonMyButton
              info="Выбрать ПВЗ"
              aria-label="Выбрать ПВЗ"
              fontSize="18"
              padding="10px 30px"
              data-cursor-class="animateCursor"
              @click="usePvzModal = true"
            />
          </div>
        </div>
      </div>
      <div class="delivery__empty" v-else-if="!deliveryOptions">
        <UIMyLoadItem :backgroundDisable="true" />
      </div>
      <div class="delivery__emptyText" v-if="deliveryOptions?.loadText">
        {{ deliveryOptions?.loadText }}
      </div>
    </div>
  </div>
</template>

<script>
import CdekController from "~/http/controllers/CdekController";

export default {
  data() {
    return {
      selectedOption: 0,
      usePvzModal: usePvzModal(),
      deliveryOptions: useDeliveryArr(),
      useOrderInfo: useOrderInfo(),
      useDeliveryPrice: useDeliveryPrice(),
      localStorageArr: null,
      useCursor: useCursor(),
      objSet: useDeliveryObj(),
      useDeliveryLoad: useDeliveryLoad,
      activePvzObj: null,
    };
  },
  computed: {
    getArr() {
      return this.deliveryOptions;
    },
  },
  methods: {
    changeSumm() {
      const parseCart = JSON.parse(localStorage.getItem("cart"));
      this.localStorageArr = parseCart;
      const localArr = this.localStorageArr;
      if (localArr.length >= 2 || localArr[0].counter >= 2) {
        return true;
      }
      return false;
    },
    async initApp() {
      try {
        const response = await CdekController.getOptions(this.objSet);
        const check = this.changeSumm();
        const newArr = this.useDeliveryLoad(check, response);
        this.useDeliveryPrice = newArr[0].sumDelivery;
        this.deliveryOptions = newArr;
        setTimeout(() => {
          this.useCursor = true;
        }, 0);
      } catch {}
    },
  },
  mounted() {
    this.initApp();
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}
.delivery__empty {
  width: 100%;
  height: 300px;
}
.delivery__emptyText {
  font-size: 18px;
  margin-top: 40px;
  height: 100%;
  font-weight: 400;

  text-transform: lowercase;
}
.delivery__item {
  margin-bottom: 15px;
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
.delivery__btn {
  margin-left: 30px;
}
</style>
