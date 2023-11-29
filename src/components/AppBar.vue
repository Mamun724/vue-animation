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
      <v-switch
        title="Toggle Theme"
        hide-details
        v-model="darkTheme"
        color="primary"/>
      <v-btn color="primary" append-icon="mdi-logout">Logout</v-btn>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import {useTheme} from "vuetify";

const emit = defineEmits(['ham-clicked']);

const theme = useTheme();

const darkTheme = ref(theme.global.name.value === 'dark');

watch(darkTheme, (darkThemeValue) => {
  if (darkThemeValue) {
    theme.global.name.value = 'dark'
  } else {
    theme.global.name.value = 'light'
  }
})

const toggleNavDrawer = () => {
  emit('ham-clicked')
}
</script>

<style scoped>

</style>
