import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { ReactTyped } from "react-typed";

import herobg from "../assets/herobgnew.mp4";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden z-10">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={herobg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content Over Video */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#1381a4]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#1381a4] to-[#1381a4]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-gray-200`}>
            Hey, I'm{" "}
            <ReactTyped
              strings={["Kartikeya"]}
              typeSpeed={80}
              backSpeed={50}
              showCursor={true}
              loop={false}
              className="text-[#1381a4] font-bold"
            />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a developer who loves building creative tech — from AI-powered dance apps to XR games with power-ups.
            <br className='sm:block hidden' />
            I blend machine learning, 3D visuals, and clean design to bring bold ideas to life.
          </p>
        </div>
      </div>
      
      {/* //3D Canvas// 
      <div className="absolute top-0 left-0 w-full h-full z-5">
        <ComputersCanvas />
      </div>
      */}

      
    </section>
  );
};

export default Hero;
