<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
useSeoMeta({
  title: "Role Play Notes",
  description: "Website for facilitate your RPG tables",
  ogTitle: "Role Play Notes",
  ogDescription: "Nuxt portfolio to learn the framework",
  ogImage: "/images/logo.png",
  ogUrl: "https://tbd",
  twitterTitle: "Role Play Notes",
  twitterDescription: "Website for facilitate your RPG tables",
  twitterImage: "/images/logo.png",
  twitterCard: "summary",
})

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
})
</script>