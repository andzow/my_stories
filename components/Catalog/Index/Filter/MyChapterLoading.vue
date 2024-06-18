<template>
  <div class="chapter__loading">
    <div
      class="chapter__loading_item"
      v-for="(item, index) in arrFilterChapter"
      :key="item"
    >
      <UIMyLoadingItem :item="item" :index="index" :height="item.height" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrFilterChapter: [
        { loading: true, width: "50%" },
        { loading: true, width: "100%" },
        { loading: true, width: "80%" },
        { loading: true, width: "80%" },
        { loading: true, width: "80%", height: "35px" },
        { loading: true, width: "70%" },
        { loading: true, width: "90%" },
        { loading: true, width: "50%", height: "30px" },
        { loading: true, width: "50%" },
        { loading: true, width: "80%" },
        { loading: true, width: "50%" },
        { loading: true, width: "50%" },
        { loading: true, width: "90%" },
        { loading: true, width: "100%", height: "35px" },
        { loading: true, width: "50%" },
        { loading: true, width: "70%" },
        { loading: true, width: "80%" },
        { loading: true, width: "50%", height: "40px" },
      ],
    };
  },
  mounted() {},
};
</script>

<style scoped>
.chapter__loading {
  width: 100%;
  padding-bottom: 25px;
}
</style>
