<template>
  <div class="catalog__empty">
    <div class="catalog__empty_content">
      <div class="catalog__empty_title">товаров нет</div>
      <div class="catalog__empty_text">
        по заданным вами параментрам не нашлось товаров
      </div>
      <div class="catalog__empty_btn">
        <UIButtonMyButton
          @click="useFilterReset = true"
          info="сбросить фильр"
          aria-label="сбросить фильр"
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
      useFilterReset: useFilterReset(),
    };
  },
};
</script>

<style scoped>
.catalog__empty {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.catalog__empty_content {
  margin-top: 150px;
  max-width: 550px;
}
.catalog__empty_title {
  text-align: center;
  font-weight: 400;
  font-size: 36px;
  color: var(--brown);
  margin-bottom: 30px;
}
.catalog__empty_text {
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  color: var(--brown);
  margin-bottom: 20px;
}
@media screen and (max-width: 1400px) {
  .catalog__empty_title {
    font-size: 30px;
  }
  .catalog__empty_text {
    font-size: 17px;
  }
}
@media screen and (max-width: 1100px) {
  .catalog__empty_title {
    font-size: 27px;
  }
  .catalog__empty_text {
    font-size: 16px;
  }
}
@media screen and (max-width: 836px) {
  .catalog__empty {
    width: 100%;
  }
  .catalog__empty_content {
    margin-top: 60px;
    max-width: 100%;
  }
}
</style>
