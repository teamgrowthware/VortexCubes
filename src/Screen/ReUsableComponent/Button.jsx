//  const NeonButton = ({ label }) => (
//     <button
//       onMouseEnter={() => setHoveredButton(label)}
//       onMouseLeave={() => setHoveredButton(null)}
//       className="
//         relative px-10 py-3
//         text-white text-sm font-medium
//         rounded-xl
//         bg-black
//         border border-white/30
//         shadow-[inset_0_0_2px_1px_rgba(255,255,255,0.3)]
//         transition-all duration-300
//         hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.5)]
//         active:scale-95
//       "
//     >
//       {/* bottom-left glossy highlight */}
//       <div
//         className="
//           absolute bottom-0 left-0 w-full h-full
//           rounded-xl
//           opacity-40
//           bg-gradient-to-tr from-white/40 to-transparent
//           blur-xl
//           pointer-events-none
//         "
//       ></div>

//       <span className="relative z-10">{label}</span>
//     </button>
//   );



 {/* Contact Button */}
          <button
            className="group relative px-9 py-4 rounded-xl overflow-hidden transition-all duration-500 hover:scale-110"
            style={{
              background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.2), inset 0 -2px 5px rgba(0,0,0,0.1), inset 0 2px 5px rgba(255,255,255,0.8)',
              transform: 'perspective(500px) rotateX(0deg)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(500px) rotateX(-5deg) translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(500px) rotateX(0deg)'}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, transparent 50%)' }} />
            <span className="relative z-10 font-semibold text-gray-900 group-hover:text-white transition-colors duration-500 flex items-center gap-2 text-base">
              Contact Us
              <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: '0 0 40px rgba(139,92,246,0.6), 0 0 80px rgba(236,72,153,0.4), 0 0 120px rgba(249,115,22,0.3)' }}
            />
          </button>
