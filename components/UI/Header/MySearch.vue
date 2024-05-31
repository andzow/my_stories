<template>
  <div class="search">
    <form
      class="search__content"
      @submit.prevent="getSortedArray"
      :class="{ activeMargin: arrSendMenu.length > 0 }"
    >
      <div class="search__type">
        <input
          type="text"
          :placeholder="placeholderVal"
          class="search__input"
          cursor-class="animateCursor"
          v-model="searchVal"
        />
      </div>
      <div class="search__interaction">
        <div class="search__btn">
          <UIButtonMyButton
            type="submit"
            aria-label="Найти товар"
            info="Найти"
            fontSize="18"
            cursor-class="animateCursor"
          />
        </div>
        <button
          class="search__close"
          @click="setClose"
          ref="searchClose"
          cursor-class="animateCursor"
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
    <UIHeaderMySearchMenu v-if="arrMenu.length > 0" :arrMenu="arrSendMenu" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrMenu: [
        {
          name: "сарафан с открытой спиной",
          imageSrc: "../Primer/item.png",
        },
        {
          name: "айфон",
          imageSrc: "../Primer/item.png",
        },
        {
          name: "айфон 12",
          imageSrc: "../Primer/item.png",
        },
        {
          name: "апл",
          imageSrc: "../Primer/item.png",
        },
        {
          name: "сарочка",
          imageSrc: "../Primer/item.png",
        },
        {
          name: "сарочка красная",
          imageSrc: "../Primer/item.png",
        },
        {
          name: "саранск",
          imageSrc: "../Primer/item.png",
        },
      ],
      arrSendMenu: [],
      searchVal: "",
      placeholderVal: "Поиск...",
      useCursor: useCursor(),
    };
  },
  methods: {
    setClose() {
      this.$emit("closeSearch");
    },
    getSortedArray() {
      this.arrSendMenu = this.arrMenu.filter((el) => {
        if (el.name.includes(this.searchVal)) return el;
      });
    },
  },
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "hidden";
    this.$refs.searchClose.focus();
    // setTimeout(() => {
    //   this.arrSendMenu = this.arrMenu;
    // }, 500);
    setTimeout(() => {
      const blockEl = document.querySelector(".search");
      document.addEventListener("mouseup", (e) => {
        const click = e.composedPath().includes(blockEl);
        if (!click) {
          this.$emit("closeSearch");
        }
        this.useCursor = true;
      });
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
</style>
