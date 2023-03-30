<template>
  <div class="AppMobileMenu" :class="{ 'AppMobileMenu--active' : isActive }">
    <div class="AppMobileMenu__backdrop" @click="toggle"></div>
    <aside class="AppMobileMenu__menu">
      <slot></slot>
    </aside>
  </div>
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
    &__menu {
      position: fixed;
      max-width: 500px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;

      transition: 0.3s;
      transform: translateX(-100%);
      background: rgba(var(--color-primary), 0.11);
      box-shadow: 0 4px 30px rgba(var(--color-black), 0.1);
      backdrop-filter: blur(3.3px);
      -webkit-backdrop-filter: blur(7.3px);
      z-index: 5;
    }

    &__backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      transition: 0.3s;
      z-index: 2;
    }

    &--active {
      .AppMobileMenu__menu {
        transform: translateX(0);
      }

      .AppMobileMenu__backdrop {
        background-color: rgba(0, 0, 0, 0.2);
        pointer-events: all;
      }
    }
  }
</style>