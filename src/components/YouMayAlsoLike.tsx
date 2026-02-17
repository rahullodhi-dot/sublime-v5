import { useState, useRef } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Arrow1 from '../assets/images/arrow1.png';
import HeartIcon from '../assets/images/black2.png';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isBestseller?: boolean;
  isLiked?: boolean;
}

const YouMayAlsoLike = () => {
  const navigate = useNavigate();
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Dummy products data
  const products: Product[] = [
    {
      id: 1,
      name: 'Soothing Strawberry Tea - 100g',
      price: 800,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'English Breakfast - 100g',
      price: 800,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Signature Earl Grey-50G',
      price: 510,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80',
      isBestseller: true,
      isLiked: true,
    },
    {
      id: 4,
      name: 'Royal Jasmine Black - 100g',
      price: 800,
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const isDesktop = window.innerWidth >= 1024;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const scrollAmount = isDesktop ? containerWidth / 4 : containerWidth;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const isDesktop = window.innerWidth >= 1024;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const scrollAmount = isDesktop ? containerWidth / 4 : containerWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleLike = (productId: number) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-8 lg:mb-12">
          <p 
            className="text-sm mb-2"
            style={{
              fontFamily: "'Karla', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#316763',
            }}
          >
            CHOSE EXCELLENCE EVERY TIME
          </p>
          <h2 
            className="text-3xl lg:text-4xl font-bold"
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '100%',
              color: '#316763',
            }}
          >
            You May Also Like
          </h2>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden lg:flex absolute left-[-20.9px] top-[44%] -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-[#316763] shadow-xl transition-all active:scale-90"
            aria-label="Scroll left"
          >
            <img src={Arrow1} alt="Previous" className="h-6 w-6 rotate-180" />
          </button>

          {/* Scrollable Container */}
          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-5 lg:gap-12 justify-evenly overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory hide-scrollbar"
            >
              {products.map((product, index) => {
                const isLiked = product.isLiked || likedProducts.includes(product.id);
                return (
                  <div
                    key={`${product.id}-${index}`}
                    className="group relative rounded-xl overflow-visible transition-all duration-300 flex-shrink-0 snap-start cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {/* Bestseller Badge */}
                    {product.isBestseller && (
                      <div 
                        className="absolute top-[5px] left-[25px] z-20 px-2 py-1 rounded text-xs font-semibold text-white"
                        style={{
                          backgroundColor: '#316763',
                          fontFamily: "'Karla', sans-serif",
                        }}
                      >
                        Bestseller
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="relative w-[310px] h-[295px] mx-auto mt-[9px] overflow-hidden" style={{ borderRadius: '14px' }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80';
                        }}
                      />

                      {/* Heart Icon - Top Right */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(product.id);
                        }}
                        className="absolute top-6 right-2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                      >
                        {isLiked ? (
                          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                        ) : (
                          <img src={HeartIcon} alt="Favorite" className="w-5 h-5" />
                        )}
                      </button>

                      {/* Shopping Cart Icon - Bottom Right */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // TODO: Add to cart
                        }}
                        className="absolute bottom-3 right-3 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform opacity-0 group-hover:opacity-100"
                      >
                        <ShoppingCart className="w-5 h-5 text-gray-800" />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="mt-2">
                      <div className="flex items-start justify-between mb-1">
                        <h3 
                          className="font-medium line-clamp-2 pr-2 flex-1"
                          style={{
                            fontFamily: "'Karla', sans-serif",
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: '#000000',
                          }}
                        >
                          {product.name}
                        </h3>
                      </div>
                      
                      {/* Price */}
                      <div className="flex items-baseline gap-2">
                        <span 
                          className="font-semibold"
                          style={{
                            fontFamily: "'Karla', sans-serif",
                            fontWeight: 600,
                            fontSize: '18px',
                            lineHeight: '100%',
                            color: '#316763',
                          }}
                        >
                          ₹{product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute right-[-20px] top-[44%] -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-[#316763] shadow-xl transition-all active:scale-90"
            aria-label="Scroll right"
          >
            <img src={Arrow1} alt="Next" className="h-6 w-6" />
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

export default YouMayAlsoLike;
