<template>
  <section class="main">
    <div class="main__menu">
      <div class="main__content">
        <div class="main__about">
          <div class="main__logo">
            <img
              class="main__img"
              :src="'../Preload/logo.svg'"
              alt="Логотип"
              width="478"
              height="41"
            />
          </div>
          <div class="main__inf">
            <h1 class="main__title">
              уникальный стиль в основе которого лежит естественная природная
              красота
            </h1>
          </div>
        </div>
        <div class="main__catalog">
          <UIButtonMyButton
            info="каталог"
            aria-label="каталог"
            fontSize="24"
            variant="main"
            data-cursor-class="animateCursor"
            @click="$router.push('/catalog')"
          />
        </div>
      </div>
    </div>
    <div class="main__paralax"></div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      useGsapAnimationOpacity: useGsapAnimationOpacity,
      useScrollCheckMain: useScrollCheckMain,
      checkHydrate: useCheckHydration(),
    };
  },
  methods: {
    setAnimateParallax() {
      this.useScrollCheckMain = gsap.to(".main__paralax", {
        scrollTrigger: {
          trigger: ".main",
          start: "50px top",
          scrub: true,
        },
        delay: 1,
        scale: 1.1,
      });
    },
  },
  mounted() {},
  unmounted() {
    // if (this.useScrollCheckMain) {
    //   this.useScrollCheckMain.revert();
    // }
  },
  watch: {
    checkHydrate() {
      gsap.registerPlugin(ScrollTrigger);
      setTimeout(() => {
        this.setAnimateParallax();
      }, 10);
      setTimeout(() => {
        this.useGsapAnimationOpacity(
          [".main__title", ".main__catalog"],
          ".main"
        );
        this.useGsapAnimationOpacity([".main__img"], ".main", false, 0.3);
      }, 100);
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
.main__paralax {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url("/Preload/back.webp") no-repeat;
  background-size: cover;
  z-index: 0;
}
.main__menu {
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
  z-index: 17;
}
.main__content {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 73px;
}
.main__catalog {
  min-width: 306px;
  opacity: 0;
}
.main__logo {
  margin-bottom: 85px;
}
.main__img {
  opacity: 0;
}
.main__title {
  font-size: 17px;
  font-weight: 300;
  color: #ede9df;
  line-height: 120%;
  max-width: 350px;
  text-align: justify;
  opacity: 0;
}
@media screen and (max-width: 1400px) {
  .main__logo {
    margin-bottom: 65px;
  }
  .main__title {
    font-size: 16px;
    line-height: auto;
    max-width: 310px;
    text-align: justify;
  }
  .main__img {
    width: 310px;
    min-width: 310px;
  }
}
@media screen and (max-width: 1154px) {
  .main__logo {
    margin-bottom: 45px;
  }
}
@media screen and (max-width: 834px) {
  .main__paralax {
    background-position: 20%;
  }
  .main__title {
    font-size: 15px;
    max-width: 290px;
  }
  .main__catalog {
    min-width: 233px;
    max-width: 233px;
  }
}
@media screen and (max-width: 648px) {
  .main__logo {
    margin-bottom: 30px;
  }
  .main__img {
    width: 400px;
    min-width: 400px;
  }
  .main__content {
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  .main__title {
    margin-bottom: 45px;
  }
  .main__content {
    margin-bottom: 43px;
  }
}
@media screen and (max-width: 490px) {
  .main__paralax {
    background-position: 30%;
  }
}
@media screen and (max-width: 460px) {
  .main__img {
    width: 400px;
    min-width: 308px;
  }
}
@media screen and (max-width: 358px) {
  .main__img {
    width: 400px;
    min-width: 200px;
  }
  .main__title {
    text-align: left;
  }
}
</style>
