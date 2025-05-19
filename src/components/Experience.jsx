import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import UFOCanvas from "./canvas/UFOCanvas";
import DroneCanvas from "./canvas/DroneCanvas";
import SatelliteCanvas from "./canvas/SatelliteCanvas";
import AmongUsCanvas from "./canvas/AmongUsCanvas";
import { fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
    <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
      {experience.company_name}
    </p>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`${experience.point}-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="relative">
      <div className="absolute top-[400px] right-[-160px] w-[900px] h-[450px] hidden xl:block z-0">
        <SatelliteCanvas />
      </div>
      <div className="absolute top-[1500px] right-[50px] w-[500px] h-[500px] hidden xl:block z-0">
        <UFOCanvas />
      </div>
      <div className="absolute top-[800px] left-[-20px] w-[600px] h-[700px] xl:block z-0">
        <DroneCanvas />
      </div>
       <div className="absolute top-[1850px] left-[-20px] w-[600px] h-[800px] xl:block z-0">
        <AmongUsCanvas />
      </div>

      {/* Timeline Heading */}
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Work Experience.
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 mb-10 mx-auto text-left text-secondary text-[17px] max-w-4xl leading-[30px]'
        >
          I have a diverse range of experiences. Each experience has deepened my understanding of technology and its potential 
          to create innovative solutions. I'm excited to continue this journey and explore new opportunities that challenge and inspire me.
        </motion.p>
      </div>
      

      {/* Timeline Content */}
      <div className="mt-20 flex flex-col z-10">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

    </div>
  );
};

export default SectionWrapper(Experience, "work");
