<template>
  <div class="new__controls">
    <div
      class="new__control"
      v-for="(item, idx) in lengthEl"
      :key="item"
      @mouseenter="setActiveIdx(idx)"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    lengthEl: Number,
    item: Object,
  },
  methods: {
    setActiveIdx(idx) {
      const { isMobile } = useDevice();
      if (!isMobile) {
        this.$emit("setImage", idx);
        return;
      }
      this.$router.push(`/catalog/${this.item.name}/${this.item.id}`);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.new__controls {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
  gap: 15px;
  z-index: 5;
}
.new__control {
  width: 100%;
  height: 100%;
}
</style>
