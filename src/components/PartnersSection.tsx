import React, { useEffect, useRef, useState } from 'react';
import sherton from "../assets/images/sherton.jpg";
import bare from "../assets/images/bare.png"
import taj from "../assets/images/taj.jpg"
import basket from "../assets/images/basket.png"
import marriot from "../assets/images/marriot.jpg"
import  fuell from "../assets/images/fuell.png"
interface Partner {
  id: number;
  name: string;
  logo: {
    url: string;
  };
  order: number;
}

interface SectionData {
  subheading: string;
  heading: string;
}

const PartnersSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [sectionData, setSectionData] = useState<SectionData>({
    subheading: 'TRUST WE GAIN',
    heading: 'Our Partners',
  });
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback partners
  const fallbackPartners: Partner[] = [
    { id: 1, name: 'Sheraton Grand', logo: { url: sherton}, order: 1 },
    { id: 2, name: 'BARE Necessities', logo: { url: bare}, order: 2 },
    { id: 3, name: 'Marriott', logo: { url: marriot }, order: 3 },
    { id: 4, name: "Nature's Basket", logo: { url: basket }, order: 4 },
    { id: 5, name: 'TAJ Bangalore', logo: { url: taj }, order: 5 },
    { id: 6, name: 'FUELL', logo: { url: fuell}, order: 6 },
  ];

  // Fetch section data and partners from Strapi
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch section heading/subheading
        const sectionResponse = await fetch('http://localhost:1337/api/partners-section');
        if (sectionResponse.ok) {
          const sectionResult = await sectionResponse.json();
          if (sectionResult.data) {
            setSectionData({
              subheading: sectionResult.data.subheading || 'TRUST WE GAIN',
              heading: sectionResult.data.heading || 'Our Partners',
            });
          }
        }

        // Fetch partners list
        const partnersResponse = await fetch('http://localhost:1337/api/partners?populate=*&sort=order:asc&filters[isActive][$eq]=true');
        if (partnersResponse.ok) {
          const partnersResult = await partnersResponse.json();
          if (partnersResult.data && partnersResult.data.length > 0) {
            const fetchedPartners = partnersResult.data.map((p: any) => ({
              id: p.id,
              name: p.name,
              logo: {
                url: p.logo?.url 
                  ? `http://localhost:1337${p.logo.url}`
                  : '/placeholder-logo.png'
              },
              order: p.order || 0,
            }));
            setPartners(fetchedPartners);
          } else {
            setPartners(fallbackPartners);
          }
        } else {
          setPartners(fallbackPartners);
        }
      } catch (err) {
        console.error('Error fetching partners data:', err);
        setPartners(fallbackPartners);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Triple the partners array for seamless looping
  const extendedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || partners.length === 0) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5; // Adjust speed here (lower = slower)

        // Calculate the width of one set of partners
        const singleSetWidth = scrollContainer.scrollWidth / 3;

        // Reset to beginning when we've scrolled through one complete set
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, partners]);

  if (loading) {
    return (
      <section className="w-full bg-[#1A302A] py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center text-[#EED6B5]">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#316763] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p style={{
                fontFamily: "'gotham', sans-serif",
                fontWeight: 100,

                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }} className="text-[10px] text-center w-fit  mx-auto sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.35em] text-[#f6f1e8] mb-3 uppercase">
            {sectionData.subheading}
          </p>
          <h2 style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,

              fontSize: '38px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f6f1e8]">
            {sectionData.heading}
          </h2>
        </div>

        {/* Partners Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-hidden hide-scrollbar"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          style={{ scrollBehavior: 'auto' }}
        >
          {[...fallbackPartners,...fallbackPartners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0  p-4 rounded-lg  bg-[#f1f6e8] flex mx-auto w-36 items-center justify-center transition-transform duration-300"
            >
              <img
                src={partner.logo.url}
                alt={partner.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

