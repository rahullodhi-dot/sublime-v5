import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema, websiteSchema } from '../utils/schemas';
import BlogSection from '../components/BlogSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CategoriesSection from '../components/CategoriesSection';
import AboutSection from '../components/AboutSection';
import { StorySection } from '../components/TeaTypesSection';
import PartnersSection from '../components/PartnersSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import CustomerTestimonialsSection from '../components/CustomerTestimonialsSection';
import GiftBoxSection from '../components/GiftBoxSection';
import NewsletterBanner from '../components/NewsletterBanner';

import { getHeroSlides } from '../services/homepage.service';
import { getStrapiImageUrl } from '../config/strapi.config';
import MunnarVideo from '../assets/images/munnar.mp4';
import TeaImg from '../assets/images/BlackTea(2).png';
import HoneyImg from '../assets/images/Honey.png';
import BgImg1 from '../assets/images/bgImg2.png';
import BgImg2 from '../assets/images/bgImg1.png';

import BannerImage from "../assets/images/bannerImage2.png"
import ShopTheBestSection from '../components/ShopTheBestSection';
import V3Video from "../assets/video/FinalVideo.mp4"
import BackToTop from '../components/ui/BackToTop';





interface HeroSlideData {
  id: number;
  order: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon?: {
    url: string;
  };
  slideType: 'video' | 'image';
  backgroundVideo?: {
    url: string;
  };
  backgroundImage?: {
    url: string;
  };
  productImage?: {
    url: string;
  };
  backgroundColor: string;
  textColor: string;
  isActive: boolean;
}

const Home: React.FC = () => {

  const [heroSlides, setHeroSlides] = useState<HeroSlideData[]>([]);
  const [isLoadingSlides, setIsLoadingSlides] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  // Fallback static slides
  const staticSlides = [
    { id: 1, type: 'video' },
    { id: 2, type: 'tea' },
    { id: 3, type: 'honey' },
  ];

  const slides = heroSlides.length > 0 ? heroSlides : staticSlides;

  // Minimum swipe distance (in px)
  const minSwipeDistance = 75;

  // Handle swipe/drag navigation
  const handleSlideChange = () => {
    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left - next slide
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      } else {
        // Swiped right - previous slide
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }
    }
  };

  // Touch handlers (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      setTouchEndX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      handleSlideChange();
      setIsDragging(false);
    }
  };

  // Mouse handlers (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStartX(e.clientX);
    setTouchEndX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setTouchEndX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      handleSlideChange();
      setIsDragging(false);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  // Auto-slide every 6 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, currentSlide === 0 ? 45000 : 10000);

  //   return () => clearInterval(interval);
  // }, [slides.length, currentSlide]);

  // Default colors for each slide type (managed from frontend)
  const getDefaultColors = (slideType: string, index: number) => {
    if (slideType === 'video') {
      return {
        backgroundColor: '#1a1a1a',
        textColor: '#EED6B5'
      };
    }

    // Default colors for image slides (Tea & Honey)
    const defaultImageColors = [
      { backgroundColor: '#7A9B7F,#A3B899', textColor: '#1A302A' }, // Green (Tea)
      { backgroundColor: '#D4A574,#F4D19B', textColor: '#1A302A' }, // Golden (Honey)
      { backgroundColor: '#E8E4D8,#F5F1E8', textColor: '#2C3E50' }, // Cream (Default)
    ];

    return defaultImageColors[index % defaultImageColors.length];
  };

  // Fetch Hero Slides from Strapi
  useEffect(() => {
    const fetchHeroSlides = async () => {
      try {
        const response = await getHeroSlides();
        if (response?.data && response.data.length > 0) {
          const slidesData: HeroSlideData[] = response.data.map((slide: any, index: number) => {
            // Strapi v5 format - data is flat, not nested in attributes

            // Parse subtitle (Rich Text Blocks format)
            let subtitleText = '';
            if (slide.Subtitle && Array.isArray(slide.Subtitle)) {
              subtitleText = slide.Subtitle
                .map((block: any) =>
                  block.children
                    ?.map((child: any) => child.text)
                    .join('')
                )
                .join(' ');
            } else if (typeof slide.Subtitle === 'string') {
              subtitleText = slide.Subtitle;
            }

            // Get default colors based on slide type
            const defaultColors = getDefaultColors(slide.slideType, index);

            return {
              id: slide.id,
              order: slide.order,
              title: slide.title,
              subtitle: subtitleText,
              buttonText: slide.buttonText || 'Explore More',
              buttonLink: slide.buttonLink || '/products',
              buttonIcon: slide.buttonIcon ? {
                url: getStrapiImageUrl(slide.buttonIcon.url)
              } : undefined,
              slideType: slide.slideType,
              backgroundVideo: slide.backgroundVideo ? {
                url: getStrapiImageUrl(slide.backgroundVideo.url)
              } : undefined,
              backgroundImage: slide.backgroundImage ? {
                url: getStrapiImageUrl(slide.backgroundImage.url)
              } : undefined,
              productImage: slide.productImage ? {
                url: getStrapiImageUrl(slide.productImage.url)
              } : undefined,
              // Use Strapi colors if provided, otherwise use frontend defaults
              backgroundColor: slide.backgroundColor?.trim() || defaultColors.backgroundColor,
              textColor: slide.textColor?.trim() || defaultColors.textColor,
              isActive: slide.isActive,
            };
          }).filter((slide: HeroSlideData) => slide.isActive);

          setHeroSlides(slidesData);
          console.log('Hero slides loaded:', slidesData);
        }
      } catch (error) {
        console.error('Error fetching hero slides:', error);
      } finally {
        setIsLoadingSlides(false);
      }
    };

    fetchHeroSlides();
  }, []);



  const structuredData = [
    organizationSchema,
    websiteSchema
  ];



  return (
    <div className="overflow-x-hidden w-full">
      <SEO
        title="Sublime House Tea - Premium Teas & Exceptional Tea Experiences"
        description="Discover premium teas at Sublime House Tea. Quality tea blends, exceptional service, and authentic tea experiences. Shop now for the finest teas!"
        keywords="premium teas, tea blends, green tea, black tea, oolong tea, herbal tea, sublime house tea, tea shop, online tea store"
        url="https://sublimehousetea.com"
        structuredData={structuredData}
      />

      {/* Hero Banner Slider */}
      <section
        className="relative min-h-[100vh] sm:h-[75vh] lg:h-[85vh] w-full overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'pan-y'
        }}
      >
        {isLoadingSlides ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-[#316763] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading slides...</p>
            </div>
          </div>
        ) : heroSlides.length > 0 ? (
          // Dynamic Slides from Strapi
          heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
              {slide.slideType === 'video' && slide.backgroundVideo ? (
                // Video Slide
                <div className="relative w-full h-full bg-[#1a1a1a]">
                  <img src="" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35"></div>

                  <div className="relative h-full w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center">
                    <div className="max-w-2xl lg:max-w-3xl text-white">
                      <h1 className="hero-heading mb-4 sm:mb-6 lg:mb-8 text-[#EED6B5]">
                        {slide.title}
                      </h1>
                      <p
                        className="mb-6 sm:mb-8 lg:mb-10 text-[#EED6B5] font-lora font-medium italic text-lg leading-[35px] capitalize"
                        dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                      />
                      <div className="inline-block p-[5px] rounded-[5px] border border-[#F7EBDA]">
                        <Link
                          to={slide.buttonLink}
                          className="inline-flex items-center justify-center gap-3 bg-[#F7EBDA] text-[#1A302A] w-[197px] h-[51px] rounded-[4px] hover:bg-[#EED6B5] transition-all duration-300 text-base font-semibold"
                        >
                          {slide.buttonText}
                          {slide.buttonIcon ? (
                            <img
                              src={slide.buttonIcon.url}
                              alt="Button Icon"
                              className="w-8 h-8"
                            />
                          ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Image Slide - Use static background images
                <div
                  className="relative w-full h-full"
                  style={{
                    backgroundImage: `url(${index === 1 ? BgImg1 : BgImg2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="relative h-full w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Left - Product Image */}
                      <div className="flex justify-center items-center">
                        <div className="relative w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]">
                          <img
                            src={slide.productImage?.url || (index === 1 ? TeaImg : HoneyImg)}
                            alt={slide.title}
                            className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>

                      {/* Right - Text Content */}
                      <div className="text-center lg:text-left">
                        <h2 className="hero-heading mb-4 sm:mb-6 text-[#1A302A]">
                          {slide.title}
                        </h2>
                        <p
                          className="mb-6 sm:mb-8 text-[#1A302A] max-w-2xl font-lora font-medium italic text-lg leading-[35px] capitalize"
                          dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                        />
                        <div className="inline-block p-[5px] rounded-[5px] border border-[#F7EBDA]">
                          <Link
                            to={slide.buttonLink}
                            className="inline-flex items-center justify-center gap-3 bg-[#F7EBDA] text-[#1A302A] w-[197px] h-[51px] rounded-[4px] hover:bg-[#EED6B5] transition-all duration-300 text-base font-semibold"
                          >
                            {slide.buttonText}
                            {slide.buttonIcon ? (
                              <img
                                src={slide.buttonIcon.url}
                                alt="Button Icon"
                                className="w-8 h-8"
                              />
                            ) : (
                              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            )}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          // Fallback to Static Slides
          <>
            {/* Slide 1 - Video Background */}
            <div
              className={`absolute  inset-0 transition-opacity duration-700 ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
              <div className="relative w-full h-full   ">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute   w-full h-full object-cover "
                  poster="https://images.unsplash.com/photo-1563281746-cc28e07d6f37?auto=format&fit=crop&w=1920&q=80"
                >
                  <source src={V3Video} type="video/mp4" />
                </video>

                {/* <img src={BannerImage} className='absolute inset-0 w-full h-full object-cover' alt="" /> */}

                {/* <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35"></div> */}

                <div className="relative h-full w-full  mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center">
                  <div className="w-full    mx-auto lg:max-w-3xl text-white">
                    <p style={{
                      fontFamily: "'gotham-book'",
                      fontWeight: 300,

                    fontSize: '15px',
                      letterSpacing: '0%',
                    }} className="mb-6 sm:mb-8 font-medium lg:mb-10 text-center text-white uppercase   text-lg  lg:leading-[35px] ">
                      To gather the finest  leaves, spices and little treasures of nature,
                    </p>
                    <h1 style={{
                      fontFamily: "'gotham', sans-serif",
                      fontWeight: 100,

                      fontSize: '54px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                    }} className="hero-heading w-full  text-center mb-4 sm:mb-6 lg:mb-8 capitalize text-white">
                      {/* SERENITY IN EVERY MOMENT */}
                      Serenity in every moment
                    </h1>

                    <div className="flex justify-center items-center  p-[5px] mx-auto  rounded-[5px]  border-[#F7EBDA]">
                      <Link
                        style={{
                          fontFamily: "'gotham2', sans-serif",
                          fontWeight: 100,

                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                        }}
                        to="/products"
                        className="inline-flex mx-auto items-center  text-black justify-center gap-3 xp-5  bg-white/80 h-[51px] rounded-[4px] w-48 hover:bg-[#fff] transition-all duration-300 text-black font-semibold"
                      >
                        Explore More
                        {/* <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 - Tea Product */}
            {/* <div
              className={`absolute inset-0 transition-opacity duration-700 ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
              <div
                className="relative w-full h-full"
                style={{
                  backgroundImage: `url(${BgImg1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A9B7F]/20 to-[#A3B899]/20"></div>
                <div className="relative h-full w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                  <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center items-center">
                      <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]">
                        <img
                          src={TeaImg}
                          alt="Sublime Black Tea"
                          className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                    <div className="text-center lg:text-left">
                      <h2 style={{
                        fontFamily: "'gotham', sans-serif",
                        fontWeight: 100,

                        fontSize: '38px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                      }} className="hero-heading mb-4 sm:mb-6 text-[#1A302A]">
                        EXPERIENCE THE<br />ROYAL TEA EVER
                      </h2>
                      <p style={{
                        fontFamily: "'gotham', sans-serif",
                        fontWeight: 100,

                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                      }} className="mb-6 sm:mb-8 text-[#1A302A] max-w-2xl font-lora font-medium  text-lg leading-[35px] capitalize">
                        Sublime House Of Tea Is More Than Just A Cup Of Tea,<br />A Jar Of Honey, Or A Spice.
                      </p>
                      <div className="inline-block p-[5px] rounded-[5px] border border-[#1A302A]">
                        <Link
                          style={{
                            fontFamily: "'gotham', sans-serif",
                            fontWeight: 100,

                            fontSize: '18px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                          }}
                          to="/products"
                          className="inline-flex items-center justify-center gap-3 bg-[#EED6B5] text-[#1A302A] w-[197px] h-[51px] rounded-[4px] hover:bg-[#EED6B5] transition-all duration-300 text-base font-semibold"
                        >
                          Explore More
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Slide 3 - Honey Product */}
            {/* <div
              className={`absolute inset-0 transition-opacity duration-700 ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
              <div
                className="relative w-full h-full"
                style={{
                  backgroundImage: `url(${BgImg2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#F5D76E]/20 to-[#FFE87C]/20"></div>
                <div className="relative h-full w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                  <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center items-center">
                      <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]">
                        <img
                          src={HoneyImg}
                          alt="Sublime Mountain Honey"
                          className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                    <div className="text-center lg:text-left">
                      <h2 style={{
                        fontFamily: "'gotham', sans-serif",
                        fontWeight: 100,

                        fontSize: '38px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                      }} className="hero-heading mb-4 sm:mb-6 text-[#1A302A]">
                        TASTE THE BEST<br />MOUNTAIN HONEY
                      </h2>
                      <p style={{
                        fontFamily: "'gotham', sans-serif",
                        fontWeight: 100,

                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                      }} className="mb-6 sm:mb-8 text-[#1A302A] max-w-2xl font-lora font-medium  text-lg leading-[35px] capitalize">
                        Sublime House Of Tea Is More Than Just A Cup Of Tea,<br />A Jar Of Honey, Or A Spice.
                      </p>
                      <div className="inline-block p-[5px] rounded-[5px] border border-[#1A302A]">
                        <Link
                          style={{
                            fontFamily: "'gotham', sans-serif",
                            fontWeight: 100,

                            fontSize: '18px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                          }}
                          to="/products"
                          className="inline-flex items-center justify-center gap-3 bg-[#F7EBDA] text-[#1A302A] w-[197px] h-[51px] rounded-[4px] hover:bg-[#EED6B5] transition-all duration-300 text-base font-semibold"
                        >
                          Explore More
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </>
        )}

        {/* Navigation Arrows - Only show if more than 1 slide */}
        {slides.length > 1 && (
          <>
            {/* Left Arrow */}
            {/* <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
              }}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Previous slide"
              style={{ pointerEvents: 'auto' }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button> */}

            {/* Right Arrow */}
            {/* <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
              }}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Next slide"
              style={{ pointerEvents: 'auto' }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button> */}

            {/* Dots Indicator */}
            {/* <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 z-50 flex gap-3 sm:gap-4" style={{ pointerEvents: 'auto' }}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(index);
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  className={`transition-all duration-300 rounded-full ${currentSlide === index
                    ? 'w-10 sm:w-12 md:w-14 h-3 sm:h-3.5 md:h-4 bg-white shadow-lg'
                    : 'w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 bg-white/60 hover:bg-white/90'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}
          </>
        )}
      </section>

<BackToTop/>
      <CategoriesSection />
      <AboutSection />
      <ShopTheBestSection />

      <GiftBoxSection />
      <WhyChooseUsSection />
      <TestimonialsSection subHeading="Only Buy Good" />
      {/* <StorySection /> */}

      <CustomerTestimonialsSection />

      <PartnersSection />

      <BlogSection />
      {/* <NewsletterBanner /> */}
    </div>
  );
};

export default Home;
