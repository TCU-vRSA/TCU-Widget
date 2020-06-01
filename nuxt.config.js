export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'TCU Widget',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TCU Widget - 都市大生のオンライン講義のためのウィジェットツール' }
    ],
    link: [
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
    '@/assets/css/reset.css',
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
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    optimaization: {
      analyze: true,
      minimize: true,
    },
    optimizeCSS: true,
    terser: {
      parallel: true,
      cache: false,
      sourceMap: false,

    }
  }
}
