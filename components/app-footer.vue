<template>
  <footer class="AppFooter">
    <span v-html="$t('footer.label', { year })" />
  </footer>
</template>

<script lang="ts" setup>
  const year = computed(() => new Date().getFullYear());
</script>

<style lang="scss">
 .AppFooter {
  padding: 0.2rem;
  text-align: center;
  color: rgba(var(--color-base));
  background-color: rgba(var(--color-primary), 0.8);
 }
</style>