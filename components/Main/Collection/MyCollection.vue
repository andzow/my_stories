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
          <h3 class="collection__name">летний ветер . . .</h3>
        </div>
        <div class="collection__btn">
          <UIButtonMyButton
            aria-label="к коллекции"
            info="к коллекции"
            fontSize="24"
            cursor-class="animateCursor"
          />
        </div>
      </div>
      <MainCollectionMyNewCollection />
      <div class="collection__photo">
        <div class="collection__photo_content">
          <img
            class="collection__photo_img"
            src="@/assets/images/Main/collectionS.webp"
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
      arrClassNameForAnimation: [
        ".collection__text",
        ".collection__name",
        ".collection__number",
        ".collection__new_title",
        ".collection__new_img",
        ".collection__btn",
        ".collection__photo_img",
      ],
    };
  },

  mounted() {
    this.useGsapAnimationOpacity(this.arrClassNameForAnimation);
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
}
.collection__content {
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
  line-height: 140%;
  color: var(--brown);
  margin-bottom: 75px;
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
</style>
