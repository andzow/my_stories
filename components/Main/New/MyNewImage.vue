<template>
  <swiper
    class="new__item_swiper"
    :slidesPerView="1"
    :slidesPerGroup="1"
    :effect="'fade'"
    :loop="false"
    :rewind="true"
    :allowTouchMove="true"
    :pagination="pagination"
    :modules="modules"
    :speed="400"
    @swiper="onSwiperInit"
  >
    <swiper-slide
      v-for="slide in getArrSwiperImages"
      class="new__item_slide"
      :key="slide"
    >
      <div class="new__item_card">
        <NuxtLink :to="item.name ? `/catalog/${item?.name}/${item?.id}` : '/'">
          <NuxtImg
            class="new__item_imgs"
            :src="'http://localhost:8080/api/' + slide"
            :alt="item.name"
            @load="onImageLoad"
            width="451"
            height="565"
            loading="lazy"
          />
        </NuxtLink>
      </div>
    </swiper-slide>
    <div class="new__item_pagination"></div>
    <div class="new__item_texture" v-if="item?.discount"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Pagination } from "swiper/modules";
import { USE_SERVER } from "~/url";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default {
  props: {
    images: Array,
    idx: Number,
    sale: {},
    item: Object,
  },
  data() {
    return {
      arrImages: null,
      checkLoad: false,
      useCursor: useCursor(),
      useServ: null,
    };
  },
  setup() {
    const pagination = { el: ".new__item_pagination", clickable: true };
    const modules = [EffectFade, Pagination];
    return {
      pagination,
      modules,
    };
  },
  computed: {
    getArrSwiperImages() {
      return this.images.filter((el, idx) => idx <= 1);
    },
  },
  methods: {
    onSwiperInit(instance) {
      this.swiper = instance;
      this.initMouseEnter();
    },
    initMouseEnter() {
      const bulletEl = document.querySelectorAll(
        `.new__item${this.idx + 1} .swiper-pagination-bullet`
      );
      bulletEl.forEach((el, idx) => {
        el.addEventListener("mouseenter", () => {
          this.swiper.slideTo(idx);
        });
      });
    },
    onImageLoad() {
      this.$emit("load");
    },
  },
  mounted() {
    this.useCursor = true;
    this.useServ = USE_SERVER;
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.new__item_swiper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.new__item_texture {
  position: absolute;
  top: 10%;
  left: 20%;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/Main/textureSale.svg");
  z-index: 6;
}
.new__item_slide {
  position: relative;
  width: 100%;
  height: 100%;
}

.new_item_slide {
  position: relative;
  z-index: 10;
}
.new__item_card {
  height: 100%;
}
.new__item_imgs {
  position: relative;
  object-fit: cover;
  height: 100%;
  width: 100%;
  animation-duration: 0.5s;
  animation-name: animateOpacity;
  z-index: 5;
}
@keyframes animateOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.new__item_pagination {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  gap: 0;
  z-index: 11;
}
</style>
