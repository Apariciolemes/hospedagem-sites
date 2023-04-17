<template>
  <div class="home-view">
    <BaseHeader />
    <div class="container">
      <div class="home-view__name">Olá João,</div>
      <div class="home-view__description">
        Seja bem vindo a sua conta de hospedagem.
      </div>

      <iframe
        class="home-view__iframe"
        width="100%"
        height="400px"
        src="https://www.youtube.com/embed/Ywh8NVAHswU"
        frameborder="0"
        allowfullscreen
      ></iframe>

      <div class="home-view__description" :style="{ marginTop: '32px' }">
        Caso tenha alguma dúvida, <a href="#">visite nossa central de ajuda.</a>
      </div>
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

  &__name {
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 2.25rem;
    margin-bottom: 16px;
  }

  &__description {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: 32px;

    a {
      text-decoration: underline;
    }
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
