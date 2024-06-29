<template>
  <div class="menu__information">
    <div class="menu__information_text">
      остались вопросы? <br />Напишите нам или позвоните и мы вам поможем
    </div>
    <div class="menu__information_btn">
      <UIButtonMyButton
        info="написать в Telegram"
        aria-label="написать в Telegram"
        fontSize="20"
        variant="main"
        data-cursor-class="animateCursor"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu__information {
  padding-top: 15px;
  border-top: 1px solid #d2bcae;
}
.menu__information_text {
  font-size: 16px;
  font-weight: 400;
  color: #af9280;
  text-transform: lowercase;
  margin-bottom: 35px;
}
.menu__information_btn {
  max-width: 290px;
}
</style>
