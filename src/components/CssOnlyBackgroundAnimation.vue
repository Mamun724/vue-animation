<template>
  <div id="background">
    <CssOnlyAnimation id="animation"/>
  </div>
</template>

<script setup>
import CssOnlyAnimation from "@/components/CssOnlyAnimation/CssOnlyAnimation.vue";
</script>

<style scoped>
#background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-20deg, rgb(var(--v-theme-gradient-start)), rgb(var(--v-theme-gradient-end)));
  padding-left: 25%;
}

#animation {
  z-index: -1;
}
</style>
