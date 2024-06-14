<template>
  <input
    class="order__input"
    type="text"
    @input="updateInput"
    :value="modelValue"
  />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
      console.log(this.modelValue);
    },
  },
};
</script>

<style scoped>
.order__input {
  width: 100%;
  box-sizing: border-box;
  background: white;
  padding: 13px 20px;
  border: none;
  font-weight: 300;
  font-size: 18px;
  color: var(--brown);
  transition: all 0.4s ease;
}
</style>
