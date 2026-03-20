import { type RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '',
    name: 'root',
    component: () => import('./index.vue'),
  },
  {
    path: '/playlist',
    name: 'playlist-2026',
    component: () => import('./playlist.vue'),
  }
] as RouteRecordRaw[]
