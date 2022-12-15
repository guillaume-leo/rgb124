export const babylonLight = (scene) => {
  const light = new BABYLON.HemisphericLight(
    'light',
    new BABYLON.Vector3(1, 1, 0),
    scene
  );

  light.intensity = 0.95;

  return light;
};
