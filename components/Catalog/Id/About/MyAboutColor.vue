<template>
  <div class="about__color">
    <h2 class="about__color_title">цвет</h2>
    <div class="about__color_content">
      <div class="about__color_item" v-for="item in arrColors" :key="item">
        <div class="about__color_outline"></div>
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
          color: "brown",
        },
        {
          name: "Красный",
          color: "red",
        },
        {
          name: "Желтый",
          color: "yellow",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
