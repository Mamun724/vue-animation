<template>
  <SidebarTemplate :route-data="routeData"/>
</template>

<script setup>
import SidebarTemplate from "@/components/side-bars/SidebarComponent.vue";

const routeData = [
  {
    text: "Home",
    link: "/",
    icon: "mdi-home",
  },
  {
    text: "Projects",
    link: "/projects",
    icon: "mdi-file-tree",
  },
  {
    text: "Users",
    link: "/users",
    icon: "mdi-account-multiple",
  },
  {
    text: "Settings",
    link: "/settings",
    icon: "mdi-cog",
  },
];
</script>

<style>
</style>
