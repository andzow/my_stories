<template>
  <div class="collection__mob">
    <div class="collection__mob_header">
      <div class="collection__mob_number">( &nbsp;1&nbsp; )</div>
      <h2 class="collection__mob_name">( &nbsp;новая коллекция&nbsp; )</h2>
    </div>
    <h3 class="collection__mob_title">
      летний ветер <span class="span__mob_inter">. . .</span>
    </h3>
    <img
      class="collection__mob_inner"
      src="/Preload/collectionF.webp"
      width="474"
      height="128"
      alt="Фотография коллекции"
      format="webp"
    />
    <div class="collection__mob_content">
      <div class="collection__mob_block">
        <p class="collection__mob_text">
          в новую коллекцию вошли лаконичные юбки плиссе на запах в размерах
          миди, уютные стеганные жакеты свободного кроя, логсливы из конопляной
          ткани с оригинальным узором
        </p>
        <div class="collection__mob_btn">
          <UIButtonMyButton
            aria-label="к коллекции"
            info="к коллекции"
            fontSize="24"
            data-cursor-class="animateCursor"
            @click="$router.push('/lookbook/letniy-veter')"
          />
        </div>
      </div>
      <div class="collection__mob_img">
        <img
          class="collection__mob_image"
          src="/Preload/collectionF.webp"
          width="304"
          height="328"
          alt="Фотография коллекции"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.collection__mob {
  display: none;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
.collection__mob_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.collection__mob_number {
  font-weight: 500;
  font-size: 24px;
  color: var(--brown);
  /* opacity: 0; */
}
.collection__mob_inner {
  display: none;
  height: 424px;
  margin-bottom: 15px;
  object-fit: cover;
}
.collection__mob_name {
  font-weight: 500;
  font-size: 24px;
  color: var(--brown);
}
.collection__mob_title {
  font-weight: 500;
  font-size: 24px;
  color: var(--brown);
  margin-bottom: 50px;
}
.span__mob_inter {
  font-size: 22px;
}
.collection__mob_content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.collection__mob_img {
  height: 320px;
}
.collection__mob_block {
  height: 320px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.collection__mob_text {
  font-size: 16px;
  font-weight: 300;
  color: var(--brown);
  text-align: justify;
  max-width: 240px;
  margin-bottom: 40px;
}
.collection__mob_image {
  margin-left: 40px;
  height: 320px;
  object-fit: cover;
}
@media screen and (max-width: 630px) {
  .collection__mob {
    display: block;
  }
}
@media screen and (max-width: 490px) {
  .collection__mob_inner {
    display: block;
  }
  .collection__mob_img {
    display: none;
    height: auto;
  }
  .collection__mob_block {
    height: auto;
  }
  .collection__mob_image {
    height: auto;
  }
  .collection__mob_header {
    margin-bottom: 35px;
  }
  .collection__mob_title {
    margin-bottom: 15px;
  }
  .collection__mob_text {
    max-width: 100%;
    width: 100%;
  }
}
@media screen and (max-width: 405px) {
  .collection__mob_inner {
    height: 374px;
  }
}
@media screen and (max-width: 370px) {
  .collection__mob_inner {
    height: 354px;
  }
  .collection__mob_header {
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  .collection__mob_number {
    margin-bottom: 20px;
  }
}
</style>
