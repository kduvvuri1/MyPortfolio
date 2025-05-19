// components/canvas/Drone.jsx
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Drone = ({ scale = 4.5, position = [0, -1, 0] }) => {
  const modelRef = useRef();
  const mixerRef = useRef();
  const { scene, animations } = useGLTF("/drone/mech_drone.glb");

  useEffect(() => {
    if (animations && animations.length && modelRef.current) {
      mixerRef.current = new THREE.AnimationMixer(modelRef.current);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations]);

  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
    if (modelRef.current) modelRef.current.rotation.y += 0.017;
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={scale}
      position={position}
    />
  );
};

export default Drone;
