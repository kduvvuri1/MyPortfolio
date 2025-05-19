// Tech.jsx
import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  const [activeTech, setActiveTech] = useState(null);

  return (
    <div className="text-center px-4">
      <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Tech Stack.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 mb-10 mx-auto text-left text-secondary text-[17px] max-w-4xl leading-[30px]'
        >
          Here's a curated list of technologies I've worked with across various projects, spanning web development, data analytics, cloud platforms, and creative tools. Click on any icon to learn more about how I’ve used it and what makes it a part of my toolbelt. 
        </motion.p>
      </div>


      {/* Skill grid layout */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
        {technologies.map((tech, index) => {
          const delayClass = `float-delay-${(index % 5) + 1}`; // Cycle through 1-5
          return (
            <button
              key={index}
              onClick={() => setActiveTech(tech)}
              className={`relative w-20 h-20 rounded-lg bg-gradient-to-br from-gray-800 to-blue-800 shadow-xl hover:scale-110 transform transition duration-300 animate-float ${delayClass}`}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 object-contain m-auto"
              />
            </button>
          );
        })}
      </div>

      {/* Skill description display */}
      {activeTech && (
        <div className="mt-10 bg-gray-800 p-6 rounded-xl shadow-md text-white max-w-md mx-auto">
          <h3 className="text-lg font-semibold">{activeTech.name}</h3>
          <p className="text-sm mt-2">
            {/* You can manually expand this by adding `description` in your tech object */}
            {activeTech.description || "No description provided yet."}
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
