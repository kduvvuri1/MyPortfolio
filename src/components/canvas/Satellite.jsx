import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Satellite = ({ position = [0, 0.3, 0], scale = 0.1 }) => { // <-- Adjusted position + scale
  const ufoRef = useRef();
  const { scene } = useGLTF("/satellite/scene.gltf");

  useFrame(({ clock }) => {
    if (ufoRef.current) {
      // Floating (up and down)
      ufoRef.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.1 + 0.3;
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
    />
  );
};

export default Satellite;
