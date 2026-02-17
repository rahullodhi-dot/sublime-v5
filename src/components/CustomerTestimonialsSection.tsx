import React, { useState, useEffect } from 'react';
import round1 from "../assets/images/roound1.png";
import AboutFrame from "../assets/images/csback.png";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  title: string;
  review: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Anita Sharma',
    location: 'Bengaluru',
    rating: 5,
    title: 'Exceptional Quality',
    review: '"Sublime Signature Black Tea is pure perfection! The aroma is refreshing, the taste is soothing, and it instantly uplifts my mood. Truly a premium blend that delivers wellness."',
    image: '/src/assets/images/Ellipse 96.png',
  },
  {
    id: 2,
    name: 'Vaibhav Vedsav',
    location: 'Kolkata',
    rating: 5,
    title: 'Rich Aroma With Taste',
    review: '"Our whole family loves Sublime Moroccan Mint Tea! It\'s refreshing, natural, and packed with antioxidants. It helps digestion, boosts immunity, and keeps us"',
    image: '/src/assets/images/Ellipse 97.png',
  },
  {
    id: 3,
    name: 'Paola Sebastian',
    location: 'Mumbai',
    rating: 5,
    title: 'Exceptional Support',
    review: '"Sublime Dry Fruits are pure perfection! The aroma is refreshing, the taste is soothing, and it instantly uplifts my mood. Truly a premium blend that delivers wellness."',
    image: '/src/assets/images/Ellipse 98.png',
  },
  {
    id: 4,
    name: 'Rahul Verma',
    location: 'Delhi',
    rating: 5,
    title: 'Amazing Experience',
    review: '"The quality of tea is outstanding! Every sip is a journey of flavors. The packaging is beautiful and the delivery was prompt. Highly recommend!"',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 5,
    name: 'Priya Singh',
    location: 'Pune',
    rating: 5,
    title: 'Pure Bliss',
    review: '"I have tried many tea brands, but Sublime House stands out. The freshness and aroma are unmatched. It has become my daily ritual."',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
];

const CustomerTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 700);
  };

const getVisibleTestimonials = () => {
  return TESTIMONIALS.map((testimonial, index) => {
    let position: 'left' | 'center' | 'right' | 'hidden' = 'hidden';

    if (index === currentIndex) {
      position = 'center';
    } 
    else if (
      index ===
      (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    ) {
      position = 'left';
    } 
    else if (
      index ===
      (currentIndex + 1) % TESTIMONIALS.length
    ) {
      position = 'right';
    }

    return { testimonial, position };
  });
};


  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section
      style={{
        backgroundImage: `url(${AboutFrame})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className="w-full relative py-12 sm:py-16 lg:py-20"
    >
      {/* Heading FIXED (absolute removed only) */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <p
          style={{
            fontFamily: "'gotham', sans-serif",
            fontWeight: 100,
            fontSize: '12px',
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
          className="text-[10px] w-fit mx-auto sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.35em] text-black uppercase mb-3"
        >
          HEAR THE GOOD
        </p>

        <h2
          style={{
            fontFamily: "'gotham2', sans-serif",
            fontWeight: 100,
            fontSize: '38px',
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7523]"
        >
          What Our Customers Say
        </h2>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

        <div className="relative">

          {/* Arrows (unchanged design) */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#9a7522] text-white flex items-center justify-center shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            ←
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#9a7522] text-white flex items-center justify-center shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            →
          </button>

          {/* Cards container */}
<div className="relative flex items-center justify-center overflow-hidden px-4 sm:px-12 lg:px-16 h-[520px]">

            {[...visibleTestimonials,...visibleTestimonials].map(({ testimonial, position }, index) => {
              const isCenter = position === 'center';

              return (
                <div
                 className={`absolute transition-all duration-700 ease-in-out ${
  position === 'center'
    ? 'translate-x-0 scale-100 sm:scale-110 z-20 opacity-100'
    : position === 'left'
    ? '-translate-x-[110%] scale-90 z-10 opacity-100'
    : position === 'right'
    ? 'translate-x-[110%] scale-90 z-10 opacity-100'
    : 'translate-x-[200%] opacity-0'
} w-full sm:w-[380px] lg:w-[410px]`}

                >
                  {/* ORIGINAL CARD (UNCHANGED) */}
                  <div className="bg-[#FFF7EA] rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-700 border-2 border-gray-200">

                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-700">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <h3 className="text-[#1A302A] text-xl sm:text-2xl font-lora font-semibold text-center mb-4 leading-tight transition-all duration-700">
                      {testimonial.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "'gotham-light', sans-serif",
                        fontWeight: 100,
                        fontSize: '16px',
                        lineHeight: '150%',
                        letterSpacing: '0%',
                      }}
                      className="text-gray-700 text-sm sm:text-base text-center mb-6 leading-relaxed min-h-[80px] sm:min-h-[100px] transition-all duration-700"
                    >
                      {testimonial.review}
                    </p>

                    <p
                      style={{
                        fontFamily: "'gotham2', sans-serif",
                        fontWeight: 100,
                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                      }}
                      className="text-[#316763] text-sm sm:text-base font-semibold text-center transition-all duration-700"
                    >
                      {testimonial.name}, {testimonial.location}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonialsSection;
