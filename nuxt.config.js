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
      { hid: 'description', name: 'description', content: 'TCU Widget - 都市大のオンライン講義で使えるウィジェットツール' },
      { hid: 'og:title', name: 'og:title', content: 'TCU Widget - 都市大のオンライン講義で使えるウィジェットツール' },
      { hid: 'og:description', name: 'og:description', content: 'TCU Widget - 都市大のオンライン講義で使えるウィジェットツール' },
      { hid: 'og:url', name: 'og:url', content: 'https://widget.tcu-vrsa.net/' },
      { hid: 'or:image', name: 'og:image', content: 'https://widget.tcu-vrsa.net/img/ogp.jpg' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'tcu_vrsa' },
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
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-163819136-2'
      },
    ]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  pwa: {
    manifest: {
      name: 'TCU Widget',
      title: 'TCU Widget',
      description: '都市大のオンライン講義で使えるウィジェットツール',
      lang: 'ja',
      display: 'standalone',
      scope: '/',
      theme_color: '#232c4b',
      start_url: '/',
    }
  },
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
