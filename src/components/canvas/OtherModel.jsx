import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const OtherModel = ({ position = [0, -3, 0], scale = 3 }) => {
  const modelRef = useRef();
  const mixerRef = useRef();
  const { scene, animations } = useGLTF("/me/kurta.glb");

  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh) {
        child.raycast = () => null;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    if (animations.length > 0 && modelRef.current) {
      mixerRef.current = new THREE.AnimationMixer(modelRef.current);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
    if (modelRef.current) modelRef.current.rotation.y += 0.025;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={position}
      scale={scale}
    />
  );
};

export default OtherModel; // ✅ This line is REQUIRED
