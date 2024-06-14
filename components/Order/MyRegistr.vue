<template>
  <div class="registr">
    <div class="registr__content">
      <div class="register__option">
        <label class="register__label" data-cursor-class="animateCursor">
          <input
            type="checkbox"
            v-model="selectedOption"
            class="register__custom"
          />
          <span class="register__custom_radio"></span>
          <div class="register__details">
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь c
            <NuxtLink class="register__link" :to="'/'"
              >политикой конфиденциальности</NuxtLink
            >
          </div>
        </label>
      </div>
    </div>
    <div class="register__btn">
      <UIButtonMyButton
        aria-label="оформить заказ"
        info="оформить заказ"
        fontSize="24"
        data-cursor-class="animateCursor"
        bigSize="bigSize"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
      option: "option",
    };
  },
};
</script>

<style scoped>
.register__option {
  margin-bottom: 25px;
  display: flex;
  align-items: flex-start;
}

.register__custom {
  display: none;
}
.register__label {
  display: flex;
  align-items: flex-start;
}

.register__custom + .register__custom_radio {
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

.register__custom + .register__custom_radio::before {
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

.register__custom:checked + .register__custom_radio::before {
  width: 12px;
  height: 12px;
}

.register__custom:checked + .register__custom_radio {
  border-color: #af9280;
}
.registr__content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.register__details {
  font-weight: 300;
  font-size: 18px;
  color: var(--brown);
  text-transform: lowercase;
  line-height: 18px;
}
.register__link {
  text-decoration: underline;
}
</style>
