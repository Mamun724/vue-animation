// Composables
import {createRouter, createWebHistory} from 'vue-router'
import store from "@/plugins/store";
import NotFound from "@/views/NotFound.vue";
import Profile from "@/views/Profile.vue";
import Assets from "@/views/Assets.vue";
import Memories from "@/views/Memories.vue";
import Settings from "@/views/Settings.vue";
import PersonalInformationTab from "@/views/PersonalInformationTab.vue";
import SecurityTab from "@/views/SecurityTab.vue";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/AppLayout.vue'),
    beforeEnter: (_from, _to) => {
      if (store.getters.isAuthenticated) {
        return true;
      } else {
        return {name: "login"};
      }
    },
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        children: [
          {
            path: '',
            name: 'personal-info',
            component: PersonalInformationTab
          },
          {
            path: 'security',
            name: 'security',
            component: SecurityTab
          },
        ]
      },
      {
        path: 'assets',
        name: 'Assets',
        component: Assets
      },
      {
        path: 'memories',
        name: 'Memories',
        component: Memories
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings
      }
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
  {
    path: "/:pathMatch(.*)*",
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
