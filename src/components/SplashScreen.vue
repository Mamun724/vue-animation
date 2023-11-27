<template>
  <v-app>
    <div class="splash-screen">
      <BackgroundAnimation/>
    </div>
  </v-app>
</template>

<script setup>
import BackgroundAnimation from "@/components/BackgroundAnimation.vue";
</script>

<style scoped>
.splash-screen {
  position: fixed;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
