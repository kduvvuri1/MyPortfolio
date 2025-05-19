import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import AmongUsModel from "./AmongUsModel";

const AmongUsCanvas = () => {
    return (
        <Canvas camera={{ position: [10, 10, 5], fov: 25 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <AmongUsModel />
        <OrbitControls enableZoom={false} />
        </Canvas>
    );
    };

export default AmongUsCanvas;
