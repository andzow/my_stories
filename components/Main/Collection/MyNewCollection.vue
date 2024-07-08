<template>
  <div class="collection__new">
    <div class="collection__new_content">
      <h2 class="collection__new_title">( &nbsp;новая коллекция&nbsp; )</h2>
      <div class="collection__new_img">
        <NuxtImg
          class="collection__new_image"
          src="/Preload/collectionF.webp"
          width="504"
          height="528"
          alt="Фотография коллекции"
          format="webp"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.collection__new_title {
  font-weight: 400;
  font-size: 36px;
  color: var(--brown);
  margin-bottom: 50px;
  opacity: 0;
  max-width: 361px;
}
.collection__new_img {
  opacity: 0;
}
.collection__new_image {
  object-fit: cover;
}
@media screen and (max-width: 1400px) {
  .collection__new_title {
    font-size: 26px;
  }
  .collection__new_title {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 876px) {
  .collection__new {
    display: none;
  }
}
</style>
