<template>
  <div class="hosting-plans-view">
    <div class="container">
      <div class="hosting-plans-view--wrapper">
        <BaseHeaderNotAuth />

        <div class="hosting-plans-view__plans">
          <div v-for="(plan, index) in optionsPlans" :key="`${plan}-${index}`">
            <TheHostingPlan
              :showButton="true"
              :plan="plan"
              @emit-selected-plan="handleSelectedPlan"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheHostingPlan from "@/common/components/HostingPlans/TheHostingPlan.vue";
import { optionsPlans } from "./optionsPlans";

// routes
import { useRouter } from "vue-router";
import BaseHeaderNotAuth from "../../common/components/BaseHeaderNotAuth.vue";
const router = useRouter();

function handleSelectedPlan(id) {
  router.push(`/cadastrar-usuario/${id}`);
}
</script>

<style lang="scss">
.hosting-plans-view {
  &--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__plans {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media screen and (max-width: 768px) {
      grid-template-columns: auto;
    }
  }
}
</style>
