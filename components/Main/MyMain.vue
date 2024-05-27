<template>
  <section class="main">
    <div class="main__menu">
      <div class="main__content">
        <div class="main__about">
          <div class="main__logo">
            <img class="main__img" src="@/assets/images/Main/logo.svg" />
          </div>
          <div class="main__inf">
            <h1 class="main__title">
              уникальный стиль в основе которого лежит естественная природная
              красота
            </h1>
          </div>
        </div>
        <div class="main__catalog">
          <UIButtonMyButton
            info="каталог"
            fontSize="24"
            variant="green"
            cursor-class="animateCursor"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
  background: url("@/assets/images/Main/back.webp") no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
.main__menu {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
}
.main__content {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 73px;
}
.main__catalog {
  min-width: 306px;
}
.main__logo {
  margin-bottom: 85px;
}
.main__title {
  font-size: 17px;
  font-weight: 300;
  color: #ede9df;
  line-height: 120%;
  max-width: 350px;
}
</style>
