<template>
  <div class="scene">
    <Plane/>
    <Plane/>
    <Plane/>
  </div>
</template>

<script setup>

import Plane from "@/components/CssOnlyAnimation/3dPlane.vue";
</script>

<style>
.scene {
  --perspective-mid: 2500px;
  --perspective-deviation: 1500px;

  perspective: var(--perspective-mid);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  overflow: hidden;
  animation: perspectiveAnimate 60s linear infinite;
}

@keyframes perspectiveAnimate {
  0% {
    perspective: var(--perspective-mid);
  }
  25% {
    perspective: calc(var(--perspective-mid) + var(--perspective-deviation));
  }
  50% {
    perspective: var(--perspective-mid);
  }
  75% {
    perspective: calc(var(--perspective-mid) - var(--perspective-deviation));
  }
  100% {
    perspective: var(--perspective-mid);
  }
}

</style>
