<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>

const canvas = ref(null);

onMounted(() => {

  babylonLoadingScreen()

  const { scene, engine } = babylonInit(canvas.value);

  const camera = babylonCamera(canvas.value, scene)

  const light = babylonLight(scene)

  babylonLoadAssets(scene, engine);

  window.addEventListener('resize', () => {
    engine.resize();
  });


})

</script>