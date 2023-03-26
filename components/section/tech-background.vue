<template>
  <section class="SectionTechBackground">
    <AppHeading id="TechSection" element="h2">
      {{ $t('tech.title') }}
    </AppHeading>
    <ul class="SectionTechBackground__list">
      <li v-for="item in list" :key="item.name" class="SectionTechBackground__item">
        <div class="SectionTechBackground__label">
          <nuxt-img
            class="SectionTechBackground__img"
            :src="item.icon"
            :alt="item.name"
            :width="item.width"
            :height="item.height"
            quality="80"
            loading="lazy"
          />
          <div class="SectionTechBackground__wrapper">
            <div>{{ item.name }}</div>
            <div>{{ item.type }} ( {{ item.date }} )</div>
          </div>
        </div>
        <p class="SectionTechBackground__paragraph">{{ item.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  const keys = ['itpm', 'game_dev', 'kysune', 'goit'];

  const list = keys.map((item: string) => {
    let width, height;

    if (item === 'kysune') {
      width = '100';
      height = '100';
    }
    
    if (item === 'itpm' || item === 'game_dev') {
      width = '210';
      height = '100';
    }

    if (item === 'goit') {
      width = '144';
      height = '50';

    }

    return {
      name: t(`tech.${item}.name`),
      icon: `/img/tech-background/${item}.webp`,
      height,
      width,
      type: t(`tech.${item}.type`),
      date: t(`tech.${item}.date`),
      description: t(`tech.${item}.description`),
    }
  });
</script>

<style lang="scss">
  .SectionTechBackground {
    &__list {
      list-style: none;
    }

    &__item {
      margin-bottom: 4rem;
    }

    &__label {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 1rem;
    }

    &__img {
      height: 50px;
      width: auto;
    }

    &__wrapper {
      color: rgba(var(--color-base), 1);
      letter-spacing: 0.1em;

      div:nth-child(2) {
        font-size: 0.7rem;
      }
    }

    &__paragraph {
      color: rgba(var(--color-base), 1);
      letter-spacing: 0.05em;
    } 
  }
</style>
