<template>
  <!-- <UIMyHeader /> -->
  <main class="page">
    <NuxtPage />
    <UIMyModalStatus />
    <!-- <UIMyCursor />
    <UIMyCursorCircle /> -->
  </main>
</template>

<script>
import AuthController from "@/http/controllers/AuthController";
export default {
  async mounted() {
    if (localStorage.getItem("accessToken")) {
      await AuthController.cheackAuth()
    }
  }
};
</script>

<style>
/* * {
  cursor: none;
}
button {
  cursor: none;
}
.page {
  width: 100%;
  overflow: hidden;
} */
</style>
