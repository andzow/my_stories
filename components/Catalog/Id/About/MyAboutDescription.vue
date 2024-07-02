<template>
  <div class="about__description" :class="{ activeDes: activeText }">
    <div
      class="about__description_header"
      @click="switchHeight"
      data-cursor-class="animateCursor"
    >
      <h2 class="about__description_title">описание</h2>
      <div class="about__description_vector" :class="{ activeSvg: activeText }">
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
    <div class="about__description_content">
      <p class="about__description_text" :key="text">
        {{ text }}
      </p>
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
      nextTick(() => {
        const elHtml = document.querySelector(".about__description_content");
        this.heightContent = elHtml.getBoundingClientRect().height;
        elHtml.style.height = this.heightContent + 10 + "px";
      });
    },
    switchHeight() {
      if (!this.heightContent) return;
      const elHtml = document.querySelector(".about__description_content");
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
      this.text = val.text;
    }
  },
};
</script>

<style scoped>
.about__description {
  margin-bottom: 0px;
  min-height: 50px;
}
.activeDes {
  margin-bottom: 25px;
}
.about__description_header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.about__description_title {
  font-weight: 300;
  font-size: 17px;
  color: var(--brown);
  text-transform: lowercase;
}
.about__description_vector {
  display: flex;
  padding-top: 2px;
}
.about__description_vector svg {
  transition: all 0.5s ease;
}
.activeSvg svg {
  transform: rotate(90deg);
}
.about__description_content {
  overflow: hidden;
  transition: all 0.4s ease;
}
.about__description_text {
  font-weight: 300;
  font-size: 17px;
  color: var(--brown);
  text-transform: lowercase;
  text-align: justify;
  white-space: pre-wrap;
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.about__description_l {
  max-width: 15%;
}
.about__description_loading {
  margin-bottom: 15px;
  width: 50%;
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
  .about__description_text {
    font-size: 16px;
  }
  .about__description_text {
    font-size: 16px;
  }
}
@media screen and (max-width: 936px) {
  .about__description_text {
    font-size: 15px;
  }
  .about__description_text {
    font-size: 15px;
  }
}
</style>
