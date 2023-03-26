<template>
  <aside class="AppMobileMenu" :class="{ 'AppMobileMenu--active' : isActive }">
    <slot></slot>
  </aside>
</template>

<script setup lang="ts">
  const isActive = ref(false);
  
  function toggle() {
    isActive.value = !isActive.value;
  }

  defineExpose({
    toggle,
    isActive,
  });
</script>

<style lang="scss">
  .AppMobileMenu {
    position: fixed;
    max-width: 500px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    transform: translateX(-100%);
    transition: 0.3s;

    background: rgba(var(--color-primary), 0.11);
    box-shadow: 0 4px 30px rgba(var(--color-black), 0.1);
    backdrop-filter: blur(3.3px);
    -webkit-backdrop-filter: blur(7.3px);

    &--active {
      transform: translateX(0);
    }
  }
</style>