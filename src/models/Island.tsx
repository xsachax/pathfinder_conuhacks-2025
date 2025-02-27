/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 island.glb --transform --types --out-dir ../src/models 
Files: island.glb [1.83MB] > /Users/sacha/Developer/Hackathons/ConUHacks2025/conuhacks-2025/public/island-transformed.glb [67.14KB] (96%)
Author: JavierG (https://sketchfab.com/JavierG)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-floating-island-c5ab040730c24832895acfa0000af9cc
Title: Low poly floating island
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Casa_Tejado_0: THREE.Mesh;
    Plane003_Hojas_Callendo_0: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/island-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Casa_Tejado_0.geometry}
        material={materials.PaletteMaterial001}
        position={[2, 2, 0]}
        rotation={[-Math.PI / 2, -0.095, -1.579]}
        scale={[1.0326 * 2, 1.27692 * 2, 0.63944 * 2]}
      />
      <mesh geometry={nodes.Plane003_Hojas_Callendo_0.geometry} material={materials.PaletteMaterial002} position={[-55, 1, -30]} rotation={[0.885, -0.614, -2.165]} scale={5} />
    </group>
  );
}

useGLTF.preload("/models/island-transformed.glb");
