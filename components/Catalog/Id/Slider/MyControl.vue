<template>
  <div class="slider__control">
    <div class="slider__control_prev">
      <button
        class="slider__control_btn"
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
            stroke="#AF9280"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 1L1 8.5L8.5 16"
            stroke="#AF9280"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="slider__control_next">
      <button
        class="slider__control_btn"
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
            stroke="#AF9280"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.502 1L22.0003 8.5L14.502 16"
            stroke="#AF9280"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useCursor: useCursor(),
    };
  },
  mounted() {
    this.useCursor = false;
    setTimeout(() => {
      this.useCursor = true;
    }, 10);
  },
};
</script>

<style scoped>
.slider__control {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 1%;
  right: 0;
  z-index: 19;
}
.slider__control_btn {
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
}
.slider__control_next {
  margin-left: 20px;
}
@media screen and (max-width: 1600px) {
  .slider__control {
    bottom: -1.5%;
  }
}
@media screen and (max-height: 760px) and (max-width: 1630px) {
  .slider__control {
    bottom: -1.5%;
  }
}
@media screen and (max-width: 450px) {
  .slider__control {
    bottom: -5%;
  }
}
</style>
