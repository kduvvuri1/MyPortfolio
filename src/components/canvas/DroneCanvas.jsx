// components/canvas/DroneCanvas.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Drone from "./Drone";

const DroneCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 35 }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Drone />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default DroneCanvas;
