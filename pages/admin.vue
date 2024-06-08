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
      useCategoryAll: useCategoryAll()
    }
  },
  setup() {
    definePageMeta({
      middleware: ["role"]
    })
  },
  async mounted() {
    this.useCategoryAll = await CategoryController.getAll()
  }
}
</script>

<style scoped>
.admin {
  background: #f0eee9;
  min-height: 100vh;
}
</style>