<template>
  <Transition name="blur-block-fade">
    <div class="blur__block" v-if="searchVisible">
      <slot />
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    searchVisible: { type: Boolean },
  },
};
</script>

<style scoped>
.blur__block {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 20;
}

.blur-block-fade-enter-from {
  opacity: 0;
  transition: all 0.4s ease;
}
.blur-block-fade-enter-to {
  opacity: 1;
  transition: all 0.4s ease;
}
.blur-block-fade-leave-from {
  opacity: 1;
  transition: all 0.4s ease;
}
.blur-block-fade-leave-to {
  opacity: 0;
  transition: all 0.4s ease;
}
</style>
