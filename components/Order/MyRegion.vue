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
          @input="setRegion"
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
            v-if="activeDropdown"
            @close="activeDropdown = false"
            @keydown.esc="activeDropdown = false"
          />
        </Transition>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inpVal: "Москва",
      activeDropdown: false,
      useOrderInfo: useOrderInfo(),
    };
  },
  methods: {
    setRegion() {
      if (this.inpVal.length > 0) {
        this.activeDropdown = true;
      } else {
        this.activeDropdown = false;
      }
      this.useCursor = true;
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
