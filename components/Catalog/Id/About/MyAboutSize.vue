<template>
  <div class="about__size">
    <h2 class="about__size_title">Размер</h2>
    <div class="about__size_empty" v-if="arrProductSize?.length <= 0">
      У данного раздела/ов нет размера.
    </div>
    <div class="about__size_content">
      <div
        class="about__size_item"
        v-for="(item, idx) in arrProductSize"
        :key="item"
      >
        <UIButtonMyButton
          v-if="item?.name"
          class="about__size_btn"
          :aria-label="item.name"
          :info="item.name"
          padding="12px 0"
          fontSize="20"
          data-cursor-class="animateCursor"
          @click="activeIdx = idx"
          :active="activeIdx === idx ? true : false"
        />
      </div>
    </div>
    <div class="about__size_menu">
      <div
        class="about__size_text"
        v-for="(item, idx) in arrTable"
        :key="item"
        data-cursor-class="animateCursor"
        @click="setActiveTable(idx)"
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
  props: {
    arrProductSize: Array,
    getSize: Boolean,
  },
  data() {
    return {
      arrTable: ["таблица размеров", "обмеры изделия"],
      activeTableIdx: null,
      useTableSize: useTableSize(),
      useTableMeus: useTableMeus(),
      activeIdx: 0,
    };
  },
  methods: {
    setActiveTable(idx) {
      if (idx === 0) {
        this.useTableSize = true;
        return;
      }
      this.useTableMeus = true;
    },
  },
  mounted() {},
  watch: {
    getSize(val) {
      if (val) {
        this.$emit("getIndex", this.activeIdx);
      }
    },
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
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.about__size_content {
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  animation-name: animationOpacity;
  animation-duration: 1s;
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
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.about__size_empty {
  font-size: 16px;
  font-weight: 500;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 10px;
}
.about__size_text svg {
  transition: all 0.4s ease;
}
.about__size_vector {
  display: flex;
  margin-left: 30px;
}
@keyframes animationOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media screen and (max-width: 478px) {
  .about__size_menu {
    margin-top: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 15px;
    flex-direction: column;
  }
}
</style>
