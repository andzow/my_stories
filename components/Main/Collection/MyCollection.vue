<template>
  <section class="collection">
    <div class="collection__content">
      <div class="collection__about">
        <div class="collection__box">
          <div class="collection__number">( &nbsp;1&nbsp; )</div>
          <p class="collection__text">
            в новую коллекцию вошли лаконичные юбки плиссе на запах в размерах
            миди, уютные стеганные жакеты свободного кроя, логсливы из
            конопляной ткани с оригинальным узором
          </p>
          <h2 class="collection__name">
            летний ветер <span class="span__inter">. . .</span>
          </h2>
        </div>
        <div class="collection__btn">
          <UIButtonMyButton
            aria-label="к коллекции"
            info="к коллекции"
            fontSize="24"
            data-cursor-class="animateCursor"
            @click="$router.push('/lookbook/letniy-veter')"
          />
        </div>
      </div>
      <MainCollectionMyCollectionMobile />
      <MainCollectionMyNewCollection />
      <div class="collection__photo">
        <div class="collection__photo_content">
          <img
            class="collection__photo_img"
            src="/Preload/collectionS.webp"
            width="131"
            height="137"
            alt="Фотография новой коллекции - летний ветер"
          />
        </div>
      </div>
    </div>
    <MainCollectionMyCollectionMob />
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
        [".collection__number", ".collection__new_title"],
        ".collection"
      );

      this.useGsapAnimationOpacity(
        [".collection__photo_img"],
        ".collection",
        false,
        0.7
      );

      this.useGsapAnimationOpacity(
        [".collection__text", ".collection__name"],
        ".collection__new_img"
      );
      this.useGsapAnimationOpacity(
        [".collection__new_img"],
        ".collection__new_img",
        false,
        0.5
      );
      this.useGsapAnimationOpacity(
        [".collection__btn"],
        ".collection__btn",
        true
      );
    },
  },
  mounted() {
    if (window.innerWidth > 876) {
      this.initGsap();
    } else {
      this.useGsapAnimationOpacity([".collection"], ".collection");
    }
  },
};
</script>

<style scoped>
.collection {
  position: relative;
  width: 100vw;
  padding-top: 90px;
  padding-bottom: 196px;
  z-index: 15;
}
.collection__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 35% 40% 25%);
  column-gap: 30px;
}
.collection__about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 320px;
}
.collection__btn {
  opacity: 0;
}
.collection__number {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  margin-bottom: 50px;
  opacity: 0;
}
.collection__text {
  font-size: 17px;
  font-weight: 300;
  color: var(--brown);
  text-align: justify;
  margin-bottom: 75px;
  max-width: 260px;
  opacity: 0;
}
.collection__name {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  opacity: 0;
}
.collection__photo {
  display: flex;
  justify-content: flex-end;
}
.collection__photo_img {
  object-fit: cover;
  margin-right: 60px;
  opacity: 0;
}
@media screen and (max-width: 1600px) {
  .collection {
    padding-bottom: 136px;
  }
}
@media screen and (max-width: 1400px) {
  .collection__number {
    font-size: 30px;
    margin-bottom: 50px;
  }
  .collection__text {
    font-size: 16px;
    text-align: justify;
    max-width: 260px;
  }
  .collection__name {
    font-size: 30px;
  }
  .collection__btn {
    max-width: 266px;
  }
}
@media screen and (max-width: 1100px) {
  .collection {
    padding-top: 50px;
  }
  .collection__photo_img {
    width: 111px;
    height: 117px;
  }
  .collection__number {
    font-size: 26px;
    margin-bottom: 50px;
  }
  .collection__text {
    font-size: 15px;
    text-align: justify;
    max-width: 240px;
    margin-bottom: 35px;
  }
  .collection__name {
    font-size: 26px;
  }
  .collection__btn {
    max-width: 266px;
  }
}
@media screen and (max-width: 934px) {
  .collection__btn {
    max-width: 206px;
  }
}
@media screen and (max-width: 876px) {
  .collection {
    padding-bottom: 160px;
    opacity: 0;
  }
  .collection__btn {
    max-width: 206px;
    transform: translateY(-200px);
    opacity: 1;
  }
  .collection__text {
    opacity: 1;
  }
  .collection__name {
    opacity: 1;
  }
  .collection__photo_img {
    opacity: 1;
  }
  .collection__number {
    opacity: 1;
  }
  .collection__photo {
    display: none;
  }
  .collection__content {
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (max-width: 711px) {
  .collection__btn {
    transform: translateY(-90px);
  }
}
@media screen and (max-width: 630px) {
  .collection__content {
    display: none;
  }
  .collection {
    padding-bottom: 100px;
  }
}
</style>
