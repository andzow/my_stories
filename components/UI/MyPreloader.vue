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
  animation: appear 0.5s ease forwards;
}

@keyframes appear {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  50% {
    transform: translateY(-10px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.preloader__letter_0 {
  animation-delay: 0.1s;
}
.preloader__letter_1 {
  animation-delay: 0.2s;
  margin-right: 10px;
}
.preloader__letter_2 {
  animation-delay: 0.3s;
}
.preloader__letter_3 {
  animation-delay: 0.4s;
}
.preloader__letter_4 {
  animation-delay: 0.5s;
}
.preloader__letter_5 {
  animation-delay: 0.6s;
}
.preloader__letter_6 {
  animation-delay: 0.7s;
}
.preloader__letter_7 {
  animation-delay: 0.8s;
}
.preloader__letter_8 {
  animation-delay: 0.9s;
}
.preloader__letter_9 {
  animation-delay: 1s;
}
.preloader__letter_10 {
  animation-delay: 1.1s;
}
.preloader__letter_11 {
  animation-delay: 1.2s;
}
.preloader__letter_12 {
  animation-delay: 1.3s;
}
@media(max-width: 470px) {
  .preloader__letter {
  font-size: 30px;
}
}
</style>
