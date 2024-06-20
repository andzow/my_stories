<template>
  <swiper
    class="catalog__swiper"
    :slidesPerView="4"
    :slidesPerGroup="1"
    :spaceBetween="25"
    :speed="500"
  >
    <swiper-slide
      class="catalog__slide"
      v-for="(item, idx) in getArray"
      :key="item"
    >
      <UICardMyCard heightImage="576px" :item="item" :idx="idx" v-if="arrNew" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  data() {
    return {
      useProductObject: useProductObject(),
      arrNew: null,
    };
  },
  computed: {
    getArray() {
      return this.arrNew;
    },
  },
  mounted() {
    const val = this.useProductObject?.other;
    this.arrNew = val;
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped>
.catalog__swiper {
  min-height: 600px;
}
</style>
