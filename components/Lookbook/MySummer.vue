<template>
  <section class="summer">
    <div class="summer__content">
      <div class="summer__about">
        <div class="summer__about_information">
          <div class="summer__about_number">( &nbsp;1&nbsp; )</div>
          <h2 class="summer__about_title">летний ветер . . .</h2>
          <p class="summer__about_text">
            в новую коллекцию вошли лаконичные юбки плиссе на запах в размерах
            миди, уютные стеганные жакеты свободного кроя, логсливы из
            конопляной ткани с оригинальным узором
          </p>
        </div>
        <div class="summer__about_btn">
          <UIButtonMyButton
            aria-label="перейти"
            info="перейти"
            fontSize="24"
            cursor-class="animateCursor"
          />
        </div>
      </div>
      <div class="summer__img">
        <img
          class="summer__photo"
          src="@/assets/images/Lookbook/summer1.webp"
          alt="Фотографии коллекции летний ветер ..."
        />
      </div>
      <div class="summer__sm">
        <img
          class="summer__sm_img"
          src="@/assets/images/Lookbook/summer2.webp"
          alt="Фотографии коллекции летний ветер ..."
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.summer {
  position: relative;
  width: 100vw;
  margin-bottom: 95px;
  z-index: 15;
}
.summer__content {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 25% 50% 25%);
}
.summer__about {
  max-width: 354px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.summer__about_number {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  margin-bottom: 75px;
  /* opacity: 0; */
}
.summber__about_des {
  display: flex;
  align-items: flex-end;
}
.summer__about_title {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  margin-bottom: 35px;
}
.summer__about_text {
  font-size: 17px;
  font-weight: 300;
  line-height: 140%;
  color: var(--brown);
  /* opacity: 0; */
}
.summer__about_btn {
  max-width: 320px;
}
.summer__img {
  display: flex;
  justify-content: flex-end;
  padding-right: 85px;
  /* padding-left: 180px; */
}
.summer__sm {
  text-align: end;
  padding-right: 15px;
}
</style>
