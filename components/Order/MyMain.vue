<template>
  <section class="main">
    <div class="main__content">
      <div class="main__menu" ref="mainMenu" id="order__menu">
        <div class="main__info">
          <OrderMyRegion />
          <div class="main__block">
            <OrderMyDelivery />
            <OrderMyPayment />
          </div>
          <OrderMyBuyer />
        </div>
        <div class="main__set">
          <OrderMyPromocode />
        </div>
      </div>
      <OrderMyRegistr />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.useFilterFlout("order__promocode", "order__menu");
  },
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 56px;
  z-index: 17;
}
.main__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
.main__menu {
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  column-gap: 10px;
  margin-bottom: 50px;
}
.main__set {
  position: relative;
}
.main__block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  margin-bottom: 10px;
}
</style>
