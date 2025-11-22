import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

const AlllProjects = () => {
  const [hovered, setHovered] = useState(null);

  const designs = [
    { id: 1, img: "https://framerusercontent.com/images/aS6TUjI9YxlGwDeky4ti5lNhvk.png?scale-down-to=1024&width=2044&height=1522", height: "sm:h-[260px] md:h-[320px] lg:h-[360px]" },
    { id: 2, img: "https://framerusercontent.com/images/BNh4Rkd4JEoDgLZABP9OKo7Sy4.png?scale-down-to=1024&width=2034&height=1518", height: "sm:h-[320px] md:h-[420px] lg:h-[480px]" },
    { id: 3, img: "https://framerusercontent.com/images/KuxlTruapDVuNEiqiX4dI6yimk.png?scale-down-to=1024&width=2034&height=1524" },
    { id: 4, img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop", height: "sm:h-[300px] md:h-[380px] lg:h-[420px]" },
    { id: 5, img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=400&h=600&fit=crop", height: "sm:h-[260px] md:h-[320px] lg:h-[360px]" },
    { id: 6, img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=700&fit=crop", height: "sm:h-[320px] md:h-[420px] lg:h-[480px]" },
    { id: 7, img: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=700&fit=crop", height: "sm:h-[280px] md:h-[320px] lg:h-[360px]" },
    { id: 8, img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&h=700&fit=crop", height: "sm:h-[360px] md:h-[420px] lg:h-[480px]" },
    { id: 9, img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=700&h=600&fit=crop", height: "sm:h-[300px] md:h-[380px] lg:h-[420px]" },
  ];

  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 md:px-10 py-10">
      <div className="max-w-[1400px] mx-auto">

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-3 space-y-3">

          {designs.map((item, index) => (
            <div
              key={item.id}
              className="relative group break-inside-avoid overflow-hidden rounded-xl cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={item.img}
                className={`
                  w-full rounded-xl object-cover 
                  ${item.height} 
                  grayscale group-hover:grayscale-0
                  transition-all duration-700 
                  ${hovered === index ? "scale-110" : "scale-100"}
                `}
                alt=""
              />

              {/* Overlay */}
              <div
                className={`
                  absolute inset-0 bg-[#e2e2e2]/50 
                  transition-opacity duration-500 
                  ${hovered === index ? "opacity-0" : "opacity-100"}
                `}
              />

              {/* Button */}
              <button
                className="
                  absolute bottom-3 left-1/2 -translate-x-1/2 
                  z-20 w-[90%] sm:w-72 
                  border border-white text-white 
                  bg-white/20 backdrop-blur-md  
                  px-4 py-2 rounded-full 
                  font-semibold text-xs sm:text-sm 
                  shadow-lg flex items-center justify-center gap-2 
                  transition-all duration-300
                "
              >
                VIEW PROJECT

                <ArrowUpRight
                  className={`
                    transition-all duration-300 
                    ${hovered === index ? "scale-125 -translate-y-1 rotate-12" : ""}
                  `}
                />
              </button>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default AlllProjects;
