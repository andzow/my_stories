<template>
  <div class="filter__size">
    <div class="filter__size_content">
      <div class="filter__size_header">
        <div class="filter__size_text">размер</div>
        <Transition name="size-fade">
          <div class="filter__size_image" v-if="checkFilter">
            <button
              class="filter__size_btn"
              aria-label="удалить"
              cursor-class="animateCursor"
              onmousedown="return false"
              onselectstart="return false"
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
      <div class="filter__size_items" v-if="arrFilterQuery">
        <div
          class="filter__size_item"
          v-for="item in arrFilterSize"
          :key="item"
        >
          <UIButtonMyButton
            @click="
              setActiveBtn(
                item.name,
                arrFilterQuery.includes(item.name.toLowerCase()) ? true : false
              )
            "
            :aria-label="item.name"
            :info="item.name"
            :active="
              arrFilterQuery.includes(item.name.toLowerCase()) ? true : false
            "
            fontSize="18"
            cursor-class="animateCursor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrFilterSize: useArrFilterSize(),
      arrFilterQuery: null,
      checkFilter: false,
      useCheckReset: useCheckReset(),
    };
  },
  methods: {
    async replaceRoute(arr) {
      await this.$router.replace({
        path: "/catalog",
        query: {
          ...this.$route.query,
          size: arr.join(";"),
        },
      });
      this.$emit("openMethod");
    },
    initApp() {
      const queryParams = this.$route.query;
      if (queryParams?.size) {
        const setArrQuery = queryParams.size
          .split(";")
          .map((el) => el.toLowerCase());
        this.arrFilterQuery = setArrQuery;
        return;
      }
      this.arrFilterQuery = [];
    },
    checkDelBtn() {
      const filtered = this.arrFilterSize.filter((el) =>
        this.arrFilterQuery.includes(el.name.toLowerCase())
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
    deleteQuery() {
      this.arrFilterQuery = [];
      this.checkFilter = false;
      this.replaceRoute([]);
      this.$emit("openMethod");
    },
  },
  mounted() {
    this.initApp();
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
  },
};
</script>

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
  line-height: 140%;
  color: var(--brown);
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
</style>
