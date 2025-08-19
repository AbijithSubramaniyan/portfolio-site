import { useEffect, useRef, useState } from "react";

const Spotlight = ({ color = 'rgba(255, 255, 255, 0.06)' }) => {
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const spotlightRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, ${color}, transparent 80%)`,
        transition: "background 0.2s ease",
      }}
    />
  );
};

export default Spotlight;
