export default {

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

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics'
  ],

  pwa: {
    meta: {
      theme_color: '#150C21',
      lang: 'fr',
      description: 'Développeur Web spécialisé Vuejs, Nuxt, JavaScript, Strapi, Sass & Tailwindcss.',
      ogTitle: 'Cosme Gressier - Développeur Web Freelance Vuejs',
      ogDescription: 'Développeur Web Freelance spécialisé Vuejs, Nuxt, JavaScript, Strapi, Sass & Tailwindcss.',
      ogSiteName: 'Cosme Gressier - Développeur Web Freelance Vuejs',
      ogHost: 'https://www.cosme-gressier.com/',
      ogImage: 'https://portfolio-api-cg.s3.eu-west-3.amazonaws.com/Profile_Picture_3d9b18ea86.jpg?33172.23499994725'
    }
  },

  googleAnalytics: {
    id: 'UA-183930246-1'
  }
}
