import { useEffect, useState } from "react";
import defaultCursor from "../assets/cursor.svg";
import clickCursor from "/logo.png"; // Update paths as needed

const CustomCursor = () => {
  const [cursorStyle, setCursorStyle] = useState("default");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setCursorStyle("click");
    const handleMouseUp = () => setCursorStyle("default");

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <img
        src={cursorStyle === "click" ? clickCursor : defaultCursor}
        alt="custom-cursor"
        className="pointer-events-none fixed z-[9999] w-10 h-10" // ⬅ Increased from w-6 h-6 to w-10 h-10
        style={{
            top: position.y,
            left: position.x,
            transform: "translate(-50%, -50%)",
        }}
    />
  );
};

export default CustomCursor;
