/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 steve.glb --transform --types --out-dir ../src/models 
Files: steve.glb [15.83KB] > C:\Users\carso\OneDrive\Documents\GitHub\conuhacks-2025\public\steve-transformed.glb [8.31KB] (48%)
Author: seaneoo (https://sketchfab.com/seaneoo)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/steve-27fab6181ffa4fae9c69eb097630eaf3
Title: Steve
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier'

type ActionName = 'animation.steve.idle' | 'animation.steve.walk'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Object_6: THREE.Mesh
    Object_9: THREE.Mesh
    Object_15: THREE.Mesh
    Object_18: THREE.Mesh
    Object_12: THREE.Mesh
  }
  materials: {
    material_0: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/models/steve-transformed.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)

  Object.values(materials).forEach((material) => {
    material.roughness = 0.6; 
    material.metalness = 0.5; 
  })

  React.useEffect(() => {
    if (actions['animation.steve.idle']) {
      actions['animation.steve.idle'].play() 
    }
  }, [actions])

  return (
    <RigidBody colliders="trimesh" lockRotations={true}>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="_12" rotation={[-Math.PI, -0.005, Math.PI]}>
            <group name="leg0_1" position={[-0.125, 0.75, 0]}>
              <group name="leg0_0">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.material_0} />
              </group>
            </group>
            <group name="leg1_3" position={[0.125, 0.75, 0]}>
              <group name="leg1_2">
                <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.material_0} />
              </group>
            </group>
            <group name="arm0_7" position={[-0.375, 1.375, 0]}>
              <group name="arm0_6" position={[0.125, 0, 0]}>
                <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.material_0} />
              </group>
            </group>
            <group name="arm1_9" position={[0.375, 1.375, 0]}>
              <group name="arm1_8" position={[-0.125, 0, 0]}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.material_0} />
              </group>
            </group>
          </group>
          <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.material_0} position={[0, 0.75, 0]} rotation={[-Math.PI, -0.005, Math.PI]} />
        </group>
      </group>
    </RigidBody>
)
}

useGLTF.preload('/steve-transformed.glb')
