import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/welcome',
      component: () => import('../views/admin/index.vue'),
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          component: () => import('../views/admin/welcome.vue'),
        },
        {
          path: '/card',
          name: 'card',
          component: () => import('../views/admin/card.vue'),
        },
      ]
    },
    {
      path: '/addCard',
      name: 'addCard',
      component: () => import('../views/add/addCard.vue'),
    },

  ]
})

export default router
