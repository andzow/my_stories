<template>
  <Transition name="blur-block-fade">
    <div class="blur__block" v-if="searchVisible">
      <slot />
    </div>
  </Transition>
  <!-- <Transition name="blur-background-fade">
    <div class="blur__background" v-if="searchVisible"></div>
  </Transition> -->
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
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(7px);
  z-index: 20;
}

.blur__background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(7px);
  z-index: 9;
}
.blur-block-fade-enter-from {
  top: -50%;
  opacity: 0;
  transition: all 0.3s ease;
}
.blur-block-fade-enter-to {
  top: 0%;
  opacity: 1;
  transition: all 0.3s ease;
}
.blur-block-fade-leave-from {
  top: 0%;
  opacity: 1;
  transition: all 0.3s ease;
}
.blur-block-fade-leave-to {
  top: -50%;
  opacity: 0;
  transition: all 0.4s ease;
}

.blur-background-fade-enter-from {
  opacity: 0;
  transition: all 0.3s ease;
}
.blur-background-fade-enter-to {
  opacity: 1;
  transition: all 0.3s ease;
}
.blur-background-fade-leave-from {
  opacity: 1;
  transition: all 0.3s ease;
}
.blur-background-fade-leave-to {
  opacity: 0;
  transition: all 0.3s ease;
}
</style>
