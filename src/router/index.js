// Composables
import {createRouter, createWebHistory} from 'vue-router'
import store from "@/plugins/store";
import NotFound from "@/views/NotFound.vue";
import Profile from "@/views/Profile.vue";
import Users from "@/views/Users.vue";
import Settings from "@/views/Settings.vue";
import PersonalInformationTab from "@/views/PersonalInformationTab.vue";
import SecurityTab from "@/views/SecurityTab.vue";
import Home from "@/views/Home.vue";
import Sidebar from "@/components/side-bars/TopLevelSidebar.vue";
import Projects from "@/views/Projects.vue";
import ProjectsSidebar from "@/components/side-bars/ProjectSidebar.vue";
import ProjectWrapper from "@/router/components/ProjectWrapper.vue";
import Assets from "@/components/projectComponents/Assets.vue";
import Memories from "@/components/projectComponents/Memories.vue";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import Members from "@/components/projectComponents/Members.vue";

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
        components: {
          default: Home,
          sidebar: Sidebar,
        },
      },
      {
        path: 'projects',
        name: 'Projects',
        components: {
          default: Projects,
          sidebar: Sidebar,
        },
      },
      {
        path: 'projects/:projectId',
        name: 'SingleProject',
        components: {
          sidebar: ProjectsSidebar,
          default: ProjectWrapper,
        },
        children: [
          {
            path: '',
            name: "ProjectAssets",
            component: Assets,
          },
          {
            path: 'memories',
            name: "ProjectMemories",
            component: Memories,
          },
          {
            path: 'members',
            name: "ProjectMembers",
            component: Members,
          },
          {
            path: 'settings',
            name: "ProjectSettings",
            component: Settings,
          },
        ],
      },
      {
        path: 'users',
        name: 'Users',
        components: {
          default: Users,
          sidebar: Sidebar,
        },
      },
      {
        path: 'settings',
        name: 'Settings',
        components: {
          default: Settings,
          sidebar: Sidebar,
        },
      },
      {
        path: 'profile',
        name: 'Profile',
        components: {
          default: Profile,
          sidebar: Sidebar,
        },
        children: [
          {
            path: '',
            name: 'personal-info',
            component: PersonalInformationTab,
          },
          {
            path: 'security',
            name: 'security',
            component: SecurityTab,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'not-found',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
