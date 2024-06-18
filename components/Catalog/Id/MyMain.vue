<template>
  <section class="main">
    <div class="main__content">
      <div class="main__menu">
        <CatalogIdMySlider :useProductObject="useProductObject" />
        <CatalogIdMyAbout :useProductObject="useProductObject" />
      </div>
    </div>
  </section>
  <Transition>
    <CatalogIdTablesMyTable
      v-if="useTableSize && arrTableSize"
      :arrTable="arrTableSize"
      :arrObjectSize="arrObjectSize"
      @keydown.esc="useTableSize = false"
      @close="useTableSize = false"
    />
  </Transition>
  <Transition>
    <CatalogIdTablesMyTable
      v-if="useTableMeus && arrTableMeus"
      :arrTable="arrTableMeus"
      :arrObjectSize="arrObjectSize"
      @keydown.esc="useTableMeus = false"
      @close="useTableMeus = false"
    />
  </Transition>
  <Transition name="fade-table-blur">
    <div
      class="table__blur"
      v-if="(useTableSize || useTableMeus) && arrTableSize && arrTableMeus"
    ></div>
  </Transition>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";

export default {
  data() {
    return {
      useTableSize: useTableSize(),
      useTableMeus: useTableMeus(),
      arrTableSize: null,
      arrTableMeus: null,
      useProductObject: useProductObject(),
      arrObjectSize: {
        title: "обмеры изделия",
        text: "точные параметры изделия",
      },
    };
  },
  methods: {
    async initProduct() {
      try {
        const res = await ProductController.productOne(this.$route.params);
        this.arrTableSize = JSON.parse(res.product[0].dimension).filter(
          (el) => el.name !== "" || el.name.length > 0
        );
        this.arrTableMeus = JSON.parse(res.product[0].measurement).filter(
          (el) => el.name !== "" || el.name.length > 0
        );
        this.useProductObject = res;
      } catch {}
    },
  },
  unmounted() {
    this.useProductObject = false;
  },
  mounted() {
    this.initProduct();
  },
  watch: {
    useTableSize(val) {
      if (!val) {
        const body = document.body;
        body.style.overflow = "auto";
      }
    },
    useTableMeus(val) {
      if (!val) {
        const body = document.body;
        body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
  padding-top: 150px;
  margin-bottom: 96px;
  z-index: 17;
}
.main__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
.main__menu {
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
}
.table__blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 29;
}
.fade-table-blur-enter-from {
  opacity: 0;
  transition: all 0.4s ease;
}
.fade-table-blur-enter-to {
  opacity: 1;
  transition: all 0.4s ease;
}
.fade-table-blur-leave-from {
  opacity: 1;
  transition: all 0.4s ease;
}
.fade-table-blur-leave-to {
  opacity: 0;
  transition: all 0.4s ease;
}
.v-enter-active,
.v-leave-active {
  transition: width 0.7s ease;
}
.v-enter-from,
.v-leave-to {
  width: 0;
}
</style>
