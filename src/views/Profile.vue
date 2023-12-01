<template>
  <div class="pa-4">
    <h1>Profile</h1>
    <v-tabs
      v-model="currentTab">
      <v-tab v-for="tab in tabs"
             :key="tab.slug"
             :value="tab.slug">
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <v-window v-model="currentTab">
      <v-window-item v-for="tab in tabs"
                     :key="tab.slug"
                     :value="tab.slug">

        <component :is="tab.component"/>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import {ref} from "vue";
import PersonalInformationTab from "@/views/PersonalInformationTab.vue";
import SecurityTab from "@/views/SecurityTab.vue";

const tabs = [
  {
    slug: 'personal-info',
    name: 'Personal Info',
    component: PersonalInformationTab
  },
  {
    slug: 'security',
    name: 'Security',
    component: SecurityTab
  },
];

const currentTab = ref(tabs[0].slug);
</script>

