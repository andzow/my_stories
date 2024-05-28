<template>
  <Transition>
    <section class="product" v-if="useProduct">
      <div class="product__container" v-click-outside="clickOutside">
        <div class="product__position">
          <div class="product__head">
            <h3 class="product__title">создание нового товара</h3>
            <div class="product__close" @click="useProduct = false">
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
          <div class="product__body">
            <p class="product__line">(  1  ) о товаре</p>
            <div class="product__log">

            </div>
          </div>
        </div>
      </div>
    </section>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      useProduct: useProduct(),
    };
  },
  methods: {
    clickOutside() {
      this.useProduct = false;
    },
  },
};
</script>

<style scoped>
.product {
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
.product__container {
  background: #fefaf1;
  margin-left: 50%;
  width: 50%;
  height: 100%;
  box-shadow: 0 5px 10px #cfc9b4;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product__head {
  padding: 20px 30px 35px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product__title {
  font-size: 30px;
  font-weight: 600;
}
.product__line {
  font-size: 20px;
  width: 100%;
  padding: 10px 30px;
  background: var(--brown);
  color: #fff;
}
.product__close {
  transform: translateY(3px);
  transition: all 0.3s ease;
  cursor: pointer;
}
.product__close:hover {
  transform: translateY(3px) scale(1.4);
}
.product__body {
  height: 760px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.product__log {
  padding: 25px 30px;
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