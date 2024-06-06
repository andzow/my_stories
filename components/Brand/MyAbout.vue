<template>
  <section class="about">
    <div class="about__content">
      <div class="about__menu">
        <div class="about__information">
          <p class="about__information_text">my stories… - это:</p>
          <ul class="about__information_ul">
            <li class="about__information_li">
              уникальный стиль в основе которого лежит естественная природная
              красота
            </li>
            <li class="about__information_li">
              уют - нашу одежду не хочется снимать
            </li>
            <li class="about__information_li">
              забота о здоровье и окружающей среде
            </li>
          </ul>
        </div>
        <div class="about__photo">
          <img
            class="about__photo_img"
            src="@/assets/images/Brand/about1.webp"
            alt="Фотография бренда"
            onmousedown="return false"
            onselectstart="return false"
          />
        </div>
        <p class="about__text">
          <span class="about__text_span">Удобство</span> - один из главных
          критериев выбора одежды, а наши изделия удобны сами по себе и
          прекрасно сочетаются с обувью на плоском ходу.<br /><br />
          Для своих изделий мы закупаем только самые лучшие натуральные
          <span class="about__text_span">ткани премиум-качества</span>. Большое
          значение придаём тактильности материалов.<br /><br />
          У нас собственное производство, что позволяет нам полностью с нуля
          разрабатываем для вас новые уникальные коллекции, контролировать
          качество каждой строчки, тестировать новые материалы и доводить
          посадку на фигуре в каждом изделии до идеала.`
        </p>
      </div>
    </div>
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
      [".about__information_text", ".about__information_ul"],
      ".about__information_text"
    );
    this.useGsapAnimationOpacity([".about__text"], ".about__text");
    this.useGsapAnimationOpacity(
      [".about__photo_img"],
      ".about__photo_img",
      false,
      0.5
    );
  },
};
</script>

<style scoped>
.about {
  position: relative;
  width: 100%;
  padding-top: 90px;
  padding-bottom: 45px;
  z-index: 17;
}
.about__content {
  border-top: 1px solid #d2bcae;
}

.about__menu {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 19% 36% 45%);
}
.about__information_text {
  font-size: 17px;
  font-weight: 700;
  color: var(--brown);
  opacity: 0;
}
.about__information_ul {
  opacity: 0;
}
.about__information_li {
  position: relative;
  font-size: 16px;
  font-weight: 400;
  color: var(--brown);
  text-align: justify;
  padding-left: 20px;
}
.about__information_li::after {
  content: "";
  position: absolute;
  font-family: "Inter", sans-serif;
  left: 1%;
  width: 6px;
  height: 6px;
  background: var(--brown);
  border-radius: 100%;
}
.about__information_li:nth-child(1)::after {
  top: 20%;
}
.about__information_li:nth-child(2)::after {
  top: 40%;
}
.about__information_li:nth-child(3)::after {
  top: 40%;
}

.about__photo {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 280px;
  max-height: 280px;
}
.about__photo_img {
  opacity: 0;
}
.about__text {
  font-size: 17px;
  font-weight: 300;
  color: var(--brown);
  margin-right: 69px;
  margin-top: 50px;
  text-transform: lowercase;
  text-align: justify;
  opacity: 0;
}
.about__text_span {
  font-weight: 700;
}
</style>
