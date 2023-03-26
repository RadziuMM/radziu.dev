// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image-edge',
  ],

  css: [ '@/assets/styles/main.scss' ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },

  robots: {
    UserAgent: '*',
    Disallow: '/admin',
    Allow: '/',
  }
})
