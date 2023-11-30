<template>
  <v-card>
    <v-card-title>
      User Preferences
    </v-card-title>
    <v-card-text>
      <v-select
          :items="themesInfo"
          v-model="selectedTheme"
          item-title="name"
          item-value="slug"
          variant="solo-filled"
          label="Color Theme"
      />
      <v-switch
          title="Toggle Theme"
          hide-details
          v-model="darkTheme"
          color="primary"
          label="Use the dark variant."/>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {ref, watch} from "vue";
import {useTheme} from "vuetify";
import {setTheme} from "@/services/themeService";

const theme = useTheme();
const themesInfo = [
  {slug: 'light', name: 'Light'},
  {slug: 'dark', name: 'Dark'},
  {slug: 'pine-light', name: 'Pine Light'},
  {slug: 'pine-dark', name: 'Pine Dark'},
];

const selectedTheme = ref(theme.global.name.value);

const darkTheme = ref(theme.global.name.value.endsWith('dark'));
watch(selectedTheme, (selectedThemeValue) => {
  theme.global.name.value = selectedThemeValue;
  darkTheme.value = selectedThemeValue.endsWith('dark');
  setTheme(selectedThemeValue);
});

watch(darkTheme, (darkThemeValue) => {
  const index = selectedTheme.value.lastIndexOf('-');
  let themePrefix = '';
  if (index >= 0) {
    themePrefix = selectedTheme.value.substring(0, index + 1);
  }

  if (darkThemeValue) {
    theme.global.name.value = `${themePrefix}dark`;
  } else {
    theme.global.name.value = `${themePrefix}light`;
  }
  selectedTheme.value = theme.global.name.value;
});
</script>
