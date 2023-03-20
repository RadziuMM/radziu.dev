<template>
  <header class="AppNavigation">
    <div class="AppNavigation__bar">
      <img
        class="AppNavigation__logo"
        src="/img/logo.png"
        alt=""
        aria-hidden
      />

      <AppMobileMenu ref="mobileMenu">
        <nav class="AppNavigation__nav">
          <ul class="nav__list">
            <li v-for="item in navigation" :key="item.name" class="nav__item">
              <a :href="item.link" class="nav__link">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </AppMobileMenu>

      <button class="AppNavigation__button" @click="onClickMobileButton">
        <div class="button__hamburger"></div>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
  const mobileMenu = ref();
  const onClickMobileButton = () => mobileMenu.value.toggle();
  
  const navigation: any[] = [
    { name: 'Welcome', link: '#WelcomeSection' },
    { name: 'Skills', link: '#SkillsSection' },
    { name: 'Tech background', link: '#tech' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Contact', link: '#contact' },
  ];
</script>

<style lang="scss">
  .AppNavigation {
    &__bar {
      max-width: 1440px;
      margin: 0 auto;
      height: 6rem;
      padding: 1rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      height: 100%;
    }

    &__button {
      height: 100%;
      background: transparent;
      border: 0;
      cursor: pointer;
      z-index: 2;
      padding: 2rem 0rem 2rem 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .button__hamburger {
        position: relative;
        z-index: 5;
        height: 8px;
        width: 45px;
        background-color: #2ea065;

        &::before {
          position: absolute;
          content: "";
          top: -13px;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: inherit;
        }

        &::after {
          position: absolute;
          content: "";
          top: 13px;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: inherit;
        }
      }
    }

    &__nav {
      .nav {
        &__list {
          list-style: none;
          margin: 0;
          padding: 1rem;
          font-size: 2rem;
          text-transform: uppercase;
          font-weight: 600;
          color: white;
        }

        &__link {
          color: inherit;
          text-decoration: none;
          display: block;

          &:hover {
            color: green;
            transition: .3s;
          }
        }
      }
    }
  }
</style>