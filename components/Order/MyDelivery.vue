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
                <div class="delivery__price">
                  {{
                    option.sumDelivery === 0
                      ? "бесплатно"
                      : option.sumDelivery + " ₽"
                  }}
                </div>
                <div class="delivery__description">
                  {{ option.des }}
                </div>
              </div>
            </label>
          </div>
          <div
            class="delivery__btn"
            v-if="
              option.name.toLowerCase().includes('самовывоз') &&
              selectedOption === index
            "
          >
            <UIButtonMyButton
              class="delivery__button"
              info="Выбрать адрес"
              aria-label="Выбрать адрес"
              fontSize="18"
              padding="10px 30px"
              data-cursor-class="animateCursor"
              @click="openPvz(option)"
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
import MailServices from "~/http/services/MailServices";

export default {
  data() {
    return {
      selectedOption: useIndexDelivery(),
      usePvzModal: usePvzModal(),
      deliveryOptions: useDeliveryArr(),
      useOrderInfo: useOrderInfo(),
      useDeliveryPrice: useDeliveryPrice(),
      localStorageArr: null,
      useCursor: useCursor(),
      objSet: useDeliveryObj(),
      useDeliveryLoad: useDeliveryLoad,
      useActiveAddress: useActiveAddress(),
      useFilterDeliveryPackages: useFilterDeliveryPackages,
      useSelectedSamovivos: useSelectedSamovivos(),
      useBuyerAddress: useBuyerAddress(),
      activePvzObj: null,
      useDeliveryMail: useDeliveryMail(),
      useCheckPvzMail: useCheckPvzMail,
      useGetPvzMail: useGetPvzMail,
      useActiveRegion: useActiveRegion(),
      useactivePvzMail: useActivePvzMail(),
      useInputMobile: useInputMobile(),
      useInputStreet: useInputStreet(),
      useInputHouse: useInputHouse(),
      useInputApartment: useInputApartment(),
      useInputCorpus: useInputCorpus(),
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
    async initMailDelivery(mass, checkAction) {
      try {
        const getMailObj = this.useDeliveryMail;
        getMailObj.mass = mass;
        const { data } = await MailServices.getPrice(getMailObj);
        if (!data || data?.length < 0) {
          return [];
        }
        const getPvz = this.useCheckPvzMail(data);
        return this.useGetPvzMail(getPvz, checkAction);
      } catch {
        return [];
      }
    },
    async initApp() {
      try {
        const packagesArr = this.useFilterDeliveryPackages();
        this.objSet.packages = packagesArr;
        const check = this.changeSumm();
        //Статичные данные, иммитация запроса к серверу
        const responseMail = await this.initMailDelivery(
          packagesArr[0].weight,
          check
        );

        //Пример ответа с сервера почты России
        // const responseMail = [
        //   {
        //     calendar_max: 4,
        //     calendar_min: 2,
        //     day: "дня",
        //     deliveryTime: "2-4",
        //     des: "Почта России (самовывоз)",
        //     name: "Почта России (самовывоз)",
        //     nameCompany: "Почта России",
        //     sumDelivery: 222,
        //   },
        // ];
        const response = await CdekController.getOptions(this.objSet);
        const newArr = this.useDeliveryLoad(check, response);
        if (responseMail && responseMail?.length > 0) {
          responseMail.forEach((el) => newArr.push(el));
        }
        this.useDeliveryPrice = newArr[0].sumDelivery;
        this.deliveryOptions = newArr;
        setTimeout(() => {
          this.useCursor = true;
        }, 0);
      } catch (e) {}
    },
    openPvz(item) {
      this.usePvzModal = true;
    },
  },
  mounted() {
    this.initApp();
  },
  watch: {
    deliveryOptions: {
      handler(val) {
        //Очистить переменные доставки
        this.selectedOption = 0;
        this.useactivePvzMail = false;
        this.useInputStreet = "";
        this.useInputHouse = "";
        this.useInputApartment = "";
        this.useInputCorpus = "";

        const item = this.deliveryOptions[this.selectedOption];
        if (item?.nameCompany === "Почта России") {
          this.useactivePvzMail = true;
        } else {
          this.useactivePvzMail = false;
        }
        const findName = item?.name?.toLowerCase().includes("самовывоз");
        if (findName) {
          this.useSelectedSamovivos = true;
        } else {
          this.useSelectedSamovivos = false;
        }

        setTimeout(() => {
          this.useCursor = true;
        }, 100);
      },
      deep: true,
    },
    selectedOption(val) {
      if (!this.deliveryOptions) return;
      const item = this.deliveryOptions[val];
      if (item.nameCompany === "Почта России") {
        this.useactivePvzMail = true;
      } else {
        this.useactivePvzMail = false;
      }
      if (!item?.name) return;
      const findSamovivos = item.name.toLowerCase().includes("самовывоз");
      if (findSamovivos) {
        this.useSelectedSamovivos = true;
      } else {
        this.useSelectedSamovivos = false;
      }
      delete this.objSet.to_location.address_full;
      this.useBuyerAddress = "";
      this.useActiveAddress = null;
      this.useInputStreet = "";
      this.useInputHouse = "";
      this.useInputApartment = "";
      this.useInputCorpus = "";
      this.useCursor = false;
      setTimeout(() => {
        this.useCursor = true;
      }, 10);
    },
    useOrderInfo(val) {
      if (val && (this.selectedOption || this.selectedOption <= 0)) {
        const elHtml = this.deliveryOptions[this.selectedOption];
        if (elHtml) {
          this.useOrderInfo.delivery = elHtml;
        } else {
          this.useOrderInfo.delivery = false;
          this.useOrderInfo.region = false;
        }
      }
    },
  },
  unmounted() {
    this.useInputStreet = "";
    this.useInputHouse = "";
    this.useInputApartment = "";
    this.useInputCorpus = "";
    this.useInputMobile = "";
  },
};
</script>

<style>
@media screen and (max-width: 1400px) {
  .delivery__button .button__btn {
    font-size: 18px !important;
  }
}
@media screen and (max-width: 1200px) {
  .delivery__button .button__btn {
    font-size: 17px !important;
  }
}
</style>

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
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  border: 1.2px solid #af9280;
  background-color: #fff;
  display: inline-block;
  position: relative;
  margin-right: 10px;
  transition: border-color 0.4s ease;
  cursor: pointer;
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
@media screen and (max-width: 1400px) {
  .delivery__name {
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 20px;
  }
  .delivery__price {
    font-size: 24px;
  }
  .delivery__description {
    font-size: 15px;
  }
}
</style>
