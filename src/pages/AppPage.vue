<script setup lang="ts">
import SkeletonProfile from '@/components/skeleton-profile/SkeletonProfile.vue'
</script>

<template>
  <div class="app-wrapper">
    <div class="profile">
      <SkeletonProfile />
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  background-color: var(--var-background-card);
  padding: 18px 14px;
  border-radius: var(--var-border-radius);
  border: 1px solid var(--var-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}

.app-wrapper {
  display: flex;
}
</style>
