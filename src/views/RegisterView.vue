<template>
  <div class="register-view">
    <div class="container">
      <BaseCard>
        <template #content>
          <form>
            <div class="item" :style="{ marginBottom: '16px' }">
              <div class="login__form__label">Nome completo</div>
              <BaseInput
                v-model="formData.name"
                class="w-100"
                placeholder="Informe seu nome completo"
              />
            </div>
            <div class="item" :style="{ marginBottom: '16px' }">
              <div class="login__form__label">Celular</div>
              <BaseInput
                v-model="formData.phone"
                class="w-100"
                type="number"
                placeholder="(99) 99999-0000"
              />
            </div>
            <div class="item" :style="{ marginBottom: '16px' }">
              <div class="login__form__label">E-mail</div>
              <BaseInput
                v-model="formData.email"
                class="w-100"
                placeholder=" "
              />
            </div>
            <div class="item" :style="{ marginBottom: '16px' }">
              <div class="login__form__label">Senha</div>
              <BaseInput
                v-model="formData.password"
                hint="No mínimo 8 caracteres"
                class="w-100"
                placeholder=" "
              />
            </div>
            <div class="item" :style="{ marginBottom: '16px' }">
              <div class="login__form__label">Confirme sua senha</div>
              <BaseInput v-model="formData.confirmPassword" class="w-100" />
            </div>
            <BaseButton
              @click="handleCreateUser"
              class="w-100"
              label="CRIAR CONTA"
            />
          </form>
        </template>
      </BaseCard>
      <TheHostingPlan :plan="selectedPlan" />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive, ref } from "vue";
import { optionsPlans } from "./HostingPlans/optionsPlans";

// components
import BaseButton from "@/common/components/BaseButton.vue";
import BaseCard from "@/common/components/BaseCard.vue";
import BaseInput from "@/common/components/BaseInput.vue";
import TheHostingPlan from "@/common/components/HostingPlans/TheHostingPlan.vue";

// const router = useRoute();
let selectedPlan = reactive({});

onBeforeMount(() => {
  const isPlan = optionsPlans.find((plan) => plan.id === 2);
  selectedPlan = isPlan;
});

const initialFormData = () => ({
  name: undefined,
  phone: undefined,
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
});

const formData = ref(initialFormData());

async function handleCreateUser() {
  console.log("create user");
}

// function handleResetFormData() {
//   Object.assign(formData, initialFormData())
// }
</script>

<style lang="scss">
.register-view {
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
  }
}
</style>
