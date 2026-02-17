import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHeroSlides } from '../services/homepage.service';
import { getStrapiImageUrl } from '../config/strapi.config';
import goldenBg from '../assets/images/wmremovone.jpeg';
import greenBg from '../assets/images/wmremovetwo.jpeg';

interface HeroSlide {
  id: number;
  attributes: {
    order: number;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    slideType: 'video' | 'image';
    backgroundVideo?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
    backgroundImage?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
    productImage?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
    backgroundColor: string;
    textColor: string;
    isActive: boolean;
  };
}

const HeroBannerDynamic: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 75;

  // Fetch hero slides from Strapi
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await getHeroSlides();
        console.log('Hero slides response:', response);
        if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
          // Filter out any slides with missing attributes
          const validSlides = response.data.filter((slide: any) => slide && slide.attributes);
          console.log('Valid slides:', validSlides);
          if (validSlides.length > 0) {
            setSlides(validSlides as HeroSlide[]);
          }
        }
      } catch (error) {
        console.error('Error fetching hero slides:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle swipe/drag navigation
  const handleSlideChange = () => {
    const distance = touchStartX - touchEndX;
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      } else {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }
    }
  };

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

  if (loading) {
    return (
      <section className="relative h-[60vh] min-h-[500px] sm:h-[65vh] sm:min-h-[550px] md:h-[70vh] md:min-h-[600px] lg:h-[80vh] lg:min-h-[700px] xl:h-[85vh] w-full overflow-hidden bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600">Loading...</p>
        </div>
      </section>
    );
  }

  if (slides.length === 0) {
    return null;
  }

  console.log('Slides loaded:', slides.length, 'Current slide:', currentSlide);

  return (
    <section 
      className="relative h-[60vh] min-h-[500px] sm:h-[65vh] sm:min-h-[550px] md:h-[70vh] md:min-h-[600px] lg:h-[80vh] lg:min-h-[700px] xl:h-[85vh] w-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ 
        overflow: 'visible',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'pan-y'
      }}
    >
      {/* Navigation Arrows - Only show if more than 1 slide */}
      {slides.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="absolute left-4 sm:left-6 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white hover:bg-gray-100 text-gray-800 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous slide"
            style={{ pointerEvents: 'auto' }}
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="absolute right-4 sm:right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white hover:bg-gray-100 text-gray-800 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next slide"
            style={{ pointerEvents: 'auto' }}
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 z-50 flex gap-3 sm:gap-4" style={{ pointerEvents: 'auto' }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(index);
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-10 sm:w-12 md:w-14 h-3 sm:h-3.5 md:h-4 bg-white shadow-lg'
                    : 'w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 bg-white/60 hover:bg-white/90'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {slides.map((slide, index) => {
        // Add null check for slide and attributes
        if (!slide || !slide.attributes) {
          console.error(`Slide ${index} is missing attributes:`, slide);
          return null;
        }

        const { attributes } = slide;
        const isActive = currentSlide === index;
        const backgroundColors = attributes.backgroundColor?.split(',') || ['#000000'];
        const gradientStyle = backgroundColors.length > 1 
          ? `linear-gradient(to bottom right, ${backgroundColors[0]}, ${backgroundColors[1]})`
          : backgroundColors[0];

        // Get background image for this slide
        // Priority: Strapi backgroundImage > Local images > Gradient
        let bgImageUrl = '';
        
        if (attributes.backgroundImage?.data) {
          // Use background image from Strapi if available
          bgImageUrl = getStrapiImageUrl(attributes.backgroundImage.data.attributes.url);
          console.log(`Slide ${index}: Using Strapi background image:`, bgImageUrl);
        } else {
          // Fallback to local images based on index
          if (index === 1) {
            bgImageUrl = goldenBg;
            console.log(`Slide ${index}: Using golden background (local):`, goldenBg);
          } else if (index === 2) {
            bgImageUrl = greenBg;
            console.log(`Slide ${index}: Using green background (local):`, greenBg);
          }
        }
        
        console.log(`Slide ${index} - Type: ${attributes.slideType}, BgImageUrl:`, bgImageUrl);

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Video Slide */}
            {attributes.slideType === 'video' && attributes.backgroundVideo?.data && (
              <div className="relative w-full h-full bg-[#1a1a1a]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source 
                    src={getStrapiImageUrl(attributes.backgroundVideo.data.attributes.url)} 
                    type="video/mp4" 
                  />
                </video>

                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35"></div>

                <div className="relative h-full w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center">
                  <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
                    <h1 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-lora font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-tight"
                      style={{ color: attributes.textColor }}
                    >
                      {attributes.title}
                    </h1>

                    <p 
                      className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 leading-relaxed italic"
                      style={{ color: attributes.textColor }}
                      dangerouslySetInnerHTML={{ __html: attributes.subtitle }}
                    />

                    <Link
                      to={attributes.buttonLink}
                      className="inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 bg-[#EED6B5] text-gray-900 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-9 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded border-2 border-gray-900 hover:bg-white transition-all duration-300 text-xs sm:text-sm md:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      {attributes.buttonText}
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Image/Product Slide */}
            {attributes.slideType === 'image' && (
              <div 
                className="relative w-full h-full overflow-hidden"
                style={{
                  background: bgImageUrl 
                    ? `url(${bgImageUrl}) center/cover no-repeat` 
                    : gradientStyle,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >

                <div className="relative h-full w-full max-w-[1800px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
                  <div className="h-full grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center">
                    {/* Left - Product Image */}
                    {attributes.productImage?.data && (
                      <div className="flex justify-center lg:justify-start items-center lg:pl-8">
                        <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px]">
                          <img
                            src={getStrapiImageUrl(attributes.productImage.data.attributes.url)}
                            alt={attributes.title}
                            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                          />
                        </div>
                      </div>
                    )}

                    {/* Right - Text Content */}
                    <div className="text-center lg:text-left flex flex-col justify-center space-y-6 lg:space-y-8 lg:pr-8">
                      <h2 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-lora font-bold leading-[1.1] tracking-tight"
                        style={{ 
                          color: attributes.textColor,
                          textTransform: 'uppercase',
                          letterSpacing: '0.02em'
                        }}
                      >
                        {attributes.title}
                      </h2>

                      <p 
                        className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
                        style={{ 
                          color: attributes.textColor,
                          opacity: 0.95
                        }}
                        dangerouslySetInnerHTML={{ __html: attributes.subtitle }}
                      />

                      <div className="pt-2">
                        <Link
                          to={attributes.buttonLink}
                          className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-md border border-gray-300 hover:bg-gray-50 transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        >
                          <span>{attributes.buttonText}</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HeroBannerDynamic;

