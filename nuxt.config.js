// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  plugins: [
    {src: '/plugins/emoji', ssr: false}
  ]
})
