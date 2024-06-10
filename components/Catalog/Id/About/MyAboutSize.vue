<template>
  <div class="about__size">
    <h2 class="about__size_title">Размер</h2>
    <div class="about__size_content">
      <div class="about__size_item" v-for="item in arrSize" :key="item">
        <UIButtonMyButton
          class="about__size_btn"
          :aria-label="item"
          :info="item"
          padding="12px 0"
          fontSize="20"
          data-cursor-class="animateCursor"
        />
      </div>
    </div>
    <div class="about__size_menu">
      <div
        class="about__size_text"
        v-for="(item, idx) in arrTable"
        :key="item"
        data-cursor-class="animateCursor"
        @click="idx === 0 ? (useTableSize = true) : (useTableMeus = true)"
      >
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
      activeTableIdx: null,
      useTableSize: useTableSize(),
      useTableMeus: useTableMeus(),
    };
  },
};
</script>

<style scoped>
.about__size {
  margin-bottom: 20px;
}
.about__size_title {
  font-weight: 300;
  font-size: 17px;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 10px;
}
.about__size_content {
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-bottom: 20px;
}
.about__size_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
}
.about__size_text {
  display: flex;
  align-items: center;
}
.about__size_text svg {
  transition: all 0.4s ease;
}
.about__size_vector {
  display: flex;
  margin-left: 30px;
}
</style>
