<template>
  <div class="cuboid">
    <div class="cuboid__side">
      <img class="side-image" :src="`/images/flower-${Math.ceil(Math.random()*6)}.jpg`" :alt="`flower`">
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.cuboid {
  --width: 8vmin;
  height: var(--width);
  width: var(--width);
  transform-style: preserve-3d;
  position: absolute;
  font-size: 1rem;
  transform: translate3d(0, 0, calc(var(--width)/2));
  animation: cubeReverseAnimation 15s linear infinite;
}

.cuboid > div {
  height: 100%;
  width: 100%;
  transform-origin: 50% 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.cuboid > div:nth-of-type(1) {
  transform: translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, calc((var(--width) / 2)));
}
/*
.cuboid > div:nth-of-type(2) {
  transform: translate(-50%, -50%) rotateX(-90deg) rotateY(180deg) translate3d(0, 0, calc((var(--width) / 2)));
}

.cuboid > div:nth-of-type(3) {
  transform: translate(-50%, -50%) rotateX(-90deg) rotateY(90deg) translate3d(0, 0, calc((var(--width) / 2)));
}

.cuboid > div:nth-of-type(4) {
  transform: translate(-50%, -50%) rotateX(-90deg) rotateY(-90deg) translate3d(0, 0, calc((var(--width) / 2)));
}

.cuboid > div:nth-of-type(5) {
  transform: translate(-50%, -50%) translate3d(0, 0, calc((var(--width) / 2)));
}

.cuboid > div:nth-of-type(6) {
  transform: translate(-50%, -50%) translate3d(0, 0, calc((var(--width) / 2) * -1)) rotateX(180deg);
}
*/
.cuboid__side > .side-image {
  width: 100%;
  height: 100%;
}

@keyframes cubeReverseAnimation {
  0% {
    transform: rotateZ(0deg) translate3d(0, 0, calc(var(--width)/2));
  }
  100% {
    transform: rotateZ(360deg) translate3d(0, 0, calc(var(--width)/2));
  }
}
</style>
