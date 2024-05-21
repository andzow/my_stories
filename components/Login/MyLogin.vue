<template>
  <section class="login">
    <div class="login__container">
        <div class="login__form">
            <h3 class="login__title">(  вход в панель администратора  )</h3>
            <div class="login__box">
                <span class="login__span">логин*</span>
                <Transition>
                    <p class="login__text" v-if="LoginValidator === 1">поле не может быть пустым</p>
                </Transition>
                <Transition>
                    <p class="login__text" v-if="LoginValidator === 2">логин должен быть меньше 20 символов</p>
                </Transition>
                <input class="login__input" :class="{login__input_error: LoginValidator === 1 || LoginValidator === 2 }" type="text" v-model="isLogin" @input="checkLogin">
            </div>
            <div class="login__box login__box_password">
                <span class="login__span">пароль*</span>
                <Transition>
                    <p class="login__text" v-if="PasswordValidator === 1">поле не может быть пустым</p>
                </Transition>
                <Transition>
                    <p class="login__text" v-if="PasswordValidator === 2">пароль должен быть меньше 20 символов</p>
                </Transition>
                <input class="login__input" type="text" :class="{login__input_error: PasswordValidator === 1 || PasswordValidator === 2 }" v-model="isPassword" @input="checkPassword">
            </div>
            <UIMyButton :info="'войти'" @click="checkAll"/>
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
            isLogin: '',
            LoginValidator: 0,
            isPassword: '',
            PasswordValidator: 0,
        }
    },
    methods: {
        checkLogin() {
            if (this.isLogin === '') {
                this.LoginValidator = 1
            } else if (this.isLogin.length > 20) {
                this.LoginValidator = 2
            } else {
                this.LoginValidator = 3
            }
        },
        checkPassword() {
            if (this.isPassword === '') {
                this.PasswordValidator = 1
            } else if (this.isPassword.length > 20) {
                this.PasswordValidator = 2
            } else {
                this.PasswordValidator = 3
            }
        },
        async checkAll() {
            this.checkLogin()
            this.checkPassword()

            if (this.LoginValidator === 3 && this.PasswordValidator === 3) {
                this.useStatus = true;
                const dataLogin = await AuthController.login(this.isLogin, this.isPassword)
                this.useStatus = dataLogin;
            }
        }
    }
}
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
.login__input {
    padding: 12px 15px;
    background-color: #f7f6f3;
    border: 1px solid var(--yellow);
    transition: all .3s ease;
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