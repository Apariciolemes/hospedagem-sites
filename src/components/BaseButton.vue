<template>
  <button
    type="button"
    :style="style"
    class="base-button"
    :class="props.disabled && 'disabled'"
    :disabled="props.disabled"
  >
    {{ props.label }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: String,
  size: String,
  color: String,
  disabled: {
    type: Boolean,
    default: false,
  },
});

const style = {
  fontSize: props.size,
  color: props.color,
};
</script>

<style lang="scss" scoped>
.base-button {
  background-color: var(--red);
  border-radius: 5px;
  padding: 30px 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  outline: none;
  color: var(--white);
  border: 0;

  &:focus {
    background-color: var(--red);
  }
}

.disabled {
  background: #dadce0;
  color: #00000054;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
