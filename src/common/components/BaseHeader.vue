<template>
  <div class="base-header">
    <img class="base-header__image" src="@/common/assets/logo.png" alt="logo" />
    <BaseAvatar label="J" />
  </div>
</template>

<script setup>
import BaseAvatar from "./BaseAvatar.vue";
</script>

<style lang="scss">
.base-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  &__image {
    width: 250px;
  }
}
</style>
