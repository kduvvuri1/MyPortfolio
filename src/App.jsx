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
  StarsCanvas,
  CustomCursor
} from "./components";
import bg from "./assets/bg.mp4"; // 🎥 Import your video file
import { styles } from "./styles"; // 📦 Import your styles

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
      <CustomCursor />
      <div className="relative w-full h-full overflow-x-hidden cursor-none">
        {/* 🔥 Fullscreen Background Video */} 
        <video
          className="fixed top-0 left-0 w-full h-full object-cover -z-20"
          src={bg}
          autoPlay
          loop
          muted
          playsInline
        />
          
        {/* 🌑 Overlay to darken the video */}
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-[-15]" />

        {/* 🌌 Stars or Canvas Effects */}
        <StarsCanvas />

        {/* 🔳 Content Layer */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
        </div>

        {/* ⬆ Scroll Button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg hover:bg-purple-700 transition z-50 text-bold"
          >
            ↑
          </button>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
