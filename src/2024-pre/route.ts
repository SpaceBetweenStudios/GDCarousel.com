import { type RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/2024',
    name: '2024',
    component: () => import('./index.vue'),
  }
] as RouteRecordRaw[]
