<template>
  <div class="about__size">
    <h2 class="about__size_title">Размер</h2>
    <div class="about__size_content">
      <div class="about__size_item" v-for="item in arrSize" :key="item">
        <UIButtonMyButton
          :aria-label="item"
          :info="item"
          fontSize="20"
          cursor-class="animateCursor"
        />
      </div>
    </div>
    <div class="about__size_menu">
      <div class="about__size_text" v-for="item in arrTable" :key="item">
        {{ item }}
        <div class="about__size_vector">
          <svg
            width="9"
            height="18"
            viewBox="0 0 9 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 17L7.43043 10.4141C8.18986 9.63636 8.18986 8.36364 7.43043 7.58586L1 1"
              stroke="#AF9280"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrSize: ["s", "m", "l", "xl"],
      arrTable: ["таблица размеров", "обмеры изделия"],
    };
  },
};
</script>

<style scoped>
.about__size {
  margin-bottom: 20px;
}
.about__size_title {
  font-weight: 200;
  font-size: 16px;
  color: var(--brown);
  text-transform: lowercase;
}
</style>
