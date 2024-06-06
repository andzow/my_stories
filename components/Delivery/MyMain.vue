<template>
  <section class="main">
    <div class="main__menu">
      <div class="main__content">
        <div class="main__about">
          <div class="main__about_information">
            <div class="main__about_header">
              <h1 class="main__about_title">( &nbsp;оплата&nbsp; )</h1>
            </div>
            <p class="main_about__p">Вы можете оплатить заказ:</p>
            <ul class="main__about_ul">
              <li class="main__about_li main__text">
                картой вашего банка online
              </li>
              <li class="main__about_li main__text">
                в рассрочку с помощью сервиса "Долями"
              </li>
            </ul>
            <p class="main__about_text main__text">
              Если ни один из вариантов вам не подходит, Вы можете связаться с
              нами нажав на кнопку
              <a
                href="https://t.me/+79536886333"
                class="main__about_link"
                cursor-class="animateCursor"
                target="_blank"
                >"написать в telegram"</a
              >
              и мы вместе найдём для Вас решение.<br /><br />
              После оплаты по указанным Вам контактам Вы получите подтверждение
              заказа и далее оповещения о его статусе.
            </p>
          </div>
          <div class="main__about_images">
            <h2 class="main__about_back">( &nbsp;возврат&nbsp; )</h2>
          </div>
        </div>
        <div class="main__center">
          <div class="main__center_number">( &nbsp;1&nbsp; )</div>
          <div class="main__center_block">
            <div class="main__center_num">( &nbsp;3&nbsp; )</div>
            <div class="main__center_image">
              <img
                class="main__center_photo"
                src="@/assets/images/Delivery/delivery1.webp"
                alt="Фотография"
                onmousedown="return false"
                onselectstart="return false"
              />
            </div>
          </div>
        </div>
        <div class="main__delivery">
          <div class="main__delivery_header">
            <h2 class="main__delivery_title">( &nbsp;доставка&nbsp; )</h2>
            <div class="main__delivery_number">( &nbsp;2&nbsp; )</div>
          </div>
          <div class="main__delivery_about">
            <p class="main__delivery_payment main__text">
              Доставляем ваши заказы следующими способами:
            </p>
            <ul class="main__delivery_ul">
              <li class="main__delivery_li main__text">
                ТК СДЭК, самовывоз из пункта выдачи или курьерская доставка
              </li>
              <li class="main__delivery_li main__text">
                Почтой России, самовывоз из отделения почты.
              </li>
            </ul>
            <p class="main__delivery_text main__text">
              Стоимость доставки зависит от города назначения и будет рассчитана
              на этапе оформления заказа. <br /><br />Доставка заказа
              осуществляется в ПВЗ без примерки, чтобы вы могли в спокойной и
              удобной атмосфере примерить приобретённые изделия.<br /><br />
              Время формирования заказа и передача его транспортной компании
              обычно составляет 1-3 дня, но может быть увеличено в периоды
              большой нагрузки или праздников. Мы всегда стараемся отправить Ваш
              заказ как можно быстрее.<br /><br />
              Отслеживание заказа<br />
              После совершения заказа и его оплаты По указанному Вами контакту
              придет оповещение с трек-номером, по которому можно будет
              отслеживать движение заказа.
            </p>
          </div>
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
  methods: {
    initMargin() {
      const elHtml = document.querySelector(".main__delivery_about");
      const textElStyle = document
        .querySelector(".main__delivery_text")
        .getBoundingClientRect().left;
      const searchEl = document
        .querySelector(".header__interaction_search")
        .getBoundingClientRect().left;
      elHtml.style.maxWidth = searchEl - textElStyle - 10 + "px";
    },
  },
  mounted() {
    this.useGsapAnimationOpacity(
      [
        ".main__about_title",
        ".main__about_text",
        ".main__about_ul",
        ".main__center_number",
      ],
      ".main"
    );

    this.useGsapAnimationOpacity(
      [
        ".main__delivery_title",
        ".main__delivery_number",
        ".main__delivery_payment",
        ".main__delivery_ul",
        ".main__delivery_text",
      ],
      ".main",
      false,
      0.5
    );

    this.useGsapAnimationOpacity(
      [".main__center_num", ".main__center_image"],
      ".main",
      false,
      1
    );
    this.initMargin();
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
.main__menu {
  border-bottom: 1px solid #d2bcae;
}
.main__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 26.1% 29.1% 44.8%);
  min-height: 450px;
}

.main__about {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.main__about_header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.main__about_title {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  opacity: 0;
  /* opacity: 0; */
}

.main__center_number {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  opacity: 0;
  /* margin-left: 170px; */
  /* margin-bottom: 50px;
  opacity: 0; */
}
.main__about_ul {
  opacity: 0;
}
.main__about_text {
  opacity: 0;
}
.main_about__p {
  font-size: 17px;
  font-weight: 300;
  color: var(--brown);
  text-transform: lowercase;
  text-align: justify;
  opacity: 0;
}
.main__text {
  font-size: 17px;
  font-weight: 300;
  color: var(--brown);
  text-transform: lowercase;
  text-align: justify;
}
.main__center {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main__center_block {
  display: flex;
  align-items: flex-end;
}
.main__center_image {
  margin-left: 35px;
  opacity: 0;
}
.main__center_num {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  opacity: 0;
}
.main__about_ul {
  margin-bottom: 15px;
}
.main__about_li {
  position: relative;
  text-align: justify;
  padding-left: 20px;
}
.main__about_li::after {
  content: "";
  position: absolute;
  top: 45%;
  left: 1%;
  width: 6px;
  height: 6px;
  background: var(--brown);
  border-radius: 100%;
}

.main__about_text {
  max-width: 480px;
}
.main__about_images {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.main__about_back {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  opacity: 0;
}
.main__about_content {
  display: flex;
  align-items: flex-end;
}
.main__about_image {
  margin-right: 120px;
}
.main__about_num {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  margin-right: 60px;
}
.main__about_link {
  font-weight: 700;
  text-decoration: underline;
}
.main__delivery {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.main__delivery_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.main__delivery_title {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  opacity: 0;
}
.main__delivery_number {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  transform: translateX(9px);
  opacity: 0;
}
.main__delivery_payment {
  opacity: 0;
}
.main__delivery_ul {
  margin-bottom: 15px;
  opacity: 0;
}
.main__delivery_text {
  opacity: 0;
}
.main__delivery_li {
  position: relative;
  padding-left: 20px;
  text-align: justify;
}
.main__delivery_li::after {
  content: "";
  position: absolute;
  top: 45%;
  left: 0.5%;
  width: 6px;
  height: 6px;
  background: var(--brown);
  border-radius: 100%;
}
</style>
