<template>
  <section class="login">
    <div class="login__container">
      <div class="login__form">
        <h3 class="login__title">( вход в панель администратора )</h3>
        <div class="login__box">
          <span class="login__span">логин*</span>
          <Transition>
            <p class="login__text" v-if="LoginValidator === 1">
              поле не может быть пустым
            </p>
          </Transition>
          <Transition>
            <p class="login__text" v-if="LoginValidator === 2">
              логин должен быть меньше 20 символов
            </p>
          </Transition>
          <input
            class="login__input"
            :class="{
              login__input_error: LoginValidator === 1 || LoginValidator === 2,
            }"
            type="text"
            v-model="isLogin"
            @input="checkLogin"
          />
        </div>
        <div class="login__box login__box_password">
          <span class="login__span">пароль*</span>
          <Transition>
            <p class="login__text" v-if="PasswordValidator === 1">
              поле не может быть пустым
            </p>
          </Transition>
          <Transition>
            <p class="login__text" v-if="PasswordValidator === 2">
              пароль должен быть меньше 20 символов
            </p>
          </Transition>
          <div class="login__bl">
            <input
              class="login__input"
              :class="{
                login__input_error:
                  PasswordValidator === 1 || PasswordValidator === 2,
              }"
              v-model="isPassword"
              @input="checkPassword"
              :type="typeInputPassword"
            />
            <button
              class="login__hide"
              v-if="typeInputPassword === 'password'"
              @click="typeInputPassword = 'text'"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33497 13.2561C0.888345 12.4782 0.888342 11.522 1.33497 10.7441C3.68496 6.65097 7.44378 4 11.6798 4C15.9158 4 19.6746 6.65094 22.0246 10.744C22.4712 11.5219 22.4712 12.4781 22.0246 13.256C19.6746 17.3491 15.9158 20 11.6798 20C7.44377 20 3.68497 17.3491 1.33497 13.2561Z"
                  stroke="#af9280"
                  stroke-width="2"
                />
                <path
                  d="M14.6797 12C14.6797 13.6569 13.3365 15 11.6797 15C10.0228 15 8.67969 13.6569 8.67969 12C8.67969 10.3431 10.0228 9 11.6797 9C13.3365 9 14.6797 10.3431 14.6797 12Z"
                  stroke="#af9280"
                  stroke-width="2"
                />
              </svg>
            </button>
            <button
              class="login__hide"
              v-else
              @click="typeInputPassword = 'password'"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.38679 2.29289C5.99627 1.90237 5.3631 1.90237 4.97258 2.29289C4.58206 2.68342 4.58206 3.31658 4.97258 3.70711L6.38679 2.29289ZM20.9726 19.7071C21.3631 20.0976 21.9963 20.0976 22.3868 19.7071C22.7773 19.3166 22.7773 18.6834 22.3868 18.2929L20.9726 19.7071ZM1.33497 13.8124L2.2022 13.3145L1.33497 13.8124ZM1.33497 11.3004L0.467735 10.8025L1.33497 11.3004ZM22.0246 11.3003L21.1573 11.7982V11.7982L22.0246 11.3003ZM21.3042 12.963C21.1567 13.4953 21.4685 14.0463 22.0007 14.1939C22.533 14.3414 23.084 14.0296 23.2316 13.4974L21.3042 12.963ZM15.326 4.17097C14.8039 3.99091 14.2347 4.2682 14.0546 4.79031C13.8746 5.31242 14.1519 5.88164 14.674 6.0617L15.326 4.17097ZM20.341 17.7009C20.7281 17.307 20.7226 16.6739 20.3288 16.2867C19.9349 15.8996 19.3017 15.9051 18.9146 16.2989L20.341 17.7009ZM8.20014 6.24391C8.71183 6.03607 8.95814 5.45278 8.7503 4.9411C8.54246 4.42941 7.95917 4.1831 7.44748 4.39094L8.20014 6.24391ZM4.97258 3.70711L20.9726 19.7071L22.3868 18.2929L6.38679 2.29289L4.97258 3.70711ZM11.6798 19.5564C7.89339 19.5564 4.42466 17.1854 2.2022 13.3145L0.467746 14.3103C2.94527 18.6255 6.99415 21.5564 11.6798 21.5564V19.5564ZM0.467735 10.8025C-0.155916 11.8887 -0.155911 13.2241 0.467746 14.3103L2.2022 13.3145C1.9326 12.8449 1.9326 12.2679 2.2022 11.7983L0.467735 10.8025ZM21.1573 11.7982C21.3626 12.1557 21.4117 12.5756 21.3042 12.963L23.2316 13.4974C23.4799 12.6014 23.3668 11.6297 22.8918 10.8024L21.1573 11.7982ZM14.674 6.0617C17.2514 6.95054 19.5394 8.98022 21.1573 11.7982L22.8918 10.8024C21.0834 7.65274 18.4478 5.24756 15.326 4.17097L14.674 6.0617ZM18.9146 16.2989C16.8801 18.3688 14.367 19.5564 11.6798 19.5564V21.5564C14.9897 21.5564 17.9956 20.0871 20.341 17.7009L18.9146 16.2989ZM2.2022 11.7983C3.71737 9.15924 5.82167 7.21003 8.20014 6.24391L7.44748 4.39094C4.58162 5.55503 2.16221 7.85113 0.467735 10.8025L2.2022 11.7983ZM13.6194 12.0689C13.7252 12.4901 13.6911 12.9343 13.5221 13.3344L15.3646 14.1125C15.7025 13.3123 15.7708 12.4238 15.559 11.5814L13.6194 12.0689ZM13.5221 13.3344C13.3532 13.7345 13.0586 14.0688 12.6828 14.2866L13.686 16.0169C14.4375 15.5812 15.0267 14.9127 15.3646 14.1125L13.5221 13.3344ZM12.6828 14.2866C12.3071 14.5045 11.8707 14.5941 11.4395 14.5419L11.1993 16.5274C12.0616 16.6318 12.9345 16.4525 13.686 16.0169L12.6828 14.2866ZM11.4395 14.5419C11.0083 14.4898 10.6058 14.2987 10.2929 13.9975L8.90609 15.4386C9.53199 16.0409 10.3369 16.4231 11.1993 16.5274L11.4395 14.5419ZM10.2929 13.9975C9.97994 13.6964 9.77353 13.3015 9.70485 12.8727L7.73001 13.1889C7.86737 14.0466 8.28019 14.8363 8.90609 15.4386L10.2929 13.9975ZM9.70485 12.8727C9.63617 12.4438 9.70896 12.0042 9.91222 11.6204L8.14475 10.6844C7.73824 11.4521 7.59266 12.3312 7.73001 13.1889L9.70485 12.8727ZM9.91222 11.6204C10.1155 11.2366 10.4381 10.9294 10.8315 10.7452L9.98325 8.93395C9.19661 9.30235 8.55126 9.9168 8.14475 10.6844L9.91222 11.6204ZM10.8315 10.7452C11.2248 10.561 11.6674 10.5098 12.0924 10.5994L12.505 8.64247C11.6551 8.46324 10.7699 8.56556 9.98325 8.93395L10.8315 10.7452Z"
                  fill="#af9280"
                />
              </svg>
            </button>
          </div>
        </div>
        <UIMyButton :info="'войти'" @click="checkAll" />
      </div>
    </div>
  </section>
</template>

<script>
import AuthController from "@/http/controllers/AuthController";

export default {
  data() {
    return {
      useStatus: useStatus(),
      isLogin: "",
      LoginValidator: 0,
      isPassword: "",
      PasswordValidator: 0,
      typeInputPassword: "password",
    };
  },
  methods: {
    checkLogin() {
      if (this.isLogin === "") {
        this.LoginValidator = 1;
      } else if (this.isLogin.length > 20) {
        this.LoginValidator = 2;
      } else {
        this.LoginValidator = 3;
      }
    },
    checkPassword() {
      if (this.isPassword === "") {
        this.PasswordValidator = 1;
      } else if (this.isPassword.length > 20) {
        this.PasswordValidator = 2;
      } else {
        this.PasswordValidator = 3;
      }
    },
    async checkAll() {
      this.checkLogin();
      this.checkPassword();

      if (this.LoginValidator === 3 && this.PasswordValidator === 3) {
        this.useStatus = true;
        const dataLogin = await AuthController.login(
          this.isLogin,
          this.isPassword
        );
        this.useStatus = dataLogin;
      }
    },
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
}
.login__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
}
.login__form {
  max-width: 600px;
}
.login__title {
  font-size: 36px;
  margin-bottom: 60px;
}
.login__box {
  display: flex;
  flex-direction: column;
}
.login__box_password {
  margin-top: 15px;
  margin-bottom: 80px;
}
.login__span {
  margin-bottom: 10px;
  font-size: 18px;
}
.login__bl {
  position: relative;
  width: 100%;
}
.login__hide {
  position: absolute;
  right: 2%;
  top: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: none;
  cursor: pointer;
  z-index: 5;
}
.login__input {
  position: relative;
  padding: 12px 15px;
  background-color: #f7f6f3;
  border: 1px solid var(--yellow);
  width: 100%;
  transition: all 0.3s ease;
  z-index: 4;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.login__text {
  color: #dc143c;
}
.login__input_error {
  border-color: #dc143c;
}
</style>
