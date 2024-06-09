<template>
  <div class="spinner">
    <div class="spinner__container"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.spinner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f4ede6;
  z-index: 10;
}

.spinner__container {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 5px solid rgba(175, 146, 128, 0.3);
  border-top: 5px solid #af9280;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
