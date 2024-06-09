<template>
  <section class="addition">
    <div class="addition__content">
      <div class="addition__menu">
        <div class="addition__number">( &nbsp;2&nbsp; )</div>
        <div class="addition__image">
          <!-- <img src="@/assets/images/Main/additionF.webp" alt="Фотография" /> -->
        </div>
        <p class="addition__text">
          У нас собственное производство, что позволяет нам полностью с нуля
          разрабатываем для вас новые уникальные коллекции, контролировать
          качество каждой строчки, тестировать новые материалы и доводить
          посадку на фигуре в каждом изделии до идеала.
        </p>
      </div>
    </div>
    <h2 class="addition__new_title">( &nbsp;о бренде&nbsp; )</h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      useGsapAnimationOpacity: useGsapAnimationOpacity,
    };
  },
  mounted() {
    this.useGsapAnimationOpacity(
      [".addition__number", ".addition__text", ".addition__new_title"],
      ".addition"
    );
    this.useGsapAnimationOpacity([".addition__image"], ".addition", false, 0.4);
  },
};
</script>

<style scoped>
.addition {
  position: relative;
  width: 100vw;
  z-index: 15;
}

.addition__content {
  width: 100vw;
  border-top: 1px solid #d2bcae;
  border-bottom: 1px solid #d2bcae;
  margin-bottom: 36px;
}
.addition__menu {
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 19% 33% 48%);
  padding: 0 30px;
}

.addition__number {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  opacity: 0;
}
.addition__text {
  font-size: 16px;
  font-weight: 300;
  color: var(--brown);
  text-align: justify;
  max-width: 360px;
  opacity: 0;
}
.addition__image {
  opacity: 0;
  width: 130px;
  height: 100%;
  background: url("@/assets/images/Main/additionF.webp") no-repeat;
  background-size: cover;
}
.addition__img {
  width: 130px;
  height: 100%;
  object-fit: cover;
}
.addition__new_title {
  max-width: 1920px;
  margin: 0 auto;
  text-align: end;
  font-weight: 400;
  font-size: 36px;
  color: var(--brown);
  padding: 0 30px 90px 30px;
  opacity: 0;
}
</style>
