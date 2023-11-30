<template>
  <div class="plane">
    <template v-for="row in 3">
      <template v-for="col in 3" :key="row * 3 + col">
        <ImageCube :class="`box-${row}-${col}`"/>
      </template>
    </template>
  </div>
</template>

<script setup>
import ImageCube from "@/components/CssOnlyAnimation/ImageCube.vue";
</script>

<style>
.plane {
  --rotate-x: -22deg;
  --rotate-y: -24deg;
  --translate-x: 20%;
  --translate-y: 5%;

  max-height: 25%;
  height: 25%;
  width: 25%;
  transform-style: preserve-3d;
  transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y)) rotateX(90deg) translate3d(var(--translate-x), var(--translate-y), 0);
  animation: rotateSystem 15s infinite linear;
}

@keyframes rotateSystem {
  0% {
    transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y)) rotateX(90deg) translate3d(var(--translate-x), var(--translate-y), 0) rotateZ(0);
  }
  100% {
    transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y)) rotateX(90deg) translate3d(var(--translate-x), var(--translate-y), 0) rotateZ(-360deg);
  }
}

.box-1-1, .box-1-2, .box-1-3 {
  top: 0;
}

.box-2-1, .box-2-2, .box-2-3 {
  top: 80%;
}

.box-3-1, .box-3-2, .box-3-3 {
  top: 160%;
}

.box-1-1, .box-2-1, .box-3-1 {
  left: 0;
}

.box-1-2, .box-2-2, .box-3-2 {
  left: 45%;
}

.box-1-3, .box-2-3, .box-3-3 {
  left: 90%;
}
</style>
