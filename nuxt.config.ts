// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: { compatibilityVersion: 4},
  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "nuxt-zod-i18n",
    "@nuxtjs/supabase"
  ],
  colorMode: {classSuffix: ""},
  image: {provider: 'ipx'},
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: ["/assets/css/main.css"],
  tailwindcss: {
    cssPath: ["/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config.ts",
  },
  i18n: {
    locales: [{
      code: "en",
      language: "en-US",
      name: "English",
      file: "../locales/enus.json"
    },
    {
      code: "pt",
      language: "pt-BR",
      name: "Portugês (Brasil)",
      file: "../locales/ptbr.json"
    }
    ],
    defaultLocale: "pt",
   },
  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: false,
  }
})