import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <span className="text-white text-xl font-bold">{progress.toFixed(0)}%</span>
    </Html>
  );
};

export default CanvasLoader;
