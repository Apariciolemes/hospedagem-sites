<template>
  <div class="register-view">
    <BaseHeaderNotAuth />
    <div class="container">
      <BaseCard class="order-1">
        <template #content>
          <form class="register-view__form">
            <div class="register-view__form__title">Dados pessoais</div>
            <div class="register-view__form__subtitle">
              Informe seus dados pessoais para acesso à sua conta
            </div>

            <BaseWrapperInput
              :style="{ marginBottom: '16px' }"
              label="Nome completo"
            >
              <template #input>
                <BaseInput
                  v-model="formData.name"
                  class="w-100"
                  placeholder="Informe seu nome completo"
                />
              </template>
            </BaseWrapperInput>

            <BaseWrapperInput label="Celular" :style="{ marginBottom: '16px' }">
              <template #input>
                <BaseInput
                  v-model="formData.phone"
                  type="number"
                  class="w-100"
                  placeholder="(99) 99999-0000"
                />
              </template>
            </BaseWrapperInput>

            <BaseWrapperInput label="E-mail" :style="{ marginBottom: '16px' }">
              <template #input>
                <BaseInput
                  v-model="formData.email"
                  class="w-100"
                  placeholder="Informe seu e-mail"
                />
              </template>
            </BaseWrapperInput>

            <BaseWrapperInput
              label="Senha"
              hint="No mínimo 8 caracteres"
              :style="{ marginBottom: '16px' }"
            >
              <template #input>
                <BaseInput
                  v-model="formData.password"
                  type="password"
                  class="w-100"
                />
              </template>
            </BaseWrapperInput>

            <BaseWrapperInput label="Confirme sua senha">
              <template #input>
                <BaseInput
                  type="password"
                  v-model="formData.confirmPassword"
                  class="w-100"
                />
              </template>
            </BaseWrapperInput>

            <hr class="w-100" />

            <div class="register-view__form__title">Dados do seu site</div>
            <div class="register-view__form__subtitle" />

            <BaseWrapperInput
              label="Nome do seu site"
              hint="Exatamente igual o título do seu site"
            >
              <template #input>
                <BaseInput
                  v-model="formData.site"
                  class="w-100"
                  placeholder="Meu site"
                />
              </template>
            </BaseWrapperInput>

            <hr />

            <div class="register-view__form__checkbox">
              <input type="checkbox" v-model="formData.acceptTerms" />
              <div class="register-view__form__checkbox__label">
                Ao concluir com seu cadastro você concorda com nossos
                <span>termos de uso</span> e
                <span>politicas de privacidade.</span>
              </div>
            </div>
            <BaseButton
              @click="handleCreateUser"
              label="CRIAR CONTA"
              class="w-100"
              :disabled="disabledButton"
            />
          </form>
        </template>
      </BaseCard>

      <TheHostingPlan
        v-if="selectedPlan"
        :plan="selectedPlan"
        class="order-2"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, reactive } from "vue";
import { optionsPlans } from "./HostingPlans/optionsPlans";

// components
import BaseButton from "@/common/components/BaseButton.vue";
import BaseCard from "@/common/components/BaseCard.vue";
import BaseInput from "@/common/components/BaseInput.vue";
import TheHostingPlan from "@/common/components/HostingPlans/TheHostingPlan.vue";
import BaseHeaderNotAuth from "../common/components/BaseHeaderNotAuth.vue";
import BaseWrapperInput from "../common/components/BaseWrapperInput.vue";

// services
import { createUser } from "@/services";

// router
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const routes = useRoute();

// lifecycles

let selectedPlan = reactive({});

onBeforeMount(() => {
  const { id } = routes.params;
  const isPlan = optionsPlans.find((plan) => plan.id == id);
  selectedPlan = isPlan;
});

const initialFormData = () => ({
  name: undefined,
  phone: undefined,
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
  site: undefined,
  acceptTerms: false,
});

const formData = reactive(initialFormData());

const disabledButton = computed(() => {
  return (
    !formData.name ||
    !formData.phone ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword ||
    !formData.site ||
    !formData.acceptTerms
  );
});

async function handleCreateUser() {
  try {
    await createUser(formData);
    router.push("/");

    handleResetFormData();
  } catch (error) {
    console.log("Erro ao criar usuário", error);
  }
}

function handleResetFormData() {
  Object.assign(formData, initialFormData());
}
</script>

<style lang="scss">
.register-view {
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;

    @media screen and (max-width: 768px) {
      grid-template-areas:
        "order-2"
        "order-1";
      grid-template-columns: 1fr;
      padding: 0 16px;

      .order-1 {
        grid-area: order-1;
      }

      .order-2 {
        grid-area: order-2;
      }
    }
  }

  &__form {
    &__title {
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 2.25rem;
      color: var(--dark);
    }

    &__subtitle {
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.5rem;
      margin: 4px 0 20px;
      color: var(--dark);
    }

    &__checkbox {
      display: flex;
      gap: 8px;
      margin-bottom: 24px;

      input {
        width: 25px;
        height: 25px;
        cursor: pointer;
      }

      &__label {
        font-family: "Sora";
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;

        color: var(--dark);

        span {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
