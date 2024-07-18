<template>
  <section class="about">
    <div class="about__content">
      <div class="about__about_img">
        <img
          class="about__about_image"
          src="@/assets/images/Delivery/delivery2.webp"
          alt="Фотография"
        />
      </div>
      <div class="about__info">
        <div class="about__about_header">
          <div class="about__about_mob">( &nbsp;3&nbsp; )</div>
          <h1 class="about__about_title">( &nbsp;Возврат&nbsp; )</h1>
        </div>
        <div class="about__info_block">
          <p class="about__info_text about__text">
            Для возврата или обмена свяжитесь с нами любым удобным Вам способом
            <a
              href="https://wa.me/79536886333"
              class="about__info_link"
              data-cursor-class="animateCursor"
              target="_blank"
              >WhatsApp,
            </a>
            <a
              href="https://t.me/+79536886333"
              class="about__info_link"
              data-cursor-class="animateCursor"
              target="_blank"
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
            />
          </div>
        </div>
      </div>
      <div class="about__block"></div>
      <div class="about__calc">
        <p class="about__calc_text about__text">
          Для расчета стоимости, сроков и условиях доставки в другие страны,
          свяжитесь с нами через любой мессенджер:
          <a
            href="https://wa.me/79536886333"
            class="about__calc_link"
            data-cursor-class="animateCursor"
            target="_blank"
            >WhatsApp,
          </a>
          <a
            href="https://t.me/+79536886333"
            class="about__calc_link"
            data-cursor-class="animateCursor"
            target="_blank"
            >Telegram.</a
          >
        </p>
        <div class="about__calc_img">
          <img
            class="about__calc_image"
            src="@/assets/images/Delivery/delivery3.webp"
            alt="Фотография"
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
      checkMobile: false,
    };
  },
  methods: {
    initMargin() {
      const elHtml = document.querySelector(".about__calc_text");
      const textElStyle = document
        .querySelector(".about__calc_text")
        .getBoundingClientRect().left;
      const searchEl = document
        .querySelector(".header__interaction_search")
        .getBoundingClientRect().left;
      elHtml.style.maxWidth = searchEl - textElStyle - 10 + "px";
    },
    initGsap() {
      this.useGsapAnimationOpacity([".about__text"], ".about", false, 1);
      this.useGsapAnimationOpacity([".about__info_img"], ".about", false, 1);
      this.useGsapAnimationOpacity([".about__calc_img"], ".about", false, 1.2);
    },
  },
  mounted() {
    this.initMargin();
    if (window.innerWidth > 1240) {
      this.initGsap();
    } else {
      setTimeout(() => {
        this.useGsapAnimationOpacity([".about"], ".about");
      }, 100);
    }
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
  margin-bottom: 50px;
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
.about__about_header {
  display: none;
  position: relative;
  align-items: center;
  margin-bottom: 30px;
}
.about__about_mob {
  font-size: 27px;
  font-weight: 500;
  color: var(--brown);
  text-transform: lowercase;
  margin-right: 40px;
}
.about__about_title {
  font-size: 27px;
  font-weight: 500;
  color: var(--brown);
  text-transform: lowercase;
}
.about__about_img {
  display: none;
  position: absolute;
  top: -9%;
  right: 30px;
}
@media screen and (max-width: 1400px) {
  .about__text {
    font-size: 16px;
  }
}
@media screen and (max-width: 1240px) {
  .about {
    opacity: 0;
  }
  .about__text {
    opacity: 1;
  }
  .about__info_img {
    opacity: 1;
  }
  .about__calc_img {
    opacity: 1;
  }
}
@media screen and (max-width: 1100px) {
  .about__text {
    font-size: 15px;
  }
}
@media screen and (max-width: 930px) {
  .about__about_img {
    display: block;
  }
  .about__info_text {
    margin-bottom: 0;
  }
  .about__about_header {
    display: flex;
  }
  .about__content {
    display: flex;
    flex-direction: column;
  }
  .about {
    margin-top: 50px;
  }
  .about__info_img {
    display: none;
  }
  .about__calc_text {
    max-width: 480px !important;
  }
  .about__calc_img {
    max-width: 480px;
  }
}
@media screen and (max-width: 520px) {
  .about__about_header {
    justify-content: space-between;
  }
  .about__about_img {
    display: none;
  }
  .about {
    margin-top: 0px;
  }
}
</style>
