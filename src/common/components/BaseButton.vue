<template>
  <button type="button" :style="style" class="base-button">
    {{ props.label }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: String,
  size: String,
  color: String,
});

const style = {
  fontSize: props.size,
  color: props.color,
};
</script>

<style lang="scss">
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
</style>
