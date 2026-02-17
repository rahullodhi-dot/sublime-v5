import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeroSlide {
  video?: string;
  image?: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    // First slide: Video background with text overlay on top
    video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4', // Dummy tea plantation video
    image: 'https://images.unsplash.com/photo-1474710820418-dd5406ee35ef?auto=format&fit=crop&w=1200&q=80',
    title: 'SERENITY IN\nEVERY MOMENT',
    description: 'Sublime House Of Tea Is More Than Just A Cup Of Tea, A Jar Of Honey, Or A Spice.',
    cta: {
      label: 'Explore More',
      href: '/products',
    },
  },
  {
    // Second slide: Image and content
    image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=1200&q=80',
    title: 'Taste The Best\nGaram Masala',
    description: 'Introducing a more premium and bold tea using only the finest ingredients sourced from ethical plantations.',
    cta: {
      label: 'Shop Now',
      href: '/products',
    },
  },
  {
    // Third slide: Image and content
    image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1200&q=80',
    title: 'Savor Sublime\nMasala Chai',
    description: 'Our tea masters craft a balanced cup with warming spices, fragrant notes, and a smooth finish you will love.',
    cta: {
      label: 'Shop Now',
      href: '/products',
    },
  },
];

const SLIDE_DURATION = 7000;
const DRAG_THRESHOLD = 60;

const isInteractiveElement = (element: HTMLElement | null): boolean => {
  let node: HTMLElement | null = element;
  while (node) {
    const tag = node.tagName.toUpperCase();
    if (tag === 'A' || tag === 'BUTTON') {
      return true;
    }
    node = node.parentElement;
  }
  return false;
};

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (isDragging) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, [isDragging]);

  // Play/pause videos based on active slide
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play().catch(() => {
            // Handle autoplay restrictions
          });
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);

  const activeSlide = useMemo(() => HERO_SLIDES[activeIndex], [activeIndex]);

  const endDrag = () => {
    setIsDragging(false);
    deltaXRef.current = 0;
  };

  const goToSlide = (index: number) => {
    setActiveIndex((prev) => {
      if (index < 0) {
        return HERO_SLIDES.length - 1;
      }
      if (index >= HERO_SLIDES.length) {
        return 0;
      }
      if (index === prev) {
        return prev;
      }
      return index;
    });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if (isInteractiveElement(event.target as HTMLElement)) return;

    setIsDragging(true);
    startXRef.current = event.clientX;
    deltaXRef.current = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add('cursor-grabbing');
    event.preventDefault();
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    deltaXRef.current = event.clientX - startXRef.current;
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    event.currentTarget.classList.remove('cursor-grabbing');

    const delta = deltaXRef.current;
    endDrag();

    if (Math.abs(delta) > DRAG_THRESHOLD) {
      goToSlide(delta > 0 ? activeIndex - 1 : activeIndex + 1);
    }
  };

  const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    event.currentTarget.classList.remove('cursor-grabbing');
    endDrag();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      goToSlide(activeIndex - 1);
    } else if (event.key === 'ArrowRight') {
      goToSlide(activeIndex + 1);
    }
  };

  const isFirstSlide = activeIndex === 0;

  return (
    <section
      className="relative overflow-hidden bg-[#316763] text-white touch-pan-y select-none min-h-[100svh] sm:min-h-[90vh] lg:min-h-[92vh]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerLeave={handlePointerEnd}
      onPointerCancel={handlePointerCancel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="slider"
    >
      {/* Background - Video for first slide, Image for others */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.video && index === 0 ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={slide.video} type="video/mp4" />
                {/* Fallback to image if video fails */}
                {slide.image && (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </video>
            ) : (
              slide.image && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
              )
            )}
          </div>
        ))}
      </div>

      {/* Overlay for better text readability */}
      <div className={`absolute inset-0 ${isFirstSlide ? 'bg-black/40' : 'bg-[#316763]/80'}`} />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] sm:min-h-[90vh] lg:min-h-[92vh] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-10 xl:px-12 py-20 sm:py-24 lg:py-32">
        {isFirstSlide ? (
          /* First Slide: Video background with centered text overlay */
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8 text-center max-w-4xl px-2">
            {/* Main Title */}
            <h1 

              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-[#f5e6d3] px-4"
           style={{
                  fontFamily: "'f', sans-serif",
                  fontWeight: 100,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
            >
              {activeSlide.title}
            </h1>

            {/* Description Text */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto px-4">
              {activeSlide.description}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center pt-2 sm:pt-4">
              <Link
                to={activeSlide.cta.href}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#f5e6d3] border-2 border-gray-800 text-gray-900 text-sm sm:text-base font-medium rounded-sm transition-all hover:bg-[#ede0cd] hover:shadow-lg active:scale-95"
              >
                {activeSlide.cta.label}
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          /* Other Slides: Image on left, Content on right */
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16 w-full max-w-6xl mx-auto">
            {/* Left Side - Circular Image */}
            <div className="relative flex-1 w-full flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative flex h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px] xl:h-[480px] xl:w-[480px] items-center justify-center overflow-hidden rounded-full bg-[#245955] shadow-2xl">
                <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 h-20 w-20 sm:h-28 sm:w-28 rounded-full border border-white/20" />
                <img
                  src={activeSlide.image || 'https://images.unsplash.com/photo-1474710820418-dd5406ee35ef?auto=format&fit=crop&w=1200&q=80'}
                  alt={activeSlide.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute -left-8 -top-8 hidden h-24 w-24 rounded-full border border-white/10 xl:block" />
              <div className="pointer-events-none absolute bottom-6 right-6 hidden h-20 w-20 rounded-full border border-white/10 xl:block" />
            </div>

            {/* Right Side - Text Content */}
            <div className="flex flex-1 flex-col gap-4 sm:gap-5 lg:gap-6 text-center lg:text-left order-1 lg:order-2 w-full px-2">
              {/* Eyebrow Text */}
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[#fadb70]">
                RICHER FLAVORS
              </p>
              
              {/* Main Title */}
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-bold leading-tight text-white"
                style={{ 
                  whiteSpace: 'pre-line',
                  lineHeight: '1.15',
                }}
              >
                {activeSlide.title}
              </h1>

              {/* Description Text */}
              <p className="text-sm sm:text-base md:text-lg text-white/85 lg:max-w-xl leading-relaxed">
                {activeSlide.description}
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start pt-2">
                <Link
                  to={activeSlide.cta.href}
                  className="inline-flex items-center justify-center rounded-sm bg-white px-7 sm:px-9 py-2.5 sm:py-3 text-sm font-semibold text-[#2f6f6b] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90 active:scale-95"
                >
                  {activeSlide.cta.label}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Slide Indicators - Left Side (Desktop only) */}
        <div className="hidden lg:flex absolute left-6 xl:left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full border-2 border-white transition-all duration-300 ${
                index === activeIndex ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/60 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows - Desktop */}
        <button
          type="button"
          onClick={() => goToSlide(activeIndex - 1)}
          className="hidden lg:flex absolute left-6 xl:left-8 bottom-12 z-20 h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all hover:bg-white/30 hover:scale-105 active:scale-95"
          aria-label="Previous slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          className="hidden lg:flex absolute right-6 xl:right-8 bottom-12 z-20 h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all hover:bg-white/30 hover:scale-105 active:scale-95"
          aria-label="Next slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mobile Navigation - Bottom Center */}
        <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <button
            type="button"
            onClick={() => goToSlide(activeIndex - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white transition-all hover:bg-white/30 active:scale-90"
            aria-label="Previous slide"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          

          {/* Mobile Slide Indicators */}
          <div className="flex gap-2">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goToSlide(activeIndex + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white transition-all hover:bg-white/30 active:scale-90"
            aria-label="Next slide"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
