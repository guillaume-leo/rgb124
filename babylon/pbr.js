import * as BABYLON from 'babylonjs';

export const babylonPbr = (scene, metalTex, envTex, emissiveTextures) => {
  const pbr = new BABYLON.PBRMetallicRoughnessMaterial('pbr', scene);
  pbr.diffuseColor = new BABYLON.Color3(0, 0, 0, 0.73);
  pbr.specularColor = new BABYLON.Color3(0.21, 0.21, 0.21, 0.83);
  pbr.metallic = 0.8; // set to 1 to only use it from the metallicRoughnessTexture
  pbr.roughness = 0.25; // set to 1 to only use it from the metallicRoughnessTexture
  pbr.metallicRoughnessTexture = metalTex;

  pbr.environmentTexture = envTex;

  let counter = 0;
  let iFrame = 0;

  scene.beforeRender = () => {
    pbr.baseTexture = emissiveTextures[`eTex_${counter}`];
    if (iFrame % 2 == 0) counter++;
    iFrame++;
    if (counter == 75) counter = 0;
  };

  return pbr;
};
