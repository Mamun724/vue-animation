<template>
  <v-app>
    <div v-if="showSplash">
      <SplashScreen/>
    </div>
    <div class="fill-height" v-else>
      <CssOnlyBackgroundAnimation/>
      <v-main class="fill-height">
        <v-container :fluid="true" class="fill-height">
          <v-row align-content="center">
            <v-spacer/>
            <v-col cols="8" md="3">
              <slot></slot>
            </v-col>
            <v-spacer/>
            <v-spacer/>
            <v-spacer/>
            <v-spacer/>
            <v-spacer/>
          </v-row>
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script setup>
import {computed} from "vue";
import SplashScreen from "@/components/SplashScreen.vue";
import {useStore} from "vuex";
import CssOnlyBackgroundAnimation from "@/components/CssOnlyBackgroundAnimation.vue";

const store = useStore();

const showSplash = computed(() => store.getters.showSplashScreen);
setTimeout(() => {
  store.commit("setShowSplashScreen", false);
}, 3000);
</script>

<style scoped>
</style>
