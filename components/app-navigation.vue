<template>
  <header class="AppNavigation">
    <div class="AppNavigation__bar">
      <nuxt-img
        class="AppNavigation__logo"
        src="/img/logo.webp"
        alt=""
        aria-hidden="true"
        width="114"
        height="128"
        quality="80"
        loading="lazy"
      />

      <AppMobileMenu ref="mobileMenu">
        <button
          class="AppNavigation__button-menu"
          @click="onClickMobileButton"
          aria-label="open menu"
          type="button"
        >
          <div class="button__hamburger"></div>
        </button>
        <nav class="AppNavigation__nav">
          <ul class="nav__list">
            <li v-for="item in navigation" :key="item.name" class="nav__item">
              <a :href="item.link" class="nav__link">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </AppMobileMenu>

      <button
        class="AppNavigation__button"
        :class="{ 'button--active': mobileMenu?.isActive }"
        @click="onClickMobileButton"
        aria-label="open menu"
        type="button"
      >
        <div class="button__hamburger"></div>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  const mobileMenu = ref();
  const onClickMobileButton = () => mobileMenu.value.toggle();
  
  const navigation: any[] = [
    { name:  t('nav.welcome'), link: '#WelcomeSection' },
    { name:  t('nav.about'), link: '#AboutSection' },
    { name:  t('nav.skills'), link: '#SkillsSection' },
    { name:  t('nav.tech_background'), link: '#TechSection' },
    { name:  t('nav.portfolio'), link: '#PortfolioSection' },
    { name:  t('nav.contact'), link: '#ContactSection' },
  ];
</script>

<style lang="scss">
  .AppNavigation {
    overflow: hidden;

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
      width: 3.5rem;
      height: 4rem;
    }

    &__button {
      background: transparent;
      border: 0;
      cursor: pointer;
      z-index: 2;
      padding: 2rem 0rem 2rem 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.9s;

      &.button--active {
        transition: 2s;
        transform: translateX(1440px);
      }

      .button__hamburger {
        position: relative;
        z-index: 5;
        height: 8px;
        width: 45px;
        background-color: rgba(var(--color-primary), 1);

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

    &__button-menu {
      @extend .AppNavigation__button;
      position: fixed;
      right: 2rem;
      top: 1rem;
    }

    &__nav {
      .nav {
        &__list {
          margin: 0;
          padding: 1.5rem 1rem;
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
            transition: 0.3s;
          }
        }
      }
    }
  }
</style>