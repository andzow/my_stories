<template>
  <UIMyHeader />
  <main class="page">
    <NuxtPage />
    <UIMyModalStatus />
    <UIMyCursor />
    <UIMyCursorCircle />
  </main>
  <UIMyFooter />
</template>

<script>
export default {
  data() {
    return {
      useCheckAnimationArr: useCheckAnimationArr(),
      useCursor: useCursor(),
    };
  },
  watch: {
    $route() {
      this.useCheckAnimationArr.forEach((el) => {
        el.revert();
      });
      this.useCheckAnimationArr = [];
      setTimeout(() => {
        if (this.$route.path !== "/lookbook") {
          this.useCursor = true;
        }
      }, 500);
    },
  },
};
</script>

<style>
* {
  cursor: none !important;
}
button {
  cursor: none;
}
.page {
  width: 100%;
  overflow: hidden;
}
</style>
