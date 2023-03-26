<template>
  <section class="SectionPortfolio">
    <AppHeading id="PortfolioSection" element="h2">
      {{ $t('portfolio.title') }}
    </AppHeading>
    <p class="SectionPortfolio__description">{{ $t('portfolio.description') }}</p>
    <ul class="SectionPortfolio__list">
      <li
        class="SectionPortfolio__item"
        v-for="item in projects"
        :key="item.title"
      >
        <a :href="item.link" target="_blank" class="SectionPortfolio__link">
          <nuxt-img
            :src="item.imgPath"
            :alt="item.title"
            class="SectionPortfolio__img"
            width="auto"
            :height="260"
            quality="80"
            loading="lazy"
          />
          <div class="SectionPortfolio__wrapper">
            <h3 class="SectionPortfolio__title">{{ item.title }}</h3>
            <p class="SectionPortfolio__text">{{ item.description }}</p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  
  const projects = [
    {
      key: 'portfolio',
      link: 'https://github.com/RadziuMM/radziu.dev',
    },
    {
      key: 'discord_bot',
      link: 'https://github.com/RadziuMM/discord-bot',
    },
    {
      key: 'github',
      link: 'https://github.com/RadziuMM/',
    }
  ].map((item) => ({
    ...item,
    title: t(`portfolio.list.${item.key}.title`),
    description: t(`portfolio.list.${item.key}.description`),
    imgPath: `/img/portfolio/${item.key}.webp`,
  }));
</script>

<style lang="scss">
  .SectionPortfolio {
    color: rgba(var(--color-base), 1);

    &__description {
      font-size: 1.5rem;
      text-align: center;
    }

    &__list {
      margin: 2rem 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__item {
      border: 3px solid rgba(var(--color-base), 1);
    }

    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 0.2s;

      &:hover {
        opacity: .8;
      }
    }

    &__img {
      height: 10rem;
      width: 100%;
      object-fit: cover;
    }

    &__wrapper {
      padding: 0.7rem 1rem 2rem;

    }

    &__title {
      padding-bottom: 0.5rem;
    }

    @media (min-width: $breakpointTablet) {
      &__link {
        flex-direction: row;
      }

      &__img {
        height: 14rem;
        width: 12rem;
      }
    }

    @media (min-width: $breakpointDesktop) {
      &__img {
        height: 11rem;
        width: 18rem;
      }
    }
  }
</style>