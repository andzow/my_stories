<template>
  <div class="filter__size">
    <div class="filter__size_content">
      <div class="filter__size_header">
        <div class="filter__size_text" v-if="arrFilterQuery && arrFilterSize">
          размер
        </div>
        <div class="filter__size_load" v-else>
          <UIMyLoadingItem :item="{ loading: true }" :index="0" height="20px" />
        </div>
        <Transition name="size-fade">
          <div
            class="filter__size_image"
            v-if="checkFilter && arrFilterSize?.length > 0"
            data-cursor-class="animateCursor"
          >
            <button
              class="filter__size_btn"
              aria-label="удалить"
              @click="deleteQuery"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00096 10L10 1"
                  stroke="#AF9280"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 1L9.99904 10"
                  stroke="#AF9280"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Transition>
      </div>
      <div class="filteR__size_empty" v-if="arrFilterSize?.length <= 0">
        У данного раздела/ов нет размера.
      </div>
      <div class="filter__size_items" v-if="arrFilterQuery && arrFilterSize">
        <div
          class="filter__size_item"
          v-for="item in arrFilterSize"
          :key="item"
        >
          <UIButtonMyButton
            class="filter__size_sized"
            @click="
              setActiveBtn(
                item,
                arrFilterQuery.includes(item.toLowerCase()) ? true : false
              )
            "
            :aria-label="item"
            :info="item"
            :active="arrFilterQuery.includes(item.toLowerCase()) ? true : false"
            fontSize="18"
            data-cursor-class="animateCursor"
          />
        </div>
      </div>
      <div class="filter__size_loading" v-else>
        <UIMyLoadingItem
          v-for="(item, idx) in arrFilterSizeLoading"
          :key="item"
          :item="item"
          :index="idx"
          height="40px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrFilterSize: useArrFilterSize(),
      arrFilterSizeLoading: null,
      arrFilterQuery: null,
      checkFilter: false,
      useCheckReset: useCheckReset(),
      useCursor: useCursor(),
    };
  },
  methods: {
    async replaceRoute(arr) {
      if (arr.length <= 0) {
        const newObj = {};
        for (let key in this.$route.query) {
          if (key !== "size") {
            newObj[key] = this.$route.query[key];
          }
        }
        await this.$router.replace({
          path: "/catalog",
          query: {
            ...newObj,
          },
        });
        this.$emit("openMethod");
        return;
      }
      await this.$router.replace({
        path: "/catalog",
        query: {
          ...this.$route.query,
          size: arr.join(";"),
        },
      });
      this.$emit("openMethod");
    },
    initApp(route) {
      const queryParams = route.query;
      if (queryParams?.size) {
        const setArrQuery = queryParams.size
          .split(";")
          .map(el => el.toLowerCase());
        this.arrFilterQuery = setArrQuery;
        this.checkFilter = true;
        return;
      }
      this.arrFilterQuery = [];
      this.useCursor = true;
    },
    checkDelBtn() {
      const filtered = this.arrFilterSize.filter(el =>
        this.arrFilterQuery.includes(el.toLowerCase())
      );
      if (filtered.length <= 0) {
        this.checkFilter = false;
        return;
      }
      this.checkFilter = true;
    },
    setActiveBtn(item, activeBtn) {
      if (activeBtn) return;
      this.arrFilterQuery.push(item);
      this.replaceRoute(this.arrFilterQuery);
      this.checkDelBtn();
      this.$emit("openMethod");
    },
    async deleteQuery() {
      this.arrFilterQuery = [];
      this.checkFilter = false;
      await this.replaceRoute([]);
      this.$emit("openMethod");
      this.$emit("setMinMax");
    },
  },
  created() {
    this.initApp(useRoute());
  },
  mounted() {
    this.useCursor = true;
  },
  watch: {
    arrFilterSize() {
      this.checkDelBtn();
    },
    async useCheckReset(val) {
      if (val) {
        this.arrFilterQuery = [];
      }
    },
    checkFilter(val) {
      if (val) {
        nextTick(() => {
          this.useCursor = false;
          setTimeout(() => {
            this.useCursor = true;
          }, 100);
        });
      }
    },
  },
};
</script>
<style>
@media screen and (max-width: 1400px) {
  .filter__size_sized .button__btn {
    font-size: 17px !important;
  }
}
@media screen and (max-width: 1020px) {
  .filter__size_sized .button__btn {
    font-size: 16px !important;
  }
}
</style>
<style scoped>
.filter__size {
  margin-bottom: 45px;
}
.filter__size_header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 30px;
}
.filter__size_text {
  font-size: 17px;
  font-weight: 300;
  color: var(--brown);
}
.filteR__size_empty {
  font-size: 16px;
  font-weight: 500;
  color: var(--brown);
  text-transform: lowercase;
}
.filter__size_btn {
  display: flex;
  padding-top: 8px;
  width: 25px;
  height: 25px;
  margin-left: 15px;
}
.filter__size_items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.filter__size_load {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 25px;
}
.filter__size_loading {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px;
  gap: 10px;
}
.filter__size_item {
  width: 100%;
}
.size-fade-enter-from {
  opacity: 0;
  transition: all 0.4s ease;
}
.size-fade-enter-to {
  opacity: 1;
  transition: all 0.4s ease;
}
.size-fade-leave-from {
  opacity: 1;
  transition: all 0.4s ease;
}
.size-fade-leave-to {
  opacity: 0;
  transition: all 0.4s ease;
}
@media screen and (max-width: 1400px) {
  .filter__size_text {
    font-size: 16px;
  }
  .filteR__size_empty {
    font-size: 15px;
  }
}
@media screen and (max-width: 1100px) {
  .filter__size_text {
    font-size: 15px;
  }
  .filteR__size_empty {
    font-size: 14px;
  }
}
@media screen and (max-width: 836px) {
  .filter__size {
    margin-bottom: 25px;
  }
  /* .filter__size_text {
    font-weight: 400;
    color: var(--brown);
    font-size: 20px;
    text-transform: lowercase;
  } */
}
/* @media screen and (max-width: 474px) {
  .filter__size {
    max-width: 220px;
    margin-bottom: 25px;
  }
} */
</style>
