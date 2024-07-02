<template>
  <section class="main">
    <UIMyTitle :name="'lookbook'" />
    <div
      class="main__images"
      v-for="(item, idx) in arrImages"
      :key="item"
      :class="['main__images' + (idx + 1)]"
      :style="{
        top: !item.setCss?.top ? '' : item.setCss?.top,
        right: !item.setCss?.right ? '' : item.setCss?.right,
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
      this.checkMobileSize();
      this.arrImages.forEach((el, idx) => {
        if (idx === 3) {
          if (window.innerWidth > 900) {
            this.arrImages[idx].setCss.top = "70%";
            this.arrImages[idx].setCss.right = "76.5%";
          } else {
            this.arrImages[idx].setCss.top = "60%";
            this.arrImages[idx].setCss.right = "86.5%";
          }
          return;
        }
        this.arrImages[idx].setCss.top =
          this.arrNewImages[idx].top + "!important";
        this.arrImages[idx].setCss.right =
          this.arrNewImages[idx].right + "!important";
      });
    },
    checkMobileSize() {
      if (window.innerWidth > 1100) {
        this.arrNewImages[this.arrNewImages.length - 1].top = "55%";
        this.arrNewImages[this.arrNewImages.length - 1].right = "-8%";
      } else {
        this.arrNewImages[this.arrNewImages.length - 1].top = "65%";
        this.arrNewImages[this.arrNewImages.length - 1].right = "-15%";
        this.arrNewImages[this.arrNewImages.length - 2].top = "75%";
        this.arrNewImages[this.arrNewImages.length - 2].right = "45%";
        this.arrNewImages[1].top = "10%";
        this.arrNewImages[1].right = "65%";
        this.arrNewImages[2].top = "25%";
        this.arrNewImages[2].right = "10%";
      }
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
  transition: all 0.7s ease;
  z-index: 10;
}
.main__images1 {
  top: 15%;
  right: 65%;
}
.main__images2 {
  top: 15%;
  right: 51.5%;
}
.main__images3 {
  top: 20%;
  right: 40%;
}
.main__images4 {
  top: 70%;
  right: 70%;
}
.main__images5 {
  top: 60%;
  right: 46.5%;
}
.main__images6 {
  top: 40%;
  right: 18%;
}

.main__images img {
  width: 100%;
}
.main__images1 {
  min-width: 353px;
}

@media screen and (max-width: 1500px) {
  .main__images2 {
    right: 43.5% !important;
  }
  .main__images3 {
    top: 16% !important;
    right: 25% !important;
  }
  .main__images5 {
    right: 35.5% !important;
  }
  .main__images6 {
    top: 40% !important;
    right: 7% !important;
    width: 350px;
  }
}
@media screen and (max-width: 1154px) {
  .main__images1 img {
    width: 300px;
  }
  .main__images6 img {
    width: 350px;
  }
}
@media screen and (max-width: 1054px) {
  .main__images6 {
    top: 40% !important;
    right: -7% !important;
  }
}
@media screen and (max-width: 876px) {
  .main__images5 img {
    width: 280px;
  }
}
@media screen and (max-width: 626px) {
  .main__images1 {
    display: none;
  }
  .main__images5 {
    display: none;
  }
  .main__images6 {
    top: 40% !important;
    right: -20% !important;
  }
}
@media screen and (max-width: 478px) {
  .main__images6 {
    top: 60% !important;
    right: -30% !important;
  }
  .main__images6 img {
    width: 280px;
  }
}
</style>
