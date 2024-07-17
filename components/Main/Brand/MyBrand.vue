<template>
  <section class="brand">
    <div class="brand__content">
      <div class="brand__name">
        <img
          class="brand__logo"
          :src="'../Preload/brand.svg'"
          alt="качественная одежда"
          width="1096"
          height="94"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      checkHydrate: useCheckHydration(),
    };
  },
};
</script>

<style scoped>
.brand {
  position: relative;
  padding-bottom: 136px;
  width: 100vw;
  z-index: 10;
}
.brand__name {
  transform: translateX(-70px);
}
.brand__logo {
  width: 100vw;
}
/* .brand__name {
  position: absolute;
  top: 0;
  left: -2%;
} */
@media screen and (max-width: 1400px) {
  .brand__logo {
    width: 1440px;
    min-width: 1440px;
  }
}
@media screen and (max-width: 1141px) {
  .brand__logo {
    width: 1241px;
    min-width: 1241px;
  }
}
@media screen and (max-width: 984px) {
  .brand__logo {
    width: 1048px;
    min-width: 1048px;
  }
  .brand {
    padding-bottom: 90px;
  }
}
@media screen and (max-width: 803px) {
  .brand__logo {
    width: 938px;
    min-width: 938px;
  }
}
@media screen and (max-width: 620px) {
  .brand__logo {
    width: 738px;
    min-width: 738px;
  }
}
@media screen and (max-width: 520px) {
  .brand__name {
    transform: translateX(-20px);
  }
  .brand__logo {
    width: 590px;
    min-width: 590px;
  }
}
@media screen and (max-width: 420px) {
  .brand__logo {
    width: 538px;
    min-width: 538px;
  }
}
</style>
