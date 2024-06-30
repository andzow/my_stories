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
import "~/assets/style/Line/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
      if (lines) {
        const linesRect = lines.getBoundingClientRect();
        const bodyHeight = document.body.scrollHeight;
        const elStyle = bodyHeight - linesRect.top;
        this.heightEl = elStyle;
        lines.style.height = this.heightEl + "px";
      }
    },
  },
  unmounted() {
    if (this.useVeriableAnimationLine !== null) {
      this.useVeriableAnimationLine.revert();
    }
  },
  mounted() {
    setTimeout(() => {
      nextTick(() => {
        if (this.useVeriableAnimationLine !== null) {
          this.useVeriableAnimationLine.revert();
        }
        this.initGsapScrollTrigger();
        this.setMarginLine();
      });
    }, 0);
  },
};
</script>

<style></style>
