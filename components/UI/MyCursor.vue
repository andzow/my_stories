<template>
  <div class="cursor" id="cursor-inside">
    <div class="cursor__inside"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useCursor: useCursor(),
    };
  },
  methods: {
    setModifiers(cursorCircle) {
      const cursorModifiers = document.querySelectorAll("[data-cursor-class]");

      cursorModifiers.forEach((cursorModifier) => {
        cursorModifier.addEventListener("mouseenter", () => {
          const className = cursorModifier.getAttribute("data-cursor-class");
          cursorCircle.classList.add(className);
        });

        cursorModifier.addEventListener("mouseleave", () => {
          const className = cursorModifier.getAttribute("data-cursor-class");
          cursorCircle.classList.remove(className);
        });

        cursorModifier.addEventListener("click", () => {
          const className = cursorModifier.getAttribute("data-cursor-class");
          cursorCircle.classList.remove(className);
        });
      });
    },
    setCursorStyle(e) {
      const cursor = document.querySelector("#cursor-inside");
      const cursorCircle = cursor.querySelector(".cursor__inside");

      try {
        if (e?.target?.className?.includes("footer")) {
          cursorCircle.style.border = "1px solid #fff";
          return;
        }
        cursorCircle.style.border = "1px solid #a8ab98";
      } catch {}
    },
  },
  mounted() {
    const cursor = document.querySelector("#cursor-inside");
    const cursorCircle = cursor.querySelector(".cursor__inside");

    const mouse = { x: -100, y: -100 };
    const pos = { x: 0, y: 0 };
    const speed = 0.2;

    const updateCoordinates = (e) => {
      try {
        const cursor = document.querySelector("#cursor-inside");
        const cursorCircle = cursor.querySelector(".cursor__inside");

        mouse.x = e.clientX;
        mouse.y = e.clientY;
        if (e?.target?.className?.includes("footer")) {
          cursorCircle.style.border = "1px solid #fff";
          return;
        }
        cursorCircle.style.border = "1px solid #a8ab98";
      } catch {}
    };

    window.addEventListener("pointermove", updateCoordinates);

    function getAngle(diffX, diffY) {
      return (Math.atan2(diffY, diffX) * 180) / Math.PI;
    }

    function getSqueeze(diffX, diffY) {
      const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
    }

    const updateCursor = (e) => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);

      pos.x += diffX * speed;
      pos.y += diffY * speed;

      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);

      const scale = "scale(" + (1 + squeeze) + ", " + (1 - squeeze) + ")";
      const rotate = "rotate(" + angle + "deg)";
      const translate = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";

      cursor.style.transform = translate;
      cursorCircle.style.transform = rotate + scale;
    };

    function loop() {
      updateCursor(event);
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    this.setModifiers(cursorCircle);
  },
  watch: {
    useCursor(val) {
      if (val) {
        const cursor = document.querySelector("#cursor-inside");
        const cursorCircle = cursor.querySelector(".cursor__inside");
        this.setModifiers(cursorCircle);
        this.useCursor = false;
      }
    },
  },
};
</script>

<style scoped>
.cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 99;
}

@media (hover: hover) and (pointer: fine) {
  .cursor__inside {
    width: 30px;
    height: 30px;
    margin-top: -50%;
    margin-left: -50%;
    border-radius: 50%;
    border: solid 1px #a8ab98;
    transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1),
      width 0.4s cubic-bezier(0.25, 1, 0.5, 1),
      height 0.4s cubic-bezier(0.25, 1, 0.5, 1), border 0.4s;
  }
  .animateCursor {
    width: 65px;
    height: 65px;
  }
}
</style>
