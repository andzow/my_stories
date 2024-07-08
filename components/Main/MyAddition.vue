<template>
  <section class="addition">
    <div class="addition__content">
      <div class="addition__menu">
        <div class="addition__number">( &nbsp;2&nbsp; )</div>
        <div class="addition__image">
          <NuxtImg
            class="addition__img"
            src="/Preload/additionF.webp"
            alt="платье в каталоге"
            width="136"
            height="119"
            format="webp"
          />
        </div>
        <p class="addition__text">
          У нас собственное производство, что позволяет нам полностью с нуля
          разрабатываем для вас новые уникальные коллекции, контролировать
          качество каждой строчки, тестировать новые материалы и доводить
          посадку на фигуре в каждом изделии до идеала.
        </p>
      </div>
    </div>
    <div class="addition__mob">
      <div class="addition__mob_img">
        <NuxtImg
          class="addition__mob_image"
          src="/Preload/additionF.webp"
          alt="платье в каталоге"
          width="136"
          height="119"
          format="webp"
        />
      </div>
      <h2 class="addition__mob_title">( &nbsp;о бренде&nbsp; )</h2>
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
  methods: {
    initGsap() {
      this.useGsapAnimationOpacity(
        [".addition__number", ".addition__text", ".addition__new_title"],
        ".addition"
      );
      this.useGsapAnimationOpacity(
        [".addition__image"],
        ".addition",
        false,
        0.4
      );
    },
  },
  mounted() {
    if (window.innerWidth > 876) {
      this.initGsap();
    } else {
      this.useGsapAnimationOpacity([".addition"], ".addition");
    }
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
  text-transform: lowercase;
  opacity: 0;
}
.addition__image {
  opacity: 0;
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
.addition__mob {
  display: none;
}
.addition__mob_title {
  font-weight: 400;
  font-size: 26px;
  color: var(--brown);
  display: none;
}
@media screen and (max-width: 1778px) {
  .addition__menu {
    max-width: 1920px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 30% 33% 48%);
    padding: 0 30px;
  }
}
@media screen and (max-width: 1400px) {
  .addition__new_title {
    font-size: 30px;
  }
  .addition__number {
    font-size: 30px;
  }
  .addition__text {
    font-size: 16px;
    max-width: 311px;
  }
}
@media screen and (max-width: 1100px) {
  .addition__new_title {
    font-size: 26px;
  }
  .addition__number {
    font-size: 26px;
  }
}
@media screen and (max-width: 876px) {
  .addition {
    opacity: 0;
  }
  .addition__number {
    opacity: 1;
  }
  .addition__image {
    opacity: 1;
  }
  .addition__new_title {
    opacity: 1;
  }
  .addition__menu {
    display: flex;
    justify-content: space-between;
  }
  .addition__text {
    width: 100%;
    opacity: 1;
  }
}
@media screen and (max-width: 676px) {
  .addition__image {
    display: none;
  }
  .addition__new_title {
    display: none;
  }
  .addition__mob_title {
    display: block;
  }
  .addition__mob {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 30px;
    padding-bottom: 60px;
  }
}
@media screen and (max-width: 450px) {
  .addition__number {
    margin-bottom: 20px;
  }
  .addition__menu {
    border: none;
    flex-direction: column;
  }
  .addition__text {
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 376px) {
  .addition__mob {
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  .addition__mob_image {
    margin-bottom: 20px;
  }
}
</style>
