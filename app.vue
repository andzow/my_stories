<template>
  <!-- <UIMyHeader v-if="headerVisible" /> -->
  <main class="page">
    <NuxtPage />
    <!-- <UIMyPreloader v-if="preloader" /> -->
    <!-- <UIMyModalStatus />
    <UIMyCursor />
    <UIMyCursorCircle /> -->
  </main>
  <!-- <UIMyFooter /> -->
</template>

<script>
import AuthController from "@/http/controllers/AuthController";

export default {
  data() {
    return {
      useCheckAnimationArr: useCheckAnimationArr(),
      useCursor: useCursor(),
      headerVisible: true,
      preloader: true,
    };
  },
  async mounted() {
    if (this.$route.path === "/admin" || this.$route.path === "/login") {
      this.headerVisible = false;
    } else {
      this.headerVisible = true;
    }
    if (localStorage.getItem("accessToken")) {
      await AuthController.cheackAuth();
    }
    // document.addEventListener("visibilitychange", () => {
    //   if (!document.hidden && this.swiper) {
    //     this.useCheckAnimationArr.forEach((el) => {
    //       el.revert();
    //     });
    //   }
    // });
  },
  watch: {
    $route() {
      if (this.$route.path === "/admin" || this.$route.path === "/login") {
        this.headerVisible = false;
      } else {
        this.headerVisible = true;
      }
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
