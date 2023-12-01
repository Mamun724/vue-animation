<template>
  <v-avatar class="d-none d-lg-inline ml-2" rounded>
    <v-img :src="logo" alt="logo"/>
  </v-avatar>

  <v-app-bar-nav-icon class="d-lg-none">
    <v-icon v-show="!openNavDrawer" size="x-large" @click="toggleNavDrawer">
      mdi-menu
    </v-icon>
    <v-icon v-show="openNavDrawer" size="x-large" @click="toggleNavDrawer">
      mdi-close
    </v-icon>
  </v-app-bar-nav-icon>

  <v-toolbar-title>Header</v-toolbar-title>

  <v-menu>
    <template v-slot:activator="{props}">
      <v-btn icon>
        <v-avatar v-bind="props" variant="outlined">
          <v-img :src="authUser?.profilePicture"/>
        </v-avatar>
      </v-btn>
    </template>
    <AppBarActionMenu/>
  </v-menu>
</template>

<script setup>
import {useStore} from "vuex";
import logo from '@/assets/logo.svg';
import AppBarActionMenu from "@/components/AppbarActionMenu.vue";
import {computed} from "vue";

const props = defineProps({
  openNavDrawer: {
    type: Boolean,
  }
});
const emit = defineEmits(['update:openNavDrawer']);

const store = useStore();

const authUser = computed(() => store.getters.authenticatedUser);

const toggleNavDrawer = () => {
  emit('update:openNavDrawer', !props.openNavDrawer);
}
</script>

