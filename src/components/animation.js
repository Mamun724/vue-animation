import * as THREE from 'three';

function getAspectRatio(renderer) {
  const canvas = renderer.domElement;
  return canvas.clientWidth / canvas.clientHeight;
}

export function runAnimation(canvas) {
  const renderer = new THREE.WebGLRenderer({antialias: true, canvas});

  const cameraInitialZCoordinate = 15;
  const fov = 60;
  const aspect = getAspectRatio(renderer);
  const near = 5;
  const far = 25;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = cameraInitialZCoordinate;
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(1, 1, 1);

  const textureLoader = new THREE.TextureLoader();
  const texture1 = textureLoader.load('https://threejs.org/manual/examples/resources/images/flower-1.jpg');
  const texture2 = textureLoader.load('https://threejs.org/manual/examples/resources/images/flower-2.jpg');

  const bigCube = new THREE.Object3D();

  function makeSmallCube(geometry, map, x, y, z) {
    const material = new THREE.MeshBasicMaterial({map});

    const cube = new THREE.Mesh(geometry, material);
    bigCube.add(cube);

    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;

    return cube;
  }

  scene.add(bigCube);

  const cubes = [];
  const p = 3;
  for (let x = -p; x <= p; x += p) {
    for (let y = -p; y <= p; y += p) {
      for (let z = -p; z <= p; z += p) {
        cubes.push(makeSmallCube(geometry, (x + y + z) % 2 === 0 ? texture1 : texture2, x, y, z));
      }
    }
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = canvas.clientWidth * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  let cameraPos = 0;
  let inc = true;

  function moveCamera() {
    const moveFactor = 0.002;
    if (inc) {
      cameraPos += moveFactor;
      if (cameraPos >= 2.5) {
        inc = false;
      }
    } else {
      cameraPos -= moveFactor;
      if (cameraPos <= -2.5) {
        inc = true;
      }
    }

    camera.position.x = cameraPos;
    camera.position.y = cameraPos;
    camera.position.z = cameraPos + cameraInitialZCoordinate;
    camera.lookAt(0, 0, 0);
  }

  function rotateSystem(time) {
    const rotAng = time * 0.1;
    cubes.forEach(cube => cube.rotation.y = -rotAng);
    bigCube.rotation.y = rotAng;
  }

  function render(time) {
    time *= 0.001;  // convert time to seconds
    if (resizeRendererToDisplaySize(renderer)) {
      camera.aspect = getAspectRatio(renderer);
      camera.updateProjectionMatrix();
    }

    rotateSystem(time);

    moveCamera();

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

runAnimation();
