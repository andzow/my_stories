<template>
  <div class="collection__new">
    <div class="collection__new_content">
      <h2 class="collection__new_title">( &nbsp;новая коллекция&nbsp; )</h2>
      <div class="collection__new_img">
        <img
          class="collection__new_image"
          src="@/assets/images/Main/collectionF.webp"
          alt="Фотография новой коллекции"
          onmousedown="return false"
          onselectstart="return false"
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
</style>
