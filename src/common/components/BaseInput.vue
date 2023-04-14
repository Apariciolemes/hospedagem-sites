<template>
  <input type="text" v-model="vModel" class="base-input" />
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  console.log("BaseInput");
});

const vModel = ref(undefined);
</script>

<style>
.base-input {
  background: #ffffff;
  border: 1px solid rgba(81, 93, 116, 0.5);
  border-radius: 5px;
  height: 80px;
}
</style>
