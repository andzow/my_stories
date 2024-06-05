<template>
  <section class="filter">
    <CatalogIndexFilterMyChapter @openMethod="checkResetBtn" />
    <CatalogIndexFilterMySize @openMethod="checkResetBtn" />
    <CatalogIndexFilterMyPrice
      :minVal="minVal"
      :maxVal="maxVal"
      @openMethod="checkResetBtn"
    />
    <div class="filter__ready">
      <UIButtonMyButton
        aria-label="применить"
        info="применить"
        fontSize="18"
        cursor-class="animateCursor"
        @click="sendFilter"
      />
    </div>
    <Transition name="filter-fade">
      <div class="filter__delete" v-if="checkReset">
        <UIButtonMyButton
          aria-label="сбросить"
          info="сбросить"
          variant="green"
          fontSize="18"
          @click="reset"
          cursor-class="animateCursor"
        />
      </div>
    </Transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      minVal: 2500,
      maxVal: 9237,
      checkReset: false,
      useCheckPrice: useCheckPrice(),
      useFilterPrice: useFilterPrice(),
      useCheckReset: useCheckReset(),
    };
  },
  methods: {
    checkResetBtn() {
      const routeQuery = this.$route.query;
      let sizeArr,
        chapterArr = null;
      if (routeQuery.chapter) {
        chapterArr = routeQuery.chapter.split(";");
      }
      if (routeQuery.size) {
        sizeArr = routeQuery.size.split(";");
      }

      const parsePriceMin = parseInt(this.useFilterPrice.activeMinVal);
      const parsePriceMax = parseInt(this.useFilterPrice.activeMaxVal);

      if (
        chapterArr.length > 1 ||
        sizeArr === null ||
        Array.isArray(sizeArr) ||
        parsePriceMin !== this.minVal ||
        parsePriceMax !== this.maxVal
      ) {
        this.checkReset = true;
        return;
      }
      this.checkReset = false;
    },
    sendFilter() {
      this.useCheckPrice = true;
    },
    reset() {
      this.useCheckReset = true;
    },
  },
  mounted() {
    this.checkResetBtn();
  },
  watch: {
    async useCheckReset(val) {
      if (!val) {
        await this.$router.replace({
          path: "/catalog",
          query: {
            min: "0",
            max: "35000",
            chapter: "все",
          },
        });
        this.checkResetBtn();
      }
    },
  },
};
</script>

<style scoped>
.filter {
  margin-right: 60px;
  max-width: 230px;
}
.filter__ready {
  margin-bottom: 20px;
}
.filter__delete {
  height: 45px;
}
.filter-fade-enter-from {
  opacity: 0;
  height: 0;
  transition: all 0.4s ease;
}
.filter-fade-enter-to {
  opacity: 1;
  height: 45px;
  transition: all 0.4s ease;
}
.filter-fade-leave-from {
  opacity: 1;
  height: 45px;
  transition: all 0.4s ease;
}

.filter-fade-leave-to {
  opacity: 0;
  height: 0px;
  transition: all 0.4s ease;
}
</style>
