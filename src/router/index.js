// Composables
import {createRouter, createWebHistory} from 'vue-router'
import store from "@/plugins/store";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
        beforeEnter: (_from, _to) => {
          if (store.getters.isAuthenticated) {
            return true;
          } else {
            return {name: "login"};
          }
        }
      },
    ],
  },
  {
    path: '/login',
    component: () => import("@/views/Login.vue"),
    name: "login"
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/Signup.vue")
  },
  {
    path: "/splash",
    name: "splash",
    component: () => import("@/components/SplashScreen.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
