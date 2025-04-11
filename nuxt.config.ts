export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Ald1n', // Название по умолчанию для страницы
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Портфолио ald1n , разработка веб сайтов и приложений! ' },
        { name: 'author', content: 'Алладдин Курбанбаев' },
        { name: 'keywords', content: 'сайт, site,веб сайт, веб приложени, web site, web app, portfolio , фортфолио' },
        { property: 'og:title', content: 'Мой сайт' },
        { property: 'og:description', content: 'Портфолио ald1n , разработка веб сайтов и приложений! ' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Иконка для сайта
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' }, // Пример подключения шрифта
      ],
      script: [
        {
          src: 'https://example.com/script.js', // Пример внешнего скрипта
          type: 'text/javascript',
          async: true,
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  srcDir: 'src/',

  css: ['@/scss/base.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/scss/var.scss" as *;` // Путь к вашему файлу с переменными
        }
      }
    }
  },
  sitemap: {
    hostname: "https://kurbanbaev.com",
  },
})
