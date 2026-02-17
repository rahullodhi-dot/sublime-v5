import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import productImg1 from '../assets/images/black2.png';
import productImg2 from '../assets/images/productImg2.png';
import productImg3 from '../assets/images/productImg3.png';
import productImg from '../assets/images/yellow.png';
import group530 from '../assets/images/Group 530.png';
import group531 from '../assets/images/Group 531.png';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage: string;
  badge?: string;
  quantity?: string;
}

const BASE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Mountain Honey',
    price: 140,
    quantity: '250g',
    image: productImg1,
    hoverImage: productImg1,
    badge: 'ONLY BUY GOOD',
  },
  {
    id: 2,
    name: 'Black Tea',
    price: 350,
        quantity: '350g',
    image: productImg2,
    hoverImage: group530,
    badge: 'ONLY BUY GOOD',
  },
  {
    id: 3,
    name: 'Saffron Turmeric Tea',
    price: 255,
    image: productImg3,
        quantity: '150g',
    hoverImage: group531,
    badge: 'ONLY BUY GOOD',
  },
  {
    id: 4,
    name: 'Garam Masala Powder',
    price: 357,
    image: productImg,
        quantity: '200g',
    hoverImage: productImg,
    badge: 'ONLY BUY GOOD',
  },
];

// Repeat products for scrolling
const PRODUCTS = [...BASE_PRODUCTS, ...BASE_PRODUCTS, ...BASE_PRODUCTS];

const TestimonialsSection: React.FC = ({bgClr="#f1e4b0", subHeading="ONLY BUY GOOD",heading="Our Bestselling Products"}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll by one card width + gap
      const isDesktop = window.innerWidth >= 1024;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const scrollAmount = isDesktop ? containerWidth / 4 : containerWidth; // 1 card on desktop, full width on mobile
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Scroll by one card width + gap
      const isDesktop = window.innerWidth >= 1024;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const scrollAmount = isDesktop ? containerWidth / 4 : containerWidth; // 1 card on desktop, full width on mobile
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  const navigate = useNavigate()

  return (
    <section className={`py-12 bg-[${bgClr}] sm:py-16 lg:py-20 overflow-x-hidden`}>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-8 sm:mb-12 mx-auto  text-center">
          <p style={{
                fontFamily: "'gotham', sans-serif",
                fontWeight: 100,

                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }} className="text-[10px] text-center w-fit  mx-auto sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.35em] text-black uppercase">
         {subHeading}
          </p>
          <h2    style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,

              fontSize: '38px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="section-heading text-2xl sm:text-3xl md:text-4xl mt-3 lg:text-5xl font-bold text-[#9a7523]">
          {heading}
          </h2>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-[#9A7522] shadow-xl transition-all hover:bg-[#739984] active:scale-90"
            aria-label="Scroll left"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M5.50781 16.5198L13.7678 24.7798M5.50781 16.5198L13.7678 8.25978M5.50781 16.5198L19.9628 16.5198M27.5345 16.5198L24.0928 16.5198" stroke="#F6F0E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div className="overflow-hidden -mx-2">
            <div
              ref={scrollContainerRef}
              className="flex gap-5 lg:gap-6 overflow-x-auto scroll-smooth pb-4 px-2 snap-x snap-mandatory hide-scrollbar"
            >
              {PRODUCTS.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="group relative rounded-xl overflow-hidden transition-all duration-300 flex-shrink-0 w-[calc(100%-20px)] sm:w-[calc(50%-12px)] lg:w-[calc(25%-1.5px)] snap-start"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={()=>navigate(`/productDetails`)}
            >
              {/* Product Image with Hover Effect */}
              <div className="relative w-[287px] h-[291px] mx-auto mt-[9px]  bg-white rounded-[14px]">
                {/* Ribbon Badge - Vertical (matching screenshot) */}
                {product.badge && (
                  <div className="absolute   -top-1 z-[50] left-5 w-9 h-[130px] flex items-center justify-center bg-[#9a7523] " style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 70%, 0 85%)' }}>
                    <div style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}  className=" font-light text-[8px] leading-[24px] tracking-wider capitalize text-center text-white [writing-mode:vertical-rl] rotate-180 -mt-8">
                      Bestseller
                    </div>
                  </div>
                )}
                {/* Main Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt={`${product.name} - hover`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Product Info */}
              <div className="p-4 ">
                <div className="flex items-start justify-between -mb-1">
                  <h3 style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}  className="font-karla  font-medium text-[22px] leading-[30px] tracking-[0%] capitalize text-[#000000] line-clamp-2 pr-2 flex-1">
                    {product.name}
                  </h3>
                  <Link
                    to={`/product/${product.id}`}
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-[#9A7522] text-white rounded-full flex items-center justify-center hover:bg-[#9A7522] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 flex-shrink-0"
                    aria-label="Add to cart"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </Link>
                </div>
                 <div className='-mt-6'>
                  <span style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}  className=" text-[16px] leading-[30px] tracking-[0%] text-center text-[#9a7523]">
                   Net Weight  {product.quantity}
                  </span>
                 </div>
                {/* Price */}
                <div className="flex mt-3 items-baseline gap-2">
                  <span style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontWeight: 100,

                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}  className="font-['Open_Sans']  -mt-3 font-normal text-[22px] leading-[30px] tracking-[0%] text-center text-gray-900">
                    ₹{product.price}
                  </span>
                  {/* {product.quantity && (
                    <span style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}  className="text-karla text-xs text-gray-500">{product.quantity}</span>
                  )} */}
                </div>
              </div>
            </div>
          ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-[#9A7522] shadow-xl transition-all hover:bg-[#739984] active:scale-90"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M27.5322 16.5198L19.2722 8.25977M27.5322 16.5198L19.2722 24.7798M27.5322 16.5198L13.0772 16.5198M5.50552 16.5198L8.94719 16.5198" stroke="#F6F0E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          {/* Mobile Scroll Hint */}
          <div className="lg:hidden text-center mt-6">
            <p className="text-xs text-gray-500">← Swipe to explore more →</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
