<template>
  <div class="card-hosting-plans">
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

    <div class="card-hosting-plans__region">
      Seu site em servidores no Estados Unidos.
    </div>

    <BaseButton label="ESCOLHER ESSE PLANO" />
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
    : useFormatCurrency(props.plan.price);
});
</script>

<style lang="scss">
.card-hosting-plans {
  padding: 40px;
  background: var(--white);
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &__type {
    color: #666666;
    font-weight: 700;
    font-size: 26px;
    line-height: 33px;
  }

  &__price {
    font-weight: 700;
    font-size: 34px;
    line-height: 43px;
    color: #f30168;
  }

  &__tax-description {
    font-size: 14px;
    line-height: 18px;

    color: #666666;
  }

  hr {
    border: 1px solid rgba(196, 196, 196, 0.5);
    margin: 16px 0;
  }

  &__ideal {
  }
}
</style>
