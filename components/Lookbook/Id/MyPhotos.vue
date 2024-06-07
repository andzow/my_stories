<template>
  <section class="photos">
    <div class="photos__content">
      <div class="photos__menu">
        <div class="photos__images">
          <div
            class="photos__image"
            v-for="(item, idx) in arrPhotos"
            :key="item"
            :class="['photos__image' + (idx + 1)]"
          >
            <img
              class="photos__img"
              :src="item"
              alt="Фотография коллекции"
              onmousedown="return false"
              onselectstart="return false"
            />
          </div>
        </div>
        <div class="photos__btn">
          <UIButtonMyButton
            @click="$router.push('/lookbook')"
            aria-label="назад к lookbook"
            info="назад к lookbook"
            fontSize="24"
            data-cursor-class="animateCursor"
            bigSize="bigSize"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    arrPhotos: Array,
  },
  data() {
    return {
      useGsapAnimationOpacity: useGsapAnimationOpacity,
      useCursor: useCursor(),
    };
  },
  mounted() {
    setTimeout(() => {
      this.arrPhotos.forEach((el, idx) => {
        this.useGsapAnimationOpacity(
          [`.photos__image${idx + 1}`],
          `.photos__image${idx + 1}`,
          true
        );
      });
      this.useGsapAnimationOpacity([`.photos__btn`], `.photos__btn`, true);
      this.useCursor = true;
    }, 30);
  },
};
</script>

<style scoped>
.photos {
  position: relative;
  width: 100vw;
  padding-top: 90px;
  padding-bottom: 96px;
  z-index: 17;
}
.photos__content {
  border-top: 1px solid #d2bcae;
}
.photos__menu {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
.photos__images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 102px;
}
.photos__image {
  display: flex;
  opacity: 0;
}
.photos__img {
  width: 100%;
}
.photos__btn {
  opacity: 0;
}
</style>
