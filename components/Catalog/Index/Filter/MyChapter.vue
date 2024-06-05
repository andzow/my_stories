<template>
  <div class="filter__chapter" v-if="Array.isArray(filterArrActiveQueryWord)">
    <div
      class="filter__chapter_item"
      v-for="item in arrFilterChapter"
      :key="item"
    >
      <h2
        class="filter__chapter_title"
        cursor-class="animateCursor"
        onmousedown="return false"
        onselectstart="return false"
        @click="
          addChapter(
            item,
            filterArrActiveQueryWord.includes(item.name.toLowerCase())
          )
        "
        :class="{
          activeTitle: filterArrActiveQueryWord.includes(
            item.name.toLowerCase()
          ),
        }"
      >
        {{ item.name }}
      </h2>
      <Transition name="fade-chapter">
        <div
          class="filter__chapter_icon"
          v-if="
            filterArrActiveQueryWord.includes(item.name.toLowerCase()) &&
            item.name.toLowerCase() !== 'все'.toLowerCase()
          "
        >
          <button
            class="filter__chapter_btn"
            aria-label="удалить"
            cursor-class="animateCursor"
            @click="deleteActiveWord(item)"
            onmousedown="return false"
            onselectstart="return false"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkClose: false,
      filterArrActiveQueryWord: null,
      arrFilterChapter: useArrFilterChapter(),
      useCursor: useCursor(),
      useCheckReset: useCheckReset(),
    };
  },
  methods: {
    async addChapter(item, checkActive) {
      if (checkActive) return;
      const routeQuery = this.$route?.query?.chapter.split(";");
      routeQuery.push(item.name.toLowerCase());
      const filterArr = routeQuery.filter((el) => el.length > 1);
      this.filterArrActiveQueryWord = filterArr;
      this.replaceRoute(filterArr);
    },
    async replaceRoute(arr) {
      await this.$router.replace({
        path: "/catalog",
        query: {
          ...this.$route.query,
          chapter: arr.join(";"),
        },
      });
      this.$emit("openMethod");
    },
    initClose() {
      try {
        const routeQuery = this.$route?.query?.chapter.split(";");
        if (!routeQuery) return;
        this.filterArrActiveQueryWord = this.arrFilterChapter
          .map((el) => {
            if (routeQuery.includes(el.name)) {
              return el.name.toLowerCase();
            }
          })
          .filter((el) => el !== undefined && el !== null);
        if (this.filterArrActiveQueryWord.length >= 2) {
          this.checkClose = true;
        }
      } catch {}
    },
    async deleteActiveWord(item) {
      const findIndex = this.filterArrActiveQueryWord.findIndex(
        (el) => el.toLowerCase() === item.name.toLowerCase()
      );
      this.filterArrActiveQueryWord = this.filterArrActiveQueryWord.filter(
        (el, idx) => idx !== findIndex
      );
      this.replaceRoute(this.filterArrActiveQueryWord);
    },
    initApp() {
      const routeQuery = this.$route?.query?.chapter.split(";");
      this.filterArrActiveQueryWord = routeQuery;
    },
  },
  mounted() {
    this.initClose();
    this.initApp();
    this.useCursor = true;
  },
  watch: {
    async useCheckReset(val) {
      if (val) {
        this.filterArrActiveQueryWord = ["все"];
      }
    },
  },
};
</script>

<style scoped>
.filter__chapter {
  margin-bottom: 45px;
}
.filter__chapter_item {
  display: flex;
  align-items: flex-start;
}
.filter__chapter_title {
  font-size: 17px;
  font-weight: 300;
  line-height: 140%;
  color: var(--brown);
  margin-bottom: 15px;
  text-transform: lowercase;
  transition: all 0.3s ease;
}
.activeTitle {
  font-weight: 600;
}
.filter__chapter_icon {
  display: flex;
  padding-top: 7px;
  margin-left: 15px;
  width: 20px;
  height: 20px;
}
.filter__chapter_btn {
  display: flex;
  border: none;
  background: none;
}
.fade-chapter-enter-from {
  opacity: 0;
  transition: all 0.4s ease;
}
.fade-chapter-enter-to {
  opacity: 1;
  transition: all 0.4s ease;
}
.fade-chapter-leave-from {
  opacity: 1;
  transition: all 0.4s ease;
}

.fade-chapter-leave-to {
  opacity: 0;
  transition: all 0.4s ease;
}
</style>
