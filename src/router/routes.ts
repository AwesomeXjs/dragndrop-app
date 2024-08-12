import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('@/pages/AppPage.vue')
  },
  {
    path: '/about',
    name: 'home',
    component: () => import('@/pages/AboutPage.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue')
  }
]

export default routes
