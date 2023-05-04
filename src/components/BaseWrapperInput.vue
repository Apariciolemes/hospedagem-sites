<template>
  <div class="base-input-wrapper">
    <div v-if="props.label" class="base-input-wrapper__label">
      {{ props.label }}
    </div>
    <slot name="input" />
    <div v-if="hint" class="base-input-wrapper__hint">
      {{ props.hint }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: String,
  hint: String,
});
</script>

<style lang="scss">
.base-input-wrapper {
  display: flex;
  flex-direction: column;

  &__label {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
  }

  &__hint {
    font-family: "Sora";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 18px;
    color: #515d74;
  }
}
</style>
