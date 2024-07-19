<template>
  <!-- <Transition>
    <UIMyPreloader v-if="!preloader" />
  </Transition> -->
  <UIMyHeader v-if="headerVisible" />
  <main class="page" v-lazy-hydrate="() => (checkHydrate = true)">
    <NuxtPage />
    <UIMyModalStatus />
    <LazyUIMyCursor v-if="!$device.isMobile && cursorFooter" />
    <LazyUIMyCursorCircle v-if="!$device.isMobile && cursorFooter" />
  </main>
  <UIMyFooter @openFooter="openFooter" @closeFooter="closeFooter" />
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
      useLengthCart: useLengthCart(),
      checkMobile: null,
      cursorFooter: false,
      useCheckedAuth: useCheckedAuth(),
    };
  },
  methods: {
    async checkAuthApp() {
      try {
        const response = await AuthController.cheackAuth();
        if (response) {
          this.useCheckedAuth = true;
        }
      } catch {
        this.useCheckedAuth = false;
      }
    },
    closeFooter() {
      document.documentElement.classList.remove("dynamicStyleOn");
      this.cursorFooter = false;
    },
    openFooter() {
      document.documentElement.classList.add("dynamicStyleOn");
      this.cursorFooter = true;
    },
    initCartLength() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart || cart?.length <= 0) {
        this.useLengthCart = null;
      } else {
        this.useLengthCart = cart.length;
      }
    },
  },
  mounted() {
    if (localStorage.getItem("accessToken")) {
      this.checkAuthApp();
    }
    this.initCartLength();
    if (this.$route.path === "/admin" || this.$route.path === "/login") {
      this.headerVisible = false;
    } else {
      this.headerVisible = true;
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
