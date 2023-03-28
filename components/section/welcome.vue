<template>
  <section class="SectionWelcome">
    <AppHeading id="WelcomeSection" element="h1">
      {{ $t('welcome.title') }}
    </AppHeading>
    <div class="SectionWelcome__wrapper">
      <nuxt-img
        class="SectionWelcome__img"
        src="/img/welcome/welcome.webp"
        alt=""
        aria-hidden="true"
        width="576"
        height="346"
        sizes="sm:320px md:450px lg:576px"
      />
      <p class="SectionWelcome__text">
        <span class="SectionWelcome__greeting">
          {{ $t('welcome.greeting') }}
        </span>
        {{ $t('welcome.about') }}
      </p>
    </div>
  </section>
</template>

<style lang="scss">
  .SectionWelcome {
    padding-top: 2rem;

    &__wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
    }
    
    &__img {
      height: auto;
      width: 80vw;
      max-width: 25rem;
    }

    &__text {
      padding: 1rem;
      color: rgba(var(--color-base), 1);
    }

    &__greeting {
      display: block;
      font-size: 2rem;
    }

    @media (min-width: $breakpointTablet) {
      padding-top: 8rem;

      &__wrapper {
        justify-content: space-evenly;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
      }

      &__text {
        width: 300px;
        padding: 1rem;
        color: rgba(var(--color-base), 1);
      }
    }
  }
</style>