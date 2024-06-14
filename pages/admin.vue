<template>
  <div class="admin">
    <AdminMyHeader/>
    <AdminMyButtons/>
    <AdminMyPromocode/>
    <AdminMyCategory/>
    <AdminMyProduct/>
    <AdminMyCategoryLine/>
    <AdminMyProductsGrid/>
    <AdminMyPagination/>
  </div>
</template>

<script>
import CategoryController from "@/http/controllers/CategoryController";
export default {
  data() {
    return {
      useCategoryAll: useCategoryAll(),
      useCode: useCode(),
      useProduct: useProduct(),
      useCategory: useCategory()
    }
  },
  setup() {
    definePageMeta({
      middleware: ["role"]
    })
  },
  async mounted() {
    this.useCategoryAll = await CategoryController.getAll()
  },
  watch: {
    useCode() {
      document.body.style.overflow = this.useCode ? 'hidden' : '';
    },
    useProduct() {
      document.body.style.overflow = this.useProduct ? 'hidden' : '';
    },
    useCategory() {
      document.body.style.overflow = this.useCategory ? 'hidden' : '';
    }
  }
}
</script>

<style scoped>
.admin {
  background: #f0eee9;
  min-height: 100vh;
}
</style>