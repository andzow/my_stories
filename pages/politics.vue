<template>
  <div>
    <PoliticsMyMain />
    <LazyUIMyNoise v-if="checkHydrate" />
  </div>
</template>

<script>
import politicsData from "~/assets/json/politics.json";

export default {
  data() {
    return {
      politics: politicsData,
      checkHydrate: useCheckHydration(),
    };
  },
};
</script>

<style scoped></style>
