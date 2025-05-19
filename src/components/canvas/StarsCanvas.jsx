import React from "react";
import { Canvas } from "@react-three/fiber";
import Stars from "./Stars";

const StarsCanvas = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
