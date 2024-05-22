<template>
  <Transition>
    <section class="promocode" v-if="useCode">
      <div class="promocode__container">
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
          <div class="promocode__body">

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
                <p class="promocode__info">{{ item.discuont }}</p>
              </div>
              <div class="promocode__line">
                <h4 class="promocode__name">срок действия</h4>
                <p class="promocode__info">{{ item.time }}</p>
              </div>
              <div class="promocode__line">
                <h4 class="promocode__name">количество</h4>
                <p class="promocode__info">{{ item.count }}</p>
              </div>
              <img class="promocode__trash" @click="deletePromo" src="~/assets/images/Admin/trash.svg" alt="">
            </div>

            <div class="promocode__animate" v-auto-animate>
            <div class="promocode__item promocode__item_add" v-for="(candidate, i) in isCandidate" :key="i">
              <div class="promocode__line">
                <h4 class="promocode__name">промокод</h4>
                <input class="promocode__input" type="text" placeholder="пусто">
              </div>
              <div class="promocode__line">
                <h4 class="promocode__name">скидка, %</h4>
                <input class="promocode__input" type="number" placeholder="пусто">
              </div>
              <div class="promocode__line">
                <h4 class="promocode__name">срок действия</h4>
                <input class="promocode__input" type="text" placeholder="пусто">
              </div>
              <div class="promocode__line">
                <h4 class="promocode__name">количество</h4>
                <input class="promocode__input" type="number" placeholder="пусто">
              </div>
              <img class="promocode__trash" src="~/assets/images/Admin/trash.svg" alt="">
            </div>
            </div>

            <img class="promocode__circle" @click="addPromo" src="~/assets/images/Admin/add-circle.svg" alt="">
          </div>
        </div>
        <div class="promocode__footer">
          <UIMyButton class="promocode__btn_save" :info="'сохранить'" :variant="'green'"/>
          <UIMyButton class="promocode__btn_reset" :info="'отмена'"/>
        </div>
      </div>
    </section>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      useCode: useCode(),
      isCandidate: [],
      isPromo: [
        {
          id: "1",
          name: "SPRING2024",
          discuont: 10,
          time: "25.05.2024",
          count: 30,
        }
      ],
    };
  },
  methods: {
    addPromo() {
      const newPromo = {
        name: "",
        discuont: "",
        time: "",
        count: "",
      };
      this.isCandidate.push(newPromo);
    },
    deletePromo() {
      
    }
  }
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
}
.promocode__trash {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: all .3s ease;
}
.promocode__trash:hover {
  transform: scale(1.1);
}
.promocode__item:not(:last-child) {
  margin-bottom: 20px;
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
  cursor: pointer;
  transition: all .3s ease;
}
.promocode__input {
  background: transparent;
}
.promocode__animate {
  width: 100%;
}
.promocode__animate:not(:last-child) {
  margin-bottom: 20px;
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
