<template>
  <div class="base-header-not-auth">
    <img
      class="base-header-not-auth__image"
      src="@/common/assets/logo.png"
      alt="logo"
    />
    <div class="base-header-not-auth__title">
      Você está muito próximo de mudar a forma de<br />
      <span> hospedar seu site </span>
    </div>
    <div class="base-header-not-auth__subtitle">Escolha o seu plano</div>
  </div>
</template>

<style lang="scss">
.base-header-not-auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    width: 176px;
    margin: 60px 0;
  }

  &__title {
    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 2.25rem;
    text-align: center;
    color: var(--dark);

    span {
      color: var(--red);
      text-decoration: underline;
    }
  }

  &__subtitle {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 20px 0;
  }
}
</style>
