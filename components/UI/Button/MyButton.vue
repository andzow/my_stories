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
      <span class="button__spinner" v-if="loadingBtn"></span>
      {{ !loadingBtn ? info : "" }}
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
    loadingBtn: Boolean,
    heightEl: String,
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
        height: this.heightEl ? this.heightEl : "",
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
  text-transform: lowercase;
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
.big .button__cirlce {
  transition: transform 1s ease;
}
.button__spinner {
  border: 4px solid #af9280;
  border-top: 4px solid #f3f3f3;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 0.7s linear infinite;
  display: inline-block;
  margin-top: 5px;
  margin-left: 8px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (hover: hover) and (pointer: fine) {
  .button__btn:hover {
    color: #fff;
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
}
@media screen and (max-width: 1154px) {
  .button__btn {
    font-size: 20px !important;
  }
}
@media screen and (max-width: 986px) {
  .button__btn {
    font-size: 20px !important;
  }
}
</style>
