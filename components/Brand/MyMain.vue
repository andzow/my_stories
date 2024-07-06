<template>
  <section class="main">
    <div class="main__content">
      <div class="main__information">
        <p class="main__text">
          « — Мы за настоящее, Мы за естественную<br />
          красоту созданную природой»
        </p>
        <div class="main__number">( &nbsp;02&nbsp; )</div>
      </div>
      <h1 class="main__title">( &nbsp;on brand&nbsp; )</h1>
    </div>
    <div class="main__paralax"></div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      useGsapAnimationOpacity: useGsapAnimationOpacity,
      useScrollCheckMain: useScrollCheckMain,
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
        duration: 1,
        scale: 1.1,
      });
    },
  },
  unmounted() {},
  mounted() {
    setTimeout(() => {
      this.setAnimateParallax();
    }, 10);
    setTimeout(() => {
      this.useGsapAnimationOpacity([".main__title"], ".main");
      this.useGsapAnimationOpacity(
        [".main__text", ".main__number"],
        ".main",
        false,
        0.5
      );
    }, 100);
  },
};
</script>

<style scoped>
.main {
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.main__content {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
  z-index: 17;
}
.main__information {
  display: flex;
  justify-content: space-evenly;
  margin-top: 224px;
}
.main__text {
  font-size: 17px;
  font-weight: 300;
  color: #ede9df;
  opacity: 0;
}
.main__number {
  font-size: 17px;
  font-weight: 300;
  color: #ede9df;
  opacity: 0;
}
.main__title {
  text-align: end;
  margin-right: 65px;
  margin-bottom: 30px;
  color: rgba(237, 233, 223, 0.5);
  font-weight: 300;
  font-size: 116px;
  opacity: 0;
}
.main__paralax {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url("@/assets/images/Brand/brandBack.webp") no-repeat;
  background-size: cover;
  z-index: 0;
}
@media screen and (max-width: 1400px) {
  .main__text {
    font-size: 16px;
    font-weight: 300;
    color: #ede9df;
    opacity: 0;
  }
  .main__number {
    font-size: 16px;
  }
  .main__title {
    font-size: 92px;
  }
}
@media screen and (max-width: 1240px) {
  .main__title {
    margin-right: 0px;
  }
}
@media screen and (max-width: 834px) {
  .main__title {
    margin-right: 0px;
  }
  .main__information {
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (max-width: 634px) {
  .main__title {
    font-size: 82px;
  }
}
@media screen and (max-width: 536px) {
  .main__information {
    flex-direction: column;
  }
  .main__text {
    margin-bottom: 30px;
  }
  .main__title {
    font-size: 70px;
  }
}
@media screen and (max-width: 480px) {
  .main__title {
    font-size: 60px;
  }
}
@media screen and (max-width: 420px) {
  .main__title {
    font-size: 50px;
  }
}
@media screen and (max-width: 360px) {
  .main__title {
    font-size: 40px;
  }
}
</style>
