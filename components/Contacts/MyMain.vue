<template>
  <section class="main">
    <div class="main__mobile">
      <div class="main__mobile_header">
        <h1 class="main__mobile_title">
          ( &nbsp;мы всегда с вами <br />
          на связи&nbsp; )
        </h1>
      </div>
      <div class="main__mobile_content">
        <div class="main__mobile_href">
          <a
            class="main__mobile_link main__mobile_link1"
            href="https://t.me/+79536886333"
            target="_blank"
            >( &nbsp;написать в Telegram&nbsp; )</a
          >
        </div>
        <div class="main__mobile_href">
          <a
            class="main__mobile_link"
            href="https://wa.me/79536886333"
            target="_blank"
            >( &nbsp;написать в WhatsApp&nbsp; )</a
          >
        </div>
      </div>
      <div class="main__mobile_img">
        <img
          src="@/assets/images/Contacts/contacts.webp"
          alt="Фотография
        страницы"
        />
      </div>
      <p class="main__mobile_text">
        Если у вас есть какие-то вопросы, предложения, хотите оставить отзыв,
        или вам нужна наша помощь - напишите нам, мы всегда на связи по
        указанным ниже контактам.
      </p>
    </div>
    <div class="main__content">
      <div class="main__image">
        <img
          class="main__image_img"
          height="600"
          src="@/assets/images/Contacts/contacts.webp"
          alt="Фотография страницы"
        />
      </div>
      <div class="main__about">
        <div class="main__about_information">
          <h1 class="main__about_title">
            ( &nbsp;мы всегда с вами на связи&nbsp; )
          </h1>
          <p class="main__about_text">
            Если у вас есть какие-то вопросы, предложения, хотите оставить
            отзыв, или вам нужна наша помощь - напишите нам, мы всегда на связи
            по указанным ниже контактам.
          </p>
        </div>
        <div class="main__about_links">
          <div class="main__about_mess">
            <div class="main__about_link">
              <button class="main__about_btn" data-cursor-class="animateCursor">
                <a
                  class="main__about_links"
                  href="https://t.me/+79536886333"
                  target="_blank"
                  >( &nbsp;написать в Telegram&nbsp; )</a
                >
              </button>
            </div>
            <div class="main__about_link">
              <button class="main__about_btn" data-cursor-class="animateCursor">
                <a
                  class="main__about_links"
                  href="https://wa.me/79536886333"
                  target="_blank"
                  >( &nbsp;написать в WhatsApp&nbsp; )</a
                >
              </button>
            </div>
          </div>
          <div class="main__about_block">
            <div class="main__about_item">
              <p class="main__about_text">ИП Леванова Елена Евгеньевна</p>
              <p class="main__about_text">ИНН 434528568247</p>
            </div>
            <div class="main__about_item">
              <p class="main__about_text">г. киров, ул. московская 29в</p>
              <p class="main__about_text">ОГРН 323430000001420</p>
            </div>
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
    initGsap() {
      this.useGsapAnimationOpacity(
        [
          ".main__about_block",
          ".main__about_mess",
          ".main__about_title",
          ".main__about_text",
        ],
        ".main"
      );
      this.useGsapAnimationOpacity([".main__image"], ".main", false, 0.5);
    },
  },
  mounted() {
    if (window.innerWidth > 1240) {
      this.initGsap();
    } else {
      setTimeout(() => {
        this.useGsapAnimationOpacity([".main"], ".main");
      }, 100);
    }
  },
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 40px;
  z-index: 17;
}
.main__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 600px;
  max-height: 600px;
}
.main__image {
  opacity: 0;
}
.main__image_img {
  width: 100%;
}
.main__about {
  height: 100%;
  min-height: 600px;
  max-height: 600px;
  transform: translateX(-200px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.main__about_title {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  margin-bottom: 40px;
  opacity: 0;
}
.main__about_text {
  font-size: 17px;
  font-weight: 300;
  line-height: 140%;
  color: var(--brown);
  text-transform: lowercase;
  max-width: 530px;
  opacity: 0;
}
.main__about_mess {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  opacity: 0;
}
.main__about_link:nth-child(2) {
  margin-left: 110px;
}
.main__about_btn {
  border: none;
  background: none;
  font-weight: 500;
  font-size: 22px;
  color: var(--brown);
  text-transform: lowercase;
}
.main__about_links {
  font-weight: 500;
  font-size: 22px;
  color: var(--brown);
  text-transform: lowercase;
}
.main__about_block {
  display: flex;
  opacity: 0;
}
.main__about_text:nth-child(1) {
  margin-bottom: 5px;
}
.main__about_item:nth-child(2) {
  margin-left: 110px;
}
.main__mobile {
  display: none;
  margin: 0 30px;
}
.main__mobile_header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 50px;
}
.main__mobile_title {
  font-weight: 500;
  font-size: 27px;
  color: var(--brown);
}
.main__mobile_text {
  font-size: 15px;
  font-weight: 300;
  color: var(--brown);
  text-transform: lowercase;
  text-align: justify;
  max-width: 315px;
}
.main__mobile_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
}
.main__mobile_link {
  font-size: 20px;
  color: var(--brown);
  text-transform: lowercase;
}
.main__mobile_img {
  margin-bottom: 25px;
}
@media screen and (max-width: 1600px) {
  .main__about {
    transform: translateX(-100px);
  }
}
@media screen and (max-width: 1440px) {
  .main__about {
    transform: translateX(0px);
    margin-left: 40px;
  }
}
@media screen and (max-width: 1400px) {
  .main__about_title {
    font-size: 30px;
  }
  .main__about_text {
    font-size: 16px;
  }

  .main__about_btn {
    font-size: 20px;
  }
  .main__about_item:nth-child(2) {
    margin-left: 40px;
  }
  .main__about_link:nth-child(2) {
    margin-left: 40px;
  }
}
@media screen and (max-width: 1240px) {
  .main {
    opacity: 0;
  }
  .main__image {
    opacity: 1;
  }
  .main__about_title {
    opacity: 1;
  }
  .main__about_text {
    opacity: 1;
  }
}
@media screen and (max-width: 1200px) {
  .main__image {
    opacity: 1;
  }
  .main__about_title {
    opacity: 1;
  }
  .main__about_text {
    opacity: 1;
  }

  .main__about_link:nth-child(1) {
    margin-bottom: 20px;
  }
  .main__about_link:nth-child(2) {
    margin-left: 0px;
  }
  .main__about_mess {
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
    opacity: 1;
  }
  .main__about_block {
    flex-direction: column;
    opacity: 1;
  }
  .main__about_text:nth-child(1) {
    margin-bottom: 5px;
  }
  .main__about_item:nth-child(2) {
    margin-left: 0px;
  }
  .main__about {
    min-height: 0px;
    max-height: 0px;
  }
  .main__about_information {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 1100px) {
  .main {
    padding-top: 110px;
  }
  .main__about_title {
    font-size: 27px;
  }
  .main__about_text {
    font-size: 15px;
  }
}
@media screen and (max-width: 933px) {
  .main__mobile {
    display: block;
  }
  .main__content {
    display: none;
  }
}
@media screen and (max-width: 775px) {
  .main__mobile_header {
    flex-direction: column;
  }
  /* .main__mobile_title {
    margin-bottom: 30px;
  } */
}
@media screen and (max-width: 560px) {
  .main__mobile_header {
    flex-direction: column;
  }
  /* .main__mobile_title {
    margin-bottom: 30px;
  } */
  .main__mobile_content {
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  .main__mobile_href:nth-child(1) {
    margin-bottom: 20px;
  }
}
</style>
