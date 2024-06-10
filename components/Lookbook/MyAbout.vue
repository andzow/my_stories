<template>
  <section class="about">
    <div class="about__content">
      <p class="about__text">
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
    };
  },
  mounted() {
    setTimeout(() => {
      this.useGsapAnimationOpacity(
        this.arrClassNameForAnimation,
        ".about__text"
      );
    }, 0);
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
</style>
