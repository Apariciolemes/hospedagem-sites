<template>
  <div class="hosting-plans-view">
    <div class="container">
      <div class="hosting-plans-view--wrapper">
        <img
          class="hosting-plans-view__image"
          src="@/common/assets/logo.png"
          alt="logo"
        />
        <div class="hosting-plans-view__label">
          Você está muito próximo de mudar a forma de hospedar seu site
        </div>

        <div class="hosting-plans-view__plans">
          <div v-for="(plan, index) in optionsPlans" :key="`${plan}-${index}`">
            <TheHostingPlan
              :plan="plan"
              @emit-select-plan="handleSelectedPlan"
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

function handleSelectedPlan() {
  console.log("handleSelectedPlan");
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
  }
}
</style>
