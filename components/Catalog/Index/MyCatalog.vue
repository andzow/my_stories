<template>
  <section class="catalog" id="catalog__content">
    <Transition>
      <CatalogIndexMyEmpty
        v-if="useCatalogItems?.length <= 0 || !useCatalogItems"
      />
    </Transition>
    <div class="catalog__content">
      <UICardMyCard
        v-for="(item, idx) in useCatalogItems"
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
  data() {
    return {
      useCatalogItems: useCatalogItems(),
      useFilterScroll: useFilterScroll(),
      useFilterFlout: useFilterFlout,
    };
  },
  methods: {
    addCard() {
      this.useCatalogItems.push(
        {
          name: "платье",
          price: "4 800",
          sale: "5 200",
          images: [
            {
              imageSrc: "../Primer/catalog1.webp",
            },
            {
              imageSrc: "../Primer/catalog2.png",
            },
            {
              imageSrc: "../Primer/catalog3.webp",
            },

            {
              imageSrc: "../Primer/catalog5.webp",
            },
            {
              imageSrc: "../Primer/catalog3.webp",
            },

            {
              imageSrc: "../Primer/catalog5.webp",
            },
            {
              imageSrc: "../Primer/catalog3.webp",
            },

            {
              imageSrc: "../Primer/catalog5.webp",
            },
          ],
        },
        {
          name: "сарафан",
          price: "2 800",
          images: [
            {
              imageSrc: "../Primer/catalog3.webp",
            },
            {
              imageSrc: "../Primer/catalog11.webp",
            },
          ],
        },
        {
          name: "сарафан",
          price: "2 800",
          images: [
            {
              imageSrc: "../Primer/catalog3.webp",
            },
            {
              imageSrc: "../Primer/catalog11.webp",
            },
          ],
        },
        {
          name: "сарафан",
          price: "2 800",
          images: [
            {
              imageSrc: "../Primer/catalog3.webp",
            },
            {
              imageSrc: "../Primer/catalog11.webp",
            },
          ],
        },

        {
          name: "сарафан",
          price: "2 800",
          images: [
            {
              imageSrc: "../Primer/catalog3.webp",
            },
            {
              imageSrc: "../Primer/catalog11.webp",
            },
          ],
        }
      );
    },
    async initScrollTrigger() {
      await nextTick(() => {
        this.useFilterFlout();
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
    this.initItems();
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
</style>
