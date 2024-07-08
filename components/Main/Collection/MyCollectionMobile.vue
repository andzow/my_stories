<template>
  <div class="collection__mobile">
    <h2 class="collection__mobile_title">( &nbsp;новая коллекция&nbsp; )</h2>
    <div class="collection__mobile_photo">
      <NuxtImg
        class="collection__mobile_img"
        src="/Preload/collectionS.webp"
        width="111"
        height="117"
        alt="Фотография новой коллекции - летний ветер"
        format="webp"
      />
    </div>
    <div class="collection__mobile_image">
      <NuxtImg
        class="collection__new_item"
        src="/Preload/collectionF.webp"
        width="450"
        height="472"
        alt="Фотография коллекции"
        format="webp"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.collection__mobile {
  display: none;
}
.collection__mobile_title {
  text-align: end;
  font-weight: 500;
  font-size: 26px;
  color: var(--brown);
  margin-bottom: 50px;
}
.collection__mobile_photo {
  display: flex;
  justify-content: flex-end;
}
.collection__mobile_image {
  transform: translateY(75px) translateX(30px);
}
@media screen and (max-width: 876px) {
  .collection__mobile {
    display: block;
  }
}
@media screen and (max-width: 711px) {
  .collection__new_item {
    width: 350px;
  }
}
@media screen and (max-width: 620px) {
  .collection__mobile_image {
    display: none;
  }
  .collection__mobile_image {
    transform: translateY(0px) translateX(0px);
  }
}
</style>
