<template>
  <section class="main">
    <div class="main__block success__block">
      <p class="main__text">
        на ваш Telegram / WhatsApp вотсап придет информация и статус заказа
      </p>
      <div class="main__run">
        <span class="main__run_text">( &nbsp;спасибо за заказ&nbsp; )</span>
        <span class="main__run_text">( &nbsp;спасибо за заказ&nbsp; )</span>
        <span class="main__run_text">( &nbsp;спасибо за заказ&nbsp; )</span>
      </div>
      <div class="main__btn">
        <UIButtonMyButton
          info="ок"
          fontSize="24"
          variant="white"
          data-cursor-class="animateCursor"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.main {
  position: relative;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 56px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 17;
}

.main__block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #a8ab98;
  min-height: 360px;
  width: 680px;
}

.main__text {
  color: #ede9df;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 25px;
}

.main__run {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 80px;
  color: #ede9df;
  margin-bottom: 30px;
  box-sizing: border-box;
}

.main__run_text {
  display: inline-block;
  animation: marquee 5s linear infinite;
}
.main__btn {
  min-width: 230px;
}
</style>
