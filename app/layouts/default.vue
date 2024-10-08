<template>
   <UnauthHeader />
   <UContainer as="main" :ui="{
      base: 'mx-auto',
      padding: 'px-6 sm:px-20 lg:px-40',
      constrained: 'max-w-7xl',
   }">
      <slot />
   </UContainer>
</template>