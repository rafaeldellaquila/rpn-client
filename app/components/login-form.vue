<template>
  <UForm :schema="loginSchema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup :label="$t('email') " name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup :label="$t('password')" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>
    <UButton type="submit">
      {{ $t('login') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import { z } from 'zod';
import type { UserProps } from '~~/types/user';

const { t } = useI18n()

const loginSchema = z.object({
  email: z.string().email(t('zod_invalid_email')),
  password: z.string().min(8, t('zod_min_password'))
})

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit (event: FormSubmitEvent<UserProps>) {
  console.log(event.data)
}
</script>
