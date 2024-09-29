<template>
  <USelect v-model="language" :options="languages" />
</template>

<script lang="ts" setup>
const { locale, setLocale } = useI18n()

const language = ref(locale.value)
const languages = [
  { label: 'Português (Brasileiro)', value: 'pt' },
  { label: 'English', value: 'en' }
]

watch(language, (newLang) => {
  if (newLang) setLocale(newLang)
})
</script>