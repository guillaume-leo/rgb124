export const babylonLight = (scene) => {
  let posX = 1;
  const light = new BABYLON.HemisphericLight(
    'light',
    new BABYLON.Vector3(1, 1, 2),
    scene
  );

  light.intensity = 1.0;

  const colors = [
    new BABYLON.Color3(1, 0, 0),
    new BABYLON.Color3(0, 1, 0),
    new BABYLON.Color3(0, 0, 1),
  ];

  scene.beforeRender = () => {
    const rand = Math.random() * 3;
    const rand2 = Math.random();
    if (rand2 < 0.2) light.diffuse = colors[parseInt(rand)];
  };

  return light;
};
