<template>
  <canvas id="noiseCanvas" class="noise"></canvas>
</template>

<script>
export default {
  mounted() {
    const canvas = document.getElementById("noiseCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function generateNoise(ctx, width, height) {
      const imageData = ctx.createImageData(width, height);
      const buffer32 = new Uint32Array(imageData.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xaa7f7f7f;
        } else {
          buffer32[i] = 0xaaffffff;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }

    let lastTime = 0;
    const delay = 80;

    function animateNoise(timestamp) {
      if (timestamp - lastTime >= delay) {
        generateNoise(ctx, canvas.width, canvas.height);
        lastTime = timestamp;
      }
      requestAnimationFrame(animateNoise);
    }

    animateNoise();
  },
};
</script>

<style scoped>
.noise {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.1;
  z-index: 10;
}
</style>
