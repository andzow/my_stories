<template>
  <section class="catalog" id="catalog__content">
    <div class="catalog__content">
      <UICardMyCard
        @click="$router.push('/catalog/сарафан/id')"
        v-for="(item, idx) in useCatalogItems"
        :key="item"
        :item="item"
        :idx="idx"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      useCatalogItems: useCatalogItems(),
      useFilterScroll: useFilterScroll(),
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
      await nextTick(() => {});
    },
  },
  mounted() {
    this.useCatalogItems = [
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
      },
      {
        name: "сарочка",
        price: "7 800",
        images: [
          {
            imageSrc: "../Primer/catalog7.webp",
          },
          {
            imageSrc: "../Primer/catalog2.png",
          },
          {
            imageSrc: "../Primer/catalog3.webp",
          },
        ],
      },
      {
        name: "платье",
        price: "1 800",
        images: [
          {
            imageSrc: "../Primer/catalog13.webp",
          },
          {
            imageSrc: "../Primer/catalog2.png",
          },
          {
            imageSrc: "../Primer/catalog3.webp",
          },
        ],
      },
      {
        name: "кофта",
        price: "9 800",
        sale: "5 200",
        images: [
          {
            imageSrc: "../Primer/catalog9.webp",
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
        ],
      },
    ];
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
</style>
