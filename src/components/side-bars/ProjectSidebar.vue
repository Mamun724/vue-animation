<template>
  <SidebarTemplate :route-data="routeData"/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import SidebarTemplate from "@/components/side-bars/SidebarComponent.vue";

const route = useRoute();

const projectId = computed(() => route.params.projectId);

const routeData = ref([
  {
    text: "Back Home",
    link: "/",
    icon: "mdi-arrow-u-left-top-bold",
  },
  {
    text: "Back",
    link: "/projects",
    icon: "mdi-arrow-left",
  },
  {
    text: "Assets",
    link: `/projects/${projectId.value}`,
    icon: "mdi-home-group",
  },
  {
    text: "Memories",
    link: `/projects/${projectId.value}/memories`,
    icon: "mdi-image-frame",
  },
  {
    text: "Members",
    link: `/projects/${projectId.value}/members`,
    icon: "mdi-account-multiple-check",
  },
  {
    text: "Settings",
    link: `/projects/${projectId.value}/settings`,
    icon: "mdi-cog",
  },
]);
</script>

<style>
</style>
