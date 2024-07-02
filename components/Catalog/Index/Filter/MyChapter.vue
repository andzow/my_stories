<template>
  <div class="filter__chapter" v-if="Array.isArray(filterArrActiveQueryWord)">
    <div class="filter__mobile" @click="activeVector = !activeVector">
      <div class="filter__mobile_text">Категории</div>
      <div
        class="filter__mopbile_img"
        :class="{ activeVectorRotate: activeVector }"
      >
        <svg
          width="10"
          height="19"
          viewBox="0 0 10 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 17.5L7.93043 10.9141C8.68986 10.1364 8.68986 8.86364 7.93043 8.08586L1.5 1.5"
            stroke="#AF9280"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="filter__chapter_menu" :class="{ activeItemMob: activeVector }">
      <div
        class="filter__chapter_item"
        v-for="item in arrFilterChapter"
        :key="item"
      >
        <h2
          class="filter__chapter_title"
          data-cursor-class="animateCursor"
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
            v-if="filterArrActiveQueryWord.includes(item.name.toLowerCase())"
          >
            <button
              class="filter__chapter_btn"
              aria-label="удалить"
              data-cursor-class="animateCursor"
              @click="deleteActiveWord(item)"
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
      activeVector: false,
    };
  },
  methods: {
    async addChapter(item, checkActive) {
      if (checkActive) return;
      let routeQuery = null;
      if (!this.$route?.query?.chapter) {
        routeQuery = [];
      } else {
        routeQuery = this.$route?.query?.chapter.split(";");
      }
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
    initClose(route) {
      try {
        const routeQuery = route?.query?.chapter.split(";");
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
    initApp(route) {
      if (!route?.query?.chapter) {
        this.filterArrActiveQueryWord = [];
        return;
      }
      const routeQuery = route?.query?.chapter.split(";");
      this.filterArrActiveQueryWord = routeQuery;
    },
    async initCursor() {
      await nextTick(() => {
        this.useCursor = true;
      });
    },
  },
  created() {
    this.initClose(useRoute());
    this.initApp(useRoute());
  },
  mounted() {
    this.initCursor();
  },
  watch: {
    async useCheckReset(val) {
      if (val) {
        this.filterArrActiveQueryWord = [];
      }
    },
    filterArrActiveQueryWord(val) {
      nextTick(() => {
        this.useCursor = false;
        setTimeout(() => {
          this.useCursor = true;
        }, 0);
      });
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
  min-width: 20px;
  min-height: 20px;
}
.filter__chapter_btn {
  display: flex;
  border: none;
  background: none;
}
.filter__mobile {
  display: none;
  align-items: center;
  margin-bottom: 20px;
}
.filter__mobile_text {
  font-weight: 400;
  color: var(--brown);
  font-size: 20px;
  text-transform: lowercase;
}
.filter__mopbile_img {
  display: flex;
  transform: translateY(1px);
  margin-left: 50px;
  width: 9px;
  transition: all 0.4s ease;
}
.activeVectorRotate {
  transform: rotate(90deg);
}
.activeItemMob {
  max-height: 300px !important;
  overflow: auto;
  margin-bottom: 10px;
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
@media screen and (max-width: 1400px) {
  .filter__chapter_title {
    font-size: 16px;
  }
}
@media screen and (max-width: 1100px) {
  .filter__chapter_title {
    font-size: 15px;
  }
}
@media screen and (max-width: 836px) {
  .filter__mobile {
    display: flex;
  }
  .filter__chapter_menu {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    max-height: 0px;
    width: 100%;
    overflow: hidden;
    transition: all 0.5s ease;
  }
  .filter__chapter {
    margin-bottom: 5px;
  }
}
</style>
