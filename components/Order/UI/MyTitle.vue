<template>
  <div class="title"><slot /></div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-weight: 200;
  font-size: 22px;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 20px;
  transition: all 0.4s ease;
}
</style>
