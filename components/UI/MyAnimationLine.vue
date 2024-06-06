<template>
  <div
    class="lines"
    ref="lines"
    :style="{
      transition: `all ${duration}s linear`,
      position: fixed ? 'fixed' : 'absolute',
    }"
  >
    <div class="lines__content">
      <div
        class="lines__line"
        v-for="(item, idx) in 4"
        :key="item"
        :class="['lines__line' + (idx + 1)]"
      ></div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  props: {
    duration: String,
    arrAnimationLine: Array,
    fixed: Boolean,
  },
  data() {
    return {
      heightEl: null,
      checkVarieble: true,
      useVeriableAnimationLine: useVeriableAnimationLine(),
      useRegPlugin: useRegPlugin(),
    };
  },
  methods: {
    initGsapScrollTrigger() {
      this.useVeriableAnimationLine = gsap.to(".lines", {
        scrollTrigger: {
          trigger: ".lines",
          start: "top 80%",
          end: "105% 100%",
          markers: false,
          onEnter: () => {
            if (!this.checkVarieble) return;
            this.checkVarieble = false;
            this.calculateHeight();
          },
        },
      });
    },
    setMarginLine() {
      try {
        this.arrAnimationLine.forEach((el, idx) => {
          const elLineHtml = document.querySelector(".lines__line" + (idx + 1));

          if (!el.defaultLine) {
            const elHtml = document.querySelector(el.name);
            const elBounding = elHtml.getBoundingClientRect();

            if (!el.widthTo) {
              const elMargin = el.share
                ? `${
                    Math.round(elBounding[el.indent]) +
                    Math.round(elBounding.width) / 2
                  }px`
                : Math.round(elBounding[el.indent]) + "px";
              elLineHtml.style[el.indent] = elMargin;
            } else {
              const elMargin =
                Math.round(elBounding[el.indent]) +
                Math.round(elBounding.width) +
                "px";
              elLineHtml.style.left = elMargin;
            }
            return;
          }
          elLineHtml.style[el.indent] = el.margin;
        });
      } catch {}
    },
    calculateHeight() {
      const lines = document.querySelector(".lines");
      const footer = document.querySelector("footer");

      if (lines && footer) {
        const footerRect = footer.getBoundingClientRect();
        const footerTop = footerRect.top + window.scrollY;

        const linesRect = lines.getBoundingClientRect();
        const linesBottom = linesRect.bottom + window.scrollY;
        this.heightEl = footerTop - linesBottom;
        lines.style.height = this.heightEl + "px";
      }
    },
  },
  mounted() {
    setTimeout(() => {
      if (this.useVeriableAnimationLine !== null) {
        this.useVeriableAnimationLine.revert();
      }
      gsap.registerPlugin(ScrollTrigger);
      this.initGsapScrollTrigger();
      this.setMarginLine();
    }, 0);
  },
};
</script>

<style scoped>
.lines {
  position: absolute;
  top: 0;
  width: 100%;
  height: 0px;
  z-index: 9;
}
.lines__content {
  position: relative;
  max-width: 1920px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.lines__line {
  position: absolute;
  width: 1px;
  height: 100%;
  background: #d2bcae;
}
/* .lines__line1 {
  left: 30px;
}
.lines__line2 {
  left: 383px;
}
.lines__line3 {
  right: 852px;
}
.lines__line4 {
  right: 98px;
} */
</style>
