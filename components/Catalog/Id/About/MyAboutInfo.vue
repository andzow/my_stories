<template>
  <div class="about__info" :class="{ activeInfo: activeText }">
    <div
      class="about__info_header"
      @click="switchHeight"
      data-cursor-class="animateCursor"
      v-show="arrProduct"
    >
      <h2 class="about__info_title">характеристика</h2>
      <div class="about__info_vector" :class="{ activeSvg: activeText }">
        <svg
          width="9"
          height="18"
          viewBox="0 0 9 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 17L7.43043 10.4141C8.18986 9.63636 8.18986 8.36364 7.43043 7.58586L1 1"
            stroke="#AF9280"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="about__info_content">
      <p class="about__info_text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arrProduct: {},
  },
  data() {
    return {
      activeText: true,
      heightContent: null,
      useProductObject: useProductObject(),
      text: null,
    };
  },
  methods: {
    async initHeightTextContent() {
      await nextTick(() => {
        const elHtml = document.querySelector(".about__info_content");
        this.heightContent = elHtml.getBoundingClientRect().height;
        elHtml.style.height = this.heightContent + "px";
      });
    },
    switchHeight() {
      if (!this.heightContent) return;
      const elHtml = document.querySelector(".about__info_content");
      if (this.activeText) {
        elHtml.style.transition = "all 0.4s ease";
        elHtml.style.height = "0px";
        this.activeText = false;
        return;
      }
      elHtml.style.height = this.heightContent + "px";
      this.activeText = true;
    },
  },
  mounted() {
    this.initHeightTextContent();
  },
  created() {
    const val = this.arrProduct;
    if (val) {
      this.text = val.characteristic;
    }
  },
};
</script>

<style scoped>
.about__info {
  margin-bottom: 25px;
}
.activeInfo {
  margin-bottom: 25px;
}
.about__info_header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 10px 0;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.about__info_title {
  font-weight: 300;
  font-size: 17px;
  color: var(--brown);
  text-transform: lowercase;
}
.about__info_vector {
  display: flex;
  padding-top: 2px;
}
.about__info_vector svg {
  transition: all 0.4s ease;
}
.activeSvg svg {
  transform: rotate(90deg);
}
.about__info_content {
  overflow: hidden;
  transition: all 0.4s ease;
}
.about__info_load {
  max-width: 15%;
}
.about__info_text {
  font-weight: 300;
  font-size: 17px;
  color: var(--brown);
  text-transform: lowercase;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  white-space: pre-wrap;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
@keyframes animationOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media screen and (max-width: 1400px) {
  .about__info_title {
    font-size: 15px;
  }
  .about__info_text {
    font-size: 15px;
  }
}
@media screen and (max-width: 936px) {
  .about__info_title {
    font-size: 15px;
  }
  .about__info_text {
    font-size: 15px;
  }
}
</style>
