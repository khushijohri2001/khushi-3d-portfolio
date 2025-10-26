"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Particles from "./models/Particles";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={`${className && className} w-screen h-screen relative z-40`}
      camera={{position: [0,0,15], fov: 50}}
    >
      <Suspense fallback={null}>
        {/* 3D model components go here */}
        {children}
      </Suspense>
      <Particles />
      <Environment preset="sunset" />
      <OrbitControls enablePan={false} enableZoom={true} target={[0, 0, 0]} />
    </Canvas>
  );
};

export default RenderModel;
