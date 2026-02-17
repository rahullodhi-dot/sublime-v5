import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHeroSlides, getImageUrl, getVideoUrl, type HeroSlideAttributes } from '../services/home.service';

interface HeroSlide {
  image?: string;
  video?: string;
  eyebrow?: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

// Fallback slides if Strapi is not available
const FALLBACK_SLIDES: HeroSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1474710820418-dd5406ee35ef?auto=format&fit=crop&w=1200&q=80',
    eyebrow: 'Richer Flavors',
    title: 'Taste The Best Garam Masala',
    description:
      'Introducing a more premium and bold tea using only the finest ingredients sourced from ethical plantations.',
    cta: {
      label: 'Shop Now',
      href: '/products',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=1200&q=80',
    eyebrow: 'Signature Blends',
    title: 'Savor Sublime Masala Chai',
    description:
      'Our tea masters craft a balanced cup with warming spices, fragrant notes, and a smooth finish you will love.',
    cta: {
      label: 'Discover Blends',
      href: '/products',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1200&q=80',
    eyebrow: 'Premium Collections',
    title: 'Celebrate Tea Moments Daily',
    description:
      'Elevate every sip with luxurious tea powders designed to complement your mindful rituals and gatherings.',
    cta: {
      label: 'Explore Range',
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

const HeroBanner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [slides, setSlides] = useState<HeroSlide[]>(FALLBACK_SLIDES);
  const [isLoading, setIsLoading] = useState(true);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Fetch slides from Strapi
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await getHeroSlides();
        if (response?.data && response.data.length > 0) {
          const strapiSlides: HeroSlide[] = response.data.map((slide: any) => {
            const attributes = slide.attributes || {};
            const imageUrl = attributes.image ? getImageUrl(attributes.image) : '';
            const videoUrl = attributes.video ? getVideoUrl(attributes.video) : '';
            return {
              image: imageUrl || undefined,
              video: videoUrl || undefined,
              eyebrow: attributes.eyebrow || '',
              title: attributes.title || '',
              description: attributes.description || '',
              cta: {
                label: attributes.ctaLabel || 'Shop Now',
                href: attributes.ctaLink || '/products',
              },
            };
          });
          setSlides(strapiSlides);
        }
      } catch (error) {
        console.error('Error fetching hero slides:', error);
        // Use fallback slides on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchSlides();
  }, []);

  // Auto-play videos and handle slide transitions
  useEffect(() => {
    if (isLoading) return;

    // Play video for active slide
    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      activeVideo.play().catch((error) => {
        console.warn('Video autoplay failed:', error);
      });
    }

    // Pause other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, isLoading]);

  // Auto-advance slides
  useEffect(() => {
    if (isDragging || isLoading) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, [isDragging, slides.length, isLoading]);

  const activeSlide = useMemo(() => slides[activeIndex] || slides[0], [slides, activeIndex]);

  const endDrag = () => {
    setIsDragging(false);
    deltaXRef.current = 0;
  };

  const goToSlide = (index: number) => {
    setActiveIndex((prev) => {
      if (index < 0) {
        return slides.length - 1;
      }
      if (index >= slides.length) {
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

  if (isLoading) {
    return (
      <section className="relative overflow-hidden bg-[#2f6f6b] text-white min-h-[100svh] sm:min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/80 text-sm sm:text-base">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative overflow-hidden bg-[#2f6f6b] text-white touch-pan-y select-none min-h-[100svh] sm:min-h-[90vh] lg:min-h-[92vh] flex items-center"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerLeave={handlePointerEnd}
      onPointerCancel={handlePointerCancel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Hero banner slider"
    >
      {/* Background Video/Image Layer */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Video Background */}
            {slide.video ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : slide.image ? (
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
                aria-hidden="true"
              />
            ) : null}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#2f6f6b]/85" aria-hidden="true" />
          </div>
        ))}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] sm:min-h-[90vh] lg:min-h-[92vh] max-w-7xl flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-16 px-4 py-20 sm:py-24 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-12 w-full">
        {/* Slide Indicators - Left Side (Desktop) */}
        <div className="absolute left-6 xl:left-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full border-2 border-white transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-transparent hover:bg-white/60 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>

        {/* Image/Video Preview Circle (Left Side) */}
        <div className="relative flex-1 w-full flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative flex h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px] xl:h-[480px] xl:w-[480px] items-center justify-center overflow-hidden rounded-full bg-[#245955] shadow-2xl">
            <div className="absolute inset-0 rounded-full border-2 border-white/20" />
            <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 h-20 w-20 sm:h-28 sm:w-28 rounded-full border border-white/20" />
            {activeSlide.video ? (
              <video
                className="h-full w-full object-cover rounded-full"
                loop
                muted
                playsInline
                autoPlay
                aria-hidden="true"
              >
                <source src={activeSlide.video} type="video/mp4" />
              </video>
            ) : activeSlide.image ? (
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="h-full w-full object-cover"
                loading="eager"
              />
            ) : null}
          </div>
          <div className="pointer-events-none absolute -left-8 -top-8 hidden h-24 w-24 rounded-full border border-white/10 xl:block" />
          <div className="pointer-events-none absolute bottom-6 right-6 hidden h-20 w-20 rounded-full border border-white/10 xl:block" />
        </div>

        {/* Text Content (Right Side) */}
        <div className="flex flex-1 flex-col gap-4 sm:gap-5 lg:gap-6 text-center lg:text-left order-1 lg:order-2 w-full px-2">
          {activeSlide.eyebrow && (
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[#fadb70] animate-fade-in">
              {activeSlide.eyebrow}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-bold leading-tight animate-fade-in" style={{ lineHeight: '1.15' }}>
            {activeSlide.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/85 lg:max-w-xl leading-relaxed animate-fade-in">
            {activeSlide.description}
          </p>
          <div className="flex justify-center lg:justify-start animate-fade-in pt-2">
            <Link
              to={activeSlide.cta.href}
              className="inline-flex items-center justify-center rounded-sm bg-white px-7 sm:px-9 py-2.5 sm:py-3 text-sm font-semibold text-[#2f6f6b] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl active:scale-95"
            >
              {activeSlide.cta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Arrows */}
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
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30 active:scale-90"
          aria-label="Previous slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Mobile Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30 active:scale-90"
          aria-label="Next slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;

