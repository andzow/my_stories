<template>
  <Transition>
    <UIMyPreloader v-if="!preloader"/>
  </Transition>
  <UIMyHeader v-if="headerVisible" />
  <main class="page">
    <NuxtPage />
    <!-- <UIMyPreloader v-if="preloader" /> -->
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
      headerVisible: true,
      preloader: false,
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
    setTimeout(() => {
      this.preloader = true;
    }, 1800);
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

<style scoped>
* {
  cursor: none !important;
}
button {
  cursor: none;
}
.page {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.v-enter-active,
.v-leave-active {
  transition: all .7s ease-in-out;
}
.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
  border-radius: 80%;
}
@media(max-width: 470px) {
  .v-enter-from,
  .v-leave-to {
    transform: translateY(-100%);
    border-radius: 20%;
  }
}
</style>
