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
      iso: "en-US",
      name: "English",
      file: "./locale/enus.json"
    },
    {
      code: "pt",
      iso: "pt-BR",
      name: "Portugês (Brasil)",
      file: "./locale/ptbr.json"
    }
    ],
    defaultLocale: "pt",
   }
})