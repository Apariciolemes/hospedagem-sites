<template>
  <div class="base-header">
    <img class="base-header__image" src="@/common/assets/logo.png" alt="logo" />
    <div class="base-header__avatar">
      <BaseAvatar label="J" @click="showActionLogout = !showActionLogout" />
      <div
        v-show="showActionLogout"
        class="base-header__avatar__action"
        @click="logout"
      >
        Sair
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseAvatar from "./BaseAvatar.vue";

const showActionLogout = ref(false);

function logout() {
  localStorage.clear();
  window.location.reload();
}
</script>

<style lang="scss">
.base-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px;

  &__image {
    width: 176px;
  }

  &__avatar {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;

    &__action {
      background: #ffffff;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 4px;
      padding: 12px 40px;
    }
  }
}
</style>
