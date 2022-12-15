<template>
  <canvas ref="canvas" id="babylonCanvas"></canvas>
</template>

<script setup>

import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import { useBabylonStore } from '~~/stores/babylon';


const babylonStore = useBabylonStore()
const canvas = ref(null);
const engineRef = ref(null)

onMounted(async () => {

  const engine = new BABYLON.Engine(document.getElementById('babylonCanvas'), true);
  engineRef.value = engine

  const createScene = async () => {

    var scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 12, new BABYLON.Vector3(0, 0, 0));

    camera.attachControl(canvas, true);
    camera.limi
    camera.inertia = 1;
    camera.lowerAlphaLimit = -1000 * Math.PI;
    camera.upperAlphaLimit = 1000 * Math.PI;
    camera.lowerBetaLimit = -1000 * Math.PI;
    camera.upperBetaLimit = 1000 * Math.PI;
    camera.upperRadiusLimit = 12
    camera.lowerRadiusLimit = 12
    camera.storeState()

    scene.environmentTexture = new BABYLON.CubeTexture(`${babylonStore.baseURL}/hdriFinal.env`, scene);


    const logo = await BABYLON.SceneLoader.AppendAsync(`${babylonStore.baseURL}/`, "AnimationLogov4.glb");

    scene.clearColor = new BABYLON.Color4(1, 1, 1, 1)

    const currentKey = ref(0)

    scene.animationGroups.map(a => a.stop())

    scene.animationGroups.map(a => a.start(false, 0.8, currentKey.value, currentKey.value + 62))
    currentKey.value = (currentKey.value + 62) % 602

    scene.onPointerUp = function (evt, pickResult) {
      scene.animationGroups.map(a => a.start(false, 2, currentKey.value, currentKey.value + 60.2))
      currentKey.value = (currentKey.value + 60.2) % 602
      camera.restoreState()
    };

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    light.intensity = 0;
    light.radius = 0;

    scene.materials[0].roughness = 0;
    scene.materials[0].metalic = 1;

    return scene;
  };

  babylonLoadingScreen()
  const scene = await createScene();

  engine.runRenderLoop(function () {
    scene.render();
    // engine.resize();
  });

  window.addEventListener("resize", function () {
    engine.resize();
  });

})

</script>

<style scoped>
#babylonCanvas {
  background: transparent;
  outline: none;
  opacity: 1;
  display: block;
  touch-action: auto;
  flex-grow: 1;
  max-width: 40%;
  cursor: grab;
}
</style>