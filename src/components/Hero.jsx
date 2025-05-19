import { motion } from "framer-motion";
import { styles } from "../styles";
import { ReactTyped } from "react-typed";
import { SectionWrapper } from "../hoc";
import MainCanvas from "./canvas/MainCanvas";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden z-10 -mt-20">
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-full px-8">
        
        {/* Left Side: Text */}
        <div className="flex flex-col items-start mt-20 md:mt-0 z-10 w-full md:w-1/2">
          <p className="text-purple-400 text-lg mb-2">Hello, I'm</p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <ReactTyped
              strings={["Kartikeya Duvvuri"]}
              typeSpeed={80}
              backSpeed={50}
              showCursor={true}
              loop={false}
              className="text-[#1381a4] font-bold"
            />
          </h1>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            I'm a developer who loves building creative tech — <br />
            from Sales Analysis to AI-powered dance apps. <br />
            I blend machine learning, 3D visuals, and clean design to bring bold ideas to life.
          </p>

          {/* 🔗 Resume Button */}
          <div className="mt-6 flex items-center gap-4 flex-wrap">
          <a
            href="/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1381a4] text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition duration-300"
          >
            View Resume
          </a>

          <a
            href="https://github.com/kduvvuri1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition text-2xl"
            title="Kartikeya's GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/kduvvuri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition text-2xl"
            title="Kartikeya's LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/kartikeyaduvvuri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition text-2xl"
            title="Kartikeya's Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        

        </div>
        {/* Right Side: Full Flexible MainCanvas */}
        <div className="relative w-full md:w-1/2 h-[1000px] md:h-[1000px] flex justify-center items-center">
          {/* Notice: No border, no clipping, flex center */}
          <MainCanvas />
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "me");