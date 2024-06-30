<template>
  <section class="about">
    <div class="about__content">
      <p class="about__text" ref="lookbookText">
        Все коллекции бренда черпают вдохновение из природы - ее спокойства,
        величия и разнообразия цветов. Это делается для того, чтобы каждая могла
        ощутить свою свободу, находясь в полной гармонии с собой.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      useGsapAnimationOpacity: useGsapAnimationOpacity,
      arrClassNameForAnimation: [".about__text"],
      useWidthLookbook: useWidthLookbook(),
    };
  },
  methods: {
    initGsap() {
      setTimeout(() => {
        this.useGsapAnimationOpacity(
          this.arrClassNameForAnimation,
          ".about__text"
        );
      }, 0);
    },
  },
  mounted() {
    if (window.innerWidth > 1240) {
      this.initGsap();
    } else {
      this.useGsapAnimationOpacity([".about"], ".about");
    }
  },
  watch: {
    useWidthLookbook(val) {
      this.$refs.lookbookText.style.width = val;
    },
  },
};
</script>

<style scoped>
.about {
  position: relative;
  width: 100vw;
  margin-bottom: 210px;
  border-top: 1px solid #d2bcae;
}
.about__content {
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
  z-index: 0;
}
.about__text {
  font-size: 16px;
  font-weight: 300;
  text-transform: lowercase;
  text-align: justify;
  color: var(--brown);
  max-width: 354px;
  opacity: 0;
}
@media screen and (max-width: 1240px) {
  .about {
    margin-top: 50px;
    opacity: 0;
  }
}
@media screen and (max-width: 1190px) {
  .about {
    margin-top: 240px;
    margin-bottom: 90px;
  }
  .about__text {
    opacity: 1;
  }
}
@media screen and (max-width: 976px) {
  .about {
    margin-bottom: 50px;
  }
  .about__text {
    font-size: 15px;
  }
}
@media screen and (max-width: 478px) {
  .about {
    margin-top: 150px;
  }
}
</style>
