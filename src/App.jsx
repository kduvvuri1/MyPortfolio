import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  CustomCursor,
} from "./components";
import scrollUpIcon from "./assets/scrollUpIcon.png";
import ParticlesBackground from "./components/ParticlesBackground";
import logo from "./assets/logo.png";

const GlowingDivider = () => (
  <div className="w-3/4 h-[10px] mx-auto my-10 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse shadow-lg rounded-full" />
);

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div className="relative w-full h-full overflow-x-hidden cursor-none bg-black">

        {/* 🌌 Particles Background Layer */}
        <ParticlesBackground />
        {/* 🖱 Custom Cursor */}
        <CustomCursor />

        {/* 🔳 Content Layer */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <GlowingDivider />
          <About />
          <GlowingDivider />
          <Experience />
          <GlowingDivider />
          <Tech />
          <GlowingDivider />
          <Works />
          <GlowingDivider />
          <Contact />
          {/* ✅ Footer */}
          <footer className="w-full bg-black border-t border-white/10 py-6 px-8 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
            {/* Left: Logo + Name */}
            <div className="flex items-center gap-3 mb-4 sm:mb-0">
              <img src={logo} alt="logo" className="w-6 h-6 object-contain" />
              <span className="text-white font-semibold">Kartikeya Duvvuri</span>
            </div>

            {/* Right: Copyright */}
            <div className="text-center sm:text-center">
              © {new Date().getFullYear()} Kartikeya Duvvuri. All rights reserved.
            </div>
          </footer>
        </div>

        {/* ⬆ Scroll to Top Button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#1381a4] flex items-center justify-center shadow-lg hover:bg-purple-700 transition z-50"
          >
            <img
              src={scrollUpIcon}
              alt="Scroll to top"
              className="w-6 h-6 object-contain"
            />
          </button>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
