<template>
  <div class="preloader">
    <div class="preloader__content">
      <div class="preloader__text">
        <p
          v-for="(item, idx) in wordArray"
          :key="idx"
          class="preloader__letter"
          :class="'preloader__letter_' + idx"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wordArray: ["M", "Y", "S", "T", "O", "R", "I", "E", "S", ".", ".", "."],
    };
  },
  mounted() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  },
};
</script>

<style></style>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ede9df;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}
.preload__item {
  transform: translateY(20px);
  transition: all 0.3s ease;
}
.preloader__text {
  display: flex;
  align-items: center;
  font-size: 35px;
  font-weight: 400;
  color: var(--brown);
  letter-spacing: 10px;
}
.preloader__span {
  font-family: "Inter", sans-serif;
}
.preloader__letter {
  font-size: 40px;
  opacity: 0;
  animation: appear 1s ease forwards;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (max-width: 470px) {
  .preloader__letter {
    font-size: 30px;
  }
}
@media (max-width: 767px) {
  .preloader__letter {
    font-size: 30px;
  }
}
</style>
