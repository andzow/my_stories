<template>
  <section class="main">
    <div class="main__content">
      <div class="main__image">
        <img
          onmousedown="return false"
          onselectstart="return false"
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
                ( &nbsp;написать в Telegram&nbsp; )
              </button>
            </div>
            <div class="main__about_link">
              <button class="main__about_btn" data-cursor-class="animateCursor">
                ( &nbsp;написать в WhatsApp&nbsp; )
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
  mounted() {
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
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
  padding-top: 150px;
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
</style>
