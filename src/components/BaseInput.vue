<template>
  <input
    v-model="vModel"
    :type="props.type"
    class="base-input"
    :placeholder="props.placeholder"
  />
</template>

<script setup>
import { defineProps, ref } from "vue";
const vModel = ref(undefined);

const props = defineProps({
  type: {
    default: "text",
    type: String,
  },
  placeholder: String,
});
</script>

<style lang="scss">
.base-input {
  background: var(--white);
  border: 1px solid rgba(81, 93, 116, 0.5);
  border-radius: 5px;
  height: 60px;
}
</style>
