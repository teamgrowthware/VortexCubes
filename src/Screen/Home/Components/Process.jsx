import { Lightbulb, ListChecks, Rocket } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Process() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollStart = window.innerHeight * 0.5;
      const scrollRange = rect.height - window.innerHeight;

      if (rect.top > scrollStart) {
        setScrollProgress(0);
      } else if (rect.bottom < window.innerHeight) {
        setScrollProgress(1);
      } else {
        const progress = Math.max(0, Math.min(1, (scrollStart - rect.top) / scrollRange));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      step: 1,
      title: "Understand the Problem",
      icon: Lightbulb,
      description:
        "We start by deeply understanding your business challenges, goals, and user needs."
    },
    {
      step: 2,
      title: "Build with Precision",
      icon: ListChecks,
      description:
        "Every feature is crafted with stability, scalability, and efficiency in mind."
    },
    {
      step: 3,
      title: "Deploy, Support & Scale",
      icon: Rocket,
      description:
        "We deploy your product with secure handover and provide post-launch optimization."
    }
  ];

  const getCardTransform = (index) => {
    if (index === 0) {
      return { transform: "translateY(0)", opacity: 1, zIndex: 1 };
    }

    const cardsCount = cards.length;
    const progressPerCard = 1 / cardsCount;
    const start = index * progressPerCard;

    if (scrollProgress <= start) {
      return {
        transform: "translateY(150%)",
        opacity: 0,
        zIndex: index + 1
      };
    }

    const cardProgress = Math.max(
      0,
      Math.min(1, (scrollProgress - start) / progressPerCard)
    );

    const translateY = 150 - cardProgress * 150;
    const opacity = Math.min(1, cardProgress * 2);

    return {
      transform: `translateY(${translateY}%)`,
      opacity,
      zIndex: index + 1
    };
  };

  return (
    <div
      ref={containerRef}
      className="bg-black min-h-[300vh] relative font-sans"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 flex flex-col lg:flex-row gap-10">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 flex flex-col justify-center mt-10 lg:mt-0">
            <div className="mb-4">
              <span className="text-white bg-neutral-900 px-4 py-2 rounded-full text-base md:text-lg inline-flex items-center shadow-[0_-8px_12px_rgba(0,0,0,0.25)]">
                ⊛ Project Process
              </span>
            </div>

            <h1 className="text-white font-light mb-6 text-5xl sm:text-6xl md:text-8xl lg:text-[120px] leading-[1.1]">
              Process
            </h1>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-10">
              crafting bold visuals that inspire and elevate brands with thought process.
            </p>

            <div>
              <span
                className="text-white bg-neutral-900 px-5 py-3 rounded-md text-base md:text-lg inline-flex cursor-pointer hover:bg-neutral-700 transition-colors"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow:
                    "0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)"
                }}
              >
                See Projects
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT (CARDS) */}
          <div className="flex-1 flex items-start lg:items-center justify-center relative">
            <div
              className="relative w-full max-w-[750px] h-[320px] sm:h-[360px] md:h-[380px] lg:h-[400px]"
            >
              {cards.map((card, index) => {
                const style = getCardTransform(index);

                return (
                  <div
                    key={index}
                    className="absolute w-full rounded-[2rem] transition-all duration-300 ease-out"
                    style={{
                      ...style,
                      left: 0,
                      top: 0
                    }}
                  >
                    <div
                      className="bg-neutral-900 rounded-[2rem] p-6 sm:p-8 md:p-10 h-full border border-white/20 shadow-lg"
                      style={{
                        boxShadow:
                          "0 0 25px rgba(255, 255, 255, 0.25), 0 0 40px rgba(255, 255, 255, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.05)"
                      }}
                    >
                      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-700 text-neutral-400 flex items-center justify-center text-base sm:text-lg">
                        {card.step}
                      </div>

                      <div className="flex items-center gap-4 mb-4 sm:mb-6">
                        <card.icon className="text-white" size={32} strokeWidth={1.5} />
                      </div>

                      <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6">
                        {card.title}
                      </h3>

                      <div className="w-full h-px bg-neutral-700 mb-4 sm:mb-6" />

                      <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
