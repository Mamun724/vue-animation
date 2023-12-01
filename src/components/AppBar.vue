<template>
  <v-avatar class="d-none d-lg-inline ml-2" rounded>
    <v-img :src="logo" alt="logo"/>
  </v-avatar>

  <v-app-bar-nav-icon class="d-lg-none">
    <v-icon v-show="!openNavDrawer" size="x-large" @click="toggleNavDrawer">
      mdi-menu
    </v-icon>
    <v-icon v-show="openNavDrawer" size="x-large" @click="toggleNavDrawer">
      mdi-close
    </v-icon>
  </v-app-bar-nav-icon>

  <v-toolbar-title>Header</v-toolbar-title>

  <v-menu>
    <template v-slot:activator="{props}">
      <v-btn icon>
        <v-avatar v-bind="props" variant="outlined">
          <v-img :src="store.getters.authenticatedUser?.profilePicture"/>
        </v-avatar>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        @click="$router.push({path: '/profile'})"
        :class="{'text-primary-lighten-1': $route.path !== '/profile',
               'bg-primary-lighten-1 text-on-primary-lighten-1': $route.path === '/profile'}">
        Profile
      </v-list-item>
      <v-list-item
        append-icon="mdi-logout"
        variant="text"
        class="text-primary-lighten-1"
        @click="logout">
        Logout
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import logo from '@/assets/logo.svg';

const props = defineProps({
  openNavDrawer: {
    type: Boolean,
  }
});
const emit = defineEmits(['update:openNavDrawer']);

const store = useStore();
const router = useRouter();

const toggleNavDrawer = () => {
  emit('update:openNavDrawer', !props.openNavDrawer);
}
const logout = () => {
  store.commit("logout");
  router.push({path: "/login"});
}
</script>

<style scoped>

</style>
