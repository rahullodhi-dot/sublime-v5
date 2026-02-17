

<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
=======
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
>>>>>>> e1b31fd3f0efe77e0274c1a52baf8a71fdcf9266
import { Link } from 'react-router-dom';
import GirlImage from '../assets/images/founderImage.jpg';

import AboutFrame from "../assets/images/AboutFrame.png"

import PenInk from "../assets/images/penInk.png"
import Pen from '../assets/images/Pen.png'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import newBg from "../assets//images/aboutNewFrame.png"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface AboutData {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  backgroundColor: string;
}

const AboutSection: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLTableSectionElement>(null);
  const penDivRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
  const desktopPenRef = useRef<HTMLDivElement>(null);
  const destopContainerRef = useRef<HTMLDivElement>(null);
=======
>>>>>>> e1b31fd3f0efe77e0274c1a52baf8a71fdcf9266

  // Fallback static content
  const fallbackData: AboutData = {
    heading: 'About Sublime',
    description: `Sublime House of Tea started off as my teenage ambition, and many years later, I am proud to say that the brand has become a recognizable symbol of trust, taste, and innovation.

Sticking to the core value of bringing to you fresh quality and superior products, the collection at Sublime House of Tea is sourced in small batches. The products are carefully curated to satisfy your health requirements as well as please your taste buds.

Every product of which is packed with authentic quality fresh ingredients, which will enhance your health and wellness.`,
    buttonText: 'Read Our Full Story',
    buttonLink: '/about',
    image: GirlImage,
    backgroundColor: '#a9be95',
  };

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/about-sections?populate=*');

        if (!response.ok) {
          throw new Error('Failed to fetch about section data');
        }

        const result = await response.json();
        console.log('About Section API Response:', result);

        if (result.data && result.data.length > 0) {
          const strapiData = result.data[0];
          const imageUrl = strapiData.image?.url
            ? `http://localhost:1337${strapiData.image.url}`
            : fallbackData.image;

          setAboutData({
            heading: strapiData.heading || fallbackData.heading,
            description: strapiData.description || fallbackData.description,
            buttonText: strapiData.buttonText || fallbackData.buttonText,
            buttonLink: strapiData.buttonLink || fallbackData.buttonLink,
            image: imageUrl,
            backgroundColor: strapiData.backgroundColor || fallbackData.backgroundColor,
          });
        } else {
          setAboutData(fallbackData);
        }
      } catch (err) {
        console.error('Error fetching about section:', err);
        setAboutData(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);



 useEffect(() => {

  const setupAnimation = (
    container: HTMLDivElement | null,
    pen: HTMLDivElement | null
  ) => {
    if (!container || !pen) return;

    const paths = gsap.utils.toArray<SVGPathElement>("path", container);
    if (!paths.length) return;

    // Initialize SVG paths
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.stroke = "#9A7522";
      path.style.fill = "transparent";
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    paths.forEach((path) => {
      const length = path.getTotalLength();

      // Move pen along path
      tl.to(pen, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0,0],
          autoRotate: false,
        },
        duration: 0.3,
        ease: "power2.out",
      });

      // Draw stroke
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 0.3,
        fill: "#9A7522",
        ease: "power2.out",
      }, "<");
    });

    // Fade pen
    tl.to(pen, {
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
    });

  };

  // Run for desktop
  setupAnimation(destopContainerRef.current, desktopPenRef.current);

  // Run for mobile
  setupAnimation(containerRef.current, containerRef.current);

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };

}, [aboutData]);


  const displayData = aboutData || fallbackData;

  if (loading) {
    return (
      <section
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
        style={{ backgroundColor: '#F6F1E8' }}
      >
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center text-[#1A302A]">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-2 sm:py-12 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${AboutFrame})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-16">

        <div
          className="relative hidden lg:block rounded-3xl p-10 sm:p-20 lg:p-8"
          style={{
            backgroundImage: `url(${newBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className='absolute h-36 left-[46%] translate-x-1/2 bottom-24'>
            <img src={PenInk} alt="" className='h-full ' />
          </div>

          <div className="grid px-4 grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-5">
              <p style={{
                fontFamily: "'gotham', sans-serif",
                fontWeight: 100,
                fontSize: '38px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }} className="text-xs sm:text-sm font-semibold uppercase text-[#B89B4A]">
                Crafting Legacy
              </p>

              <h2 style={{
                fontFamily: "'buttain', sans-serif",
                fontWeight: 100,
                fontSize: '38px',
                lineHeight: '150%',
                letterSpacing: '0%',
              }} className="text-lora font-medium text-3xl sm:text-4xl lg:text-[42px] tracking-[0.81rem] leading-[2000%] text-[#1A302A]">
                Since 1998
              </h2>

              <div style={{
                fontFamily: "'gotham-book', sans-serif",
                fontWeight: 100,
                fontSize: '18px',
                lineHeight: '150%',
                letterSpacing: '0%',
              }} className="space-y-6 z-10 font-normal text-xs leading-[200%] text-[#1A302A] text-justify whitespace-pre-line">
                {displayData.description}
              </div>

              <div className="pt-2">
                <Link
                  to={displayData.buttonLink}
                  className="relative inline-block bg-[#f6f1e8] border-[2px] border-[#9A7522] rounded-3xl text-[#9A7522] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg"
                >
                  <span style={{
                    fontFamily: "'gotham-book', sans-serif",
                    fontWeight: 100,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }} className="relative z-10 uppercase">{displayData.buttonText}</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col px-10 justify-center  lg:justify-end">
              <div className="relative max-h-[90%] self-end items-start rounded-2xl overflow-hidden w-full sm:w-80 lg:w-96">
                <img
                  src={displayData.image}
                  alt={displayData.heading}
                  className="w-full max-h-[80%] object-cover rounded-2xl shadow-xl"
                  loading="lazy"
                />

                <div className='  flex justify-center items-center flex-col mt-2 relative'>
                  <div ref={destopContainerRef} style={{
                    display: "flex",
                    gap: "2px",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "40px"
                  }} className=''>

                    <div ref={desktopPenRef} className='absolute h-12 w-12 '>
                      <img src={Pen} alt="pen" className='h-full w-full  scale-x-[1] scale-y-[-1]    
         drop-shadow-[0_8px_10px_rgba(0,0,0,0.15)]
                    ' />
                    </div>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                        <path
                          stroke="#9A7522"
                          strokeWidth="1.5" d="M5.96188 14.22C2.32188 14.22 0.00187507 12.12 0.00187507 8.06V-9.53674e-07H2.46188V7.96C2.46188 10.56 3.80188 11.96 6.00188 11.96C8.18188 11.96 9.52188 10.64 9.52188 8.06V-9.53674e-07H11.9819V7.94C11.9819 12.12 9.62188 14.22 5.96188 14.22Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.000781149 14V12.18L8.25922 2.18H0.259219V-9.53674e-07H11.4592V1.82L3.19922 11.82H11.4592V14H-0.000781149Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.000781178 14V-9.53674e-07H2.61922L6.87922 6.62L11.1392 -9.53674e-07H13.7592V14H11.2992V3.96L6.87922 10.56H6.79922L2.41922 4V14H-0.000781178Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.00156248 14.1L6.15844 -2.52724e-05H8.43844L14.5984 14.1H11.9984L10.5784 10.72H3.95844L2.51844 14.1H-0.00156248ZM4.85844 8.53998H9.67844L7.25844 2.93998L4.85844 8.53998Z" fill="transparent" />
                      </svg>
                    </span>
                    &nbsp;
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="14" viewBox="0 0 3 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.00140619 14V-9.53674e-07H2.45859V14H-0.00140619Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.000781178 14V-9.53674e-07H6.23922C7.99922 -9.53674e-07 9.37922 0.52 10.2792 1.4C11.0192 2.16 11.4392 3.2 11.4392 4.42V4.46C11.4392 6.76 10.0592 8.14 8.09922 8.7L11.8792 14H8.97922L5.53922 9.12H2.45922V14H-0.000781178ZM2.45922 6.94H6.05922C7.81922 6.94 8.93922 6.02 8.93922 4.6V4.56C8.93922 3.06 7.85922 2.24 6.03922 2.24H2.45922V6.94Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.000781178 14V-9.53674e-07H10.4192V2.24H2.45922V6.06H9.51922V8.3H2.45922V14H-0.000781178Z" fill="transparent" />
                      </svg>
                    </span>

                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.00156248 14.1L6.15844 -2.52724e-05H8.43844L14.5984 14.1H11.9984L10.5784 10.72H3.95844L2.51844 14.1H-0.00156248ZM4.85844 8.53998H9.67844L7.25844 2.93998L4.85844 8.53998Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.000781178 14V-9.53674e-07H2.27922L9.77922 9.68V-9.53674e-07H12.1992V14H10.1392L2.41922 4.04V14H-0.000781178Z" fill="transparent" />
                      </svg>
                    </span>
                    {/* Continue for all remaining letters like you had */}
                  </div>
                  <p style={{
                    fontFamily: "'gotham-light', sans-serif",
                    fontWeight: 100,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }} className=' text-[#000]'>Founder Of Sublime </p>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* MOBILE VERSION */}
        <div style={{
          backgroundImage: `url(${newBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} className="block lg:hidden px-8 py-8 rounded-2xl">

          {/* Image First */}
          <div className="w-full flex justify-center">
            <img
              src={displayData.image}
              alt={displayData.heading}
              className=" w-72 object-contain"
            />
          </div>

          {/* Founder Name SVG Section */}
          <div className="flex flex-col items-center mt-6 relative">
            <div className="relative flex justify-center items-center min-h-[40px]">

              {/* <div ref={penDivRef} className="absolute h-10 w-10">
        <img src={Pen} alt="pen" className="h-full w-full scale-y-[-1]" />
      </div> */}

              <div ref={containerRef} className="flex gap-[2px] items-center justify-center">
                <div className='  flex justify-center  rounded-lg items-center flex-col mt-2 relative'>
                  <div ref={containerRef} style={{
                    display: "flex",
                    gap: "2px",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "40px"
                  }} className=''>

                    <div ref={penDivRef} className='absolute h-12 w-12 '>
                      <img src={Pen} alt="pen" className='h-full w-full block scale-x-[1] scale-y-[-1]   
         drop-shadow-[0_8px_10px_rgba(0,0,0,0.15)]
                    ' />
                    </div>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                        <path
                          stroke="#9A7522"
                          strokeWidth="1.5" d="M5.96188 14.22C2.32188 14.22 0.00187507 12.12 0.00187507 8.06V-9.53674e-07H2.46188V7.96C2.46188 10.56 3.80188 11.96 6.00188 11.96C8.18188 11.96 9.52188 10.64 9.52188 8.06V-9.53674e-07H11.9819V7.94C11.9819 12.12 9.62188 14.22 5.96188 14.22Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.000781149 14V12.18L8.25922 2.18H0.259219V-9.53674e-07H11.4592V1.82L3.19922 11.82H11.4592V14H-0.000781149Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.000781178 14V-9.53674e-07H2.61922L6.87922 6.62L11.1392 -9.53674e-07H13.7592V14H11.2992V3.96L6.87922 10.56H6.79922L2.41922 4V14H-0.000781178Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.00156248 14.1L6.15844 -2.52724e-05H8.43844L14.5984 14.1H11.9984L10.5784 10.72H3.95844L2.51844 14.1H-0.00156248ZM4.85844 8.53998H9.67844L7.25844 2.93998L4.85844 8.53998Z" fill="transparent" />
                      </svg>
                    </span>
                    &nbsp;
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="14" viewBox="0 0 3 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.00140619 14V-9.53674e-07H2.45859V14H-0.00140619Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.000781178 14V-9.53674e-07H6.23922C7.99922 -9.53674e-07 9.37922 0.52 10.2792 1.4C11.0192 2.16 11.4392 3.2 11.4392 4.42V4.46C11.4392 6.76 10.0592 8.14 8.09922 8.7L11.8792 14H8.97922L5.53922 9.12H2.45922V14H-0.000781178ZM2.45922 6.94H6.05922C7.81922 6.94 8.93922 6.02 8.93922 4.6V4.56C8.93922 3.06 7.85922 2.24 6.03922 2.24H2.45922V6.94Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.000781178 14V-9.53674e-07H10.4192V2.24H2.45922V6.06H9.51922V8.3H2.45922V14H-0.000781178Z" fill="transparent" />
                      </svg>
                    </span>

                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.00156248 14.1L6.15844 -2.52724e-05H8.43844L14.5984 14.1H11.9984L10.5784 10.72H3.95844L2.51844 14.1H-0.00156248ZM4.85844 8.53998H9.67844L7.25844 2.93998L4.85844 8.53998Z" fill="transparent" />
                      </svg>
                    </span>
                    <span className='char'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                        <path stroke="#9A7522"
                          strokeWidth="1.5" d="M-0.000781178 14V-9.53674e-07H2.27922L9.77922 9.68V-9.53674e-07H12.1992V14H10.1392L2.41922 4.04V14H-0.000781178Z" fill="transparent" />
                      </svg>
                    </span>
                    {/* Continue for all remaining letters like you had */}
                  </div>
                  <p style={{
                    fontFamily: "'gotham-light', sans-serif",
                    fontWeight: 100,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }} className=' text-[#000]'>Founder Of Sublime </p>
                </div>
              </div>

            </div>


          </div>

          {/* Content Section */}
          <div className="mt-8 text-center space-y-4">

            <p
              style={{
                fontFamily: "'gotham', sans-serif",
                fontWeight: 100,
                fontSize: '16px',
              }}
              className="uppercase text-[#B89B4A]"
            >
              Crafting Legacy
            </p>

            <h2
              style={{
                fontFamily: "'buttain', sans-serif",
                fontWeight: 100,
                fontSize: '26px',
                lineHeight: '140%',
                letterSpacing: '0.3rem',
              }}
              className="text-[#1A302A]"
            >
              Since 1998
            </h2>

            <div
              style={{
                fontFamily: "'gotham-book', sans-serif",
                fontWeight: 100,
                fontSize: '14px',
                lineHeight: '170%',
              }}
              className="text-[#1A302A] text-justify whitespace-pre-line"
            >
              {displayData.description}
            </div>

            {/* Button */}
            <div className="pt-4">
              <Link
                to={displayData.buttonLink}
                className="block w-full bg-[#f6f1e8] border-2 border-[#9A7522] rounded-3xl text-[#9A7522] py-3 text-sm uppercase text-center"
              >
                {displayData.buttonText}
              </Link>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutSection;
<<<<<<< HEAD
// ek perfect view on mobile chaiye
=======
>>>>>>> e1b31fd3f0efe77e0274c1a52baf8a71fdcf9266
