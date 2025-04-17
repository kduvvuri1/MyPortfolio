import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const UFO = () => {
  const ufoRef = useRef();
  const { scene } = useGLTF("/ufo/scene.gltf"); // ✅ Must exist in /public/ufo/scene.gltf

  useFrame(({ clock }) => {
    if (ufoRef.current) {
      // Hovering effect
      ufoRef.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.1 + 0.3;
      
      // Slow rotation around Y-axis
      ufoRef.current.rotation.y += 0.005; // Adjust speed here
    }
  });

  return (
    <primitive
      ref={ufoRef}
      object={scene}
      scale={0.8}
      position={[0, 0.3, 0]}
    />
  );
};

const UFOModel = () => {
  return (
    <div className="w-[500px] h-[500px]"> {/* ⬅️ Increase size here */}
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [2, 2, 4], fov: 35 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <UFO />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default UFOModel;
