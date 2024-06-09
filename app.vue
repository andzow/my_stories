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
import AuthController from "@/http/controllers/AuthController";

export default {
  data() {
    return {
      useCheckAnimationArr: useCheckAnimationArr(),
      useCursor: useCursor(),
    };
  },
  async mounted() {
    if (localStorage.getItem("accessToken")) {
      await AuthController.cheackAuth();
    }
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
