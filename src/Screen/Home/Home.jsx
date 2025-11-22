import React, { useState } from "react";
import { Asterisk, CircleDashed, Mountain, Droplet } from "lucide-react";
import video from "../../assets/video.mp4";

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const brands = [
    { name: "Asterisk", icon: <Asterisk size={50} color="#c6bebe" /> },
    { name: "Oasis", icon: <Droplet size={42} color="#c6bebe" /> },
    { name: "Eooks", icon: null, underline: true },
    { name: "Opal", icon: <CircleDashed size={36} color="#c6bebe" /> },
    { name: "Dune", icon: <Mountain size={40} color="#c6bebe" /> },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* BACKGROUND BLURS */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="hidden md:block absolute top-20 right-1/4 w-[500px] h-[500px] bg-gray-600 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 left-1/4 w-[450px] h-[450px] bg-gray-500 rounded-full blur-[150px] opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* SMALL BADGE */}
        <div className="inline-flex mt-32 sm:mt-40 md:mt-48 items-center gap-2 px-4 py-1 sm:py-2 mb-6 sm:mb-8 bg-black/10 backdrop-blur-md rounded-full border border-white/20">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="text-sm sm:text-lg text-gray-300">
            Crafting Unique Brand Identities
          </span>
        </div>

        {/* RESPONSIVE HEADING */}
        <h1 className="text-[2.8rem] sm:text-[4rem] md:text-[6rem] lg:text-8xl font-medium leading-[1.1] mb-6 sm:mb-8">
          Branding that you <br />
          need Indeed
        </h1>

        {/* SUB TEXT */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          We specialize in creating innovative technology solutions that drive
          business growth. From custom software development to AI integration,
          we help companies stay ahead of the curve.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 sm:mt-10">

          {/* BUTTON 1 */}
          <button
            className="group relative px-7 sm:px-9 py-4 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span className="relative z-10 font-semibold text-white flex items-center gap-2 text-base">
              Contact Us
              <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>

          {/* BUTTON 2 */}
          <button
            className="group relative px-7 sm:px-9 py-4 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span className="relative z-10 font-semibold text-white flex items-center gap-2 text-base">
              See Projects
              <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* BRAND SLIDER */}
        <div className="relative w-full overflow-hidden mt-16 sm:mt-20">
          <div
            className="flex items-center gap-10 sm:gap-16 whitespace-nowrap"
            style={{ animation: "scrollSlow 18s linear infinite" }}
          >
            {brands.concat(brands).map((brand, index) => (
              <div
                key={index}
                className="flex items-center gap-2 opacity-70 hover:opacity-100 transition text-lg sm:text-xl"
              >
                {brand.icon}
                <span className={`font-semibold tracking-wide ${brand.underline ? "border-b-2 pb-1" : ""}`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KEYFRAME ANIMATION */}
      <style>{`
        @keyframes scrollSlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
