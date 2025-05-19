// CombinedCanvas.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Drone from "./Drone";
import UFOModel from "./UFOModel";

const CombinedCanvas = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 10, 10], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

          {/* Position both models on opposite corners */}
          <Drone position={[-3, -2, 0]} scale={0.6} />
          <UFOModel position={[-3, -2, 0]} scale={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CombinedCanvas;
