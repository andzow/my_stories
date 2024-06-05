<template>
  <section class="summer">
    <div class="summer__content">
      <div class="summer__about">
        <div class="summer__about_information">
          <div class="summer__about_number">( &nbsp;1&nbsp; )</div>
          <h2 class="summer__about_title">
            летний ветер <span class="span__inter">. . .</span>
          </h2>
          <p class="summer__about_text">
            в новую коллекцию вошли лаконичные юбки плиссе на запах в размерах
            миди, уютные стеганные жакеты свободного кроя, логсливы из
            конопляной ткани с оригинальным узором
          </p>
        </div>
        <div class="summer__about_btn">
          <UIButtonMyButton
            @click="$router.push('/lookbook/letniy-vecher')"
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
          onmousedown="return false"
          onselectstart="return false"
        />
      </div>
      <div class="summer__sm">
        <img
          class="summer__sm_img"
          src="@/assets/images/Lookbook/summer2.webp"
          alt="Фотографии коллекции летний ветер ..."
          onmousedown="return false"
          onselectstart="return false"
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
      this.useGsapAnimationOpacity([".summer__about_number"], ".summer", true);
      this.useGsapAnimationOpacity([".summer__img"], ".summer", true, 0.5);
      this.useGsapAnimationOpacity([".summer__sm"], ".summer", true, 0.7);
      this.useGsapAnimationOpacity(
        [".summer__about_title", ".summer__about_text"],
        ".summer__about_text",
        true
      );
      this.useGsapAnimationOpacity(
        [".summer__about_btn"],
        ".summer__about_btn",
        true
      );
    }, 0);
  },
};
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
  opacity: 0;
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
  opacity: 0;
}
.summer__about_text {
  font-size: 17px;
  font-weight: 300;
  line-height: 140%;
  color: var(--brown);
  opacity: 0;
}
.summer__about_btn {
  max-width: 320px;
  opacity: 0;
}
.summer__img {
  display: flex;
  justify-content: flex-end;
  padding-right: 85px;
  opacity: 0;
}

.summer__sm {
  opacity: 0;
  text-align: end;
  padding-right: 15px;
}
</style>
