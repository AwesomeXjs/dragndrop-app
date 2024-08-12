<script setup lang="ts">
import { ref } from 'vue'
import AppPage from '@/pages/AppPage.vue'

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
  <div class="container">
    <AppPage />
  </div>
</template>

<style scoped lang="scss"></style>
