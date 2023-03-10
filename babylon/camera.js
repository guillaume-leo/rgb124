import * as BABYLON from 'babylonjs';

export const babylonCamera = (canvas, scene) => {
  const camera = new BABYLON.ArcRotateCamera(
    'Camera',
    0.75,
    1.25,
    8,
    BABYLON.Vector3.Zero(),
    scene
  );

  camera.attachControl(canvas, true);
  camera.useAutoRotationBehavior = true;

  camera.lowerRadiusLimit = 8;
  camera.upperRadiusLimit = 8;

  camera.upperBetaLimit = null;
  camera.lowerBetaLimit = null;

  return camera;
};
