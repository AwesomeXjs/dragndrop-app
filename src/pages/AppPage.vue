<script setup lang="ts">
import SkeletonProfile from '@/components/skeleton-profile/SkeletonProfile.vue'
import AppTable from '@/components/app-table/AppTable.vue'
import AppBanner from '@/components/banner/AppBanner.vue'
</script>

<template>
  <div class="app-wrapper">
    <div class="profile">
      <SkeletonProfile />
    </div>
    <AppTable />
  </div>
  <AppBanner />
</template>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.profile {
  background-color: var(--var-background-card);
  padding: 18px 14px 0 14px;
  border-radius: var(--var-border-radius);
  border: 1px solid var(--var-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}

.app-wrapper {
  display: flex;
  min-height: 500px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 24px;
}

@keyframes skeleton_animation {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

// Mobile

@include tablet() {
  // 840px--
  .profile {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
}
@include mobile() {
  // 568px--
  .profile {
    width: 90%;
  }
}
</style>
