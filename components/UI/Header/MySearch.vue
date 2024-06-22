<template>
  <div class="search">
    <form
      class="search__content"
      @submit.prevent="getSortedArray"
      :class="{ activeMargin: arrSendMenu?.length > 0 }"
    >
      <div class="search__type">
        <input
          type="text"
          :placeholder="placeholderVal"
          class="search__input"
          data-cursor-class="animateCursor"
          @input="debouncedSearch"
          v-model="searchVal"
        />
      </div>
      <div class="search__interaction">
        <!-- <div class="search__btn">
          <UIButtonMyButton
            type="submit"
            aria-label="Найти товар"
            info="Найти"
            fontSize="18"
            data-cursor-class="animateCursor"
          />
        </div> -->
        <button
          class="search__close"
          @click="setClose"
          ref="searchClose"
          data-cursor-class="animateCursor"
          aria-label="Закрыть поиск"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.00044 15.1421L15.1426 1"
              stroke="#AF9280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L15.1421 15.1421"
              stroke="#AF9280"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
    <UIHeaderMySearchMenu :arrMenu="arrSendMenu" @close="close" />
    <div class="search__empty" v-if="arrSendMenu.length <= 0 && checkSearch">
      <div class="search__empty_title">товаров нет</div>
      <div class="search__empty_text">По вашему запросу ничего не найдено</div>
    </div>
  </div>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";
import { USE_SERVER } from "~/url";
import debounce from "lodash.debounce";

export default {
  data() {
    return {
      arrSendMenu: [],
      searchVal: "",
      placeholderVal: "Поиск...",
      useCursor: useCursor(),
      checkSearch: false,
      debouncedSearch: debounce(async () => {
        try {
          const res = await ProductController.getSearch({
            name: this.searchVal,
          });
          this.arrSendMenu = res
            .map((el) => ({
              name: el.name,
              color: ` ( ${el.color.toLowerCase()} )`,
              imageSrc: USE_SERVER + el.images[0],
              id: el.id,
            }))
            .filter((el) => el);
          if (!this.checkSearch) {
            this.checkSearch = true;
          }
        } catch {}
      }, 300),
    };
  },
  methods: {
    close(item) {
      this.$emit("close", item);
    },
    setClose() {
      this.$emit("closeSearch");
    },
    async initArrSearch() {},
  },
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "hidden";
    this.$refs.searchClose.focus();
    this.initArrSearch();
    setTimeout(() => {
      const blockEl = document.querySelector(".search");
      document.addEventListener("mouseup", (e) => {
        const click = e.composedPath().includes(blockEl);
        if (!click) {
          this.$emit("closeSearch");
        }
      });
      this.useCursor = true;
      this.useCursor = false;
    }, 0);
  },
};
</script>

<style scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  padding: 25px 30px;
  width: 100vw;
  background: #f5f2ea;
  z-index: 25;
}

.search__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.activeMargin {
  margin-bottom: 28px;
}
.search__type {
  width: 100%;
  margin-right: 50px;
  max-width: 100%;
}
.search__input {
  width: 100%;
  border: none;
  background: none;
  font-size: 20px;
  color: #af9280;
  font-weight: 400;
  transition: all 0.3s ease;
}
.search__input::placeholder {
  color: #af9280;
}

.search__interaction {
  display: flex;
}
.search__btn {
  margin-right: 40px;
}
.search__close {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
}
.search__empty_title {
  margin-top: 50px;
  text-align: center;
  font-weight: 400;
  font-size: 36px;
  color: var(--brown);
  margin-bottom: 30px;
}
.search__empty_text {
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  color: var(--brown);
  margin-bottom: 20px;
}
</style>
