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
    transition: .3s;

    background: rgba(32, 71, 56, 0.24);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.3px);
    -webkit-backdrop-filter: blur(7.3px);

    &--active {
      transform: translateX(0);
    }
  }
</style>