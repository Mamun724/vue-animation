<template>
  <div class="pa-2 w-100 fill-height d-flex justify-space-between">
    <div class="d-flex align-center">
      <img class="d-none d-lg-inline-block fill-height" src="@/assets/logo.png" alt="logo"/>
      <v-icon class="d-lg-none" size="x-large" @click="toggleNavDrawer">
        mdi-menu
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
          <v-list-item>
            <v-switch
              title="Toggle Theme"
              hide-details
              v-model="darkTheme"
              color="primary"
              label="theme"/>
          </v-list-item>
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
import {ref, watch} from "vue";
import {useTheme} from "vuetify";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const emit = defineEmits(['ham-clicked']);

const theme = useTheme();
const store = useStore();
const router = useRouter();

const themePrefix = store.getters.themePrefix;
const darkTheme = ref(theme.global.name.value === `${themePrefix}dark`);

watch(darkTheme, (darkThemeValue) => {
  if (darkThemeValue) {
    theme.global.name.value = `${themePrefix}dark`
  } else {
    theme.global.name.value = `${themePrefix}light`
  }
});

const toggleNavDrawer = () => {
  emit('ham-clicked')
}
const logout = () => {
  store.commit("logout");
  router.push({path: "/login"});
}
</script>

<style scoped>

</style>
