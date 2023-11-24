import * as THREE from 'three';

export function runAnimation(canvas) {
  const renderer = new THREE.WebGLRenderer({antialias: true, canvas});

  const fov = 1;
  const aspect = getAspectRatio();
  const near = 90;
  const far = 305;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 200;
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 0.01;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const textureLoader = new THREE.TextureLoader();
  const texture1 = textureLoader.load('https://threejs.org/manual/examples/resources/images/flower-1.jpg');
  const texture2 = textureLoader.load('https://threejs.org/manual/examples/resources/images/flower-2.jpg');

  function makeInstance(geometry, map, x, z) {
    const material = new THREE.MeshBasicMaterial({map});

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;
    cube.position.z = z;

    return cube;
  }

  const cubes = [
    makeInstance(geometry, texture1, -3, -50),
    makeInstance(geometry, texture2, 0, 50),
    makeInstance(geometry, texture1, 3, 100)
  ];

  const axesHelper = new THREE.AxesHelper();
  scene.add(axesHelper);

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

  function getAspectRatio() {
    const canvas = renderer.domElement;
    return canvas.clientWidth / canvas.clientHeight;
  }

  function render(time) {
    time *= 0.001;  // convert time to seconds
    if (resizeRendererToDisplaySize(renderer)) {
      camera.aspect = getAspectRatio();
      camera.updateProjectionMatrix();
    }
    cubes.forEach((cube, ndx) => {
      const speed = 0.5 + ndx * .1;
      const rot = time * speed;
      cube.rotation.z = rot;
//            cube.rotation.x = rot;
      cube.position.x = (time / 2 % 5) - (ndx - 1) * 3;
      cube.rotation.y = rot;
    });

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
