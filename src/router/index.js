// Composables
import { createRouter, createWebHistory } from 'vue-router'

import index from '@/modules/web/indexView.vue'
// import About from '@/views/aboutView.vue'
// import Login from '@/views/loginView.vue'
// import Register from '@/views/registerView.vue'


const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },{
    path:'/home',
    children: [
      {
      path:'',
      name: 'Home',
      component: () => import('@/modules/web/components/productsComponent.vue')
    },
    ]
  }
]
//   {
//     path: '/about',
//     children: [
//       {
//         path: '',
//         name: 'About',
//         component: About,
//         // component: () => import('@/views/aboutView.vue'),
//       },
//     ],
//   },
//   {
//     path: '/login',
//     children: [
//       {
//         path: '',
//         name: 'Login',
//         component: Login,
//         // component: () => import('@/views/loginView.vue'),
//       },
//     ],
//   },
//   {
//     path: '/register',
//     children: [
//       {
//         path: '',
//         name: 'Register',
//         component: Register,
//         // component: () => import('@/views/registerView.vue'),
//       },
//     ],
//   }
// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
