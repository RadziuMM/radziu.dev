<template>
  <section class="SectionContact">
    <AppHeading id="ContactSection" element="h2">
      {{ $t('contact.title') }}
    </AppHeading>
    <p class="SectionContact__description">{{ $t('contact.description') }}</p>
    <ul class="SectionContact__list">
      <li v-for="item in list" :key="item.link">
        <a
          :href="item.link"
          target="_blank"
          class="SectionContact__item"
        >
          <nuxt-img
            class="SectionContact__icon"
            :src="item.icon"
            :alt="item.text"
            width="20"
            height="20"
            quality="80"
            loading="lazy"
          />
          {{ item.text }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  const list: any[] = [
    {
      link: 'https://t.me/Radziu',
      text: '/t.me/Radziu',
      icon: '/img/contact/telegram.svg'
    },
    {
      link: 'mailto:RMazurczak@protonmail.com',
      text: 'RMazurczak@protonmail.com',
      icon: '/img/contact/mail.svg'
    },
    {
      link: 'https://www.linkedin.com/in/rmazurczak/',
      text: '/in/rmazurczak',
      icon: '/img/contact/linkedin.svg'
    },
    {
      link: 'https://github.com/RadziuMM',
      text: 'github.com/RadziuMM',
      icon: '/img/contact/github.svg'
    },
  ];
</script>

<style lang="scss">
  .SectionContact {
    color: rgba(var(--color-base), 1);

    &__description {
      font-size: 1.5rem;
      padding-bottom: 2rem;
      text-align: center;
    }

    &__list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: max-content;
      margin: 2rem auto;
      gap: 2rem;
    }

    &__item {
      display: flex;
      align-items: center;
      gap: 1.3rem;
      font-size: 1.3rem;

      &:hover {
        opacity: 0.8;
      }
    }

    &__icon {
      height: 3rem;
      width: auto;
    }


    @media (min-width: $breakpointTablet) {
      &__list {
        flex-direction: row;
        flex-wrap: wrap;
        width: auto;
        margin: 0 auto;
      }
    }
  }
</style>