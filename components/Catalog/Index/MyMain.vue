<template>
  <section class="main">
    <h1 class="main__title">Каталог | Mystories</h1>
    <div class="main__content main__content_bl">
      <div class="main__open">
        <button class="main__open_btn" @click="useOpenFilter = true">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 17.5H15.5"
              stroke="#AF9280"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.5 17.5H2.5"
              stroke="#AF9280"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.5 6.5H19.5"
              stroke="#AF9280"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 6.5H2.5"
              stroke="#AF9280"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 14.5H13.5C14.6 14.5 15.5 15 15.5 16.5V18.5C15.5 20 14.6 20.5 13.5 20.5H7.5C6.4 20.5 5.5 20 5.5 18.5V16.5C5.5 15 6.4 14.5 7.5 14.5Z"
              stroke="#AF9280"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5 3.5H17.5C18.6 3.5 19.5 4 19.5 5.5V7.5C19.5 9 18.6 9.5 17.5 9.5H11.5C10.4 9.5 9.5 9 9.5 7.5V5.5C9.5 4 10.4 3.5 11.5 3.5Z"
              stroke="#AF9280"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="main__open_title">{{ $route.query.chapter }}</div>
      </div>
      <RenderCacheable :async-data-keys="['filter']" :max-age="3600">
        <CatalogIndexMyFilter />
      </RenderCacheable>
      <RenderCacheable :async-data-keys="['catalog']" :max-age="3600">
        <CatalogIndexMyCatalog @activeLine="$emit('activeLine')" />
      </RenderCacheable>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      checkMobile: true,
      useOpenFilter: useOpenFilter(),
      arrFilterChapter: useArrFilterChapter(),
    };
  },
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
  min-height: 700px;
  padding-top: 120px;
  padding-bottom: 96px;
  z-index: 17;
}
.main__title {
  position: absolute;
  top: 0;
  opacity: 0;
}
.main__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(2, 20% 80%);
}
.main__open {
  display: none;
}
.main__open_btn {
  display: flex;
}
@media screen and (max-width: 1240px) {
  .main__content {
    grid-template-columns: repeat(2, 25% 75%);
  }
}
@media screen and (max-width: 1100px) {
  .main {
    padding-top: 110px;
  }
  .main__content {
    grid-template-columns: repeat(2, 25% 75%);
  }
}
@media screen and (max-width: 1020px) {
  .main__content {
    grid-template-columns: repeat(2, 30% 70%);
  }
}
@media screen and (max-width: 836px) {
  .main__content {
    display: flex;
    flex-direction: column;
  }

  .main__open {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .main__open_title {
    margin-left: 10px;
  }
}
</style>
