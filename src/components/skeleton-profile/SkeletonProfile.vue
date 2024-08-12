<script setup lang="ts"></script>

<template>
  <div class="skeleton-profile">
    <img class="skeleton-profile_avatar" src="@/assets/avatar.svg" alt="skeleton_avatar" />
    <div class="skeleton-profile_title"></div>
    <div class="skeleton-profile_text_1"></div>
    <div v-for="i in 6" :class="`skeleton-profile_text_${i + 1}`" :key="i"></div>
  </div>
</template>

<style scoped lang="scss">
@mixin skeleton_text {
  border-radius: var(--var-skeleton-text-border-radius);
  min-height: 10px;
  background: var(--var-bcc-gradient);
  margin: 16px auto;
}
.skeleton-profile {
  animation: skeleton_animation 1s linear infinite alternate;

  &_avatar {
    filter: blur(4px);
    border-radius: var(--var--skeleton-border-radius);
  }
  &_title {
    min-width: 190px;
    min-height: 26px;
    margin: 22px auto;
    border-radius: var(--var--skeleton-border-radius);
    background: var(--var-bcc-gradient);
  }
  &_text {
    &_1 {
      @include skeleton_text;
      max-width: 155px;
    }
    &_2 {
      @include skeleton_text;
      max-width: 190px;
    }
    &_3 {
      @include skeleton_text;
      max-width: 170px;
    }
    &_4 {
      @include skeleton_text;
      max-width: 160px;
    }
    &_5 {
      @include skeleton_text;
      max-width: 140px;
      margin-bottom: 24px;
    }
    &_6 {
      @include skeleton_text;
      max-width: 80px;
      margin-bottom: 24px;
    }
  }
}

@keyframes skeleton_animation {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
