<template>
  <div class="about__color">
    <h2 class="about__color_title">цвет</h2>
    <div class="about__color_content">
      <div
        class="about__color_item"
        data-cursor-class="animateCursor"
        @click="changeRoute(item.id)"
        v-for="item in getColor"
        :key="item"
        :style="{
          border: `1px solid ${
            $route.params.id === item.id ? item.colorValue : 'rgba(0,0,0,0)'
          }`,
        }"
      >
        <div
          class="about__color_outline"
          :style="{ background: item.colorValue }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arrProduct: {},
  },
  data() {
    return {
      useProductObject: useProductObject(),
      arrColors: [
        {
          name: "Коричневый",
          color: "#AF9280",
        },
        {
          name: "white",
          color: "#fff",
        },
        {
          name: "7884A4",
          color: "#7884A4",
        },
        {
          name: "D8B0B0",
          color: "#D8B0B0",
        },
      ],
      arrColorsQuery: null,
      useCursor: useCursor(),
    };
  },
  computed: {
    getColor() {
      return this.arrColorsQuery;
    },
  },
  methods: {
    changeRoute(id) {
      if (this.$route.params.id !== id) {
        this.$router.push(id);
      }
    },
  },
  created() {
    const val = this.useProductObject;
    this.arrColorsQuery = val.colors;
    this.useCursor = true;
  },
};
</script>

<style scoped>
.about__color {
  margin-bottom: 40px;
}
.about__color_title {
  font-weight: 300;
  font-size: 17px;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 10px;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.about__color_content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 15px;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.about__color_load {
  max-width: 15%;
  margin-bottom: 10px;
}
.about__color_loading {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  max-width: 40%;
}
.about__color_item {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  padding: 5px;
}
.about__color_outline {
  width: 100%;
  height: 100%;
  background: var(--brown);
  border-radius: 100%;
}
@keyframes animationOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
