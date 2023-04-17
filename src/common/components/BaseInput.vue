<template>
  <div class="base-input">
    <div v-if="props.label" class="base-input__label">
      {{ props.label }}
    </div>
    <input
      :type="props.type"
      v-model="vModel"
      class="base-input__input"
      :placeholder="props.placeholder"
    />
    <div v-if="hint" class="base-input__hint">
      {{ props.hint }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { defineProps } from "vue";

const props = defineProps({
  type: {
    default: "text",
    type: String,
  },
  label: String,
  hint: String,
  placeholder: String,
});

const vModel = ref(undefined);
</script>

<style lang="scss">
.base-input {
  display: flex;
  flex-direction: column;

  &__input {
    background: #ffffff;
    border: 1px solid rgba(81, 93, 116, 0.5);
    border-radius: 5px;
    height: 60px;
  }

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
    font-size: 14px;
    line-height: 18px;
    color: #515d74;
  }
}
</style>
