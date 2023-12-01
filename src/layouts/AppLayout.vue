<template>
  <v-app>
    <v-app-bar>
      <AppBar v-model:openNavDrawer="show"/>
    </v-app-bar>
    <v-navigation-drawer v-model="show">
      <Sidebar/>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import {ref} from "vue";
import AppBar from "@/components/AppBar.vue";
import Sidebar from "@/components/Sidebar.vue";

const show = ref(null);
</script>

<style scoped>

</style>
