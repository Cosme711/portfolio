// import redirectSSL from 'redirect-ssl'

export default {

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cosme Gressier - Développeur Web Freelance Vuejs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Ubuntu:wght@400;700&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],

  pwa: {
    meta: {
      theme_color: '#150C21',
      lang: 'fr',
      description: 'Développeur Web spécialisé Vuejs, Nuxt, JavaScript, Strapi, Sass & Tailwindcss.',
      ogTitle: 'Cosme Gressier - Développeur Web Freelance Vuejs',
      ogDescription: 'Développeur Web Freelance spécialisé Vuejs, Nuxt, JavaScript, Strapi, Sass & Tailwindcss.',
      ogSiteName: 'Cosme Gressier - Développeur Web Freelance Vuejs',
      ogHost: 'https://www.cosme-gressier.com/'
    }
  },

  sitemap: {
    hostname: 'https://www.cosme-gressier.com',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  // serverMiddleware: [
  //   redirectSSL.create({
  //     enabled: process.env.NODE_ENV === 'production'
  //    })
  // ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
