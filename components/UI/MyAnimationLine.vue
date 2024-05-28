<template>
  <div class="lines" ref="lines">
    <div class="lines__content">
      <div
        class="lines__line"
        v-for="(item, idx) in 4"
        :key="item"
        :class="['lines__line' + (idx + 1)]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heightEl: null,
    };
  },
  mounted() {
    this.calculateHeight();
    window.addEventListener("resize", this.calculateHeight);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.calculateHeight);
  },
  methods: {
    calculateHeight() {
      const linesElement = this.$refs.lines;
      const linesTop = linesElement.getBoundingClientRect().top;
      const documentHeight = document.documentElement.scrollHeight;
      const height = documentHeight - linesTop;

      linesElement.style.height = height + "px";
    },
  },
};
</script>

<style scoped>
.lines {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9;
}
.lines__content {
  position: relative;
  max-width: 1920px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.lines__line {
  position: absolute;
  width: 1px;
  height: 100%;
  background: #d2bcae;
}
.lines__line1 {
  left: 30px;
}
.lines__line2 {
  left: 383px;
}
.lines__line3 {
  left: 1053px;
}
.lines__line4 {
  right: 98px;
}
</style>
