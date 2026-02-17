// import React, { useEffect, useState } from 'react';
// import { getWhyChooseUsFeatures } from '../services/homepage.service';
// import { getStrapiImageUrl } from '../config/strapi.config';
// import AboutFrame from "../assets/images/AboutFrame.png"
// import mountain from "../assets/images/mountain.png"
// import ladies from "../assets/images/ladies.jpg"
// import grass from "../assets/images/grass.jpg"
// import greenVision from "../assets/images/greenVision.jpg"
// import vision from "../assets/images/vision.jpg"
// interface Feature {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   order: number;
// }

// // Fallback features if Strapi is not available
// const FALLBACK_FEATURES: Feature[] = [
//   {
//     id: 1,
//     title: 'Wellness Enhancing',
//     description: 'A lifestyle designed to elevate your body, mind, and spirit.',
//     image: ladies,
//     order: 1,
//   },
//   {
//     id: 2,
//     title: 'Direct From Growers',
//     description: 'From the hands that harvest to yours — pure, authentic, and direct.',
//     image:grass,
//     order: 2,
//   },
//   {
//     id: 3,
//     title: 'Sourced Fresh in Small Batches',
//     description: 'Crafted in small batches to ensure unmatched freshness and quality.',
//     image: greenVision,
//     order: 3,
//   },
//   {
//     id: 4,
//     title: 'Lead By Visionaries',
//     description: 'Shaped By Leaders who believed in innovation and progress.',
//     image: vision,
//     order: 4,
//   },
// ];

// const WhyChooseUsSection: React.FC = () => {
//   const [features, setFeatures] = useState<Feature[]>(FALLBACK_FEATURES);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchFeatures = async () => {
//       try {
//         const response = await getWhyChooseUsFeatures();
//         if (response?.data && response.data.length > 0) {
//           const featuresData: Feature[] = response.data.map((item: any) => {
//             // Strapi v5 format - handle image (can be object or direct)
//             let imageUrl = '';
//             if (item.image) {
//               if (typeof item.image === 'string') {
//                 imageUrl = getStrapiImageUrl(item.image);
//               } else if (item.image.url) {
//                 imageUrl = getStrapiImageUrl(item.image.url);
//               }
//             }

//             return {
//               id: item.id,
//               title: item.title || '',
//               description: item.description || '',
//               image: imageUrl,
//               order: item.order || 0,
//             };
//           }).sort((a, b) => a.order - b.order);

//           setFeatures(featuresData);
//           console.log('Why Choose Us features loaded:', featuresData);
//         }
//       } catch (error) {
//         console.error('Error fetching why choose us features:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchFeatures();
//   }, []);

//   const displayFeatures = features.length > 0 ? features : FALLBACK_FEATURES;

//   // Background image style
//   const bgStyle = {
//     backgroundImage: `url(${AboutFrame})`,
//     backgroundColor: '#f6f2e3',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat'
//   };

//   return (
//    <section
//   className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden"
//   style={bgStyle}
// >
//   {/* Background image layer */}
//   <div
//     style={{ backgroundImage: `url(${mountain})` }}
//     className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
//   />

//   {/* Optional dark/light overlay tint (remove if not needed) */}
//   {/* <div className="absolute inset-0 bg-black/20 z-0" /> */}

//   {/* Content Wrapper */}
//   <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

//     {/* Section Header */}
//     <div className="text-center mb-8 sm:mb-10 lg:mb-12">
//       <p
//         style={{
//           fontFamily: "'gotham2', sans-serif",
//           fontWeight: 100,
//           fontSize: '18px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }}
//         className="text-black text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-karla font-semibold"
//       >
//         AWESOME PRODUCTS
//       </p>

//       <h2
//         style={{
//           fontFamily: "'gotham', sans-serif",
//           fontWeight: 100,
//           fontSize: '38px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }}
//         className="text-[#B89B49] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-lora font-medium leading-tight mb-4 sm:mb-6"
//       >
//         Why Choose Us
//       </h2>

//       <p
//         style={{
//           fontFamily: "'gotham2', sans-serif",
//           fontWeight: 100,
//           fontSize: '18px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }}
//         className="text-[#1A302A] text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4"
//       >
//         Sublime House of Tea was born with a vision to redefine tea drinking into an elevated sublime tea experience. Through meticulous sourcing, blending, and crafting.
//       </p>
//     </div>

//     {/* Timeline + Features */}
//     {isLoading ? (
//       <div className="flex justify-center items-center py-12">
//         <div className="w-16 h-16 border-4 border-[#316763] border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     ) : (
//       <>
//         {/* Timeline */}
//         <div className="hidden lg:block relative">
//           <div className="absolute top-[10px] left-0 right-0 h-[2px] bg-[#B99F66] z-0"></div>

//           <div className="absolute top-[10px] -left-0 -translate-y-1/2 z-10">
//             <div className="w-5 h-5 rounded-full border-[3px] bg-[#B99F66] border-[#B99F66] shadow-md"></div>
//           </div>

//           <div className="absolute top-[10px] right-0 -translate-y-1/2 z-10">
//             <div className="w-5 h-5 rounded-full border-[3px] bg-[#B99F66] border-[#B99F66] shadow-md"></div>
//           </div>

//           <div className="relative grid grid-cols-4 gap-6 lg:gap-8 mb-0">
//             {displayFeatures.map((feature, index) => (
//               <div key={`dot-${feature.id}`} className="relative flex flex-col items-center z-10">
//                 <div
//                   className={`w-6 h-6 rounded-full border-[3px] transition-all duration-300 ${
//                     index === displayFeatures.length - 1
//                       ? 'bg-[#B99F66] border-[#B99F66] shadow-lg shadow-[#B99F66]/30'
//                       : 'bg-[#B99F66] border-[#B99F66] shadow-md'
//                   }`}
//                 ></div>
//                 <div
//                   className={`w-[2px] ${
//                     index === displayFeatures.length - 1
//                       ? 'bg-[#B99F66]'
//                       : 'bg-[#B99F66]'
//                   }`}
//                   style={{ height: '48px' }}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//           {displayFeatures.map((feature) => (
//             <div
//               key={feature.id}
//               className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//             >
//               <div className="w-full h-32 sm:h-36 lg:h-40 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
//                 <img
//                   src={feature.image}
//                   alt={feature.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   loading="lazy"
//                   onError={(e) => {
//                     const target = e.target;
//                     target.src =
//                       'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80';
//                   }}
//                 />
//               </div>

//               <div className="p-5 sm:p-6 text-center">
//                 <h3
//                   style={{
//                     fontFamily: "'gotham', sans-serif",
//                     fontWeight: 100,
//                     fontSize: '18px',
//                     lineHeight: '100%',
//                     letterSpacing: '0%',
//                   }}
//                   className="text-[#B99F66] text-lg sm:text-xl font-lora font-semibold mb-3 leading-tight"
//                 >
//                   {feature.title}
//                 </h3>

//                 <p
//                   style={{
//                     fontFamily: "'gotham2', sans-serif",
//                     fontWeight: 100,
//                     fontSize: '18px',
//                     lineHeight: '100%',
//                     letterSpacing: '0%',
//                   }}
//                   className="text-gray-600 text-sm sm:text-base font-karla leading-relaxed"
//                 >
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </>
//     )}
//   </div>
// </section>

//   );
// };

// export default WhyChooseUsSection;






// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { Sprout, Filter, Package, Coffee } from 'lucide-react';
// import hanging from "../assest/hanging.png";

// const STEPS = [
//   {
//     icon: Sprout,
//     title: "Wellness Enhancing",
//     desc: "A lifestyle designed to elevate your body, mind, and spirit."
//   },
//   {
//     icon: Filter,
//     title: "Direct from Growers",
//     desc: "From the hands that harvest to yours-pure, authentic, and direct."
//   },
//   {
//     icon: Package,
//     title: "Sourced Fresh in Small Batches",
//     desc: "Crafted in small batches to ensure unmatched freshness and quality."
//   },
//   {
//     icon: Coffee,
//     title: "Proudly Women Led",
//     desc: "Proudly a women-led brand, built on passion, purpose, and perseverance."
//   },
// ];

// const renderLetters = (text: string, className: string = "") =>
//   text.split('').map((char, index) => (
//     <span key={index} className={`inline-block ${className}`}>
//       {char === ' ' ? '\u00A0' : char}
//     </span>
//   ));

// const StepCard: React.FC<{ step: typeof STEPS[0]; index: number }> = ({ step, index }) => {
//   return (
//     <div 

//     style={{top:index == 0 ? "-100px" : index === 1 ? "-120px" : index === 2 ? "-40px" : "-80px"}}

//     className="step-card group cursor-pointer transition-all duration-500 flex flex-col items-center text-center px-4 py-8 relative z-10 opacity-0 hover:scale-[1.05] ">
//       <div className="w-full flex flex-col items-center mb-10" style={{ transform: 'translateZ(10px)' }}>
//         <span className="font-serif text-gold text-xl tracking-widest italic opacity-0 step-numeral"></span>
//       </div>

//       <div className="relative mb-10 hover:shadow-[0_0_20px_rgba(200,169,126,0.5),0_0_40px_rgba(200,169,126,0.5),0_0_60px_rgba(200,169,126,0.5)] rounded-full hover:scale-110 transition-all duration-500 ">
//         <div className="step-icon-wrapper w-32 h-32 rounded-full border border-stone/60 flex items-center justify-center relative z-[50] bg-[#FDFCF8] shadow-sm transition-all duration-500 origin-center">
//           <span className="absolute z-[-1] inset-0 rounded-full bg-white opacity-20 scale-75 group-hover:scale-110 group-hover:opacity-0 transition-all duration-[900ms] ease-out" />
//           <step.icon className="step-icon w-16 h-16 text-gold hover-bg-red-600" strokeWidth={1.2} />
//         </div>

//         <div className="absolute inset-0 -m-3 border border-dotted border-gold/40 rounded-full opacity-0 step-bloom"></div>
//       </div>

//       <div className="step-text-content opacity-0">
//         <h3 className="font-gotham text-xl  text-forest mb-4 group-hover:text-gold-dim transition-colors duration-500">{step.title}</h3>
//         <p className="text-earth/70 text-xs leading-relaxed font-gotham max-w-[240px] mx-auto text-balance">
//           {step.desc}
//         </p>
//       </div>
//     </div>
//   );
// };

// export const ProcessSection: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const pathRef = useRef<SVGPathElement>(null);
//   const headerRef = useRef<HTMLDivElement>(null);
//   const labelRef = useRef<HTMLSpanElement>(null);
//   const svgWrapperRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       const cards = gsap.utils.toArray<HTMLElement>(".step-card");

//       gsap.set(cards, { opacity: 0, y: 80 });
//       gsap.set(".step-icon-wrapper", { opacity: 0 });
//       gsap.set(".step-text-content, .step-numeral", { opacity: 0, y: 14 });

//       if (pathRef.current) {
//         const len = pathRef.current.getTotalLength();
//         gsap.set(pathRef.current, {
//           strokeDasharray: "6,6",
//           strokeDashoffset: len,
//           opacity: 0.6,
//         });
//       }

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 70%",
//           end: "+=65%",
//           scrub: 0.6,
//         }
//       });

//       tl.fromTo(labelRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 });
//       tl.fromTo(".process-char", { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.04, duration: 1 }, "-=0.3");

//       if (pathRef.current)
//         tl.to(pathRef.current, { strokeDashoffset: 0, duration: 2 }, "-=0.5");

//       cards.forEach((card, i) => {
//         const iconWrap = card.querySelector(".step-icon-wrapper");
//         const bloom = card.querySelector(".step-bloom");
//         const text = card.querySelector(".step-text-content");
//         const numeral = card.querySelector(".step-numeral");
//         const paths = card.querySelectorAll(".step-icon path, .step-icon circle, .step-icon line, .step-icon polyline");

//         paths.forEach((p: any) => {
//           const len = p.getTotalLength?.();
//           if (len) gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
//         });

//         const stepTl = gsap.timeline();

//         stepTl.to(card, { opacity: 1, y: 0, duration: 0.8 });
//         stepTl.to(iconWrap, { opacity: 1, borderColor: "#C8A97E", duration: 0.7 }, "-=0.4");
//         stepTl.to(bloom, { opacity: 1, scale: 1.1, duration: 1.6 }, "<");
//         stepTl.to(paths, { strokeDashoffset: 0, duration: 1.2, stagger: 0.08 }, "-=1.1");
//         stepTl.to(numeral, { opacity: 1, y: 0, duration: 0.6 }, "-=0.6");
//         stepTl.to(text, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");

//         tl.add(stepTl, i * 0.35);
//       });

//       /** ⭐ CURVE AUTO ALIGN TO CARD CENTER */
//       setTimeout(() => {
//         const icon = document.querySelector(".step-icon-wrapper") as HTMLElement;
//         if (icon && svgWrapperRef.current) {
//           const centerY = icon.offsetTop + icon.offsetHeight / 2;
//           gsap.set(svgWrapperRef.current, { y: centerY - 100 });
//         }
//       }, 50);

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={containerRef} className="pt-6 pb-0 bg-[#F5F4F0] relative overflow-hidden border-t border-stone/30">
//       <div className="absolute h-64 left-0 top-0 w-32"><img src={hanging} alt="" className="h-full w-full opacity-40" /></div>
//       <div className="absolute h-64 right-0 top-0 w-32"><img src={hanging} alt="" className="h-full w-full opacity-40" /></div>

//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply pointer-events-none"></div>

//       <div className="max-w-[1180px] mx-auto px-6 lg:px-12 relative z-10">
//         <div ref={headerRef} className="text-center mb-24">
//           <span ref={labelRef} className="text-gold uppercase tracking-[0.2em] text-sm font-bold font-gotham -mb-3 block">The Process</span>
// <div className="overflow-hidden inline-block">
//   <h2 className="font-serif text-6xl lg:text-8xl text-forest block tracking-tight">
//     {renderLetters("Why Buy From Sublime", "process-char font-gotham text-5xl ")}
//   </h2>
// </div>
//         </div>

//         <div className="relative">
//           <div ref={svgWrapperRef} className="absolute left-0 w-full hidden lg:block -z-10 pointer-events-none">
//           <svg width="100%" height="200" viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none"> <path ref={pathRef} d="M 150 100 C 300 100, 300 50, 450 50 C 600 50, 600 150, 750 150 C 900 150, 900 100, 1050 100" stroke="#D4AF37" strokeWidth="3" strokeDasharray="0"   fill="none" /> </svg>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//             {STEPS.map((step, idx) => <StepCard key={idx} step={step} index={idx} />)}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import GifContainer from "./GifContainer";

import girl from "../assets/images/whiteGirl.gif";
import door from "../assets/images/whiteBox.gif";
import lotus from "../assets/images/whiteLotus.gif";
import leafgif from "../assets/images/whiteLeaf.gif";
import lotusleaf from "../assets/images/v4leaf.png";

const features = [
  { icon: leafgif, title: "Wellness Enhancing", desc: "A lifestyle designed to elevate your body, mind, and spirit." },
  { icon: lotus, title: "Direct from Growers", desc: "From the hands that harvest to yours-pure, authentic, and direct." },
  { icon: door, title: "Sourced Fresh in Small Batches", desc: "Crafted in small batches to ensure unmatched freshness and quality." },
  { icon: girl, title: "Led by Visionaries", desc: "Shaped by leaders who believe in innovation and progress." }
];

const anchors = [0, 0.33, 0.66, 0.999];

const imgAnc = [
  (anchors[0] + anchors[1]) / 2,
  // (anchors[1] + anchors[2]) / 2,
  (anchors[2] + anchors[3]) / 2,
];




export default function WhyChooseUsSection() {
  const pathRef = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<any[]>([]);
  const [imgPoints, setImgPoints] = useState<any[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef<HTMLTableSectionElement>(null)

  const calculate = () => {
    if (!pathRef.current) return;

    // const path = pathRef.current;
    // const total = path.getTotalLength();

    const getHung = (progress: number, index: number) => {
      const path = pathRef.current!;
      const total = path.getTotalLength();
      const len = total * progress;

      const p = path.getPointAtLength(len);
      const p2 = path.getPointAtLength(Math.min(total, len + 1));

      const dx = p2.x - p.x;
      const dy = p2.y - p.y;

      // normal
      let nx = -dy;
      let ny = dx;

      const mag = Math.hypot(nx, ny);
      nx /= mag;
      ny /= mag;

      //  direction flip only for icon
      const dir = index % 2 === 0 ? -1 : 1;

      const iconOffset = index % 2 === 0 ? 70 : 80;

      return {
        anchorX: p.x,
        anchorY: p.y,
        iconX: p.x + nx * iconOffset * dir,
        iconY: p.y + ny * iconOffset * dir,
        nx,
        ny,
        dir
      };

    };

    setPoints(anchors.map((a, i) => getHung(a, i)));
    setImgPoints(imgAnc.map((a, i) => getHung(a, i)));


  };




  useEffect(() => {
    calculate();

    const path = pathRef.current!;
    const totalLenght = path.getTotalLength();
    gsap.set(path,{strokeDasharray:"6,6",strokeDashoffset:totalLenght});
    gsap.to(path,{
      strokeDashoffset:0,
      ease:"none",
      scrollTrigger:{
        trigger:sectionRef.current,
        start:"top bottom",
        end:"bottom top",
        scrub:1,
        toggleActions:"play reverse play reverse"
      }
    });
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  return (
    <section ref={sectionRef} className="pt-[88px] bg-[#F5F4F0]">


      <div className="flex flex-col items-center gap-2 mb-3">
        <span style={{
          fontFamily: "'gotham', sans-serif",
          fontWeight: 100,

          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }} className="text-[10px] text-center w-fit  mx-auto sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.35em] text-black uppercase">
          AWESOME PRODUCTS
        </span>

        <h2 style={{
          fontFamily: "'gotham2', sans-serif",
          fontWeight: 100,

          fontSize: '38px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }} className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7523]">
          Why Choose Us
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pt-20">

      <div className="w-full  max-w-[1280px] mx-auto">
  <svg
    ref={svgRef}
    viewBox="0 0 1300 500"
    className="
    
      w-full 
  
      sm:h-[650px] 
      md:h-[600px] 
      lg:h-full 
      pl-10 
      sm:pl-10 
      lg:pl-24
    "
    preserveAspectRatio="xMidYMid meet"
    style={{ overflow: "visible" }}
  >

            <path
              ref={pathRef}
              d="M0.039 379.264C233.283 388 152.975 2.746 402.914 2.746C618.397 2.746 568.305 388 792.007 388C1048.22 388 944.145 1 1180.04 1"
              stroke="#1A261C"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />

            {imgPoints.map((p, i) => (


              <foreignObject
                key={i}
                x={p.anchorX - 50}
                y={p.anchorY - 0}
                width="60"
                height="120"
                style={{ overflow: "visible" }}
              >
                <img src={lotusleaf} className="w-full h-full object-contain" />
              </foreignObject>
            ))}


            {points.map((p, i) => {
              const isTopContent = i === 0 || i === 2;   // 1st & 3rd → content upar
              const isBottomContent = i === 1 || i === 3; // 2nd & 4th → content neeche

              return (
                <g key={i}>
                  {/* line (rope) */}
                  <line
                    x1={p.anchorX}
                    y1={p.anchorY}
                    x2={p.iconX}
                    y2={p.iconY}
                    stroke="#000"
                    strokeWidth="1.5"
                  />

                  {/* dot */}
                  <circle cx={p.anchorX} cy={p.anchorY} r="3" fill="#000" />

                  {/* Hanging content */}
                  <foreignObject
                    x={p.iconX - 80}
                    y={isTopContent ? p.iconY - (i === 2 ? 220 : 190) : p.iconY - 40}
                    width="160"
                    height="260"
                    style={{ overflow: "visible" }}
                  >

                    <div className="flex flex-col items-center text-center relative">

                      {/*  Content above GIF (1 & 3) */}
                      {isTopContent && (
                        <>
                          <p style={{ fontFamily: "gotham-book" }} className="text-2xl  w-[190%]  font-semibold mb-2">
                            {features[i].title}
                          </p>
                          <p className="text-lg text-[#9a7523] w-[200%] px-3 mb-3">
                            {features[i].desc}
                          </p>
                        </>
                      )}

                      {/* GIF circle */}
                      <div className="h-[110px] w-[110px] rounded-full border border-[#] bg-[#316763] flex items-center justify-center relative">
                        <GifContainer gifUrl={features[i].icon} />

                     
                      </div>

                      {/* 🔻 Content below GIF (2 & 4) */}
                      {isBottomContent && (
                        <div className="mt-3 mb-3 w-[190%]  text-2xl font-semibold " >
                          <p style={{ fontFamily: "gotham-book" }} className="mt-3 mb-3 w-full  text-2xl font-semibold">
                            {features[i].title}
                          </p>
                          <p className="text-lg text-[#9a7523] px-3">
                            {features[i].desc}
                          </p>
                        </div>
                      )}
                    </div>
                  </foreignObject>
                </g>
              );
            })}


          </svg>
        </div>

      </div>
    </section>
  );
}

