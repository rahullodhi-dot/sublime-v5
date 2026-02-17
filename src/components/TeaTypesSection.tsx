// import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import TeaImage from '../assets/images/tea.png';

// gsap.registerPlugin(ScrollTrigger);

// interface TeaType {
//   id: number;
//   name: string;
//   description: string;
//   category: string;
// }

// const teaTypes: TeaType[] = [
//   {
//     id: 1,
//     name: 'Green Tea',
//     description: 'Sublime House of Tea was born with a vision to redefine tea drinking into an elevated sublime tea experience. Through meticulous sourcing, blending, and crafting.',
//     category: 'green-tea'
//   },
//   {
//     id: 2,
//     name: 'Black Tea',
//     description: 'Rich and robust black teas sourced from the finest estates. Experience the bold flavors and aromatic notes that make our black tea collection truly exceptional.',
//     category: 'black-tea'
//   },
//   {
//     id: 3,
//     name: 'White Tea',
//     description: 'Delicate and refined white teas with subtle sweetness. Handpicked from premium gardens, offering a light and refreshing tea experience.',
//     category: 'white-tea'
//   },
//   {
//     id: 4,
//     name: 'Oolong Tea',
//     description: 'Semi-oxidized oolong teas with complex flavor profiles. Discover the perfect balance between green and black tea characteristics.',
//     category: 'oolong-tea'
//   },
//   {
//     id: 5,
//     name: 'Herbal Tea',
//     description: 'Naturally caffeine-free herbal infusions crafted from premium botanicals. Wellness and flavor combined in every sip.',
//     category: 'herbal-tea'
//   },
//   {
//     id: 6,
//     name: 'Specialty Blends',
//     description: 'Artisanal tea blends created by our master blenders. Unique combinations that deliver extraordinary taste experiences.',
//     category: 'specialty-blends'
//   }
// ];

// const TeaTypesSection: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const ctx = gsap.context(() => {
//       let lastIndex = 0;
      
//       // Create scroll-triggered animation that changes the index
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         pin: true,
//         scrub: 1,
//         start: 'top top',
//         end: () => `+=${teaTypes.length * 1000}`,
//         onUpdate: (self) => {
//           const newIndex = Math.min(
//             Math.floor(self.progress * teaTypes.length),
//             teaTypes.length - 1
//           );
          
//           if (newIndex !== lastIndex) {
//             setIsTransitioning(true);
//             setTimeout(() => {
//               setCurrentIndex(newIndex);
//               setTimeout(() => setIsTransitioning(false), 50);
//             }, 200);
//             lastIndex = newIndex;
//           }
//         },
//       });
//     }, sectionRef);

//     return () => {
//       ctx.revert();
//     };
//   }, []);

//   const currentTea = teaTypes[currentIndex];

//   return (
//     <section ref={sectionRef} className="relative bg-white h-screen overflow-hidden">
//       <div className="flex h-screen items-center justify-center px-4 sm:px-6 lg:px-12 bg-white">
//         <div className="relative mx-auto max-w-[1600px] w-full">
//           {/* Rounded Card Container */}
//           <div className="bg-[#DFE5D7] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg">
//             <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-0 items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
//               {/* Left Column - Text Content */}
//               <div className="space-y-4 sm:space-y-6 p-8 sm:p-12 lg:p-16 lg:pr-8">
//                 {/* Small Heading with Icon */}
//                 <div className="flex items-center gap-2">
//                   <svg className="h-3 w-3 sm:h-4 sm:w-4 text-[#316763]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//                   </svg>
//                   <p style={{
//                   fontFamily: "'gotham2', sans-serif",
//                   fontWeight: 100,

//                   fontSize: '18px',
//                   lineHeight: '100%',
//                   letterSpacing: '0%',
//                 }}  className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#316763]">
//                     EXPLORE OUR RANGE
//                   </p>
//                 </div>

//                 {/* Main Heading - Animated */}
//                 <h2 

//                 style={{
//                   fontFamily: "'gotham2', sans-serif",
//                   fontWeight: 100,

//                   fontSize: '38px',
//                   lineHeight: '100%',
//                   letterSpacing: '0%',
//                 }} 
//                   className={`text-lora font-medium text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] leading-[100%] capitalize text-[#316763] transition-opacity duration-500 ${
//                     isTransitioning ? 'opacity-0' : 'opacity-100'
//                   }`}
//                 >
//                   {currentTea.name}
//                 </h2>

//                 {/* Description - Animated */}
//                 <p 
//                 style={{
//                   fontFamily: "'gotham2', sans-serif",
//                   fontWeight: 100,

//                   fontSize: '18px',
//                   lineHeight: '100%',
//                   letterSpacing: '0%',
//                 }} 
//                   className={`text-karla font-normal text-base sm:text-lg lg:text-[20px] xl:text-[26px] leading-[30px] sm:leading-[34px] lg:leading-[36px] text-black transition-opacity duration-500 ${
//                     isTransitioning ? 'opacity-0' : 'opacity-100'
//                   }`}
//                 >
//                   {currentTea.description}
//                 </p>

//                 {/* Shop Now Button */}
//                 <div className="pt-2 sm:pt-4">
//                   <Link
//                     to={`/products?category=${currentTea.category}`}
//                     className="inline-flex items-center justify-center bg-[#316763] text-white w-[148px] h-[51px] text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wide"
//                     style={{ borderRadius: '8px' }}
//                   >
//                     Shop Now
//                   </Link>
//                 </div>
//               </div>

//               {/* Right Column - Image with Label */}
//               <div className="order-first lg:order-last h-full flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 lg:pl-8 gap-4">
//                 {/* Tea Label - Centered above image - Animated */}
//                 <h3 
//                 style={{
//                   fontFamily: "'gotham2', sans-serif",
//                   fontWeight: 100,

//                   fontSize: '38px',
//                   lineHeight: '100%',
//                   letterSpacing: '0%',
//                 }} 
//                   className={`text-lora font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-[100%] capitalize text-[#1A302A] text-center transition-opacity duration-500 ${
//                     isTransitioning ? 'opacity-0' : 'opacity-100'
//                   }`}
//                 >
//                   {currentTea.name}
//                 </h3>

//                 {/* Tea Image - Centered - Animated */}
//                 <div 
//                   className={`w-full max-w-md lg:max-w-lg transition-opacity duration-500 ${
//                     isTransitioning ? 'opacity-0' : 'opacity-100'
//                   }`}
//                 >
//                   <img
//                     src={TeaImage}
//                     alt={currentTea.name}
//                     className="w-full h-auto object-contain"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeaTypesSection;


import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { ImageWithLoader } from './ImageWithLoader.tsx';
import WhiteTea from "../assets/images/WhiteTea.png";
import GreenTea from "../assets/images/GreenTea.png";
import BlackTea from "../assets/images/BlackTea.png";
import TeaLeaf from "../assets/images/TealLeaf.png"
// import OolongTea from "../assest/OolongTea.png";
import HerbalTea from "../assets/images/HerbalTea.png";


const TEA_TYPES = [
  {
    id: 'green',
    label: 'Green Tea',
    origin: 'Monsinram, Meghalaya',
    desc: 'A refreshing infusion of tender green leaves, celebrated for its purity, balance, and gentle vitality.',
    image: GreenTea
  },
  {
    id: 'black',
    label: 'Black Tea',
    origin: 'Assam, India',
    desc: 'A bold and full-bodied brew with deep character, offering richness, warmth, and timeless depth.',
    image: BlackTea
  },
  {
    id: 'white',
    label: 'White Tea',
    origin: 'Darjiling, Assam',
    desc: 'A soothing blend of natural herbs and flowers, crafted for calm moments and mindful indulgence.',
    image: WhiteTea
  },
  {
    id: 'herbal',
    label: 'Herbal Tea',
    origin: 'Global Blend',
    desc: 'The most delicate of teas, lightly brewed from young buds for a soft, refined, and elegant taste.',
    image: HerbalTea
  }
];

const renderLetters = (text: string, className: string = "") => {
  return text.split('').map((char, index) => (
    <span key={index} className={`inline-block ${className}`}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

const BotanicalBg = () => (
    <svg className="absolute -left-32 top-10 w-[800px] h-[800px] text-forest/10 pointer-events-none opacity-0 z-0" viewBox="0 0 500 500" fill="none">
        <path d="M100,500 Q150,300 300,250 T450,50" stroke="currentColor" strokeWidth="1.5" fill="none" className="botanical-path"/>
        <path d="M300,250 Q350,200 450,220" stroke="currentColor" strokeWidth="1.2" fill="none" className="botanical-path"/>
        <path d="M300,250 Q250,200 250,100" stroke="currentColor" strokeWidth="1.2" fill="none" className="botanical-path"/>
    </svg>
);

export const StorySection: React.FC = () => {
  const [activeTeaIndex, setactiveTeaIndex] = useState(0)
  const [activeTea, setActiveTea] = useState(TEA_TYPES[activeTeaIndex]);
  const prevActiveTeaRef = useRef(TEA_TYPES[0]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const originRef = useRef<HTMLDivElement>(null);
  
  // Array of refs for the cards
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Refs for entrance animations
  const labelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Handle Tea Selection
 const handleTeaSelect = (tea: typeof TEA_TYPES[0]) => {
  const index = TEA_TYPES.findIndex(t => t.id === tea.id)
  if (index === activeTeaIndex) return

  setactiveTeaIndex(index)
  setActiveTea(tea)
}


useEffect(() => {
  const ctx = gsap.context(() => {
    const total = TEA_TYPES.length

    TEA_TYPES.forEach((_, i) => {
      const card = cardsRef.current[i]
      if (!card) return

      //  KILL anything already running on this card
      gsap.killTweensOf(card)

      const offset = (i - activeTeaIndex + total) % total

      /* ================= ACTIVE CARD ================= */
      if (offset === 0) {
        gsap.to(card, {
          zIndex: 50,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          opacity: 1,
          filter: "grayscale(0%) blur(0px)",
          boxShadow: "0 60px 140px rgba(0,0,0,0.25)",
          duration: 1.2,
          ease: "expo.out",
          overwrite: "auto",
        })
      }

      /* ================= PREVIOUS CARD ================= */
      else if (offset === 1) {
        gsap.to(card, {
          zIndex: 40,
          x: 56,
          y: -44,
          scale: 0.88,
          rotation: 8,
          opacity: 0.55,
          filter: "grayscale(65%) blur(0.6px)",
          duration: 1.1,
          ease: "expo.out",
          overwrite: "auto",
        })
      }

      /* ================= STACK ================= */
      else {
        gsap.to(card, {
          zIndex: 30 - offset,
          x: offset * 22,
          y: offset * -18,
          scale: 1 - offset * 0.065,
          rotation: offset * 2.5,
          opacity: 0.45,
          filter: "grayscale(75%) blur(0.8px)",
          duration: 1,
          ease: "expo.out",
          overwrite: "auto",
        })
      }
    })

    /* ================= TEXT (NO JERK) ================= */
    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, ease: "expo.out", overwrite: "auto" }
    )

    gsap.fromTo(
      originRef.current,
      { opacity: 0, y: 16, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "expo.out", overwrite: "auto" }
    )

  }, containerRef)

  return () => ctx.revert()
}, [activeTeaIndex])


useEffect(() => {
  const ctx = gsap.context(() => {
    cardsRef.current.forEach(card => {
      if (!card) return
      const img = card.querySelector("img")

      if (!img) return

      gsap.to(img, {
        scale: 1.08,
        y: "-6%",
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    })
  }, containerRef)

  return () => ctx.revert()
}, [])


useEffect(() => {
  const ctx = gsap.context(() => {
    cardsRef.current.forEach(card => {
      if (!card) return

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.02,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        })
      })
    })
  }, containerRef)

  return () => ctx.revert()
}, [])



useEffect(() => {
  const ctx = gsap.context(() => {

    const chars = gsap.utils.toArray<HTMLElement>(".story-char")

    gsap.set(chars, {
      opacity: 0,
      y: 60,
      filter: "blur(6px)",
    })

    gsap.set(descRef.current, {
      opacity: 0,
      y: 30,
    })

    gsap.set(originRef.current, {
      opacity: 0,
      y: 40,
      scale: 0.96,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "top 20%",
        scrub: 1.2,
      },
    })

    /* ================= HEADING CHARS ================= */
    tl.to(chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: {
        each: 0.04,
        from: "start",
      },
      ease: "power3.out",
    })

    /* ================= DESCRIPTION ================= */
    tl.to(
      descRef.current,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      "-=0.4"
    )

    /* ================= ORIGIN BOX ================= */
    tl.to(
      originRef.current,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "expo.out",
      },
      "-=0.3"
    )

  }, containerRef)

  return () => ctx.revert()
}, [])


  return (
    <section ref={containerRef} className="min-h-screen  relative flex items-center bg-[#f1f6e8]  overflow-hidden py-12 lg:py-0">
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-stone/60 rounded-full blur-[150px] mix-blend-multiply opacity-10"></div>
         <BotanicalBg />
      </div>
            <img src={TeaLeaf} alt="" className='absolute z-0 left-[45%] h-[70%] -translate-x-1/2 opacity-20'/>
      
      <div className="max-w-[1180px] mx-auto px-6  relative lg:px-12  z-10 w-full">
  
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center h-full">
          
          {/* LEFT PANEL: Selector - Order 1 on Mobile */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-1">
            <div className="mb-10">
                <div ref={labelRef} className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[1px] bg-[#9A7522]"></div>
                    <span  style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontWeight: 100,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className="text-[#000] uppercase tracking-[0.25em] text-xs ">Explore Our Range </span>
                </div>

                
                
                <div ref={headerRef} className="mb-8">
                    <h2 className="font-serif text-5xl lg:text-[4rem] text-forest leading-[1] tracking-tight mb-0">
                       <span style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className="block whitespace-nowrap">{renderLetters("Our Tea Types", "story-chafr font-gotham-light text-[#C5A059]  text-4xl")}</span>
                    </h2>
                </div>
                
                {/* Dynamic Description */}
                <p style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontWeight: 100,

                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                }} ref={descRef} className="text-earth text-xs  leading-relaxed  pl-1 border-l-2 border-transparent  text-balance">
                   {activeTea.desc}
                </p>
            </div>

            {/* Tea Type List */}
            <div className="flex flex-col gap-2 relative z-20">
              {TEA_TYPES.map((tea) => (
                <button 
                    key={tea.id} 
                    onMouseEnter={() => handleTeaSelect(tea)}
                  className={`tea-list-item group  flex items-center justify-between w-full text-left py-4 border-b border-[#000] transition-all duration-300 ${activeTea.id === tea.id ? 'pl-4 border-gold/40' : 'hover:pl-2'}`}
                >
                    <span  style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className={`font-gotham text-sm transition-colors duration-300 ${activeTea.id === tea.id ? 'text-forest font-medium' : 'text-forest/40 group-hover:text-forest/70'}`}>
                        {tea.label}
                    </span>
                    
                    <span className={`transition-all duration-500 ${activeTea.id === tea.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                        <ArrowRight className="w-5 h-5 text-gold" />
                    </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative w-full aspect-[4/5] lg:h-[80vh] lg:w-auto lg:aspect-[3/4] mx-auto order-2 lg:order-2 flex items-center justify-center perspective-[2000px]">
             
             {/* Decorative Frame Behind Stack */}
             <div className="absolute inset-4 lg:inset-8 border border-gold/10 rounded-t-[10rem] rounded-b-[2rem] translate-x-4 translate-y-4 z-0 pointer-events-none"></div>
             
             {/* STACK CONTAINER */}
             <div className="relative w-full h-full max-w-md lg:max-w-lg">
                 {TEA_TYPES.map((tea, index) => (
                     <div
                        key={tea.id}
                        ref={(el) => { cardsRef.current[index] = el; }}
                        onClick={() => handleTeaSelect(tea)}
                        className="absolute inset-0 w-full h-full rounded-t-[16rem] rounded-b-[1.5rem] overflow-hidden shadow-2xl bg-[#F4F3EF] border border-white/20 origin-bottom cursor-pointer transition-shadow duration-500 hover:shadow-luxury"
                        style={{
                            // Initial z-index setup for static rendering
                            zIndex: index,
                            transform: `scale(0.9) translateY(0px)`,
                        }}
                     >
                        <ImageWithLoader 
                            src={tea.image} 
                            alt={tea.label} 
                            className="w-full h-full object-cover"
                            containerClassName="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-forest/10 mix-blend-multiply pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                     </div>
                 ))}
             </div>
             
   
             <div 
                ref={originRef}
                className="absolute bottom-12 -left-4 lg:-left-12 bg-[#FDFCF8] px-8 py-6 max-w-[280px] shadow-luxury border border-stone/40 z-[100] rounded-sm"
             >
                <span className="text-[10px] font-gotham uppercase tracking-widest text-gold font-bold font-serif block mb-2">Origin</span>
                <p className="font-gotham italic text-xl text-forest leading-snug">{activeTea.origin}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
