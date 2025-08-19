import React from "react";
import Portfolio from "./Portfolio";
import Spotlight from "./components/Spotlight";

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0c0c0f]">
      {/* 🔆 Full-page glow effect */}
      <Spotlight />

      {/* 👇 This wraps your entire layout (hero + sections) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto h-full flex">
        <Portfolio />
      </div>
    </div>
  );
}
