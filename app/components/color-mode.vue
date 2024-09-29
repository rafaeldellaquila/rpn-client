<template>
  <UToggle v-model="isDarkMode" on-icon="i-heroicons-moon-20-solid" off-icon="i-heroicons-sun-20-solid" />
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const isDarkMode = ref(colorMode.preference === 'dark')

watch(isDarkMode, (newMode) => colorMode.preference = newMode ? 'light' : 'dark')
</script>