/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 world.glb --transform --types 
Files: world.glb [35.16MB] > C:\Users\carso\Downloads\low-poly-nature-scene\source\world-transformed.glb [1.51MB] (96%)
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    geo1_Wood_0: THREE.Mesh
    Terrain_Water1_0: THREE.Mesh
    Trees_Green2_0: THREE.Mesh
    Trees_Trunk_0: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/world-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.geo1_Wood_0.geometry} material={materials.PaletteMaterial001} scale={0.15} />
      <mesh geometry={nodes.Terrain_Water1_0.geometry} material={materials.PaletteMaterial002} scale={0.15} />
      <mesh geometry={nodes.Trees_Green2_0.geometry} material={materials.PaletteMaterial003} scale={0.15} />
      <mesh geometry={nodes.Trees_Trunk_0.geometry} material={nodes.Trees_Trunk_0.material} scale={0.15} />
    </group>
  )
}

useGLTF.preload('/world-transformed.glb')
