<template>
  <main class="App">
    <Section-Welcome />
    <Section-About />
    <Section-Skills />
    <Section-Tech-Background />
  </main>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  useHead({
    htmlAttrs: { lang: 'en' },
    title: t('page.title'),
    meta: [
      {
        name: 'description',
        content: t('page.description'),
      },
      {
        name: 'og:description',
        content: t('page.description'),
      },
    ],
  });  

</script>