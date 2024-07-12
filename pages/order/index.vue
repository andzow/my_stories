<template>
  <div>
    <OrderMyMain />
    <Transition>
      <OrderMyDeliveryPvz
        v-if="usePvzModal"
        @keydown.esc="usePvzModal = false"
      />
    </Transition>

    <LazyUIMyAnimationLine
      duration="7"
      :arrAnimationLine="arrAnimationLine"
      v-if="arrAnimationLine && checkHydrate"
    />
    <LazyUIMyNoise v-if="checkHydrate" />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      script: [
        {
          src: "https://api-maps.yandex.ru/2.1/?apikey=3170b455-c141-4e3e-a844-79b04a6021eb&lang=ru_RU",
        },
      ],
    });
  },
  data() {
    return {
      usePvzModal: usePvzModal(),
      usePvzCode: usePvzCode(),
      arrAnimationLine: null,
      checkHydrate: useCheckHydration(),
    };
  },
  methods: {
    initGsap() {
      if (window.innerWidth > 936) {
        this.arrAnimationLine = [
          { name: ".header__logo", defaultLine: false, indent: "left" },
          {
            name: ".main__info",
            defaultLine: false,
            indent: "left",
            widthTo: true,
          },
          {
            name: ".header__interaction_search",
            defaultLine: false,
            indent: "left",
          },
        ];
      } else {
        this.arrAnimationLine = [
          { name: ".header__logo", defaultLine: false, indent: "left" },
          {
            name: ".header__interaction_cart",
            defaultLine: false,
            indent: "left",
            widthTo: true,
          },
        ];
      }
    },
  },
  beforeMount() {
    if (
      !localStorage.getItem("cart") ||
      localStorage.getItem("cart")?.length <= 0 ||
      JSON.parse(localStorage.getItem("cart"))?.length <= 0
    ) {
      this.$router.push("/page/not-found");
    }
  },
  unmounted() {
    this.usePvzCode = null;
  },
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
    setTimeout(() => {
      this.initGsap();
    }, 0);
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
