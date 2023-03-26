<template>
  <component
    :id="id"
    :is="element"
    class="AppHeading"
    :class="{ [`AppHeading--${element}`]: element }"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
  interface Props {
    id: string,
    element?: 'h1' | 'h2',
  }

  withDefaults(defineProps<Props>(), {
    element: 'h2',
  });
</script>

<style lang="scss">
  .AppHeading {
    padding-bottom: 3rem;
    color: rgba(var(--color-base), 1);
    text-align: center;
    text-transform: uppercase;

    &--h1 {
      font-size: 3rem;
    }

    &--h2 {
      font-size: 2rem;
    }
  }
</style>