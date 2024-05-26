<template>
  <div class="modalInfo" :class="{ modalInfo_actice: useStatus !== null }">
    <div class="modalInfo__clock"></div>
    <Transition>
      <div class="modalInfo__border" v-if="useStatus == 200">
        <div class="modalInfo__card">
          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3994 34.5293L30.0162 44.1461L49.2499 24.9125" stroke="#AF9280" stroke-width="4"
              stroke-linecap="round" />
            <circle cx="34" cy="34" r="32" stroke="#AF9280" stroke-width="4" />
          </svg>
          <h3 class="modalInfo__title">Добро пожаловать!</h3>
          <p class="modalInfo__description">
            Мы рады сообщить, что вы успешно вошли в свой аккаунт. Теперь вы можете начать пользоваться функционалом
            вашего сайта.
          </p>
          <UIMyButton class="modalInfo__btn" :info="'перейти в админ панель'" @click="toAdmin"/>
        </div>
      </div>
    </Transition>
    <Transition>
      <div class="modalInfo__border" v-if="useStatus == 401">
        <div class="modalInfo__card">
          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="34" cy="34" r="32" stroke="#AF9280" stroke-width="4" />
            <rect x="44.11" y="22" width="4" height="31.2682" rx="2" transform="rotate(45 44.11 22)" fill="#AF9280" />
            <rect x="22" y="24.8281" width="4" height="31.2682" rx="2" transform="rotate(-45 22 24.8281)"
              fill="#AF9280" />
          </svg>
          <h3 class="modalInfo__title">Некоректный логин или пароль</h3>
          <p class="modalInfo__description">
            Пожалуйста убедитесь, что вы правильно вводите логин или пароль и попробуйте ещё раз
          </p>
          <UIMyButton class="modalInfo__btn" :info="'повторить попытку'" @click="offActive"/>
        </div>
      </div>
    </Transition>
    <Transition>
      <div class="modalInfo__border" v-if="useStatus == 'deletePromo'" id="test">
        <div class="modalInfo__card">
          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="34" cy="34" r="32" stroke="#AF9280" stroke-width="4" />
            <path
              d="M33.2351 51H33.2595M24 23.5496C25.3195 19.7383 28.9558 17 33.2351 17C38.628 17 43 21.3492 43 26.7143C43 30.7372 40.5419 34.1889 37.0385 35.6641C35.23 36.4257 34.3258 36.8065 34.0094 37.1006C33.6328 37.4508 33.5612 37.5581 33.384 38.0397C33.2351 38.444 33.2351 39.0675 33.2351 40.3143V43.7143"
              stroke="#AF9280" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h3 class="modalInfo__title">Вы уверены, что хотите удалить данный промокод</h3>
          <p class="modalInfo__description">
            Если вы нажмете "принять" данный промокод будет удален без возможности восстановления
          </p>
          <div class="modalInfo__position">
            <UIMyButton class="modalInfo__btn" :info="'принять'" @click="deletePromo"/>
            <UIMyButton class="modalInfo__btn" :info="'отмена'" @click="offActive"/>
          </div>
        </div>
      </div>
    </Transition>
    <Transition>
      <div class="modalInfo__border" v-if="useStatus == 'deletePromoNoReal'" id="test">
        <div class="modalInfo__card">
          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="34" cy="34" r="32" stroke="#AF9280" stroke-width="4" />
            <path
              d="M33.2351 51H33.2595M24 23.5496C25.3195 19.7383 28.9558 17 33.2351 17C38.628 17 43 21.3492 43 26.7143C43 30.7372 40.5419 34.1889 37.0385 35.6641C35.23 36.4257 34.3258 36.8065 34.0094 37.1006C33.6328 37.4508 33.5612 37.5581 33.384 38.0397C33.2351 38.444 33.2351 39.0675 33.2351 40.3143V43.7143"
              stroke="#AF9280" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h3 class="modalInfo__title">Вы уверены, что хотите удалить данный промокод</h3>
          <p class="modalInfo__description">
            Если вы нажмете "принять" данный промокод будет удален без возможности восстановления
          </p>
          <div class="modalInfo__position">
            <UIMyButton class="modalInfo__btn" :info="'принять'" @click="deletePromoNoReal"/>
            <UIMyButton class="modalInfo__btn" :info="'отмена'" @click="offActive"/>
          </div>
        </div>
      </div>
    </Transition>
    <Transition>
      <div class="modalInfo__border" v-if="useStatus === 'deleteCategory'" id="test">
        <div class="modalInfo__card">
          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="34" cy="34" r="32" stroke="#AF9280" stroke-width="4" />
            <path
              d="M33.2351 51H33.2595M24 23.5496C25.3195 19.7383 28.9558 17 33.2351 17C38.628 17 43 21.3492 43 26.7143C43 30.7372 40.5419 34.1889 37.0385 35.6641C35.23 36.4257 34.3258 36.8065 34.0094 37.1006C33.6328 37.4508 33.5612 37.5581 33.384 38.0397C33.2351 38.444 33.2351 39.0675 33.2351 40.3143V43.7143"
              stroke="#AF9280" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h3 class="modalInfo__title">Вы уверены, что хотите удалить данную категорию</h3>
          <p class="modalInfo__description">
            Если вы нажмете "принять" данная категория будет удалена без возможности восстановления
          </p>
          <div class="modalInfo__position">
            <UIMyButton class="modalInfo__btn" :info="'принять'" @click="deleteCategory"/>
            <UIMyButton class="modalInfo__btn" :info="'отмена'" @click="offActive"/>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
  
  <script>
  import PromoController from "@/http/controllers/PromoController";
  import CategoryController from "@/http/controllers/CategoryController";

  export default {
    data() {
      return {
        useStatus: useStatus(),
        usePromoReal: usePromoReal(),
        usePromoId: usePromoId(),
        usePromoNoReal: usePromoNoReal(),
        useCategoryAll: useCategoryAll(),
        useCategoryId: useCategoryId()
      };
    },
    methods: {
      offActive() {
        this.useStatus = null
      },
      toAdmin() {
        this.$router.push("/admin")
        this.useStatus = null
      },
      async deletePromo() {
        this.useStatus = true
        await PromoController.deletePromo(this.usePromoId)
        this.usePromoReal = await PromoController.getAll()
        this.useStatus = null
      },
      deletePromoNoReal() {
        this.usePromoNoReal.splice(this.usePromoId, 1);
        this.useStatus = null
      },
      async deleteCategory() {
        this.useStatus = true
        this.useCategoryAll.splice(this.useCategoryId.index, 1);
        if (this.useCategoryId.id !== undefined) {
          await CategoryController.deleteCategoryOne(this.useCategoryId.id)
        }
        this.useStatus = null
      }
    },
  };
  </script>
  
  <style scoped>
  .modalInfo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    z-index: 1000;
    pointer-events: none;
    opacity: 0;
    transition: all 0.3s ease;
  }
  .modalInfo_actice {
    opacity: 1;
    pointer-events: all;
  }
  .modalInfo__clock {
    --clock-color: var(--brown);
    --clock-width: 5rem;
    --clock-radius: calc(var(--clock-width) / 2);
    --clock-minute-length: calc(var(--clock-width) * 0.4);
    --clock-hour-length: calc(var(--clock-width) * 0.2);
    --clock-thickness: 0.2rem;
  
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--clock-width);
    height: var(--clock-width);
    border: 3px solid var(--clock-color);
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  .modalInfo__clock::before,
  .modalInfo__clock::after {
    position: absolute;
    content: "";
    top: calc(var(--clock-radius) * 0.25);
    width: var(--clock-thickness);
    background: var(--clock-color);
    border-radius: 10px;
    transform-origin: center calc(100% - calc(var(--clock-thickness) / 2));
    animation: spin infinite linear;
  }
  
  .modalInfo__clock::before {
    height: var(--clock-minute-length);
    animation-duration: 2s;
  }
  
  .modalInfo__clock::after {
    top: calc(var(--clock-radius) * 0.25 + var(--clock-hour-length));
    height: var(--clock-hour-length);
    animation-duration: 15s;
  }
  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
  .modalInfo__border {
    padding: 0 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }
  .modalInfo__card {
    width: 620px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .modalInfo__title {
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    padding-top: 20px;
  }
  .modalInfo__description {
    color: #6b7280;
    text-align: center;
    max-width: 500px;
    padding-top: 10px;
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity transform 0.5s ease;
  }
  
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translate(-50%, -55%);
  }
  .modalInfo__path {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  .modalInfo__cancellation {
    margin-right: 20px;
  }
  .modalInfo__position {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .modalInfo__btn {
    margin-top: 30px;
  }
  .modalInfo__btn:nth-child(2) {
    margin-left: 10px;
  }
  @media(max-width: 660px) {
    .modalInfo__card {
      width: 520px;
    }
  }
  @media(max-width: 540px) {
    .modalInfo__card {
      width: 420px;
    }
  }
  @media(max-width: 460px) {
    .modalInfo__card {
      width: 320px;
    }
  }
  </style>