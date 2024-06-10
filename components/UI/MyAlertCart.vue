<template>
  <div class="alert">
    <div class="alert__content">
      <div class="alert__info">
        <div
          class="alert__image"
          :style="{
            background: `url(${useAlertCart.imageSrc}) no-repeat`,
            backgroundSize: 'cover',
          }"
        ></div>
        <div class="alert__block">
          <div class="alert__name">{{ useAlertCart.name }}</div>
          <p class="alert__size">
            размер<br />
            <span class="alert__span">{{ useAlertCart.size }}</span>
          </p>
        </div>
      </div>
      <div class="alert__price">
        <div class="alert__close">
          <button
            class="alert__btn"
            data-cursor-class="animateCursor"
            @click="closeAlert"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10L10 1"
                stroke="#AF9280"
                stroke-width="1.29566"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 1L10 10"
                stroke="#AF9280"
                stroke-width="1.29566"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="alert__summ">{{ useAlertCart.price }} ₽</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useCursor: useCursor(),
      useAlertCart: useAlertCart(),
      timeOut: null,
    };
  },
  methods: {
    delTimeOut() {
      this.timeOut = clearTimeout(this.timeOut);
      this.timeOut = null;
      this.useAlertCart = false;
    },
    closeAlert() {
      if (this.timeOut) {
        clearTimeout(this.timeOut);
        this.timeOut = null;
      }
      this.useAlertCart = false;
    },
    closeApp() {
      const blockEl = document.querySelector(".alert");
      document.addEventListener("mouseup", (e) => {
        const click = e.composedPath().includes(blockEl);
        if (!click) {
          clearTimeout(this.timeOut);
          this.timeOut = null;
          this.useAlertCart = false;
        }
      });
    },
  },
  mounted() {
    this.useCursor = true;
    if (this.timeOut) {
      clearTimeout(this.timeOut);
      this.timeOut = null;
    }
    this.closeApp();
    this.timeOut = setTimeout(() => {
      this.delTimeOut();
    }, 3000);
  },
};
</script>

<style>
.alert {
  position: fixed;
  top: 26px;
  right: 30px;
  min-width: 478px;
  background: #f5f2ea;
  box-shadow: 2px 2px 20px 2px rgba(207, 201, 180, 0.4);
  z-index: 50;
}
.alert__content {
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.alert__info {
  display: flex;
  align-items: flex-start;
  height: 94px;
}
.alert__image {
  width: 80px;
  height: 100%;
}
.alert__img {
  width: 100%;
  height: 100%;
}
.alert__block {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
}
.alert__name {
  font-size: 15px;
  color: var(--brown);
  font-weight: 400;
  text-transform: lowercase;
  word-wrap: break-word;
  max-width: 320px;
}
.alert__size {
  font-size: 15px;
  color: #a8ab98;
  font-weight: 400;
  text-transform: lowercase;
}
.alert__span {
  color: var(--brown);
}
.alert__price {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  height: 94px;
}
.alert__summ {
  font-size: 17px;
  color: var(--brown);
  font-weight: 400;
  text-transform: lowercase;
}
</style>
