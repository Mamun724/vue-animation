<template>
  <v-list
    :nav="true"
    :lines="false">
    <v-list-item
      v-for="(item, index) in data"
      class="pl-4 selected"
      @click="itemClick(item)"
      :key="index">
      {{ item.text }}
      <template v-slot:prepend>
        <v-icon>{{ item.icon }}</v-icon>
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup>
import {useTheme} from "vuetify";

const data = [
  {
    text: "Home",
    link: "/",
    icon: "mdi-home",
  },
  {
    text: "Timeline",
    link: "/timeline",
    icon: "mdi-timeline",
  },
  {
    text: "Calendar",
    link: "/calendar",
    icon: "mdi-calendar",
  },
  {
    text: "Profile",
    link: "/profile",
    icon: "mdi-account",
  },
  {
    text: "Settings",
    link: "/settings",
    icon: "mdi-cog",
  },
];

const itemClick = (item) => {
  console.log(item.link);
}

const theme = useTheme()
console.log(theme.computedThemes.value);
</script>

<style>
.selected {
  background-color: var(--v-theme-primary) !important;
}
</style>
