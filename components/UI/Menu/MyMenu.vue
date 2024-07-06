<template>
  <div class="menu">
    <div class="menu__content">
      <UIMenuMyMenuCatalog />
      <UIMenuMyMenuPages />
      <UIMenuMyMenuInformation />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.style.overflow = "hidden";
  },
  unmounted() {
    document.body.style.overflow = "auto";
  },
};
</script>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #ede9df;
  z-index: 18;
}
.menu__content {
  height: calc(100vh - 170px);
  margin-top: 100px;
  padding: 0px 30px 30px 30px;
  width: 100%;
  overflow: auto;
}
</style>

<style>
body {
  overflow: hidden;
}
</style>
