<template>
  <div>
    <AdminMyHeader/>
    <AdminMyButtons/>
    <AdminMyPromocode/>
    <AdminMyCategory/>
    <AdminMyProduct/>
    <AdminMyCategoryLine/>
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

<style>

</style>