<template>
  <section class="catalog" id="catalog__content">
    <Transition>
      <CatalogIndexMyEmpty
        v-if="(catalogItems?.length <= 0 || !catalogItems) && checkEmpty"
      />
    </Transition>
    <div class="catalog__content">
      <UICardMyCard
        v-for="(item, idx) in catalogItems"
        :key="item"
        :item="item"
        :idx="idx"
      />
    </div>
  </section>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";
//   @activeLine="$emit('activeLine')"

export default {
  async setup() {
    // try {
    //   let catalogItems = useCatalogItems();
    //   const { data: responseItems } = await useAsyncData(
    //     "responseItems",
    //     async () =>
    //       $fetch(usePageUrlAsyncData() + "product/getFilter", {
    //         params: useRoute().query,
    //       })
    //   );
    //   catalogItems.value = responseItems.value;
    // } catch {}
  },
  data() {
    return {
      useFilterScroll: useFilterScroll(),
      catalogItems: useCatalogItems(),
      useFilterFlout: useFilterFlout,
      checkEmpty: false,
    };
  },
  methods: {
    async initScrollTrigger() {
      await nextTick(() => {
        if (window.innerWidth > 836) {
          this.useFilterFlout("filter__item", "catalog__content");
        }
        this.checkEmpty = true;
      });
    },
    async initItems() {
      try {
        const res = await ProductController.getFilter(this.$route.query);
        this.useCatalogItems = res;
      } catch {}
    },
  },
  mounted() {
    // this.initItems();
    this.initScrollTrigger();
  },
};
</script>

<style scoped>
.catalog {
  position: relative;
}
.catalog__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 65px;
  margin-bottom: 20px;
  min-height: 900px;
}
.v-enter-from {
  opacity: 0;
  transition: all 0.4s ease;
}
.v-enter-to {
  opacity: 1;
  transition: all 0.4s ease;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
@media screen and (max-width: 1200px) {
  .catalog__content {
    row-gap: 35px;
  }
}
@media screen and (max-width: 952px) {
  .catalog__content {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 466px) {
  .catalog__content {
    margin-top: 0px;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
