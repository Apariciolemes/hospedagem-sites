<template>
  <div class="avatar">
    <div class="avatar__label">{{ props.label }}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: String,
});
</script>

<style lang="scss">
.avatar {
  width: 52px;
  height: 52px;
  background-color: var(--gray);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &__label {
    color: var(--white);
    font-size: 1.125rem;
    line-height: 1.125rem;
  }
}
</style>
