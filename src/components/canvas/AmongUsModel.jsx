import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const AmongUsModel = ({ position = [0, -1.5, 0], scale = 2 }) => { // <-- Adjusted position + scale
  const ufoRef = useRef();
 const { scene } = useGLTF("/amongus/scene.gltf");

  useFrame(({ clock }) => {
    if (ufoRef.current) {
      // Slow rotation
      ufoRef.current.rotation.y += 0.009; // Adjust speed (slow spin)
    }
  });

  return (
    <primitive
      ref={ufoRef}
      object={scene}
      scale={scale}
      position={position}
      rotation={[0, 0, 0]}
    />
  );
};

export default AmongUsModel;