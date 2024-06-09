<template>
  <section class="filter">
    <div class="filter__item" ref="filterItem" id="filter__item">
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
          data-cursor-class="animateCursor"
          @click="sendFilter"
        />
      </div>
      <Transition name="filter-fade">
        <div class="filter__delete" :class="{ activeBtnDel: checkReset }">
          <UIButtonMyButton
            aria-label="сбросить"
            info="сбросить"
            variant="green"
            fontSize="18"
            @click="reset"
            data-cursor-class="animateCursor"
          />
        </div>
      </Transition>
    </div>
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
      useFilterFlout: useFilterFlout,
    };
  },
  methods: {
    checkResetBtn() {
      const routeQuery = this.$route.query;
      let sizeArr,
        chapterArr = null;
      if (routeQuery.chapter) {
        chapterArr = routeQuery.chapter.split(";");
      } else {
        chapterArr = [];
      }
      if (routeQuery.size) {
        sizeArr = routeQuery.size.split(";");
      }

      const parsePriceMin = parseInt(this.useFilterPrice.activeMinVal);
      const parsePriceMax = parseInt(this.useFilterPrice.activeMaxVal);

      if (
        chapterArr.length > 0 ||
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
    async initScrollTrigger() {
      await nextTick(() => {
        this.useFilterFlout();
      });
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
    this.initScrollTrigger();
  },
  watch: {
    async useCheckReset(val) {
      if (!val) {
        await this.$router.replace({
          path: "/catalog",
          query: {
            min: "0",
            max: "35000",
          },
        });
        this.checkResetBtn();
      }
    },
  },
};
</script>

<style>
.sticky {
  position: fixed;
  z-index: 101;
}
.stop {
  position: relative;
  z-index: 101;
}
</style>

<style scoped>
.filter {
  position: relative;
  margin-right: 60px;
  max-width: 250px;
}
.filter__item {
  position: relative;
  max-width: 100%;
  max-width: 250px;
  transition: all 0.4s ease;
  z-index: 30;
}
.filter__ready {
  padding-bottom: 20px;
}
.filter__delete {
  height: 45px;
  opacity: 0;
  transition: all 0.4s ease;
}
.activeBtnDel {
  opacity: 1;
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
