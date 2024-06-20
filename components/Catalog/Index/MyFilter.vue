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
import CategoryController from "@/http/controllers/CategoryController";
import ProductController from "@/http/controllers/ProductController";

export default {
  async setup() {
    try {
      let arrFilterChapter = useArrFilterChapter();
      let arrFilterSize = useArrFilterSize();
      let minVal = useMinVal();
      let maxVal = useMaxVal();

      const { data: response } = await useAsyncData("data", async () =>
        $fetch(usePageUrlAsyncData() + "category/getCategory", {
          params: useRoute().query,
        })
      );
      arrFilterChapter.value = response.value.categorys;
      arrFilterSize.value = response.value.uniqueNameArray;
      minVal.value = !response.value.minPrice ? 0 : response.value.minPrice;
      maxVal.value = !response.value.maxPrice ? 35000 : response.value.maxPrice;
    } catch {}
  },
  data() {
    return {
      minVal: useMinVal(),
      maxVal: useMaxVal(),
      arrFilterChapter: useArrFilterChapter(),
      arrFilterSize: useArrFilterSize(),
      checkReset: false,
      useCheckPrice: useCheckPrice(),
      useFilterPrice: useFilterPrice(),
      useCheckReset: useCheckReset(),
      useCatalogItems: useCatalogItems(),
      timeLineGsap: null,
      useGsapAnimationOpacity: useGsapAnimationOpacity,
      useFilterReset: useFilterReset(),
    };
  },
  methods: {
    async checkResetBtn(check) {
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
      if (check) {
        await this.scrollToTop();
        await this.initFilter();
        await this.initItems();
      }

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
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return new Promise((resolve) => {
        const scrollInterval = setInterval(() => {
          if (document.documentElement.scrollTop === 0) {
            clearInterval(scrollInterval);
            resolve();
          }
        }, 100);
      });
    },
    async sendFilter() {
      this.useCheckPrice = true;
      await this.scrollToTop();
      await this.initFilter();
      await this.initItems();
    },
    async reset() {
      this.useCheckReset = true;
      await this.scrollToTop();
      await this.initFilter();
      await this.initItems();
    },
    async initFilter() {
      try {
        const res = await CategoryController.getCategory(this.$route.query);
        this.arrFilterChapter = res.categorys;
        this.arrFilterSize = res.uniqueNameArray;
        this.minVal = !res.minPrice ? 0 : res.minPrice;
        this.maxVal = !res.maxPrice ? 35000 : res.maxPrice;
      } catch {}
    },
    async initItems() {
      try {
        const res = await ProductController.getFilter(this.$route.query);
        this.useCatalogItems = res;
      } catch {}
    },
  },
  mounted() {
    this.checkResetBtn();
    this.useGsapAnimationOpacity([".filter"], ".catalog");
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
        // this.initFilter();
      }
    },
    useFilterReset(val) {
      if (val) {
        this.reset();
        this.useFilterReset = false;
      }
    },
  },
};
</script>

<style>
.filter__item_block {
  height: 300px;
  width: 100%;
}
.sticky {
  position: fixed;
  top: 0;
  z-index: 101;
}
.stop {
  position: relative;
  top: 0;
  z-index: 101;
}
</style>

<style scoped>
.filter {
  position: relative;
  margin-right: 60px;
  max-width: 250px;
  top: 0;
  /* opacity: 0; */
}
.activeFilter {
  animation-name: animationOpacity;
  animation-duration: 1s;
}
.filter__item {
  position: relative;
  top: 0;
  max-width: 100%;
  /* transition: all 0.4s ease; */
  z-index: 30;
}

.filter__ready {
  padding-bottom: 25px;
}
.filter__delete {
  opacity: 0;
  transition: all 0.4s ease;
}
.activeBtnDel {
  opacity: 1;
}
.filter-fade-enter-from {
  opacity: 0;
  transition: all 0.4s ease;
}
.filter-fade-enter-to {
  opacity: 1;
  transition: all 0.4s ease;
}
.filter-fade-leave-from {
  opacity: 1;
  transition: all 0.4s ease;
}

.filter-fade-leave-to {
  opacity: 0;
  transition: all 0.4s ease;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@keyframes animationOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
