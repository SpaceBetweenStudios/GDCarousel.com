import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '',
    name: 'root',
    component: () => import('./index.vue'),
  }
] as RouteRecordRaw[]
