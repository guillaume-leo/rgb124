import * as BABYLON from 'babylonjs';

export const babylonPbr = (scene, metalTex, envTex) => {
  const pbr = new BABYLON.PBRMetallicRoughnessMaterial('pbr', scene);
  // pbr.diffuseColor = new BABYLON.Color3(0, 0, 0, 0.73);
  // pbr.specularColor = new BABYLON.Color3(0.21, 0.21, 0.21, 0.83);
  // pbr.metallic = 1.0; // set to 1 to only use it from the metallicRoughnessTexture
  // pbr.roughness = 0.0; // set to 1 to only use it from the metallicRoughnessTexture
  pbr.metallicRoughnessTexture = metalTex;
  scene.createDefaultSkybox(envTex, true, undefined, -0.9, true);

  pbr.albedoColor = new BABYLON.Color3(0.1, 0.1, 0.1);
  pbr.metallic = 1.0;
  pbr.roughness = 1.0;
  pbr.baseColor = new BABYLON.Color3(0, 0, 0);
  pbr.iridescence.isEnabled = true;
  pbr.environmentTexture = envTex;
  // pbr.emissiveTexture = metalTex;
  // pbr.lightmapTexture = metalTex;
  // pbr.normalTexture = metalTex;

  // let counter = 0;
  // let iFrame = 0;

  // scene.beforeRender = () => {
  //   pbr.baseColor = new BABYLON.Color3(0.21, 0.21, 0.21, 0.83); // emissiveTextures[`eTex_${counter}`];
  //   if (iFrame % 2 == 0) counter++;
  //   iFrame++;
  //   if (counter == 75) counter = 0;
  // };

  return pbr;
};
