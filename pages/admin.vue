<template>
  <div>
    <AdminMyHeader/>
    <AdminMyButtons/>
    <AdminMyPromocode/>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      middleware: ["role"]
    })
  }
}
</script>

<style>

</style>