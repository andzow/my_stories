<template>
  <div>
    <OrderMyMain />
    <Transition>
      <OrderMyDeliveryPvz
        v-if="usePvzModal"
        @keydown.esc="usePvzModal = false"
      />
    </Transition>
    <UIMyNoise />
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
    };
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
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
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
