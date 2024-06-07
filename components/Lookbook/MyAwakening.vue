<template>
  <section class="awakening">
    <div class="awakening__content">
      <div class="awakening__about">
        <div class="awakening__about_inf">
          <h2 class="awakening__about_title">
            пробуждение <span class="span__inter">. . .</span>
          </h2>
          <p class="awakening__about_text">
            в новую коллекцию вошли лаконичные юбки плиссе на запах в размерах
            миди, уютные стеганные жакеты свободного кроя, логсливы из
            конопляной ткани с оригинальным узором
          </p>
        </div>
        <div class="awakening__about_btn">
          <UIButtonMyButton
            @click="$router.push('/lookbook/letniy-vecher')"
            aria-label="перейти"
            info="перейти"
            fontSize="24"
            data-cursor-class="animateCursor"
          />
        </div>
      </div>
      <div class="awakening__image">
        <div class="awakening__image_number">( &nbsp;2&nbsp; )</div>
        <div class="awakening__image_photo">
          <img
            class="awakening__image_img"
            src="@/assets/images/Lookbook/awakening1.webp"
            alt="Фотография коллекции пробуждение"
          />
        </div>
      </div>
      <div class="awakening__photo">
        <img
          class="awakening__photo_img"
          src="@/assets/images/Lookbook/awakening2.webp"
          alt="Фотография коллекции пробуждение"
        />
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
    setTimeout(() => {
      this.useGsapAnimationOpacity(
        [
          ".awakening__about_title",
          ".awakening__about_text",
          ".awakening__image_number",
        ],
        ".awakening",
        true
      );
      this.useGsapAnimationOpacity(
        [".awakening__image_photo"],
        ".awakening",
        true,
        0.5
      );
      this.useGsapAnimationOpacity(
        [".awakening__photo"],
        ".awakening",
        true,
        0.7
      );
      this.useGsapAnimationOpacity(
        [".awakening__about_btn"],
        ".awakening__image_photo",
        true
      );
    }, 0);
  },
};
</script>

<style scoped>
.awakening {
  position: relative;
  width: 100vw;
  margin-bottom: 95px;
  border-top: 1px solid #d2bcae;
  z-index: 15;
}
.awakening__content {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 19% 31% 50%);
}
.awakening__about {
  max-width: 354px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.awakening__about_title {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  margin-bottom: 35px;
  opacity: 0;
}
.awakening__about_text {
  font-size: 17px;
  font-weight: 300;
  text-align: justify;
  color: var(--brown);
  opacity: 0;
}
.awakening__about_btn {
  max-width: 320px;
  opacity: 0;
}
.awakening__image {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-height: 450px;
}
.awakening__image_number {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  text-align: center;
  margin-right: 20px;
  opacity: 0;
}
.awakening__image_photo {
  display: flex;
  opacity: 0;
  /* margin-bottom: 150px; */
}
.awakening__photo {
  display: flex;
  justify-content: flex-end;
  margin-right: 75px;
  opacity: 0;
}
</style>
