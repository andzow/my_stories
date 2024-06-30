<template>
  <section class="phrase">
    <div class="phrase__content">
      <p class="phrase__text" ref="phrase__text"></p>
    </div>
  </section>
</template>

<script>
import Typed from "typed.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      scrollTriggerVarieble: null,
    };
  },
  methods: {
    setObserver(currentDes) {
      try {
        const observer = new MutationObserver((mutationsList) => {
          for (let mutation of mutationsList) {
            if (mutation.type === "childList") {
              const span = currentDes.querySelector(".phrase__span");
              if (span && window.innerWidth > 1054) {
                span.style.fontFamily = "Inter, sans-serif";
                span.style.fontSize = "80px";
              } else {
                if (!span?.style) return;
                span.style.fontFamily = "Inter, sans-serif";
                span.style.fontSize = "30px";
              }
            }
          }
        });
        const config = { childList: true, subtree: true };
        observer.observe(currentDes, config);
      } catch {}
    },
    setAnimationTypedJs(currentDes) {
      this.scrollTriggerVarieble = ScrollTrigger.create({
        trigger: ".phrase__text",
        start: "top 90%",
        markers: false,
        onEnter: () => {
          new Typed(currentDes, {
            strings: [
              `Наша миссия – чтобы каждый из Вас стал членом нашей семьи My stories<span class="phrase__span">…</span>^300 через заботу о своих близких и окружающей среде`,
            ],
            typeSpeed: 20,
            cursorChar: "",
          });
          this.scrollTriggerVarieble.kill();
        },
      });
    },
  },
  unmounted() {
    if (this.scrollTriggerVarieble !== null) {
      this.scrollTriggerVarieble.kill();
    }
  },
  mounted() {
    const currentDes = this.$refs.phrase__text;
    this.setObserver(currentDes);
    this.setAnimationTypedJs(currentDes);
  },
};
</script>

<style scoped>
.phrase {
  position: relative;
  width: 100%;
  padding-bottom: 80px;
  z-index: 17;
}
.phrase__content {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
}
.phrase__text {
  font-size: 110px;
  font-weight: 400;
  color: var(--brandname);
  line-height: 105%;
  letter-spacing: -5px;
  text-transform: lowercase;
  min-height: 490px;
  transition: all 0.3s ease;
}
.phrase__font {
  font-family: "Inter", sans-serif;
}
@media screen and (max-width: 1660px) {
  .phrase {
    padding-bottom: 60px;
  }
  .phrase__text {
    font-size: 94px;
    min-height: 420px;
  }
}
@media screen and (max-width: 1400px) {
  .phrase {
    padding-bottom: 60px;
  }
  .phrase__text {
    font-size: 84px;
    line-height: 105%;
    min-height: 380px;
  }
}
@media screen and (max-width: 1054px) {
  .phrase__text {
    font-size: 54px;
    line-height: 105%;
    letter-spacing: -2px;
    min-height: 240px;
  }
}
@media screen and (max-width: 620px) {
  .phrase__text {
    font-size: 44px;
  }
}
</style>
