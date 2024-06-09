<template>
  <div class="about__color">
    <h2 class="about__color_title">цвет</h2>
    <div class="about__color_content">
      <div
        class="about__color_item"
        data-cursor-class="animateCursor"
        v-for="item in arrColors"
        :key="item"
        :style="{
          border: `1px solid ${
            $route.query.color === item.color ? item.color : 'rgba(0,0,0,0)'
          }`,
        }"
      >
        <div
          class="about__color_outline"
          :style="{ background: item.color }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  mounted() {},
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
}
.about__color_content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 15px;
}
.about__color_item {
  width: 47px;
  height: 47px;

  border-radius: 100%;
  padding: 5px;
}
.about__color_outline {
  width: 100%;
  height: 100%;
  background: var(--brown);
  border-radius: 100%;
}
</style>
