<template>
  <v-app>
    <v-app-bar>
      <AppBar v-model:openNavDrawer="show"/>
    </v-app-bar>
    <v-navigation-drawer v-model="show">
      <router-view name="sidebar"></router-view>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import {ref} from "vue";
import AppBar from "@/components/AppBar.vue";
import {useStore} from "vuex";

const show = ref(null);

const store = useStore();
store.commit("setShowSplashScreen", false);
</script>

<style scoped>

</style>
