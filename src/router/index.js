import { createRouter, createWebHistory } from 'vue-router'
import { authState } from '../stores/authStore.js'

const routes = [
  { path: '/', redirect: '/select' },
  { path: '/login', name: 'login', component: () => import('../views/LoginView.vue') },
  {
    path: '/select',
    name: 'select',
    component: () => import('../views/LanguageSelectView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/quiz/:language/:level',
    name: 'quiz',
    component: () => import('../views/QuizView.vue'),
    meta: { requiresAuth: true },
    props: (route) => ({ language: route.params.language, level: Number(route.params.level) }),
  },
  {
    path: '/scoreboard',
    name: 'scoreboard',
    component: () => import('../views/ScoreboardView.vue'),
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
  // почекај auth да се иницијализира
  if (!authState.ready) {
    await new Promise((resolve) => {
      const unwatch = setInterval(() => {
        if (authState.ready) {
          clearInterval(unwatch)
          resolve()
        }
      }, 30)
    })
  }
  if (to.meta.requiresAuth && !authState.user) {
    return { name: 'login' }
  }
  if (to.name === 'login' && authState.user) {
    return { name: 'select' }
  }
  return true
})

export default router
