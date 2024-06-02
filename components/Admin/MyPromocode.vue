<template>
  <Transition>
    <section class="promocode" v-if="useCode">
      <div class="promocode__container" v-click-outside="handleClickOutside">
        <div class="promocode__position">
          <div class="promocode__head">
            <h3 class="promocode__title">промокоды</h3>
            <div class="promocode__close" @click="useCode = false">
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
            </div>
          </div>
          <div class="promocode__body" ref="promoContainer">
          <UIMyButton
            :class="{promocode__btn_add: isCandidate.length !== 0 || isPromo.length !== 0}"
            :info="'создать промокод'"
            :variant="'green'"
            :size="'big'"
            @click="addPromo"
          />
            <div class="promocode__animate" v-auto-animate>
              <div
                class="promocode__item"
                v-for="(item, idx) in isPromo"
                :key="idx"
              >
                <div class="promocode__line">
                  <h4 class="promocode__name">промокод</h4>
                  <p class="promocode__info">{{ item.name }}</p>
                </div>
                <div class="promocode__line">
                  <h4 class="promocode__name">скидка, %</h4>
                  <p class="promocode__info">{{ item.discount }}</p>
                </div>
                <div class="promocode__line">
                  <h4 class="promocode__name">срок действия</h4>
                  <p class="promocode__info">{{ item.date }}</p>
                </div>
                <div class="promocode__line">
                  <h4 class="promocode__name">количество</h4>
                  <p class="promocode__info">{{ item.count }}</p>
                </div>
                <img
                  class="promocode__trash"
                  @click="deletePromoReal(item.id)"
                  src="~/assets/images/Admin/trash.svg"
                  alt=""
                />
              </div>
            </div>

            <div class="promocode__animate" v-auto-animate>
              <div
                class="promocode__item promocode__item_add"
                v-for="(candidate, i) in isCandidate"
                :key="i"
              >
                <div class="promocode__line">
                  <h4 class="promocode__name">промокод</h4>
                  <input
                    class="promocode__input"
                    @input="validatorName(i)"
                    :class="{
                      promocode__input_error: candidate.errorName === true,
                    }"
                    type="text"
                    placeholder="пусто"
                    v-model="candidate.name"
                  />
                </div>
                <div class="promocode__line">
                  <h4 class="promocode__name">скидка, %</h4>
                  <input
                    class="promocode__input"
                    :class="{
                      promocode__input_error: candidate.errorDiscount === true,
                    }"
                    @input="validatorDiscount(i)"
                    type="text"
                    placeholder="пусто"
                    v-model="candidate.discount"
                  />
                </div>
                <div class="promocode__line">
                  <h4 class="promocode__name">срок действия</h4>
                  <input
                    class="promocode__input"
                    @input="validatorDate(i)"
                    :class="{
                      promocode__input_error: candidate.errorDate === true,
                    }"
                    type="text"
                    placeholder="пусто"
                    v-model="candidate.date"
                  />
                </div>
                <div class="promocode__line">
                  <h4 class="promocode__name">количество</h4>
                  <input
                    class="promocode__input"
                    @input="validatorCount(i)"
                    :class="{
                      promocode__input_error: candidate.errorCount === true,
                    }"
                    type="text"
                    placeholder="пусто"
                    v-model="candidate.count"
                  />
                </div>
                <div class="promocode__error"></div>
                <img
                  class="promocode__trash"
                  src="~/assets/images/Admin/trash.svg"
                  @click="deletePromoNoReal(i)"
                  alt=""
                />
              </div>
            </div>
    
            <img
              class="promocode__circle"
              :class="{promocode__btn_remove: isCandidate.length !== 0 || isPromo.length !== 0}"
              @click="addPromo"
              src="~/assets/images/Admin/add-circle.svg"
              alt=""
            />
          </div>
        </div>
        <div class="promocode__footer">
          <UIMyButton
            class="promocode__btn_save"
            :info="'сохранить'"
            :variant="'green'"
            @click="saveCandidate"
          />
          <UIMyButton
            class="promocode__btn_reset"
            :info="'отмена'"
            @click="resetAll"
          />
        </div>
      </div>
    </section>
  </Transition>
</template>

<script>
import PromoController from "@/http/controllers/PromoController";

export default {
  data() {
    return {
      useCode: useCode(),
      useStatus: useStatus(),
      usePromoId: usePromoId(),
      isCandidate: usePromoNoReal(),
      isPromo: usePromoReal(),
    };
  },
  async mounted() {
    this.useStatus = true;
    this.isPromo = await PromoController.getAll();
    this.useStatus = null;
  },
  methods: {
    validatorDiscount(idx) {
      let discount = String(this.isCandidate[idx].discount);
      this.isCandidate[idx].errorDiscount = false
      const regex = /^(100|[1-9]?[0-9])$/; // Маска для строк от "0" до "100"

      if (!regex.test(discount)) {
        if (Number(discount) <= 100) {
          discount = ""; // Устанавливаем значение "0" в случае некорректного ввода, кроме случаев, когда число больше 100
        } else {
          discount = discount.slice(0, -1); // Удаляем последний символ из строки
        }
      }

      this.isCandidate[idx].discount = discount;
    },
    validatorName(idx) {
      this.isCandidate[idx].errorName = false
    },
    validatorCount(idx) {
      let count = String(this.isCandidate[idx].count);
      this.isCandidate[idx].errorCount = false
      const regex = /^(10000|\d{1,4})$/; // Маска для строк от "0" до "100"

      if (!regex.test(count)) {
        if (Number(count) <= 10000) {
          count = ""; // Устанавливаем значение "0" в случае некорректного ввода, кроме случаев, когда число больше 100
        } else {
          count = count.slice(0, -1); // Удаляем последний символ из строки
        }
      }

      this.isCandidate[idx].count = count;
    },
    validatorDate(idx) {
      let date = String(this.isCandidate[idx].date);
      this.isCandidate[idx].errorDate = true
      let value = date.replace(/\D/g, ''); // Удаляем все нецифровые символы
      if (value.length > 8) value = value.slice(0, 8); // Ограничение длины до 8 цифр
      // Форматирование значения
      if (value.length > 2) {
        value = `${value.slice(0, 2)}.${value.slice(2)}`;
      }
      if (value.length > 4) {
        value = `${value.slice(0, 5)}.${value.slice(5)}`;
      }

      if(value.length === 10) {
        this.isCandidate[idx].errorDate = false
      }

      this.isCandidate[idx].date = value
  
    },
    handleClickOutside() {
      this.useCode = false;
    },
    addPromo() {
      const newPromo = {
        name: "",
        discount: "",
        date: "",
        count: "",
        errorName: false,
        errorDiscount: false,
        errorDate: false,
        errorCount: false,
      };
      this.isCandidate.push(newPromo);

      this.$nextTick(() => {
      setTimeout(() => {
        this.scrollToBottom();
      }, 300); // Задержка в 1000 миллисекунд (1 секунда)
      });
    },
    deletePromoReal(id) {
      this.useStatus = "deletePromo";
      this.usePromoId = id;
    },
    deletePromoNoReal(id) {
      this.useStatus = "deletePromoNoReal";
      this.usePromoId = id;
    },
    resetAll() {
      this.isCandidate = [];
    },
    scrollToBottom() {
      const container = this.$refs.promoContainer;
      container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth'
    });
    },
    async saveCandidate() {
      this.useStatus = true;

      for (let i = 0; i < this.isCandidate.length; i++) {
        if (this.isCandidate[i].name.length === 0) {
          this.isCandidate[i].errorName = true;
        } else {
          this.isCandidate[i].errorName = false;
        }

        if (this.isCandidate[i].discount.length === 0) {
          this.isCandidate[i].errorDiscount = true;
        } else {
          this.isCandidate[i].errorDiscount = false;
        }

        if (this.isCandidate[i].date.length < 10) {
          this.isCandidate[i].errorDate = true;
        } else {
          this.isCandidate[i].errorDate = false;
        }

        if (this.isCandidate[i].count.length === 0) {
          this.isCandidate[i].errorCount = true;
        } else {
          this.isCandidate[i].errorCount = false;
        }

        if (
          this.isCandidate[i].errorName ||
          this.isCandidate[i].errorDiscount ||
          this.isCandidate[i].errorDate ||
          this.isCandidate[i].errorCount
        ) {
        } else {
          const formData = {
            name: this.isCandidate[i].name,
            discount: this.isCandidate[i].discount,
            date: this.isCandidate[i].date,
            count: this.isCandidate[i].count,
          };

          await PromoController.createPromo(formData);
          this.isCandidate.splice(i, 1);
          this.isPromo = await PromoController.getAll();
        }
      }
      this.useStatus = null;
    },
  },
};
</script>

<style scoped>
.promocode {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  z-index: 1000;
  transition: all 0.3s ease;
}
.promocode__container {
  background: #fefaf1;
  margin-left: 50%;
  width: 50%;
  height: 100%;
  box-shadow: 0 5px 10px #cfc9b4;
  overflow: hidden;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: nowrap;
}
.promocode__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.promocode__title {
  font-size: 30px;
  font-weight: 600;
}
.promocode__close {
  transform: translateY(3px);
  transition: all 0.3s ease;
  cursor: pointer;
}
.promocode__close:hover {
  transform: translateY(3px) scale(1.4);
}
.promocode__body {
  margin-top: 40px;
  height: 760px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.promocode__item {
  position: relative;
  width: 100%;
  background: #ede9df;
  border-radius: 21px;
  padding: 15px 20px 30px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 20px;
}
.promocode__trash {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: all 0.3s ease;
}
.promocode__trash:hover {
  transform: scale(1.1);
}
.promocode__name {
  font-size: 16px;
  margin-bottom: 10px;
  color: #d2bcae;
}
.promocode__info {
  font-weight: 500;
}
.promocode__footer {
  display: flex;
  align-items: center;
}
.promocode__btn_save {
  margin-right: 10px;
  flex-grow: 2;
}
.promocode__btn_reset {
  width: 550px !important;
  flex-grow: 1;
}
.promocode__circle {
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: none;
}
.promocode__input {
  background: transparent;
}
.promocode__animate {
  width: 100%;
}
.promocode__input_error::placeholder {
  color: #f3224c;
}
.promocode__input_error {
  color: #f3224c;
}
.promocode__btn_add {
  display: none;
}
.promocode__btn_remove {
  display: block;
}
.v-enter-active,
.v-leave-active {
  transition: width 0.7s ease;
}
.v-enter-from,
.v-leave-to {
  width: 0;
}
</style>
