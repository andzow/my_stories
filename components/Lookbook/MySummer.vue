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
          <div class="summer__mobile">
            <img
              class="summer__mobile_img"
              src="@/assets/images/Lookbook/summer1.webp"
              alt="Фотографии коллекции летний ветер ..."
              width="574"
              height="602"
            />
          </div>
        </div>
        <div class="summer__about_btn">
          <UIButtonMyButton
            @click="$router.push('/lookbook/letniy-vecher')"
            aria-label="перейти"
            info="перейти"
            fontSize="24"
            data-cursor-class="animateCursor"
          />
        </div>
      </div>
      <div class="summber__about_mobile">
        <div class="summer__about_img">
          <img
            class="summer__about_item"
            src="@/assets/images/Lookbook/summer1.webp"
            alt="Фотографии коллекции летний ветер ..."
            width="574"
            height="602"
          />
        </div>
        <div class="summer__about_photo">
          <img
            class="summer__about_image"
            src="@/assets/images/Lookbook/summer2.webp"
            alt="Фотографии коллекции летний ветер ..."
            width="122"
            height="136"
          />
        </div>
      </div>
      <div class="summer__img">
        <img
          class="summer__photo"
          src="@/assets/images/Lookbook/summer1.webp"
          alt="Фотографии коллекции летний ветер ..."
          width="574"
          height="602"
        />
      </div>
      <div class="summer__sm">
        <img
          class="summer__sm_img"
          src="@/assets/images/Lookbook/summer2.webp"
          alt="Фотографии коллекции летний ветер ..."
          width="122"
          height="136"
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
  methods: {
    initGsap() {
      setTimeout(() => {
        this.useGsapAnimationOpacity(
          [".summer__about_number"],
          ".summer",
          true
        );
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
  },
  mounted() {
    if (window.innerWidth > 1240) {
      this.initGsap();
    } else {
      this.useGsapAnimationOpacity([".summer"], ".summer");
    }
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
  text-align: justify;
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
  margin-left: 40px;
  opacity: 0;
}

.summer__sm {
  opacity: 0;
  text-align: end;
  padding-right: 15px;
}
.summber__about_mobile {
  display: none;
  margin-left: 20px;
}
.summer__about_item {
  margin-bottom: 50px;
}
.summer__about_img {
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  /* width: 100%;
  object-fit: cover; */
}
.summer__about_photo {
  display: flex;
  justify-content: flex-end;
}
.summer__mobile {
  display: none;
  margin-bottom: 50px;
}

@media screen and (max-width: 1400px) {
  .summer__about_number {
    font-size: 30px;
  }
  .summer__about_title {
    font-size: 30px;
  }
  .summer__about_text {
    font-size: 16px;
  }
  .summer__img {
    padding-right: 25px;
    margin-left: 40px;
  }
}

@media screen and (max-width: 1240px) {
  .summer {
    opacity: 0;
  }
  .summer__about_number {
    opacity: 1;
  }

  .summer__about_title {
    opacity: 1;
  }
  .summer__about_text {
    opacity: 1;
  }
  .summer__about_btn {
    opacity: 1;
  }

  .summer__img {
    opacity: 1;
  }

  .summer__sm {
    opacity: 1;
  }
}
@media screen and (max-width: 1100px) {
  .summer__about_number {
    font-size: 27px;
  }
  .summer__about_text {
    font-size: 15px;
  }
  .summer__about_title {
    font-size: 27px;
  }
  .summer__about_number {
    margin-bottom: 55px;
  }
}
@media screen and (max-width: 1054px) {
  .summer__content {
    display: flex;
    justify-content: space-between;
  }
  .summer__img {
    display: none;
  }
  .summer__sm {
    display: none;
  }
  .summer__about_text {
    margin-bottom: 40px;
  }
  .summber__about_mobile {
    display: block;
  }
}
@media screen and (max-width: 730px) {
  .summer__content {
    display: block;
  }
  .summber__about_mobile {
    display: none;
  }
  .summer__mobile {
    display: block;
  }
  .summer__about_btn {
    width: 100%;
    max-width: 100%;
  }
}
</style>
