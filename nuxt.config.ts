import * as dotenv from 'dotenv'
dotenv.config({ path: './tokens.env' })
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  pages: true,
  srcDir: 'src/',
  app: {
    head: {
      title: 'Ald1n',
      meta: [
        { name: 'charset', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  css: ['@/app/styles/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/app/styles/vars.scss" as *;`
        }
      }
    }
  }
})
