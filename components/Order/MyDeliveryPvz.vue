<template>
  <div class="delivery__pvz">
    <div class="delivery__pvz_item">
      <div class="delivery__pvz_header">
        <div class="delivery__pvz_title">пункт выдачи</div>
        <div class="delivery__pvz_close">
          <button
            class="delivery__pvz_btn"
            data-cursor-class="animateCursor"
            @click="usePvzModal = false"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.929688 0.928711L15.0718 15.0708"
                stroke="#AF9280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.928175 15.0708L15.0703 0.928711"
                stroke="#AF9280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="delivery__pvz_name">
        <span
          class="delivery__pvz_sp"
          v-if="
            textActive !== 'Выберите ПВЗ с помощью карты*' &&
            textActive !== 'Выберите ПВЗ с помощью поля ввода*'
          "
          >вы выбрали:</span
        >
        {{ textActive }}
      </div>
      <form class="delivery__pvz_form" @submit.prevent v-if="checkMapAndInput">
        <div class="delivery__pvz_block">
          <input
            class="delivery__pvz_input"
            type="text"
            placeholder="введите адрес..."
            ref="deliveryPvzInput"
            data-cursor-class="animateCursor"
            @input="setPvzAdress"
            v-model="pvzInputVal"
          />
          <Transition name="fade-dropdown">
            <OrderMyDeliveryAdress
              v-if="activeDropdown"
              @close="activeDropdown = false"
              @keydown.esc="activeDropdown = false"
              @setCity="setCity"
              :arrCitys="arrPlacemarkAndInfo"
              :pvzInputVal="pvzInputVal"
            />
          </Transition>
        </div>
      </form>
      <NuxtErrorBoundary>
        <OrderMyDeliveryMap
          v-if="arrPlacemarkAndInfo && !loadingEl && !checkMapAndInput"
          :arrPlacemarkAndInfo="arrPlacemarkAndInfo"
          :changeMap="changeMap"
          @loadMap="setCity"
          @changeVal="changeMap = false"
        />
      </NuxtErrorBoundary>
      <div
        class="delivery__pvz_loading"
        v-if="!arrPlacemarkAndInfo || loadingEl"
      >
        <UIMyLoadItem :backgroundDisable="true" />
      </div>
      <div class="delivery__pvz_pickup">
        <UIButtonMyButton
          info="применить"
          fontSize="20"
          data-cursor-class="animateCursor"
          @click="getDelivery"
        />
        <UIButtonMyButton
          :info="
            !checkMapAndInput
              ? 'выбрать ПВЗ вручную'
              : 'выбрать пвз с помощью карты'
          "
          fontSize="20"
          data-cursor-class="animateCursor"
          @click="setActiveMapOrInput"
          variant="green"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CdekController from "~/http/controllers/CdekController";
import CdekService from "~/http/services/Cdek.service";

export default {
  data() {
    return {
      pvzInputVal: "",
      activeDropdown: false,
      usePvzModal: usePvzModal(),
      useCursor: useCursor(),
      useCityCode: useCityCode(),
      arrPlacemarkAndInfo: null,
      deliveryOptions: useDeliveryArr(),
      useDeliveryPrice: useDeliveryPrice(),
      objSet: useDeliveryObj(),
      useDeliveryLoad: useDeliveryLoad,
      activeObj: null,
      changeMap: false,
      loadingEl: false,
      useActiveAddress: useActiveAddress(),
      useFilterDeliveryPackages: useFilterDeliveryPackages,
      textActive: "Выберите ПВЗ с помощью карты*",
      checkMapAndInput: false,
      useBuyerAddress: useBuyerAddress(),
      arrErrors: useCheckErrors(),
    };
  },

  methods: {
    setPvzAdress() {
      if (this.pvzInputVal.length > 0) {
        this.activeDropdown = true;
      } else {
        this.activeDropdown = false;
      }
      this.useCursor = true;
    },
    setCity(item) {
      if (!item?.location?.city) {
        return;
      }
      this.pvzInputVal = `${item.location.city}, ${item.location.address}`;
      this.textActive = `${item.location.city}, ${item.location.address}`;
      this.changeMap = item;
      this.activeObj = item;
      this.activeDropdown = false;
    },
    checkClick(e) {
      const blockEl = document.querySelector(".delivery__pvz_item");
      const click = e.composedPath().includes(blockEl);
      if (!click) {
        this.usePvzModal = false;
      }
    },
    async initApp() {
      try {
        const response = await CdekService.getPvz({
          code: this.useCityCode,
        });
        this.arrPlacemarkAndInfo = response.data;
      } catch {}
    },
    changeSumm() {
      const parseCart = JSON.parse(localStorage.getItem("cart"));
      const localArr = parseCart;
      if (localArr.length >= 2 || localArr[0].counter >= 2) {
        return true;
      }
      return false;
    },
    async getDelivery() {
      try {
        this.loadingEl = true;
        if (!this.activeObj) {
          this.usePvzModal = false;
        }
        const packagesArr = this.useFilterDeliveryPackages();
        this.objSet.packages = packagesArr;
        delete this.objSet.to_location.code;

        this.objSet.to_location.address = this.activeObj.location.address_full;
        const response = await CdekController.getOptions(this.objSet);
        this.arrErrors = [];
        const check = this.changeSumm();
        const newArr = this.useDeliveryLoad(check, response);
        this.useDeliveryPrice = newArr[0].sumDelivery;
        this.deliveryOptions = newArr;
        this.usePvzModal = false;
        this.useActiveAddress = this.activeObj;
        this.useBuyerAddress = this.useActiveAddress.location.address_full;
      } catch {
        this.usePvzModal = false;
      }
    },
    setActiveMapOrInput() {
      if (!this.checkMapAndInput) {
        this.textActive = "Выберите ПВЗ с помощью поля ввода*";
        this.checkMapAndInput = true;
        this.pvzInputVal = "";
        this.activeObj = null;
        this.useActiveAddress = null;
        return;
      }
      this.textActive = "Выберите ПВЗ с помощью карты*";
      this.checkMapAndInput = false;
      this.pvzInputVal = "";
      this.activeObj = null;
      this.useActiveAddress = null;
    },
  },
  mounted() {
    this.initApp();
    nextTick(() => {
      document.body.style.overflow = "hidden";
      this.useCursor = true;
    });
    // document.addEventListener("mouseup", this.checkClick);
  },
  unmounted() {
    document.body.style.overflow = "auto";
    // document.removeEventListener("mouseup", this.checkClick);
  },
};
</script>

<style></style>

<style scoped>
.delivery__pvz {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  z-index: 90;
}
.delivery__pvz_item {
  margin: 0 20px;
  padding: 20px 30px;
  min-width: 830px;
  background: #ffffff;
  border-radius: 5px;
}
.delivery__pvz_loading {
  height: 500px;
}
.delivery__pvz_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}
.delivery__pvz_title {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  text-transform: lowercase;
}
.delivery__pvz_btn {
  border: none;
  background: none;
  transform: translateY(3px);
  text-transform: lowercase;
  transition: all 0.4s ease;
}
.delivery__pvz_btn:hover {
  transform: translateY(3px) scale(1.4);
}
.delivery__pvz_form {
  position: relative;
  margin-bottom: 25px;
  z-index: 20;
}
.delivery__pvz_block {
  position: relative;
}
.delivery__pvz_sp {
  font-weight: 300;
}
.delivery__pvz_name {
  font-weight: 600;
  font-size: 18px;
  color: var(--brown);
  /* text-transform: lowercase; */
  margin-bottom: 25px;
}
.delivery__pvz_input {
  width: 100%;
  box-sizing: border-box;
  background: white;
  padding: 13px 20px;
  font-weight: 300;
  font-size: 18px;
  border: 1px solid var(--brown);
  color: var(--brown);
  /* text-transform: lowercase; */
  transition: all 0.4s ease;
}
.delivery__pvz_input::placeholder {
  color: var(--brown);
}
.delivery__pvz_pickup {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  column-gap: 10px;
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
