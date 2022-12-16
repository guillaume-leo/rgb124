export const babylonLight = (scene) => {
  const light = new BABYLON.HemisphericLight(
    'light',
    new BABYLON.Vector3(1, 1, 2),
    scene
  );

  light.intensity = 1.0;

  light.diffuse = new BABYLON.Color3(1, 1, 1);

  const light2 = new BABYLON.HemisphericLight(
    'light2',
    new BABYLON.Vector3(2, 1, 1),
    scene
  );

  light2.intensity = 1.0;

  light2.diffuse = new BABYLON.Color3(1, 1, 1);

  scene.beforeRender = () => {};

  return {
    light,
    light2,
  };
};
