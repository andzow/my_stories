<template>
  <div class="cursor__c" id="cursor-circle">
    <div class="cursor__circle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    const cursor = document.querySelector("#cursor-circle");
    const cursorCircle = cursor.querySelector(".cursor__circle");

    const mouse = { x: -100, y: -100 };
    const pos = { x: 0, y: 0 };
    const speed = 1;

    const updateCoordinates = (e) => {
      try {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        if (e?.target?.className?.includes("footer")) {
          cursorCircle.style.backgroundColor = "#fff";
          return;
        }
        cursorCircle.style.backgroundColor = "#a8ab98";
      } catch {}
    };

    window.addEventListener("pointermove", updateCoordinates);

    function getAngle(diffX, diffY) {
      return (Math.atan2(diffY, diffX) * 180) / Math.PI;
    }

    const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);

      pos.x += diffX * speed;
      pos.y += diffY * speed;

      const angle = getAngle(diffX, diffY);
      const rotate = "rotate(" + angle + "deg)";
      const translate = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";

      cursor.style.transform = translate;
      cursorCircle.style.transform = rotate;
    };

    function loop() {
      updateCursor();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  },
  watch: {},
};
</script>

<style scoped>
.cursor__c {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 9999;
}

@media (hover: hover) and (pointer: fine) {
  .cursor__circle {
    width: 17px;
    height: 17px;
    margin-top: -50%;
    margin-left: -50%;
    border-radius: 50%;
    background-color: #a8ab98;
    transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1),
      width 0.4s cubic-bezier(0.25, 1, 0.5, 1), height 0.4s,
      background-color 0.4s;
  }
}
</style>
