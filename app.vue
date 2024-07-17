<template>
  <!-- <Transition>
    <UIMyPreloader v-if="!preloader" />
  </Transition> -->
  <LazyUIMyHeader v-if="headerVisible && checkHydrate" />
  <main class="page" v-lazy-hydrate="() => (checkHydrate = true)">
    <NuxtPage />
    <UIMyModalStatus />
    <LazyUIMyCursor v-if="!$device.isMobile && cursorFooter" />
    <LazyUIMyCursorCircle v-if="!$device.isMobile && cursorFooter" />
  </main>
  <LazyUIMyFooter
    v-if="checkHydrate"
    @openFooter="openFooter"
    @closeFooter="closeFooter"
  />
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
      cursorFooter: false,
    };
  },
  methods: {
    async checkAuthApp() {
      await AuthController.cheackAuth();
    },
    closeFooter() {
      document.documentElement.classList.remove("dynamicStyleOn");
      this.cursorFooter = false;
    },
    openFooter() {
      document.documentElement.classList.add("dynamicStyleOn");
      this.cursorFooter = true;
    },
  },
  mounted() {
    document.documentElement.classList.add("autoCursor");
    document.documentElement.classList.add("pointerCursor");
    if (this.$route.path === "/admin" || this.$route.path === "/login") {
      this.headerVisible = false;
    } else {
      this.headerVisible = true;
    }
    if (localStorage.getItem("accessToken")) {
      this.checkAuthApp();
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
.dynamicStyleOn {
  cursor: none !important;
}
/* .pointerCursor {
  cursor: url("/pointer.png"), pointer;
} */
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
</style>
