<template>
  <Transition>
    <UIMyPreloader v-if="!preloader" />
  </Transition>
  <UIMyHeader v-if="headerVisible" />
  <main class="page">
    <NuxtPage />
    <UIMyModalStatus />
    <LazyUIMyCursor v-if="checkHydrate && checkMobile === false" />
    <LazyUIMyCursorCircle v-if="checkHydrate && checkMobile === false" />
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
      checkHydrate: useCheckHydration(),
      checkMobile: null,
    };
  },
  methods: {
    isMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/android/i.test(userAgent)) {
        return true;
      }

      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return true;
      }

      if (/windows phone/i.test(userAgent)) {
        return true;
      }

      if (
        /blackberry|webos|opera mini|opera mobi|bada|tizen|windows ce|palm/i.test(
          userAgent
        )
      ) {
        return true;
      }

      return false;
    },
  },
  async mounted() {
    this.checkMobile = this.isMobile();
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

<style>
* {
  cursor: none !important;
}
button {
  cursor: none !important;
}
</style>
<style scoped>
.page {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.7s ease-in-out;
}
.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
  border-radius: 80%;
}
@media (max-width: 767px) {
  .v-enter-from,
  .v-leave-to {
    transform: translateY(-100%);
    border-radius: 0%;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;
  }
}
</style>
