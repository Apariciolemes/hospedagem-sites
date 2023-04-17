<template>
  <div class="home-view">
    <BaseHeader />
    <div class="container">
      <div class="home-view__label">
        <span>Olá João, </span> <br />
        Seja bem vindo a sua conta de hospedagem.
      </div>

      <iframe
        class="home-view__iframe"
        width="100%"
        height="400px"
        src="https://www.youtube.com/embed/VIDEO_ID"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import BaseHeader from "@/common/components/BaseHeader.vue";
</script>

<style lang="scss">
.home-view {
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &__iframe {
    width: 100%;

    @media (min-width: 1024px) {
      width: 976px;
      height: 654px;
    }
  }
}
</style>
