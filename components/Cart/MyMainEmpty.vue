<template>
  <div class="main__empty">
    <div class="main__empty_content">
      <div class="main__empty_title">в корзине ничего нет</div>
      <div class="main__empty_btn">
        <UIButtonMyButton
          @click="$router.push('/catalog')"
          aria-label="перейти в каталог"
          info="перейти в каталог"
          fontSize="24"
          data-cursor-class="animateCursor"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useGsapAnimationOpacity: useGsapAnimationOpacity,
    };
  },
  mounted() {
    this.useGsapAnimationOpacity(
      [".main__empty_title", ".main__empty_btn"],
      ".main__empty"
    );
  },
};
</script>

<style scoped>
.main__empty {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}
.main__empty_content {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 520px;
}
.main__empty_btn {
  width: 100%;
  opacity: 0;
}
.main__empty_title {
  font-weight: 400;
  font-size: 36px;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 40px;
  opacity: 0;
}
</style>
