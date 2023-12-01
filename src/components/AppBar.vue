<template>
  <div class="pa-2 w-100 fill-height d-flex justify-space-between">
    <div class="d-flex align-center">
      <img class="d-none d-lg-inline-block fill-height" src="@/assets/logo.png" alt="logo"/>
      <v-icon v-show="!openNavDrawer" class="d-lg-none" size="x-large" @click="toggleNavDrawer">
        mdi-menu
      </v-icon>
      <v-icon v-show="openNavDrawer" class="d-lg-none" size="x-large" @click="toggleNavDrawer">
        mdi-close
      </v-icon>
      <h1 class="ml-2">Header</h1>
    </div>
    <div class="d-flex align-center">
      <v-menu>
        <template v-slot:activator="{props}">
          <v-btn v-bind="props" icon>
            <v-avatar variant="outlined">
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
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";

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
