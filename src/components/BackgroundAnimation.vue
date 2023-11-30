<template>
  <div id="background" ref="bg">
    <canvas ref="canvas" id="c"></canvas>
  </div>
</template>

<script setup>
import {runAnimation} from "@/components/animation";
import {onMounted, ref} from "vue";

const canvas = ref(null);
onMounted(() => {
  runAnimation(canvas.value);
});
</script>

<style scoped>
#background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

#c {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
