// Composables
import { createRouter, createWebHistory } from "vue-router";

import index from "@/modules/web/indexView.vue";
// import Login from '@/views/loginView.vue'
// import Register from '@/views/registerView.vue'

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/about",
    children: [
      {
        path: "",
        name: "About",
        component: () => import("@/modules/web/aboutView.vue"),
      },
    ],
  },
  {
    path: "/login",
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/modules/web/loginView.vue"),
      },
    ],
  },
  {
    path: "/register",
    children: [
      {
        path: "",
        name: "Register",
        component: () => import("@/modules/web/registerView.vue"),
      },
    ],
  },
  {
    path: "/Contactus",
    children: [
      {
        path: "",
        name: "Contact us",
        component: () => import("@/modules/web/contactusView.vue"),
      },
    ],
  },
  {
    path: "/comentarios",
    children: [
      {
        path: "",
        name: "comentarios",
        component: () => import("@/modules/web/CommentView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
