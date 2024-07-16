<template>
  <section class="filter">
    <div class="filter__item" ref="filterItem" id="filter__item">
      <CatalogIndexFilterMyChapter
        :useCheckReset="useCheckReset"
        @openMethod="
          () => {
            checkResetBtn();
            sendFilter();
          }
        "
      />
      <div class="filter__bl">
        <div class="filter__bl_name">Фильтр</div>
        <CatalogIndexFilterMySize
          @openMethod="
            () => {
              checkResetBtn();
              filterReadyCheck = true;
            }
          "
        />
        <CatalogIndexFilterMyPrice
          :minVal="minVal"
          :maxVal="maxVal"
          @openMethod="
            () => {
              filterReadyCheck = true;
            }
          "
        />
      </div>

      <div class="filter__btns">
        <div
          class="filter__ready"
          :class="{ activeBtnReady: filterReadyCheck }"
        >
          <UIButtonMyButton
            class="filter__item_btn"
            aria-label="применить"
            info="применить"
            fontSize="18"
            data-cursor-class="animateCursor"
            @click="sendFilter"
          />
        </div>
        <!-- <Transition name="filter-fade">
          <div
            class="filter__delete"
            :class="{
              activeBtnDel: checkReset || useCatalogItems?.length === 0,
            }"
          >
            <UIButtonMyButton
              class="filter__item_btn"
              aria-label="сбросить"
              info="сбросить"
              variant="green"
              fontSize="18"
              @click="reset"
              data-cursor-class="animateCursor"
            />
          </div>
        </Transition> -->
      </div>
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

      const { data: response } = await useAsyncData("filter", async () =>
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
      filterReadyCheck: false,
    };
  },
  methods: {
    async checkResetBtn(check) {
      const routeQuery = this.$route.query;
      let sizeArr = null;
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
        sizeArr !== null ||
        Array.isArray(sizeArr) ||
        parsePriceMin !== this.minVal ||
        parsePriceMax !== this.maxVal
      ) {
        this.checkReset = true;
        return;
      }
      this.checkReset = false;
    },
    async scrollToTop() {
      await setTimeout(() => {
        if (window.scrollY <= 120) {
          return;
        }
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
      return new Promise((resolve) => {
        const scrollInterval = setInterval(() => {
          if (document.documentElement.scrollTop <= 120) {
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
      this.filterReadyCheck = false;
      this.checkResetBtn();
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
            chapter: "все",
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
@media screen and (max-width: 1400px) {
  .filter__item_btn .button__btn {
    font-size: 18px !important;
  }
}
@media screen and (max-width: 1020px) {
  .filter__item_btn .button__btn {
    font-size: 17px !important;
  }
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
.filter__bl_name {
  font-size: 18px;
  font-weight: 500;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 20px;
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
.filter__btns {
  display: flex;
  flex-direction: column;
  height: 105px;
}
.filter__bl {
  display: flex;
  flex-direction: column;
}
.filter__ready {
  padding-bottom: 0px;
  height: 0;
  opacity: 0;
  transition: all 0.5s ease;
}
.activeBtnReady {
  padding-bottom: 25px;
  height: auto;
  opacity: 1;
}
/* .filter__delete {
  opacity: 0;
  display: block !important;
  padding-bottom: 25px;
  height: 0;
  transition: all 0.5s ease;
}
.activeBtnDel {
  height: 45px;
  opacity: 1;
} */
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
@media screen and (max-width: 836px) {
  .filter {
    margin-right: 0px;
    max-width: 100%;
  }
  .filter__bl {
    display: flex;
    max-width: 600px;
    column-gap: 50px;
    flex-direction: row;
  }
  .filter__ready {
    max-width: 220px;
    min-width: 220px;
  }
  .filter__delete {
    max-width: 220px;
    min-width: 220px;
    margin-bottom: 20px;
  }
  .filter__btns {
    flex-direction: row;
    column-gap: 20px;
    margin-top: 30px;
  }
}
@media screen and (max-width: 474px) {
  .filter__bl {
    flex-direction: column;
  }
  .filter__btns {
    flex-direction: column;
  }
  .filter__delete {
    height: 0;
    overflow: hidden;
  }
}
</style>
