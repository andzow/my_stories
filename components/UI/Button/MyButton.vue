<template>
  <div
    class="button"
    @mousemove="updateParallax"
    @mouseleave="resetParallax"
    :class="{ activeBtn: active }"
  >
    <button
      class="button__btn"
      :class="[variant, size, bigSize]"
      :style="squareStyle"
      ref="button"
    >
      {{ info }}
      <span
        class="button__cirlce"
        :class="[variant + '__circle', bigSize + '__circle']"
        :style="circleStyle"
      ></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    info: String,
    path: String,
    variant: String,
    size: String,
    fontSize: String,
    bigSize: String,
    active: Boolean,
    padding: String,
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      circleX: 0,
      circleY: 0,
    };
  },
  computed: {
    squareStyle() {
      const tX = this.mouseX / 5;
      const tY = this.mouseY / 2;
      return {
        fontSize: this.fontSize + "px",
        transform: `translateX(${tX}px) translateY(${tY}px)`,
        padding: this.padding ? this.padding : "",
        transition: "all 0.4s ease",
      };
    },
    circleStyle() {
      return {
        top: `${this.circleY}px`,
        left: `${this.circleX}px`,
      };
    },
  },
  methods: {
    updateParallax(event) {
      if (this.$refs.button) {
        this.$refs.button.classList.remove("return-animation");
        this.circleX = event.offsetX;
        this.circleY = event.offsetY;
      }
    },
    resetParallax() {
      if (this.$refs.button) {
        this.$refs.button.classList.add("return-animation");
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.button {
  perspective: 1000px;
  width: 100%;
}
.button__btn {
  text-align: center;
  border: 1px solid var(--brown);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  background-color: transparent;
  z-index: 10;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  cursor: none;
}
.green {
  background-color: #ede9df;
}
.main {
  background-color: #ede9df;
}
.white {
  background-color: none;
  color: #fff;
  border: 1px solid #fff;
}

.button__btn_line {
  border: 3px solid var(--brown);
}
.return-animation {
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.button__cirlce {
  width: 30px;
  height: 30px;
  border-radius: 90px;
  background-color: var(--brown);
  position: absolute;
  top: -30px;
  left: 0;
  transition: transform 0.6s ease;
  z-index: -1;
  pointer-events: none;
  transform: scale(0);
}
.bigSize__circle {
  transition: transform 0.7s ease;
}
.average__circle {
  transition: transform 1s ease !important;
}
.activeBtn {
  background-color: var(--brown);
  color: white;
}
.green__circle {
  background-color: #868975;
}
.white__circle {
  background-color: #868975;
}
.button__btn:hover .button__cirlce {
  transform: scale(40);
}
.bigSize:hover .button__cirlce {
  transform: scale(140) !important;
}
.big .button__cirlce {
  transition: transform 1s ease;
}
.big:hover .button__cirlce {
  transform: scale(60);
}
.button__btn:hover {
  color: #fff;
}
</style>
