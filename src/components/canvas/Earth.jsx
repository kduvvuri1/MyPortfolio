// components/models/EarthModel.jsx
import React from "react";
import { useGLTF } from "@react-three/drei";

const EarthModel = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 2.5 }) => {
  const { scene } = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

export default EarthModel;
