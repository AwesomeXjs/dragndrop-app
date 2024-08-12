<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <ul class="nav-list">
        <li><router-link to="/">Homepage </router-link></li>
        <li><router-link to="/app">App </router-link></li>
        <li><router-link to="/about">About </router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
nav {
  padding-top: 10px;
}

.nav-list {
  background-color: var(--var-background-card);
  display: flex;
  justify-content: space-around;
  max-width: 50%;
  margin: 0 auto;
  padding: 10px 10px 5px 10px;
  border-radius: var(--var-border-radius);
  border: 1px solid var(--var-border);
  list-style: none;
}

a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

a::before,
a::after {
  content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
a::before {
  background-color: var(--var-accent);
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}

a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
a:hover::after {
  transform: translate3d(0, 0, 0);
}
</style>
