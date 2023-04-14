<template>
  <div class="login">
    <img src="@/common/assets/logo.png" />

    <BaseCard class="login__form">
      <template #content>
        <div class="login__form__title">Entre na sua conta</div>
        <div class="login__form__subtitle">
          Para acessar sua conta informe seu e-mail e senha
        </div>

        <div class="item" :style="{ marginBottom: '16px' }">
          <div class="login__form__label">E-mail</div>
          <BaseInput v-model="formData.email" class="w-100" placeholder=" " />
        </div>
        <div class="item">
          <div class="login__form__label">Senha</div>
          <BaseInput v-model="formData.password" class="w-100" />
          <div class="login__form__link">
            <a href="#">Esqueci minha senha</a>
          </div>
        </div>
        <BaseButton label="FAZER LOGIN" @click="handleSubmit" />
      </template>
    </BaseCard>
    <div class="login__link">
      Ainda não tem conta?
      <router-link to="/cadastrar-usuario">Cadastre-se</router-link>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// components
import BaseInput from "@/common/components/BaseInput.vue";
import BaseCard from "@/common/components/BaseCard.vue";
import BaseButton from "@/common/components/BaseButton.vue";

// services
import { authLogin } from "@/services";

const initialFormData = () => ({
  email: undefined,
  password: undefined,
});

const formData = reactive(initialFormData());

async function handleSubmit() {
  const { email, password } = formData;

  if (!email || !password) return;

  await authLogin({
    username: "mor_2314",
    password: "83r5^_",
  });
}
</script>

<style lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;

  &__form {
    display: flex;
    flex-direction: column;
    max-width: 100%;

    &__title {
      color: var(--dark);
      font-style: normal;
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 2.25rem;
    }

    &__subtitle {
      color: var(--dark);
      font-style: normal;
      font-size: 1.125rem;
      line-height: 1.5rem;
      padding: 4px 0 20px;
    }

    &__label {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    &__link {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.25rem;
      color: #515d74;
      text-align: right;
      padding: 4px 0 24px;
    }
  }

  img {
    width: 178px;
  }
}
</style>
