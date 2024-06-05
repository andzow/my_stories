<template>
  <section class="about">
    <div class="about__content">
      <div class="about__info">
        <div class="about__info_block">
          <p class="about__info_text about__text">
            Для возврата или обмена свяжитесь с нами любым удобным Вам способом
            <a href="#" class="about__info_link" cursor-class="animateCursor"
              >WhatsApp,
            </a>
            <a href="#" class="about__info_link" cursor-class="animateCursor"
              >Telegram.</a
            >
            и мы дадим вам полную инструкцию как осуществить возврат.<br /><br />
            <span class="about__info_span">Важно!</span> Возвращаемый товар не
            должен иметь следов эксплуатации и должен быть сохранён его товарный
            вид. Сохранение оригинальной упаковки не обязательно, т.к. каждый
            заказ для Вас мы упаковываем всегда в новую упаковку.<br /><br />
            Обратная отправка по причине неподошедшего размера, цвета, фасона
            оплачивается самостоятельно покупателем, в случае обмена - повторная
            доставка в сторону клиента за наш счёт.<br /><br />
            <span class="about__info_span">
              Обмен на новый товар или возврат денежных средств производится в
              течение 7 рабочих дней с момента получения посылки.</span
            >
          </p>
          <div class="about__info_img">
            <img
              class="about__info_image"
              src="@/assets/images/Delivery/delivery2.webp"
              alt="Фотография"
              onmousedown="return false"
              onselectstart="return false"
            />
          </div>
        </div>
      </div>
      <div class="about__block"></div>
      <div class="about__calc">
        <p class="about__calc_text about__text">
          Для расчета стоимости, сроков и условиях доставки в другие страны,
          свяжитесь с нами через любой мессенджер:
          <a href="#" class="about__calc_link" cursor-class="animateCursor"
            >WhatsApp,
          </a>
          <a href="#" class="about__calc_link" cursor-class="animateCursor"
            >Telegram.</a
          >
        </p>
        <div class="about__calc_img">
          <img
            class="about__calc_image"
            src="@/assets/images/Delivery/delivery3.webp"
            alt="Фотография"
            onmousedown="return false"
            onselectstart="return false"
          />
        </div>
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
    this.useGsapAnimationOpacity([".about__text"], ".about");
    this.useGsapAnimationOpacity([".about__info_img"], ".about", false, 0.5);
    this.useGsapAnimationOpacity(
      [".about__calc_img"],
      ".about__calc_image",
      false,
      0.7
    );
  },
};
</script>

<style scoped>
.about {
  position: relative;
  width: 100%;
  z-index: 17;
}
.about__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 26.1% 29.1% 44.8%);
  min-height: 600px;
}
.about__info_text {
  margin-bottom: 50px;
}
.about__text {
  font-size: 17px;
  font-weight: 300;
  line-height: 140%;
  color: var(--brown);
  text-transform: lowercase;
  text-align: justify;
  opacity: 0;
}
.about__info_block {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  max-width: 480px;
}
.about__info_link {
  font-weight: 700;
  text-decoration: underline;
}
.about__info_span {
  font-weight: 700;
}
.about__info_img {
  transform: translateX(4px);
  opacity: 0;
}

.about__calc_text {
  font-weight: 700;
  margin-bottom: 50px;
}
.about__calc_link {
  font-weight: 700;
  text-decoration: underline;
}
.about__calc_img {
  width: 100%;
  transform: translateX(1px);
  opacity: 0;
}
</style>
