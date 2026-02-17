<<<<<<< HEAD
import React, { useState } from 'react';
import bottomTree from "../assets/images/bottomTree.png";

=======
//  FINAL WORKING FILE (with imports)

// JUST COPY-PASTE & REPLACE YOUR CURRENT FILE

// (IMPORTANT: koi logic/JSX nahi chheda. sirf imports added & array updated.)

import React, { useState } from 'react';
import tokri from "../assets/images/tokri.png";
import bottomTree from "../assets/images/bottomTree.png";

// IMPORT IMAGES (NO DIRECT PATHS)
>>>>>>> e1b31fd3f0efe77e0274c1a52baf8a71fdcf9266
import gift1 from "../assets/images/gift1.png";
import gift2 from "../assets/images/gift2.png";
import gift3 from "../assets/images/gift3.png";
import gift4 from "../assets/images/gift4.png";

interface GiftBox {
  id: number;
  name: string;
  image: string;
  title: string;
  price: string;
  description: string;
}

const GIFT_BOXES: GiftBox[] = [
  {
    id: 1,
    name: 'SUMMER SYMPHONY',
    image: gift1,
    title: 'LUXURY GIFT BOX',
    price: '₹2,500',
    description:
      "BOX CONTAINS: SUBLIME SIGNATURE BLACK TEA - 100G SUBLIME SIGNATURE EARL GREY-50G REGIONAL RAW HONEY - 225G SALTED ALMONDS - 55G HONEY ALMONDS - 50G CLOVE - 50G CINNAMON - 50G BRASS TEA INFUSER - 1PC PRESENT YOUR LOVED ONES WITH OPULENCE AND WELL-BEING WITH SUBLIME HOUSE OF TEA'S...",
  },
  {
    id: 2,
    name: 'WELLNESS WONDER',
    image: gift2,
    title: 'WELLNESS WONDER',
    price: '₹1,500',
    description:
      "BOX CONTAINS: SUBLIME SIGNATURE BLACK TEA - 100G REGIONAL RAW HONEY - 225G SALTED ALMONDS - 55G HONEY ALMONDS - 50G CLOVE - 50G CINNAMON - 50G BRASS TEA INFUSER - 1PC PRESENT YOUR LOVED ONES WITH OPULENCE AND WELL-BEING WITH SUBLIME HOUSE OF TEA'S...",
  },
  {
    id: 3,
    name: 'BOUQUET OF HIVE',
    image: gift3,
    title: 'BOUQUET OF HIVE TO HOME',
    price: '₹3,500',
    description:
      "BOX CONTAINS: SUBLIME SIGNATURE BLACK TEA - 100G SUBLIME SIGNATURE EARL GREY-50G REGIONAL RAW HONEY - 225G SALTED ALMONDS - 55G HONEY ALMONDS - 50G CLOVE - 50G CINNAMON - 50G BRASS TEA INFUSER - 1PC PRESENT YOUR LOVED ONES WITH OPULENCE AND WELL-BEING WITH SUBLIME HOUSE OF TEA'S...",
  },
  {
    id: 4,
    name: 'BOX OF SERENITY',
    image: gift4,
    title: 'BOX OF SERENITY',
    price: '₹4,500',
    description:
      "BOX CONTAINS: SUBLIME SIGNATURE BLACK TEA - 100G SUBLIME SIGNATURE EARL GREY-50G REGIONAL RAW HONEY - 225G SALTED ALMONDS - 55G HONEY ALMONDS - 50G CLOVE - 50G CINNAMON - 50G BRASS TEA INFUSER - 1PC PRESENT YOUR LOVED ONES WITH OPULENCE AND WELL-BEING WITH SUBLIME HOUSE OF TEA'S...",
  },
];

const GiftBoxSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentGiftBox = GIFT_BOXES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? GIFT_BOXES.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev =>
      prev === GIFT_BOXES.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full relative bg-[#f6f1e8] py-12 overflow-hidden">

      {/* Background Images (Fixed Stretch + Proper Positioning) */}
      <img
        src={bottomTree}
        className="absolute bottom-0 left-0 opacity-10 z-0 pointer-events-none object-contain max-w-none"
      />
      <img
        src={bottomTree}
        className="absolute bottom-0 right-0 opacity-20 z-0 pointer-events-none object-contain max-w-none scale-x-[-1]"
      />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">

        {/* HEADER (Original Styling Restored) */}
        <div className="mb-6 z-10 text-center sm:mb-8 lg:mb-10">

          <p
            style={{
              fontFamily: "'gotham', sans-serif",
              fontWeight: 100,
              fontSize: '12px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
            className="text-[10px] mb-3 mx-auto sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.35em] text-black uppercase"
          >
            THOUGHTFUL GIFTS, BEAUTIFULLY BOXED
          </p>

          <h2
            style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,
              fontSize: '38px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
            className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7523]"
          >
            Surprises Packed With Joy
          </h2>

        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">

          {/* Main Image */}
          <div className="w-full mb-6">
            <div className="w-full h-[280px] overflow-hidden rounded-md shadow-lg">
              <img
                src={currentGiftBox.image}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Thumbnails + Arrows */}
          <div className="flex items-center gap-3 mb-6">

            <div className="flex gap-3 overflow-x-auto whitespace-nowrap flex-1">
              {GIFT_BOXES.map((box, index) => (
                <button
                  key={box.id}
                  onClick={() => setCurrentIndex(index)}
                  className="min-w-[140px] h-[140px] rounded-xl border-2 border-black/10 overflow-hidden flex-shrink-0"
                >
                  <img
                    src={box.image}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <button onClick={handlePrev} className="w-10 h-10 bg-[#9a7522] text-white rounded-full">‹</button>
              <button onClick={handleNext} className="w-10 h-10 bg-[#9a7522] text-white rounded-full">›</button>
            </div>

          </div>

          {/* Details */}
          <div className="rounded-lg shadow-md overflow-hidden">

            <div className="bg-[#9a7523] px-5 py-4">
              <h3
                style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
                className="text-white uppercase"
              >
                {currentGiftBox.title}
              </h3>
            </div>

            <div className="p-5 bg-[#f6f1e8]">
              <p className="text-2xl font-bold mb-2">
                {currentGiftBox.price}
              </p>

              <p
                style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,
                  fontSize: '13px',
                  lineHeight: '160%',
                  letterSpacing: '0%',
                }}
                className="text-black"
              >
                {currentGiftBox.description}
                <span className="text-[#D4845C] font-semibold cursor-pointer ml-1">
                  READ MORE
                </span>
              </p>
            </div>

          </div>

        </div>

        {/* ================= DESKTOP (ORIGINAL RESTORED) ================= */}
        <div className="hidden lg:flex gap-8">

          {/* Left Big Image */}
          <div
            className="flex items-center overflow-hidden"
            style={{ width: '1200px', height: '480px', borderRadius: '5px' }}
          >
            <img
              src={currentGiftBox.image}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-6">

            {/* Thumbnails Grid */}
            <div className="grid grid-cols-4 gap-4">
              {GIFT_BOXES.map((box, index) => (
                <button
                  key={box.id}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    width: '200px',
                    borderRadius: '20px',
                    border: '2px solid rgba(0,0,0,0.1)',
                  }}
                  className="overflow-hidden"
                >
                  <img
                    src={box.image}
                    className="w-full h-[200px] object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button onClick={handlePrev} className="w-10 h-10 bg-[#9a7522] text-white rounded-full">‹</button>
              <button onClick={handleNext} className="w-10 h-10 bg-[#9a7522] text-white rounded-full">›</button>
            </div>

            {/* Details */}
            <div className="rounded-lg shadow-md overflow-hidden">

              <div className="bg-[#9a7523] px-5 py-5">
                <h3
                  style={{
                    fontFamily: "'gotham2', sans-serif",
                    fontWeight: 100,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}
                  className="text-white uppercase"
                >
                  {currentGiftBox.title}
                </h3>
              </div>

              <div className="bg-[#f6f1e8] p-5 flex gap-6">

                <div>
                  <p className="text-3xl font-bold text-[#2C2C2C]">
                    {currentGiftBox.price}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "'gotham-light', sans-serif",
                      fontWeight: 100,
                      fontSize: '13px',
                      lineHeight: '160%',
                      letterSpacing: '0%',
                    }}
                    className="text-black"
                  >
                    {currentGiftBox.description}
                    <span className="text-[#D4845C] font-semibold cursor-pointer ml-1">
                      READ MORE
                    </span>
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GiftBoxSection;
