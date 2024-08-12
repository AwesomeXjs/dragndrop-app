<script setup lang="ts">
import SkeletonProfile from '@/components/skeleton-profile/SkeletonProfile.vue'
import { useDragNDropStore } from '@/store/useStore'
import AppTable from '@/pages/AppTable.vue'

const store = useDragNDropStore()
</script>

<template>
  <div class="app-wrapper">
    <div class="profile">
      <SkeletonProfile />
    </div>
    <AppTable />
  </div>
</template>

<style scoped lang="scss">
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
}
</style>
