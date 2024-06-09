<template>
  <section class="main">
    <UIMyTitle :name="'lookbook'" />
    <div
      class="main__images"
      v-for="(item, idx) in setActiveCssStyle"
      :key="item"
      :class="['main__images' + (idx + 1)]"
      :style="{
        top: item.setCss.top,
        right: item.setCss.right,
      }"
    >
      <img class="main__img" :src="item.imageSrc" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrImages: [
        {
          imageSrc: "../Lookbook/main1.webp",
          setCss: {
            top: `15%`,
            right: `65%`,
          },
        },
        {
          imageSrc: "../Lookbook/main2.webp",
          setCss: {
            top: `38%`,
            right: `51.5%`,
          },
        },
        {
          imageSrc: "../Lookbook/main3.webp",
          setCss: {
            top: `20%`,
            right: `40%`,
          },
        },
        {
          imageSrc: "../Lookbook/main4.webp",
          setCss: {
            top: `70%`,
            right: `70%`,
          },
        },
        {
          imageSrc: "../Lookbook/main5.webp",
          setCss: {
            top: `60%`,
            right: `46.5%`,
          },
        },
        {
          imageSrc: "../Lookbook/main6.webp",
          setCss: {
            top: `40%`,
            right: `18%`,
          },
        },
      ],
      arrNewImages: [
        {
          top: `15%`,
          right: `80%`,
        },
        {
          top: `10%`,
          right: `55%`,
        },
        {
          top: `15%`,
          right: `15%`,
        },
        {
          top: `70%`,
          right: `76.5`,
        },
        {
          top: `70%`,
          right: `36.5%`,
        },
        {
          top: `55%`,
          right: `-8%`,
        },
      ],
      useGsapAnimationOpacity: useGsapAnimationOpacity,
      arrClassNameForAnimation: [],
    };
  },
  computed: {
    setActiveCssStyle() {
      return this.arrImages;
    },
  },
  methods: {
    changeCssStyle() {
      this.arrImages.forEach((el, idx) => {
        if (idx === 3) {
          this.arrImages[idx].setCss.top = "70%";
          this.arrImages[idx].setCss.right = "76.5%";
          return;
        }
        this.arrImages[idx].setCss.top = this.arrNewImages[idx].top;
        this.arrImages[idx].setCss.right = this.arrNewImages[idx].right;
      });
    },
    initGsapOpacity() {
      this.arrImages.forEach((el, idx) => {
        this.arrClassNameForAnimation.push(".main__images" + (idx + 1));
      });
      return this.arrClassNameForAnimation;
    },
  },
  mounted() {
    setTimeout(() => {
      this.changeCssStyle();
      this.$emit("openSection");
    }, 1300);
    this.initGsapOpacity();
    // this.useGsapAnimationOpacity(this.initGsapOpacity(), ".main");
  },
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__images {
  position: absolute;
  /* opacity: 0; */
  transition: all 0.7s ease;
  z-index: 10;
}
.main__images img {
  width: 100%;
}
.main__images1 {
  min-width: 353px;
}
</style>
