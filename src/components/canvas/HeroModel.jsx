import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const HeroModel = ({ position = [0, -3, 0], scale = 3 }) => {
  const modelRef = useRef();
  const mixerRef = useRef();

  // Clone the original scene
  const { scene: originalScene, animations } = useGLTF("/me/meposededit.glb");
  const [clonedScene] = useState(() => clone(originalScene));

  useEffect(() => {
    if (!clonedScene) return;

    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.raycast = () => null;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    mixerRef.current = new THREE.AnimationMixer(clonedScene);

    if (animations.length > 0) {
      const action = mixerRef.current.clipAction(animations[0]);
      action.reset().play();
    }

    return () => mixerRef.current?.stopAllAction();
  }, [clonedScene, animations]);

  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
    if (modelRef.current) modelRef.current.rotation.y += 0.025;
  });

  return (
    <primitive
      ref={modelRef}
      object={clonedScene}
      position={position}
      scale={scale}
    />
  );
};

export default HeroModel;

// Optional: Preload
useGLTF.preload("/me/meposededit.glb");
