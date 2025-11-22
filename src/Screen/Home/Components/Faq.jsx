// import React, { useState } from "react";
// import faqImg from "../../../assets/FAQ.jpg"; // your image

// export default function Faq() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqList = [

//     {
//       q: "What services do you provide?",
//       a: "I provide brand identity design, packaging design, UI/UX design, and website design with a strong focus on creating meaningful and memorable brand experiences."
//     },

//   {
//       q: "How do I start working with you?",
//       a: "You can get started by contacting me through the website. After discussing your requirements, I’ll share a detailed proposal, estimated timeline, and pricing."
//     },
//     {
//       q: "What design tools do you use?",
//       a: "I use Figma, Adobe Photoshop, Illustrator, After Effects, and additional tools depending on the project needs."
//     },
//     {
//       q: "How long does a project take?",
//       a: "Branding projects usually take 1–2 weeks, while UI/UX and website projects take 2–4 weeks depending on complexity."
//     },
//     {
//       q: "Do you provide revisions?",
//       a: "Yes, revisions are included in all design packages. I ensure the final design fits your brand and expectations perfectly."
//     },
//     {
//       q: "What industries do you work with?",
//       a: "I work with startups, tech companies, fashion brands, e-commerce stores, and businesses from multiple industries."
//     },
//     {
//       q: "Do you offer development services?",
//       a: "Yes, I provide front-end development using React, TailwindCSS, and modern frameworks. I also collaborate with developers for complete solutions."
//     },
//     {
//       q: "What is your pricing structure?",
//       a: "Pricing is based on the project scope, deliverables, and timeline. After understanding your needs, I provide a transparent quote."
//     },
//     {
//       q: "Can you redesign my existing website?",
//       a: "Yes, I can completely redesign your existing website to improve UI/UX, upgrade visual design, and enhance user experience."
//     },
//   ];

//   const toggle = (i) => {
//     setOpenIndex(openIndex === i ? null : i);
//   };

//   return (
//     <div className="w-full min-h-screen bg-black text-white px-6 md:px-20 pt-28 pb-20">

//       {/* Badge */}
//       <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 
//       bg-white/5 backdrop-blur-md rounded-full border border-white/20 text-xs">
//         <span className="w-2 h-2 bg-white rounded-full"></span>
//         <span>FAQ'S</span>
//       </div>

//       {/* Heading */}
//       <h1 className="text-[72px] font-light leading-none mb-4">Answers</h1>

//       {/* Sub Text */}
//       <p className="text-[20px] text-gray-400 max-w-2xl mb-12">
//         Find answers to common questions about my design<br/>
//         process, services etc...
//       </p>

//       {/* 2-Column Layout */}
//       {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">


//         {/* LEFT SIDE - IMAGE */}
//         <div>
//           <div className="rounded-[26px] overflow-hidden border border-white/10 shadow-xl">
//             <img
//               src={faqImg}
//               alt="FAQ"
//               className="w-full h-[430px] object-cover grayscale hover:grayscale-0 transition-all duration-300"
//             />
//           </div>

//           {/* Tags */}
//           <div className="flex gap-4 mt-6 flex-wrap">
//             {["Product Design", "Brand Identity Design", "Branding"].map((tag, index) => (
//               <div
//                 key={index}
//                 className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-[14px]"
//               >
//                 {tag}
//               </div>
//             ))}
//           </div>
//         </div>


//         {/* RIGHT SIDE - FAQ LIST */}
//         <div className="flex flex-col gap-4 mt-0 pt-0">
//              {faqList.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#0e0e0e] p-5 border border-white/10 rounded-xl"
//             >
//               {/* Question */}
//               <button
//                 onClick={() => toggle(index)}
//                 className="flex justify-between items-center w-full"
//               >
//                 <span className="text-[17px]">{item.q}</span>
//                 <span className="text-[22px]">
//                   {openIndex === index ? "×" : "+"}
//                 </span>
//               </button>

//               {/* Answer */}
//               {openIndex === index && (
//                 <p className="mt-3 text-gray-400 text-[15px] leading-relaxed">
//                   {item.a}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import faqImg from "../../../assets/FAQ.jpg"; // your image path

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      q: "What services do you provide?",
      a: "I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences."
    },
    {
      q: "How do I start working with you?",
      a: "You can get started by contacting me through the website. After discussing your requirements, I’ll share a detailed proposal, estimated timeline, and pricing."
    },
    {
      q: "What design tools do you use?",
      a: "I use Figma, Adobe Photoshop, Illustrator, After Effects, and additional tools depending on the project needs."
    },
    {
      q: "How long does a project take?",
      a: "Branding projects usually take 1–2 weeks, while UI/UX and website projects take 2–4 weeks depending on complexity."
    },
    {
      q: "Do you provide revisions?",
      a: "Yes, revisions are included in all design packages. I ensure the final design fits your brand and expectations perfectly."
    },
    {
      q: "What industries do you work with?",
      a: "I work with startups, tech companies, fashion brands, e-commerce stores, and businesses from multiple industries."
    },
    {
      q: "Do you offer development services?",
      a: "Yes, I provide front-end development using React, TailwindCSS, and modern frameworks. I also collaborate with developers for complete solutions."
    },
    {
      q: "What is your pricing structure?",
      a: "Pricing is based on the project scope, deliverables, and timeline. After understanding your needs, I provide a transparent quote."
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes, I can completely redesign your existing website to improve UI/UX, upgrade visual design, and enhance user experience."
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white px-6 md:px-20 pt-28 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SECTION: FAQ badge, heading, subtext, image, tags */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/30 text-xs font-semibold select-none w-max">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>FAQ'S</span>
          </div>

          {/* Heading */}
          <h1 className="text-[72px] font-light leading-tight">Answers</h1>

          {/* Sub Text */}
          <p className="text-[20px] text-gray-400 max-w-2xl leading-relaxed">
            Find answers to common questions about my design <br />
            process, services etc...
          </p>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <img
              src={faqImg}
              alt="FAQ"
              className="w-full h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Tags */}
          <div className="flex gap-4 flex-wrap">
            {["Product Design", "Brand Identity Design", "Branding"].map((tag, index) => (
              <div
                key={index}
                className="px-5 py-2 bg-white/10 border border-white/20 rounded-xl text-[14px] font-medium select-none"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION: FAQ question-answer list */}
        <div className="flex flex-col gap-5">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] p-6 border border-white/20 rounded-2xl"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left cursor-pointer select-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-[17px] font-semibold">{item.q}</span>
                <span className="text-[24px] font-bold">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-question-${index}`}
                  className="mt-4 text-gray-300 text-[16px] leading-relaxed"
                >
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
