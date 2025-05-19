// components/MainCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import { Stars } from "../canvas";
import CanvasLoader from "../Loader";
import HeroModel from "./HeroModel";
import SuitModel from "./SuitModel";
import OtherModel from "./OtherModel"; // Replace this with your actual 3rd model component
import pic1 from "../../assets/memodels/pic1.png";
import pic2 from "../../assets/memodels/pic2.png";
import pic3 from "../../assets/memodels/pic3.png";

const MainCanvas = () => {
  const [activeModel, setActiveModel] = useState("hero");
  const headshots = {
  hero: pic1,
  suit: pic2,
  other: pic3,
};

  return (
    <div className="relative w-full h-full">
      {/* 🔘 Circle Toggle UI */}
    <div className="absolute right-14 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <path
          d="M150,0 Q80,80 0,120"  // control how it curves here
          stroke="white"
          strokeWidth="2"
          strokeDasharray="4,6"  // dotted effect
          fill="none"
          className="absolute -top-2 -left-2"
        />

      <p className="text-white text-sm font-semibold mb-2 z-10 whitespace-nowrap">Choose My Look</p>

      {/* Circle Buttons */}
      <div className="flex flex-col gap-4 z-10">
        {["hero", "suit", "other"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveModel(type)}
            className={`w-12 h-12 rounded-full border-2 overflow-hidden transition duration-300 ${
              activeModel === type ? "ring-2 ring-purple" : "ring-0 border-[#1381a4]"
            }`}
            aria-label={`Show ${type} model`}
          >
            <img
              src={headshots[type]}
              alt={`${type} headshot`}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>



      {/* 🎥 Canvas */}
      <Canvas
        shadows
        frameloop="always"
        camera={{ position: [0, 2, 10], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={1.5} />

          {/* Background Stars */}
          <Stars />

          {/* Conditionally Rendered Models */}
          {activeModel === "hero" && <HeroModel />}
          {activeModel === "suit" && <SuitModel />}
          {activeModel === "other" && <OtherModel />}

          <OrbitControls enableZoom={false} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default MainCanvas;
