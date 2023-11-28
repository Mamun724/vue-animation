<template>
  <v-app>
    <div class="splash-screen">
      <CssOnlyAnimation/>
      <div class="splash-content">
        <h1>Splash Screen</h1>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import CssOnlyAnimation from "@/components/CssOnlyAnimation/CssOnlyAnimation.vue";
</script>

<style scoped>
.splash-screen {
  position: fixed;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(-20deg, navajowhite, whitesmoke);
}

.splash-screen > .splash-content {
  position: fixed;
  top: 0;
  padding: 20px;
}
</style>
