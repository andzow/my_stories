<template>
  <UIMyHeader />
  <main class="page">
    <NuxtPage />
    <UIMyModalStatus />
    <UIMyCursor />
    <UIMyCursorCircle />
  </main>
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
  height: 5000px;
}
</style>
