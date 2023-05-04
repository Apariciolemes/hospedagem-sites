<template>
  <div class="base-card">
    <slot name="content" />
  </div>
</template>

<style lang="scss">
.base-card {
  background: var(--white);
  border: 1px solid #e6eaf2;
  border-radius: 5px;
  padding: 28px 32px 32px;
}
</style>
