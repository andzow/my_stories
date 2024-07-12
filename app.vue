<template>
  <Transition>
    <UIMyPreloader v-if="!preloader" />
  </Transition>
  <UIMyHeader v-if="headerVisible" />
  <main class="page" v-lazy-hydrate="() => (checkHydrate = true)">
    <!-- <MyLoadCss :apple="$device.isApple" :checkRoute="checkRoute" /> -->
    <NuxtPage />
    <UIMyModalStatus />
    <!-- <LazyUIMyCursor
      v-if="!$device.isMobile && !$device.isApple && !checkRoute"
    />
    <LazyUIMyCursorCircle
      v-if="!$device.isMobile && !$device.isApple && !checkRoute"
    /> -->
  </main>
  <UIMyFooter />
</template>

<script>
import AuthController from "@/http/controllers/AuthController";

export default {
  setup() {
    const routePath = useRoute().path;
    let checkRoute = false;
    if (routePath === "/login" || routePath === "/admin") {
      checkRoute = true;
    }

    return {
      checkRoute,
    };
  },
  data() {
    return {
      useCheckAnimationArr: useCheckAnimationArr(),
      useCursor: useCursor(),
      headerVisible: true,
      preloader: useMainPreload(),
      checkHydrate: useCheckHydration(),
      checkMobile: null,
    };
  },
  methods: {},
  async mounted() {
    if (this.$route.path === "/admin" || this.$route.path === "/login") {
      this.headerVisible = false;
    } else {
      this.headerVisible = true;
    }
    if (localStorage.getItem("accessToken")) {
      await AuthController.cheackAuth();
    }
    setTimeout(() => {
      this.preloader = true;
    }, 1000);
  },
  watch: {
    $route() {
      if (this.$route.path === "/admin" || this.$route.path === "/login") {
        this.headerVisible = false;
      } else {
        this.headerVisible = true;
      }
      // this.useCheckAnimationArr.forEach((el) => {
      //   el.revert();
      // });
      // this.useCheckAnimationArr = [];
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
html {
  cursor: auto;
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
