<template>
  <div class="catalog__image" :class="{ activeImage: activeIdx === idx }">
    <NuxtLink
      class="catalog__image_link"
      :to="item.name ? `/catalog/${item?.name}/${item?.id}` : '/'"
    >
      <img
        v-lazy-loading="{
          src: urlServer + image,
          onLoad,
        }"
        class="catalog__image_img"
        :alt="`Фотография ${
          idx + 1
        }, ${item.name.toLowerCase()} ${item.color.toLowerCase()}, ${item.characteristic.replace(
          /\r\n/g,
          ', '
        )}`"
        loading="lazy"
        format="webp"
      />
    </NuxtLink>
    <Transition>
      <div class="catalog__image_loading" v-if="!checkLoadImg && !checkLazy">
        <UIMyLoadItem />
      </div>
    </Transition>
  </div>
</template>

<script>
import { USE_SERVER } from "~/url";

export default {
  props: {
    image: String,
    idx: Number,
    activeIdx: Number,
    item: Object,
  },
  data() {
    return {
      urlServer: USE_SERVER,
      checkLoadImg: false,
      checkLazy: false,
    };
  },
  methods: {
    async loadPromise() {
      const loadImg = await fetch(this.urlServer + this.image);
      const promise = await new Promise((resolve, reject) => {
        const img = new Image();
        img.src = loadImg.url;
        img.onload = () => {
          resolve(true);
        };
      });
      this.$emit("loadImage");
      this.checkLoadImg = true;
      this.checkLazy = true;
    },
    onLoad() {
      this.loadPromise();
    },
  },
};
</script>

<style scoped>
.catalog__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s ease;
  z-index: 4;
}

.activeImage {
  opacity: 1;
}
.catalog__image_img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 4;
}
.catalog__image_loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
