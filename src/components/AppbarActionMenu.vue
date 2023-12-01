<template>
  <v-list>
    <v-list-item
      @click="$router.push({path: '/profile'})"
      :class="{'text-primary': $route.path !== '/profile',
               'bg-primary text-on-primary': $route.path === '/profile'}">
      Profile
    </v-list-item>
    <v-list-item
      append-icon="mdi-logout"
      variant="text"
      class="text-primary"
      @click="logout">
      Logout
    </v-list-item>
  </v-list>
</template>

<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();

const logout = () => {
  store.commit("logout");
  router.push({path: "/login"});
}
</script>
