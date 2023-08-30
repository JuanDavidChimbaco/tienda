// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    // component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/homeView.vue'),
      },
    ],
  },
  {
    path: '/about',
    // component: () => import('@/layouts/default/Default'),
    children: [
      {
        path: '',
        name: 'About',
        component: () => import('@/views/aboutView.vue'),
      },
    ],
  },
  {
    path: '/login',
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/loginView.vue'),
      },
    ],
  },
  {
    path: '/register',
    children: [
      {
        path: '',
        name: 'Register',
        component: () => import('@/views/registerView.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
