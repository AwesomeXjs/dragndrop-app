<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import AppHeader from '@/components/header/AppHeader.vue'

const theme = ref<'light' | 'dark'>('light')

const changeTheme = () => {
  if (theme.value === 'dark') {
    theme.value = 'light'
    document.documentElement.setAttribute('light', '')
  } else {
    theme.value = 'dark'
    document.documentElement.removeAttribute('light')
  }
}
</script>

<template>
  <AppHeader />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>
