<template>
  <section class="main">
    <div class="main__content">
      <div class="main__menu">
        <!-- <CatalogIdMyImgSeo :productObject="productObject" /> -->
        <CatalogIdMySliderSec :images="productObject" />
        <!-- <CatalogIdMySlider :useProductObject="productObjectClient" /> -->
        <CatalogIdMyAbout :useProductObject="productObject" />
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
  async setup() {
    try {
      let productObject = useProductObject();
      let tableSize = useTableSize();
      let tableMeus = useTableMeus();
      const route = useRoute().params;
      let getOther = null;
      const { data: responseItems } = await useAsyncData(
        "responseItems",
        async () =>
          $fetch(
            usePageUrlAsyncData() + "product/" + `${route.name}/${route.id}`
          )
      );
      if (!responseItems.value || responseItems.value?.length <= 0) {
        useRouter().push("/error");
      }
      productObject.value = responseItems.value;
      this.$emit("load");
      return { getOther };
    } catch {}
  },
  data() {
    return {
      useTableSize: useTableSize(),
      useTableMeus: useTableMeus(),
      arrTableSize: null,
      arrTableMeus: null,
      mountedObj: null,
      useCursor: useCursor(),
      productObjectClient: null,
      productObject: useProductObject(),
      arrObjectSize: {
        title: "обмеры изделия",
        text: "точные параметры изделия",
      },
    };
  },
  methods: {
    async initProduct() {
      if (!this.productObject || this.productObject?.length <= 0) {
        this.$router.push("/error");
      }
    },
  },
  unmounted() {
    this.productObject = false;
  },
  created() {
    this.initProduct();
  },
  mounted() {
    this.productObjectClient = this.productObject;
    this.arrTableSize = JSON.parse(this.productObject.product[0].dimension);
    this.arrTableMeus = JSON.parse(this.productObject.product[0].measurement);
    nextTick(() => {
      this.useCursor = true;
      this.useCursor = false;
    });
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
  padding-top: 120px;
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
  display: grid;
  grid-template-columns: minmax(0, 0.5fr) minmax(0, 1fr);
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
@media screen and (max-width: 1720px) {
  .main__menu {
    grid-template-columns: 0.4fr 1fr;
  }
}
@media screen and (max-width: 1240px) {
  .main__menu {
    grid-template-columns: 0.5fr 1fr;
  }
}
@media screen and (max-width: 1100px) {
  .main {
    padding-top: 110px;
    margin-bottom: 46px;
  }
}
@media screen and (max-width: 936px) {
  .main__menu {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
}
@media screen and (max-width: 500px) {
  .main {
    margin-bottom: 20px;
  }
}
</style>
