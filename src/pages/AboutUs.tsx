import React from 'react';
import aboutus from "../assets/images/aboutus.png";
import GirlImage from '../assets/images/founderImage2.jpg';
import leftStoryImage from '../assets/images/layer.png';
import rightStoryImage from '../assets/images/leaf2.png';
import penink from "../assets/images/penInk.png"
import aboutVideo from '../assets/video/aboutusvideo.mp4';

const AboutUs = () => {
  return (
    <main className="w-full">
      <section
        style={{
          backgroundImage: `url(${aboutus})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          
        }}
        className="w-full relative isolate "
      >
<div className="absolute inset-0 bg-[#f6f1e878]" />

     <div className="relative z-10 max-w-[1600px] py-14 md:py-32 mx-auto px-4 sm:px-6 lg:px-12">

          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-5xl text-[#9A7523] text-left">Our Story</h2>
          </div>
 
          <div className="flex gap-8 justify-between  ">
            <div className="space-y-6 text-left">
              <p className="text-[#1f1f1f] text-base md:text-lg leading-8">
                <span style={{ fontFamily: "'buttain', sans-serif" }} className='text-[#9a7523]'>Once upon a time</span>, in 1998 there was a little girl with a head full of dreams and hands that could never stay still. She would collect music tapes, try her hand at baking, and even record her own songs, curious about everything the world had to offer.
              </p>
              <p className="text-[#1f1f1f] text-base md:text-lg leading-8">
                As the years fluttered by, her wonder only grew. With her mother’s gentle guidance and her own unshakable spark, she poured her heart into creating something that felt like home, something pure, beautiful, and full of care. That something became Sublime.
              </p>
              <p className="text-[#1f1f1f] text-base md:text-lg leading-8">
                What began as a teenage dream soon blossomed into a world of wellness, taste, and thoughtful craft. A place where tea isn’t just brewed, but imagined. Where every blend whispers a story of nature, nurture, and balance.
              </p>
              <p className="text-[#1f1f1f] text-base md:text-lg leading-8">
                Today, Sublime House of Tea is a women-led celebration of everything warm and wondrous. And at its heart stands the dreamer who believed that the simplest cup could carry a little bit of magic.
              </p>

              <div className="flex justify-start items-center  gap-4">
                <p
                  style={{ fontFamily: "'buttain', sans-serif" }}
                  className="text-3xl md:text-4xl text-[#9A7523]"
                >
                  Uzma Irfan
                </p>

                <img
                  src={penink}
                  alt="signature"
                  className="h-32 w-auto object-contain"
                />
              </div>

            </div>

            <div className="w-full rounded-lg max-   overflow-hidden flex justify-center">
              <img
                src={GirlImage}
                alt="Founder Uzma Irfan"
                className="w-full   rounded-lg max-w-[420px] h-[520px] object-cover "
              />
            </div>


          </div>

          <div className="relative w-full  py-16 md:py-24 mt-16 rounded-3xl overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={aboutVideo}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/95" />

            {/* Content */}
            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

              <div className=' mb-6 flex flex-col justify-center items-center gap-4 text-white'>
                <p style={{ fontFamily: "gotham-light" }} className='text-2xl'>Choose excellece</p>
                <h2 style={{ fontFamily: "gotham2" }} className='text-5xl'>Our Vision & Mission</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-14 items-start">

                {/* LEFT - Vision */}
                <div className='flex flex-col justify-center items-center'>


                  <div className="w-full h-[156px] rounded-xl overflow-hidden mb-6">
                    <img
                      src={rightStoryImage}
                      alt="Our craft"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-2xl md:text-3xl uppercase underline  text-[#EED6B5] mb-4">
                    Mission
                  </h3>
                  <p className="text-[#f6f1e8] text-center text-base md:text-lg leading-8">
                    To gather the finest  leaves, spices and little treasures of nature, weaving them into  moments that wake the  senses, soothe the soul and sprinkle calm into  everyday life.
                  </p>
                </div>

                {/* VERTICAL DIVIDER */}
                <div className="  -translate-x-1/2 left-[50%]  border  h-full justify-center">
                  <div className="w-px bg-white h-full" />
                </div>

                {/* RIGHT - Craft */}
                <div className='flex flex-col justify-center items-center'>
                  <div className="w-full h-[156px] rounded-xl overflow-hidden mb-6">
                    <img
                      src={leftStoryImage}
                      alt="Our vision"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-2xl md:text-3xl uppercase underline text-[#EED6B5] mb-4">
                    vision
                  </h3>
                  <p className="text-[#f6f1e8] text-center text-base md:text-lg leading-8">
                    To become a sanctuary  where taste and wellness hold hands, where purity hums softly, craftsmanship  twinkles with care, and every sip feels like finding joy tucked inside the  ordinary
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>


      </section>


    </main>
  );
};

export default AboutUs;
