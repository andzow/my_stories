<template>
  <div class="bg"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  position: fixed;
  height: 100vh;
  background-color: "#66666e";
  z-index: 10;
  width: 100%;
  overflow: hidden;
  z-index: 11;
}

.bg:after {
  position: fixed;
  animation: grain 9s steps(10) infinite;
  background-image: url("@/assets/images/Main/шум.svg");
  content: "";
  height: 300%;
  width: 300%;
  left: -100%;
  top: -110%;
  opacity: 0.06;
  z-index: 11;
}

@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  20% {
    transform: translate(-15%, 5%);
  }
  30% {
    transform: translate(5%, -25%);
  }
  40% {
    transform: translate(-5%, 25%);
  }
  50% {
    transform: translate(-15%, 10%);
  }
  60% {
    transform: translate(15%, 0%);
  }
  70% {
    transform: translate(0%, 15%);
  }
  80% {
    transform: translate(5%, 35%);
  }
  90% {
    transform: translate(-10%, 10%);
  }
}
</style>
