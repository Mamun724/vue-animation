<template>
  <v-list
    :nav="true"
    :lines="false">
    <v-list-item
      v-for="(item, index) in data"
      class="pl-4"
      :class="{'bg-primary-darken-2': selectedSideMenu.link === item.link}"
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
import {useRoute, useRouter} from "vue-router";
import {effect, ref} from "vue";

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

const route = useRoute();
const router = useRouter();

const selectedSideMenu = ref(data.find(item => item.link === route.path));

effect(() => {
  selectedSideMenu.value = data.find(item => item.link === route.path);
});

const itemClick = (item) => {
  router.push({path: item.link});
}
</script>

<style>
.v-list-item--variant-text.selected {
  /* background-color: var(--v-theme-primary); TODO this doesn't work, used auto generated class name above: bg-primary-darken-2 */
}
</style>
