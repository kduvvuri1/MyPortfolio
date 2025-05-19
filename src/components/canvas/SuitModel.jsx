import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";


const SuitModel = ({ scale = 3 }) => {
  const groupRef = useRef(); // Wrapper group
  const modelRef = useRef();
  const mixerRef = useRef();
  const { scene, animations } = useGLTF("/me/suitmodel.gltf");

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

  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
    if (groupRef.current) groupRef.current.rotation.y += 0.025;
  });

  return (
    <group ref={groupRef}>
      <primitive
        ref={modelRef}
        object={scene}
        position={[-0.9, -2.9, 0]} // keep position relative to group center
        rotation={[-0.0, 0, 0]}
        scale={scale}
      />
    </group>
  );
};

export default SuitModel;
