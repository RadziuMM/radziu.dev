<template>
  <section class="SectionAbout">
    <AppHeading id="AboutSection" element="h2">
      {{ $t('about.who_am_i') }}
    </AppHeading>
    <div class="SectionAbout__wrapper">
      <nuxt-img
        class="SectionAbout__img"
        src="/img/about/about.svg"
        alt=""
        aria-hidden="true"
        width="400"
        height="240"
      />
      <p class="SectionAbout__paragraph">{{ $t('about.descritpion') }}</p>
    </div>
  </section>
</template>

<style lang="scss">
  .SectionAbout {
    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__paragraph {
      padding-top: 2rem;
      max-width: 500px;
      color: rgba(var(--color-base), 1);
      text-align: center;
    }

    &__img {
      height: auto;
      width: 80vw;
      max-width: 25rem;
    }

    @media (min-width: $breakpointTablet) {
      &__wrapper {
        flex-direction: row;
        align-items: flex-start;
      }

      &__title {
        margin-bottom: 4rem;
      }

      &__paragraph {
        padding-top: 1rem;
        text-align: left;
      }
    }
  }
</style>

