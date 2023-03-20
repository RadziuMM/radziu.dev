<template>
  <div class="App">
    <AppNavigation />
    <Section-Welcome />
    <Section-Skills />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: 'Oswald', sans-serif;

    background-color: rgba(0, 0, 0, 0.914);
    background-image: url('/img/green-gradient.svg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 1000px auto; 
    background-position: 100% 0;

    @media (min-width: 720px) {
      background-size: 1300px auto; 
      background-position: 100% 0;
    }

    @media (min-width: 1024px) {
      background-size: 2000px;
    }
  }

  section {
    max-width: 1440px;
    margin: 0 auto 6rem;
    padding: 1rem;
  }

  .App {
    min-height: 100vh;
   
  }
</style>
