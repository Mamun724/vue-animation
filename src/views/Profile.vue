<template>
  <div class="pa-4">
    <h1>Profile</h1>
    <v-tabs
      v-model="currentTab">
      <v-tab v-for="tab in tabs"
             :key="tab.slug"
             :value="tab.slug"
             @click="goToRoute(tab)">
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <router-view></router-view>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const tabs = [
  {
    slug: 'personal-info',
    name: 'Personal Info'
  },
  {
    slug: 'security',
    name: 'Security'
  },
];

const route = useRoute();
const currentTab = ref(route.name);

const router = useRouter();
const goToRoute = (tab) => {
  router.replace({name: tab.slug});
}
</script>

