
/* nuxt.config.js */
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/zassou65535.github.io/'
  }
} : {}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "zassous_atelier" || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "zassous_atelier" || '' },

      { hid: 'twitter:card', name: 'twitter:card', content: "summary" },
      { hid: 'og:title', property: 'og:title', content: "zassou's atelier"},
      { hid: 'og:url', property: 'og:url', content: "https://zassou65535.github.io/"},
      { hid: 'og:description', property: 'og:description', content: "zassou's collection of works" },
      { hid: 'og:image', property: 'og:image', content: "~assets/img/image.png" },
      { hid: 'og:site_name', name: 'og:site_name', content: "zassou's atelier" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-analytics', {
      id: 'UA-149745300-1'
    }]
  ],
  styleResources: {
    scss: [
      //全vueで読み込みたいscssはここで読み込む
      '~/assets/scss/app.scss',
    ],
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
