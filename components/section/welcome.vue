<template>
  <section class="SectionWelcome">
    <h1 class="SectionWelcome__header">Full Stack Developer</h1>
    <div class="SectionWelcome__wrapper" id="WelcomeSection">
      <img src="/img/welcome/welcome.svg" alt="" aria-hidden class="SectionWelcome__img"/>
      <p class="SectionWelcome__text">
        <span class="SectionWelcome__hi">Hi I'm Radziu.</span> <br />
        Hi I'm Radziu.
        I have been a full stack developer for some time now. This site is dedicated to my experience and skills
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

    &__hi {
      font-size: 2rem;
    }

    &__header {
      text-align: center;
      color: white;
      font-size: 3rem;
      padding-bottom: 3rem;
      text-transform: uppercase;
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
        padding: 1rem;
        color: white;
        width: 300px;
      }
    }
  }
</style>