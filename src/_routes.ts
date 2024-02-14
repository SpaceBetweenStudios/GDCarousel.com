import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import route2024Pre from '@/2024-pre/route'

const routes : RouteRecordRaw[] = []
routes.push(...route2024Pre)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, _from, savedPosition) {
    if (to.hash) {
      return new Promise(() => {
        setTimeout(() => {
          const element = document.getElementById(to.hash.replace(/#/, ''))
          if (element) {
            let yOffset = 0
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({
              top: y,
              behavior: 'smooth'
            })
          }
        }, 500)
      })
    } else if (savedPosition) {
      return savedPosition
    } else {
      return {
        left: 0,
        top: 0,
        behavior: 'smooth'
      }
    }
  },
  routes: routes,
})

export default router
