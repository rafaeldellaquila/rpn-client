<template>
  <div>
    <h1 class="text-4xl">{{ $t('welcome') }}</h1>
    <NuxtImg src="/images/logo.png" />
    <UInput v-model="inputTest" />
    <ColorMode/>
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('pt')">pt</button>
  </div>
</template>

<script lang="ts" setup>


const inputTest = ref('')
const { locale, setLocale } = useI18n()

</script>

<style>

</style>