<template>
  <Suspense>
    <TresCanvas>
      <TresPerspectiveCamera
        ref="cameraRef"
        :args="[60, 1, 5, 25]"
        :position="[0,0,cameraInitialZCoordinate]"
        :look-at="[0,0,0]"/>
      <TresMesh>
        <TresGroup ref="bigCubeRef">
          <template v-for="x of [-2, 0, 2]">
            <template v-for="y of [-2, 0, 2]">
              <TresMesh v-for="z of [-2, 0, 2]"
                        :position="[x,y,z]"
                        ref="cubesRef">
                <TresBoxGeometry :args="[1,1,1]"/>
                <TresMeshBasicMaterial :map="Math.random() > 0.5 ? texture[0] : texture[1]"/>
              </TresMesh>
            </template>
          </template>
        </TresGroup>
      </TresMesh>
    </TresCanvas>
  </Suspense>
</template>

<script setup>
import {TresCanvas, useRenderLoop, useTexture} from "@tresjs/core";
import {onBeforeMount, ref, shallowRef} from "vue";

const {onLoop} = useRenderLoop();
const texture = ref([]);

onBeforeMount(async () => {
  texture.value = await useTexture(
    [
      'https://threejs.org/manual/examples/resources/images/flower-1.jpg',
      'https://threejs.org/manual/examples/resources/images/flower-2.jpg'
    ]
  );
});

const cameraInitialZCoordinate = 15;
const cameraRef = shallowRef(null);
const bigCubeRef = shallowRef(null);
const cubesRef = shallowRef(null);

function rotateSystem(elapsed) {
  if (!cubesRef.value || !bigCubeRef.value) {
    return;
  }
  const rotAng = elapsed * 0.1;
  cubesRef.value.forEach(cube => cube.rotation.y = -rotAng);
  bigCubeRef.value.rotation.y = rotAng;
}

let cameraPos = 0;
let increment = true;

function moveCamera() {
  const moveFactor = 0.02;
  if (increment) {
    cameraPos += moveFactor;
    if (cameraPos >= 2.5) {
      increment = false;
    }
  } else {
    cameraPos -= moveFactor;
    if (cameraPos <= -2.5) {
      increment = true;
    }
  }

  cameraRef.value.position.x = cameraPos;
  cameraRef.value.position.y = cameraPos;
  cameraRef.value.position.z = cameraPos + cameraInitialZCoordinate;
  cameraRef.value.lookAt(0, 0, 0);
}

onLoop(({elapsed}) => {
  rotateSystem(elapsed);
  moveCamera();
});
</script>

<style scoped>
</style>
