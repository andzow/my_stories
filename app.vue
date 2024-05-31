<template>
  <UIMyHeader />
  <main class="page">
    <NuxtPage />
    <UIMyModalStatus />
    <UIMyCursor />
    <UIMyCursorCircle />
  </main>
  <UIMyFooter />
</template>

<script>
export default {};
</script>

<style>
* {
  cursor: none;
}
button {
  cursor: none;
}
.page {
  width: 100%;
  overflow: hidden;
}
</style>
