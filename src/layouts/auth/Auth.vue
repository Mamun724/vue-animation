<template>
  <v-app>
    <div v-if="showSplash">
      <SplashScreen/>
    </div>
    <div class="fill-height" v-else>
      <BackgroundAnimation/>
      <v-main class="fill-height">
        <v-container :fluid="true" class="fill-height">
          <v-row align-content="center">
            <v-spacer/>
            <v-col cols="8" md="4">
              <slot></slot>
            </v-col>
            <v-spacer/>
          </v-row>
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script setup>
import BackgroundAnimation from "@/components/BackgroundAnimation.vue";
import {computed} from "vue";
import SplashScreen from "@/components/SplashScreen.vue";
import {useStore} from "vuex";

const store = useStore();

const showSplash = computed(() => store.getters.showSplashScreen);
setTimeout(() => {
  store.commit("setShowSplashScreen", false);
}, 3000);
</script>

<style scoped>

</style>
