<script setup lang="ts">
import { useDragNDropStore } from '@/store/useStore'

const store = useDragNDropStore()
</script>

<template>
  <div v-if="store.banner_show" class="banner-skeleton">
    <div @click="store.banner_show = false" class="cross"></div>
    <div class="banner-content"></div>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/_variables.scss';
@import '@/scss/_animations.scss';

.banner-skeleton {
  position: relative;
  min-height: 72px;
  width: 100%;
  background-color: var(--var-background-card);
  border-radius: var(--var-border-radius);
  border: 1px solid var(--var-border);
  padding: 18px 68px 18px 18px;
}
.banner-content {
  min-height: 36px;
  background: var(--var-bcc-gradient);
  border-radius: var(--var-border-radius);
  animation: skeleton_animation 1s linear infinite alternate;
}

@include tablet() {
  // 840px--
  .banner-skeleton {
    width: 70%;
    margin: 0 auto;
  }
}
@include mobile() {
  // 568px--
  .banner-skeleton {
    width: 90%;
  }
}
</style>
