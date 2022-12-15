import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import { useBabylonStore } from '~~/stores/babylon';

const scaleBetween = (unscaledNum, minAllowed, maxAllowed, min, max) => {
  return (
    ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) + minAllowed
  );
};

/**------------------------------------------------------------------------
 *                           INIT FUNCTION
 *------------------------------------------------------------------------**/

export const babylonInit = (canvas) => {
  const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  const scene = new BABYLON.Scene(engine);
  return {
    scene,
    engine,
  };
};

/**------------------------------------------------------------------------
 *                           LOAD ASSETS FUNCTION
 *------------------------------------------------------------------------**/

export const babylonLoadAssets = (scene, engine, pbr) => {
  const babylonStore = useBabylonStore();

  const assetsManager = new BABYLON.AssetsManager(scene);

  /**----------------------
   *    on progress callback
   *------------------------**/

  assetsManager.onProgress = (remainingCount, totalCount, lastFinishedTask) => {
    const scaledProgress = scaleBetween(remainingCount, 0, 100, totalCount, 0);

    babylonStore.setProgress(scaledProgress);
  };

  /**----------------------
   *    adding emmissive textures
   *------------------------**/

  let texEmissiveTasks = [];
  const emissiveTextures = {};
  for (let i = 0; i < 76; i++) {
    const emissiveTexUrl = `${
      babylonStore.baseURL
    }textures/emissive/Emission_v2_000${i.toString().padStart(2, '0')}.jpg`;

    texEmissiveTasks[i] = assetsManager.addTextureTask(
      'eTex_' + i,
      emissiveTexUrl
    );
  }

  texEmissiveTasks.forEach((texEmissiveTask) => {
    texEmissiveTask.onSuccess = (task) => {
      babylonStore.addLog(task.name);
      emissiveTextures[task.name] = task.texture;
    };
  });

  /**----------------------
   *    adding roughness tex
   *------------------------**/

  let metalTex = {};
  const metalTexUrl = `${babylonStore.baseURL}textures/ROUGH_00000.jpg`;

  const metTexTask = assetsManager.addTextureTask('mTex', metalTexUrl);

  metTexTask.onSuccess = (task) => {
    babylonStore.addLog(task.name);
    metalTex = task.texture;
  };

  /**----------------------
   *    adding 3D obj
   *------------------------**/

  let shape = {};
  const obj3dUrl = babylonStore.baseURL + 'textures/modelinglogo2.obj';

  const meshTask = assetsManager.addMeshTask(
    'modelinglogo2.obj',
    ['fleche_up', 'cube_center', 'fleche_down'],
    obj3dUrl
  );

  meshTask.onSuccess = (task) => {
    shape = task.loadedMeshes[0];
  };

  /**----------------------
   *    adding environment tex (sync)
   *------------------------**/

  const envTexUrl = `${babylonStore.baseURL}textures/environment.env`;

  const envTex = BABYLON.CubeTexture.CreateFromPrefilteredData(
    envTexUrl,
    scene
  );

  /**----------------------
   *    start loading
   *------------------------**/

  assetsManager.load();

  /**----------------------
   *    on finish callback
   *------------------------**/

  assetsManager.onFinish = () => {
    const material = babylonPbr(scene, metalTex, envTex, emissiveTextures);
    shape.material = material;
    babylonStore.setIsLoading(false);
    engine.runRenderLoop(() => {
      scene.clearColor = new BABYLON.Color3(0, 0, 0);
      scene.render();
    });
  };
};
