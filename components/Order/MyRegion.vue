<template>
  <div class="region">
    <OrderUIMyTitle>регион доставки</OrderUIMyTitle>
    <div class="region__form">
      <div class="region__label" :class="{ disableText: !checkRegion }">
        {{ textRegion }}
      </div>
      <div class="region__block">
        <input
          class="region__input"
          type="text"
          placeholder="введите название города..."
          @input="debouncedSearch"
          v-model="inpVal"
          :class="{ disableInput: !checkRegion }"
          data-cursor-class="animateCursor"
        />
        <div class="region__img">
          <button class="region__btn">
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
    </div>
  </div>
</template>

<script>
import CdekController from "~/http/controllers/CdekController";
import debounce from "lodash.debounce";
import MailServices from "~/http/services/MailServices";

export default {
  data() {
    return {
      selectedOption: useIndexDelivery(),
      inpVal: "Москва, Россия",
      activeDropdown: false,
      useOrderInfo: useOrderInfo(),
      useCursor: useCursor(),
      arrCitys: [],
      deliveryOptions: useDeliveryArr(),
      useActiveAddress: useActiveAddress(),
      useDeliveryLoad: useDeliveryLoad,
      objSet: useDeliveryObj(),
      useDeliveryPrice: useDeliveryPrice(),
      useFilterDeliveryPackages: useFilterDeliveryPackages,
      useCityCode: useCityCode(),
      activeTextEmpty: "",
      checkRegion: true,
      textRegion: "город*",
      useBuyerAddress: useBuyerAddress(),
      useSelectedSamovivos: useSelectedSamovivos(),
      arrErrors: useCheckErrors(),
      counterErrors: false,
      usePvzCode: usePvzCode(),
      useDeliveryMail: useDeliveryMail(),
      useGetPvzMail: useGetPvzMail,
      useCheckPvzMail: useCheckPvzMail,
      useActiveRegion: useActiveRegion(),
      debouncedSearch: debounce(async () => {
        try {
          const response = await CdekController.getCity({ name: this.inpVal });
          this.arrErrors = [];
          this.arrCitys = response;
          if (this.inpVal.length > 0) {
            this.activeDropdown = true;
          } else {
            this.activeDropdown = false;
          }
          this.useCursor = true;
        } catch {}
      }, 200),
      debouncedMethod: debounce(async (val) => {
        try {
          this.getInfoPvz(val);
        } catch {}
      }, 300),
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
    async getInfoCityMail(item) {
      try {
        const obj = {
          settlement: item.city,
          region: item.region,
        };
        const {
          data: [data],
        } = await MailServices.getPvz(obj);
        if (!data || data?.length <= 0) return [];
        this.useDeliveryMail["index-to"] = data["postal-code"];
      } catch {}
    },
    async initMailDelivery(mass, checkAction) {
      try {
        const getMailObj = this.useDeliveryMail;
        getMailObj.mass = mass;
        const { data } = await MailServices.getPrice(getMailObj);
        const getPvz = this.useCheckPvzMail(data);
        return this.useGetPvzMail(getPvz, checkAction);
      } catch {
        return "error";
      }
    },
    async setCity(arr, idx) {
      try {
        //Удалить старую инфу
        delete this.objSet.to_location.address;
        this.useBuyerAddress = "";
        this.useActiveAddress = null;
        const item = arr[idx];

        this.deliveryOptions = false;
        this.inpVal =
          item.city +
          (item.city === item.region
            ? ", " + item.country
            : ", " + item.region + ", " + item.country);
        this.activeDropdown = false;
        const check = this.changeSumm();
        this.objSet.to_location.code = item.code;
        const response = await CdekController.getOptions(this.objSet);
        const newArr = this.useDeliveryLoad(check, response);
        await this.getInfoCityMail(item);
        const getPvzMail = await this.initMailDelivery(
          this.objSet?.packages[0]?.weight
            ? this.objSet?.packages[0]?.weight
            : [],
          check
        );

        if (!response && getPvzMail === "error") {
          this.deliveryOptions = {
            loadText: "Для данного населенного пункта тарифы отсутствуют",
          };
          this.useDeliveryPrice = 0;
          return;
        }

        if (
          getPvzMail &&
          getPvzMail?.length > 0 &&
          Array.isArray(newArr) &&
          getPvzMail !== "error"
        ) {
          getPvzMail.forEach((el) => newArr.push(el));
        }
        this.checkDeliveryScrollToTop(false, false);
        this.useDeliveryPrice = newArr[0].sumDelivery;
        this.deliveryOptions = newArr;
        this.useCityCode = item.code;
        this.usePvzCode = null;
        this.useActiveRegion = {
          settlement: item.city,
          region: item.region,
        };
      } catch {
        this.deliveryOptions = {
          loadText: "Для данного населенного пункта тарифы отсутствуют",
        };
        this.useDeliveryPrice = 0;
      }
    },
    async getPvzCode() {
      try {
        //Удалить старый адресс
        const packagesArr = this.useFilterDeliveryPackages();
        this.objSet.packages = packagesArr;
        const response = await CdekController.getOptions(this.objSet);
        if (!response) {
          return false;
        }
        return true;
      } catch {}
    },
    checkDeliveryScrollToTop(check, code) {
      if (check) {
        if (code) {
          this.useOrderInfo.region = this.useCityCode;
        }
        this.checkRegion = false;
        this.textRegion = "в данный регион доставка не осуществляется";
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }
      if (code) {
        this.useOrderInfo.region = this.useCityCode;
      }
      this.checkRegion = true;
      this.textRegion = "город*";
    },
    async getInfoPvz(val) {
      if (
        val &&
        !this.useSelectedSamovivos &&
        !this.deliveryOptions?.loadText
      ) {
        this.objSet.to_location.code = this.useCityCode;
        const response = await this.getPvzCode();
        if (!response) {
          this.useOrderInfo.region = false;
          this.checkDeliveryScrollToTop(true);
        } else {
          this.checkDeliveryScrollToTop(false, true);
        }
        return;
      }
      if (this.deliveryOptions?.loadText) {
        this.checkDeliveryScrollToTop(true);
      } else {
        this.checkDeliveryScrollToTop(false, true);
      }
    },
  },
  unmounted() {
    this.useOrderInfo = null;
    this.deliveryOptions = null;
    this.useActiveAddress = null;
    delete this.objSet.to_location.address;
    this.objSet.to_location.code = 44;
    this.useDeliveryPrice = null;
    this.useCityCode = 44;
    this.useBuyerAddress = "";
    this.useSelectedSamovivos = false;
    this.useActiveRegion = {
      settlement: "Москва",
      region: "Москва",
    };
    this.useDeliveryMail["index-to"] = "109289";
    this.useInfoObjPochta = {
      street: "",
      house: "",
      apartment: "",
      corpus: "",
    };
  },
  watch: {
    async useOrderInfo(val) {
      this.debouncedMethod(val);
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
  transition: all 0.4s ease;
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
.disableText {
  color: red;
}
.disableInput {
  border: 1px solid red;
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
@media screen and (max-width: 680px) {
  .region__input {
    font-size: 16px;
    padding: 13px 45px 13px 20px;
  }
}
</style>
