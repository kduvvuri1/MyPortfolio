// TechCanvas.jsx
import React, { Suspense } from "react";
import BallCanvas from "./BallCanvas"; // make sure this uses `icon` prop
import { technologies } from "../../constants";
import CanvasLoader from "../Loader";

const TechCanvas = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28 flex flex-col items-center" key={index}>
            <Suspense fallback={<CanvasLoader />}>
              <BallCanvas icon={tech.icon} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCanvas;
