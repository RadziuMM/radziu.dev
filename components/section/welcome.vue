<template>
  <section class="SectionWelcome">
    <h1 class="SectionWelcome__header">
      {{ $t('welcome.title') }}
    </h1>
    <div class="SectionWelcome__wrapper" id="WelcomeSection">
      <nuxt-img
        class="SectionWelcome__img"
        src="/img/welcome/welcome.svg"
        alt=""
        aria-hidden="true"
        width="400"
        height="240"
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
    &__wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
    }
    
    &__img {
      height: auto;
      width: 80vw;
    }

    &__text {
      padding: 1rem;
      color: white;
    }

    &__greeting {
      display: block;
      font-size: 2rem;
    }

    &__header {
      padding-bottom: 3rem;
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      text-align: center;
    }

    @media  (min-width: 720px) {
      &__wrapper {
        justify-content: space-evenly;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
      }

      &__img {
        width: 400px;
      }

      &__text {
        width: 300px;
        padding: 1rem;
        color: white;
      }
    }
  }
</style>