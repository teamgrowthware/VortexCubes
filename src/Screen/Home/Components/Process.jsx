import { useState } from 'react';

export default function TestimonialSlider() {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Sofia Toms",
      role: "Founder at GreenK Studios",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      text: "Meily's designs speak for themselves — bold, strategic, and impactful. She took the time to understand our brand, delivering packaging concepts that resonated with our target audience and boosted our product's visibility.",
      rating: 5
    },
    {
      name: "Richards Johnson",
      role: "Creative Director & Lead Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      text: "Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!",
      rating: 5
    },
    {
      name: "Emma Carter",
      role: "CEO at EcoLux",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      text: "Meily touches turns into a perfect design and purpose. She crafted packaging that elevated our eco-friendly mission while making our products stand out on the shelves.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "The attention to detail and creative vision Meily brings is unmatched. Our brand identity was transformed completely, resulting in a 40% increase in customer engagement.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Product Manager at TechFlow",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
      text: "Exceptional work! Meily understood our vision perfectly and delivered designs that exceeded our expectations. The entire process was smooth and professional.",
      rating: 5
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-20" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Global Styles & Scroll Animation */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-456px * ${testimonials.length})); }
        }
        
        .animate-scroll { animation: scroll 40s linear infinite; }
        .animate-scroll.paused { animation-play-state: paused; }
      `}</style>

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-8 mb-12 text-center">
        <h2 className="text-white text-6xl font-light mb-4">What Our Clients Say</h2>
        <p className="text-gray-400 text-xl">Trusted by industry leaders worldwide</p>
      </div>

      {/* Testimonial Slider */}
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex gap-6 ${isPaused ? 'paused' : ''} animate-scroll`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-8 transition-transform duration-300 hover:scale-105"
              style={{
                width: '450px',
                background: 'linear-gradient(to bottom, #171717 0%, #171717 85%, #000000 100%)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                  style={{ filter: 'grayscale(100%)' }}
                />
                <div>
                  <h3 className="text-white text-2xl font-medium">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex gap-1 items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-yellow-500 text-lg ml-2 font-medium">{testimonial.rating}.0</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 h-full w-32 pointer-events-none z-10" style={{ background: 'linear-gradient(to right, black, transparent)' }} />
        <div className="absolute top-0 right-0 h-full w-32 pointer-events-none z-10" style={{ background: 'linear-gradient(to left, black, transparent)' }} />
      </div>

      
    </div>
  );
}
