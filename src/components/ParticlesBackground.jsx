import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import backgroundVideo from "../assets/bg.mp4";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      {/* 🎥 Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* 🌑 Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />

      {/* ✨ Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-20"
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          background: { color: "transparent" },
          particles: {
            number: { value: 150, density: { enable: true, area: 800 } },
            color: { value: ["#9b5de5", "#00f5d4"] },
            links: {
              enable: true,
              distance: 140,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.00,
              random: true,
              outModes: { default: "out" },
            },
            opacity: {
              value: 0.6,
              random: true,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.2,
              },
            },
            size: {
              value: 2.5,
              random: true,
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: { enable: true, mode: ["repulse", "trail"] },
              onClick: { enable: true, mode: "burst" },
            },
            modes: {
              repulse: { distance: 150, duration: 0.4 },
              trail: { delay: 0.05, quantity: 8 },
              burst: {
                distance: 200,
                duration: 0.4,
                particles: { move: { speed: 4 } },
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
