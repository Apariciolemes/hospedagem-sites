<template>
  <div class="card-hosting-plans">
    <div class="text-center">
      <div class="card-hosting-plans__type">
        {{ props.plan.type }}
      </div>
      <div class="card-hosting-plans__price">
        {{ customPrice }}
      </div>

      <div
        class="card-hosting-plans__tax-description"
        v-html="props.plan.taxDescription"
      />

      <hr />

      <div class="card-hosting-plans__ideal">
        {{ props.plan.idealForDescription }}
      </div>
      <hr />

      <BaseButton
        label="ESCOLHER ESSE PLANO"
        class="w-100"
        @click="$emit('emit-selected-plan', props.plan.id)"
      />
    </div>

    <div class="card-hosting-plans__list-options">
      Seu site em servidores no Estados Unidos.

      <div
        class="card-hosting-plans__list-options__items"
        v-for="option in props.plan.optionsServer"
        :key="option"
      >
        <div class="card-hosting-plans__list-options___item">
          <i class="fa fa-check"></i>
          {{ option }}
        </div>
      </div>
    </div>

    <div class="card-hosting-plans__list-options">
      Suporte 24 horas, 7 dias por semana grátis;
      <br />
      Aplicativos disponíveis;

      <div
        v-for="option in props.plan.optionsServer"
        :key="option"
        class="card-hosting-plans__list-options__items"
      >
        <div class="card-hosting-plans__list-options___item">
          <i class="fa fa-check"></i>
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

// composables
import useFormatCurrency from "@/composables/UseFormatCurrency.vue";

// components
import BaseButton from "../BaseButton.vue";

/* 
  props: {
    id: Number,
    type: String,
    price: Number,
    taxDescription: String,
    idealForDescription: String,
    optionsServer: Array,
    optionsAvailableApps: Array,
    migrationFree: Boolean,
    otherOptions: Array,
  } 
*/

const props = defineProps({
  plan: Object,
});

const customPrice = computed(() => {
  return props.plan.price === 0
    ? "Grátis"
    : useFormatCurrency(Number(props.plan.price));
});
</script>

<style lang="scss">
.card-hosting-plans {
  padding: 40px;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__type {
    color: #666666;
    font-weight: 700;
    font-size: 1.625rem;
    line-height: 2.125rem;
  }

  &__price {
    padding: 24px 0 16px;
  }

  &__price {
    font-weight: 700;
    font-size: 2.125rem;
    line-height: 2.75rem;
    color: var(--red);
  }

  &__tax-description {
    font-size: 0.875rem;
    line-height: 1.125rem;

    color: #666666;
  }

  &__list-options {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: #666666;
    padding: 24px 0 20px;

    &__items {
      padding-top: 10px;
      font-weight: 400;
    }
  }
}
</style>
