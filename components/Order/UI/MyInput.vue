<template>
  <input
    class="order__inputs"
    type="text"
    @input="updateInput"
    :value="modelValue"
    :class="{ activeInputOrder: active }"
    v-if="!textArea"
  />
  <textarea
    v-else
    class="order__textarea"
    type="text"
    @input="updateInput"
    :value="modelValue"
    :class="{ activeInputOrder: active }"
  ></textarea>
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
    textArea: Boolean,
    active: Boolean,
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.order__inputs {
  width: 100%;
  box-sizing: border-box;
  background: white;
  padding: 13px 20px;
  font-weight: 300;
  font-size: 18px;
  color: var(--brown);
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.4s ease;
}
.order__textarea {
  width: 100%;
  box-sizing: border-box;
  background: white;
  padding: 13px 20px;
  font-weight: 300;
  max-width: 300px;
  min-width: 100%;
  min-height: 100px;
  max-height: 100px;
  font-size: 18px;
  color: var(--brown);
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.4s ease;
}
.activeInputOrder {
  border: 1px solid red !important;
}
</style>
