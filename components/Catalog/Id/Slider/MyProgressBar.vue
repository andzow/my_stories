<template>
  <div class="slider__progress">
    <div class="slider__progress_content">
      <div class="slider__progress_control">
        <div class="slider__progress_controls">
          <div class="slider__progress_btn">
            <button
              class="slider__progress_button"
              data-cursor-class="animateCursor"
              @click="$emit('prev')"
            >
              <svg
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0039 8.5H1.20901"
                  stroke="#EDE9DF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 1L1 8.5L8.5 16"
                  stroke="#EDE9DF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="slider__progress_btn">
            <button
              class="slider__progress_button"
              data-cursor-class="animateCursor"
              @click="$emit('next')"
            >
              <svg
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.5H21.7904"
                  stroke="#EDE9DF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.502 1L22.0003 8.5L14.502 16"
                  stroke="#EDE9DF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="slider__progress_menu">
        <div
          class="slider__progress_item"
          v-for="(item, idx) in lengthItems"
          :key="item"
        >
          <div
            class="slider__progress_active"
            :class="['slider__progress_active' + idx]"
            v-if="activeIdx === idx"
          ></div>
        </div>
      </div>
    </div>
    <div class="slider__progress_sh">
      <div class="slider__progress_shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lengthItems: Number,
    activeIdx: Number,
    duratinAnimate: String,
  },
  data() {
    return {
      useCursor: useCursor(),
      activeItem: null,
    };
  },
  methods: {
    setDuration() {
      nextTick(() => {
        const elHtml = document.querySelector(
          ".slider__progress_active" + this.activeIdx
        );
        if (!elHtml) return;
        elHtml.style.animationDuration = "";
        elHtml.style.animationDuration = this.duratinAnimate;
      });
    },
  },
  mounted() {
    this.setDuration();
    this.useCursor = false;
    setTimeout(() => {
      this.useCursor = true;
    }, 0);
  },
  watch: {
    activeIdx() {
      this.setDuration();
    },
  },
};
</script>

<style scoped>
.slider__progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-content: flex-end;
  animation-name: animateFirst;
  animation-duration: 0.5s;
  z-index: 5;
}
@keyframes animateFirst {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.slider__progress_content {
  position: relative;
  padding: 0px 10px 15px 10px;
  z-index: 5;
}
.slider__progress_control {
  margin-bottom: 15px;
}
.slider__progress_controls {
  display: flex;
  justify-content: flex-end;
  column-gap: 20px;
}
.slider__progress_button {
  min-width: 30px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider__progress_menu {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
  /* background: black; */
  gap: 15px;
  width: 100%;
}
.slider__progress_item {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 2px;
  background: rgba(237, 233, 223, 0.5);
  border-radius: 300px;
  overflow: hidden;
}
.slider__progress_sh {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 4;
}
.slider__progress_shadow {
  position: relative;
  height: 100%;
  width: 100%;
  background: linear-gradient(to top, rgb(0%, 0%, 0%, 0.9), rgba(0, 0, 0, 0));
  z-index: 4;
}
.slider__progress_active {
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #ede9df;
  animation-name: animationLine;
  /* animation-duration: 7s; */
  transform: translateX(0%);
  animation-timing-function: linear;
}
@keyframes animationLine {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
@media screen and (max-width: 1320px) {
  .slider__progress_menu {
    gap: 5px;
  }
}
@media screen and (max-width: 936px) {
  .slider__progress {
    padding: 0 10%;
  }
  .slider__progress_item {
    padding: 0 10%;
  }
  .slider__progress_sh {
    padding: 0 10%;
  }
  .slider__progress_active {
    padding: 0 10%;
  }
}
@media screen and (max-width: 686px) {
  .slider__progress {
    padding: 0 0;
  }
  .slider__progress_item {
    padding: 0 0;
  }
  .slider__progress_sh {
    padding: 0 0;
  }
  .slider__progress_active {
    padding: 0 0;
  }
}
</style>
