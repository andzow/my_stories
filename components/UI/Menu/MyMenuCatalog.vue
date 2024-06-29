<template>
  <div class="menu__catalog" :class="{ activeCatalog: !activeItems }">
    <div class="menu__catalog_header" @click="activeItems = !activeItems">
      <div class="menu__catalog_text">Каталог</div>
      <div class="menu__catalog_img" :class="{ activeIcon: activeItems }">
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
    <div
      class="menu__catalog_items"
      ref="menuItems"
      :style="{
        height: activeItems ? heightEl + 'px' : '0px',
        opacity: activeItems ? '1' : '0',
      }"
    >
      <div
        class="menu__catalog_item"
        v-for="item in arrCategory"
        :key="item"
        @click="
          (activeMenu = false),
            $router.push({
              path: '/catalog',
              query: {
                chapter: item.name,
              },
            })
        "
      >
        {{ item.name.toLowerCase() }}
      </div>
    </div>
  </div>
</template>

<script>
import CategoryServices from "~/http/services/CategoryServices";

export default {
  data() {
    return {
      arrCategory: null,
      heightEl: null,
      activeItems: true,
      activeMenu: useActiveMenu(),
    };
  },
  methods: {
    async initApp() {
      try {
        const { data } = await CategoryServices.getCategory(this.$route.query);
        this.arrCategory = data.categorys;
      } catch {}
    },
    initHeight() {
      nextTick(() => {
        setTimeout(() => {
          const elHtml = this.$refs.menuItems;
          if (!elHtml?.getBoundingClientRect()) return;
          const elHtmlHeight = elHtml.getBoundingClientRect()?.height;
          this.heightEl = elHtmlHeight;
        }, 0);
      });
    },
  },
  async mounted() {
    await this.initApp();
    this.initHeight();
  },
};
</script>

<style scoped>
.menu__catalog {
  margin-bottom: 50px;
  transition: all 0.4s ease;
}
.activeCatalog {
  margin-bottom: 0px;
}
.menu__catalog_header {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}
.menu__catalog_text {
  font-weight: 400;
  color: var(--brown);
  font-size: 22px;
  text-transform: lowercase;
}
.menu__catalog_img {
  display: flex;
  margin-left: 30px;
  transform: translateY(1px);
  transition: all 0.4s ease;
}
.activeIcon {
  transform: rotate(90deg);
}
.menu__catalog_items {
  opacity: 1;
  overflow: hidden;
  transition: all 0.4s ease;
}
.menu__catalog_item {
  font-size: 17px;
  font-weight: 300;
  color: var(--brown);
  margin-bottom: 15px;
  text-transform: lowercase;
}
.menu__catalog_item:last-child {
  margin-bottom: 0;
}
</style>
