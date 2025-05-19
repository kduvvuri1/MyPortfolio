import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Shark = () => {
  const sharkRef = useRef();
  const { scene } = useGLTF("/robot_shark/scene.gltf"); // ✅ Must exist in /public/shark/scene.gltf

  useFrame(({ clock }) => {
    if (sharkRef.current) {
      // Hovering effect
      sharkRef.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.1 + 0.3;
      
      // Slow rotation around Y-axis
      sharkRef.current.rotation.y += 0.005; // Adjust speed here
    }
  });

  return (
    <primitive
      ref={sharkRef}
      object={scene}
      scale={0.15}
      position={[0, 0.3, 0]}
    />
  );
};

const SharkModel = () => {
  return (
    <div className="w-[500px] h-[500px]">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [2, 2, 4], fov: 35 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Shark />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SharkModel;