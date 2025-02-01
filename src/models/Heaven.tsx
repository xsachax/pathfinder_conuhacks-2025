/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 heaven.glb --transform --types --out-dir ../src/models 
Files: heaven.glb [35.16MB] > /Users/sacha/Developer/Hackathons/ConUHacks2025/conuhacks-2025/public/heaven-transformed.glb [1.51MB] (96%)
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    geo1_Wood_0: THREE.Mesh;
    Terrain_Water1_0: THREE.Mesh;
    Trees_Green2_0: THREE.Mesh;
    Trees_Trunk_0: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
    PaletteMaterial003: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/heaven-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.geo1_Wood_0.geometry} material={materials.PaletteMaterial001} scale={0.5} position={[-10, -1, -2.635]} />
      <mesh geometry={nodes.Terrain_Water1_0.geometry} material={materials.PaletteMaterial002} scale={0.5} position={[-10, -1, -2.635]} />
      <mesh geometry={nodes.Trees_Green2_0.geometry} material={materials.PaletteMaterial003} scale={0.5} position={[-10, -1, -2.635]} />
      <mesh geometry={nodes.Trees_Trunk_0.geometry} material={nodes.Trees_Trunk_0.material} scale={0.5} position={[-10, -1, -2.635]} />
    </group>
  );
}

useGLTF.preload("/models/heaven-transformed.glb");
