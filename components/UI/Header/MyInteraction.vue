<template>
  <div
    class="header__interaction"
    :class="{ activeSvgIteraction: changeHeader }"
  >
    <div class="header__interaction_search">
      <button
        class="header__interaction_btn"
        aria-label="Открыть поиск"
        title="Поиск по названию товара"
        data-cursor-class="animateCursor"
        @click="setSearch"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#EDE9DF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="#EDE9DF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="header__interaction_cart">
      <button
        class="header__interaction_of"
        title="Открыть корзину"
        aria-label="Корзина"
        data-cursor-class="animateCursor"
        @click="$router.push('/cart')"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.81043 2L5.19043 5.63"
            stroke="#EDE9DF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.1904 2L18.8104 5.63"
            stroke="#EDE9DF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 7.84961C2 5.99961 2.99 5.84961 4.22 5.84961H19.78C21.01 5.84961 22 5.99961 22 7.84961C22 9.99961 21.01 9.84961 19.78 9.84961H4.22C2.99 9.84961 2 9.99961 2 7.84961Z"
            stroke="#EDE9DF"
            stroke-width="1.5"
          />
          <path
            d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
            stroke="#EDE9DF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    changeHeader: Boolean,
  },
  data() {
    return {
      useCursor: useCursor(),
    };
  },
  methods: {
    setSearch() {
      this.useCursor = true;
      this.$emit("setActiveSearch");
    },
  },
};
</script>

<style scoped>
.header__interaction {
  display: flex;
  align-items: center;
}
.header__interaction path {
  transition: all 0.4s ease;
}
.activeSvgIteraction path {
  stroke: var(--brown);
}
.header__interaction_search {
  margin-right: 20px;
}
</style>
