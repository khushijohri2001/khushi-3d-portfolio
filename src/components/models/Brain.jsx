"use client";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Brain(props) {
  const { nodes, materials } = useGLTF(
    "/model/brain_right_left-transformed.glb"
  );

  const modelRef = React.useRef();

  useFrame((state, delta, xrFrame) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group
      {...props}
      ref={modelRef}
      scale={[0.5, 0.5, 0.5]}
      rotation={[0.7, 0, 0]}
      dispose={null}
    >
       <mesh
        geometry={nodes.BRAIN_MAT_BrainLeft_0.geometry}
        material={materials.MAT_BrainLeft}
      >
        <primitive
          object={materials.MAT_BrainLeft}
          attach="material"
          color="blue"
        />
        
      </mesh>
      <mesh
        geometry={nodes.BRAIN_MAT_BrainRight_0.geometry}
        position={[0.2, 0, 0]}
        material={materials.MAT_BrainRight}
      >
         <primitive
          object={materials.MAT_BrainRight}
          attach="material"
          color="hotpink"
        />
        </mesh>
     
    </group>
  );
}

useGLTF.preload("/model/brain_right_left-transformed.glb");
