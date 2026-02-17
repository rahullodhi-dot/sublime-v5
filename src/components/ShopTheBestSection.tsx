import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { useAuthContext } from "@/context/AuthContext";
import { cn } from "../lib/utils.ts"
import {  Card, CardContent,  } from "../components/ui/cart.tsx";
import { ShoppingCart, Star } from "lucide-react";
import video1 from "../assets/images/video-1.mp4";
import video2 from "../assets/images/video-2.mp4";
import video3 from "../assets/images/video-3.mp4";
import video4 from "../assets/images/video-4.mp4";
import video5 from "../assets/images/video-5.mp4";
import Arrow1 from "../assets/images/arrow1.png";
import Arrow2 from "../assets/images/arrow2.png";
import Rass1 from "../assets/images/Rass-1.png";
// import LeafGif from "../assets/images/leaf.gif";
// import QuantityCart from "./Constant/QuantityCart";

interface Product {
  id: number;
  name: string;
  rating: number;
  price: number;
  discountPercentagePrice: number;
  discountPrice: number;
  bgGradient: string;
  video: string;
  image: string;
  documentId: string;
  slug: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Raspberry Delight",
    rating: 4,
    price: 690,
    originalPrice: 800,
    discount: "20% Off",
    bgGradient: "from-amber-800 via-amber-700 to-amber-900",
    video: video1,
    image: Rass1,
  },
  {
    id: 2,
    name: "Classic Red Tea",
    rating: 5,
    price: 550,
    originalPrice: 700,
    discount: "20% Off",
    bgGradient: "from-red-900 via-red-800 to-stone-900",
    video: video2,
    image: Rass1,
  },
  {
    id: 3,
    name: "Ginger Spice Blend",
    rating: 4,
    price: 480,
    originalPrice: 600,
    discount: "20% Off",
    bgGradient: "from-stone-800 via-stone-700 to-amber-900",
    video: video3,
    image: Rass1,
  },
  {
    id: 4,
    name: "Lemon Rosemary",
    rating: 5,
    price: 620,
    originalPrice: 780,
    discount: "20% Off",
    bgGradient: "from-slate-500 via-slate-400 to-amber-200",
    video: video4,
    image: Rass1,
  },
  {
    id: 5,
    name: "Honey Citrus",
    rating: 4,
    price: 720,
    originalPrice: 900,
    discount: "20% Off",
    bgGradient: "from-amber-500 via-orange-400 to-amber-300",
    video: video5,
    image: Rass1,
  },
  {
    id: 6,
    name: "Green Mountain",
    rating: 5,
    price: 590,
    originalPrice: 750,
    discount: "20% Off",
    bgGradient: "from-emerald-800 via-emerald-700 to-green-900",
    video: video1,
    image: Rass1,
  },
];

function StarRating({
  rating,
  maxRating = 5,
}: {
  rating: number;
  maxRating?: number;
}) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating
              ? "fill-[#9a7523] text-[#9a7523]"
              : "fill-gray-300 text-gray-300"
          )}
        />
      ))}
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  isSelected?: boolean;
  onSelect?: () => void;
  onAddToCart?: () => void;
}

// const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

function ProductCard({ product, onSelect, onAddToCart }: ProductCardProps) {
  const calculateOriginalPrice = (
    price: number,
    discount: number,
    discountPrice: number
  ) => {
    // discount price + discountpercent

    console.log(price, discount, discountPrice);
    return price - (discount || 0) - price * (discountPrice / 100);
  };
  console.log("Rendering ProductCard for:", product);
  return (
    <Card
      className={cn(
        "relative flex-shrink-0 snap-start",
        "w-[92vw] sm:w-[300px] lg:w-[287px]",
        "h-[460px] sm:h-[500px]",
        "overflow-hidden cursor-pointer group rounded-[12px]"
      )}
      onClick={onSelect}
    >
      {/* Background Gradient */}
      <div
        className={cn("absolute inset-0 bg-gradient-to-br", product.bgGradient)}
      />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-100 z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      {/* Discount Badge - Fixed at Top Left */}
      {/* <p className="absolute top-0 left-0 z-30 bg-[#D5C279] text-[#000000] font-karla font-medium shadow-md border-0 w-[103px] h-[30px] text-xs sm:text-sm flex items-center justify-center rounded-tl-[5px] rounded-br-[10px] rounded-tr-none rounded-bl-none">
        {product.discountPrice || 10 }% Off
      </p> */}

      {/* Product Video - Always Playing */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden z-0">
        <video
          src={product.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 bg-[#00000087]"
        />
      </div>

      {/* Product Info Footer - Teal Background on Hover */}
      <CardContent
        className={cn(
          "absolute bottom-0 left-0 right-0 p-4 z-20 rounded-b-[10px]",
          "bg-[#F6F1E8] h-[40%]",
          "md:bg-transparent md:h-0 md:opacity-0 md:pointer-events-none",
          "md:group-hover:bg-[#F6F1E8] md:group-hover:h-[40%]",
          "md:group-hover:opacity-100 md:group-hover:pointer-events-auto",
          "transition-all duration-300 ease-in-out"
        )}
      >
        {/* Product Image in Info Section */}
        {product.image && (
          <div className="absolute -top-12 left-4 w-24 h-24 z-30">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>
        )}
        <h3 className="font-karla font-semibold text-lg text-black mb-2 mt-8">
          {product.name}
        </h3>

        <div className="mb-3">
          <StarRating rating={product.rating} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
             <span style={{fontFamily:"gotham-light"}} className=" text-xl text-gray-400 line-through">
              ₹
              {calculateOriginalPrice(
                product.price,
                product.discountPrice,
                product.discountPercentagePrice
              ) || product.price + 140}
            </span>
            <span style={{fontFamily:"gotham-book"}} className=" font-bold text-lg text-black">
              ₹{product.price.toFixed(2)}
            </span>
           
          </div>

          <button
            // size="icon"
            // variant="secondary"
            className=" h-12 rounded-[10px] bg-[#9a7523]  text-[#316763] shadow-lg transition-all flex gap-5  justify-center items-center px-5"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.();
            }}
          >
            <ShoppingCart className="h-6 w-6 text-[#EED6B5]" />
            {/* {<QuantityCart />} */}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ShopTheBestSection() {
  const navigate = useNavigate();
  const location = useLocation();
  // const { isAuthenticated } = useAuthContext();

  const [selectedId, setSelectedId] = useState(3);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [, setCanScrollLeft] = useState(false);
  const [, setCanScrollRight] = useState(true);
  const [shopTheBestProducts, setshopTheBestProducts] = useState<Product[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const mapShopTheBestProducts = (data: any): Product[] => {
    return data.map((item: any) => {
      return {
        id: item.id,
        documentId: item.documentId,
        name: item.name,
        slug: item.slug,
        description: item.description,
        price: item.price,
        rating: item.rating,
        image: item.image.formats.small.url,
        video: item.video.url,
        discountPrice: item.discountPrice ?? 0,
        discountPercentagePrice: item.discountPercentagePrice ?? 0,
      };
    });
  };

  // useEffect(() => {
  //   const fetShopTheBest = async () => {
  //     try {
  //       const response = await fetch(
  //         `${STRAPI_URL}/api/products?shopTheBest=true`
  //       );
  //       const data = await response.json();
  //       console.log(mapShopTheBestProducts(data.data));
  //       setshopTheBestProducts(mapShopTheBestProducts(data.data));
  //     } catch (error) {
  //       console.log("error while fetching shop the best products", error);
  //     }
  //   };
  //   fetShopTheBest();
  // }, []);

  // Handle add to cart - requires auth
  const handleAddToCart = (productId: number) => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: location } });
      return;
    }
    // TODO: Add to cart logic
    console.log("Adding to cart:", productId);
  };

  const checkScrollability = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setCurrentIndex(index);
    }
  }, []);

  const scrollToProduct = (index: number) => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.querySelector(".snap-center")?.clientWidth || 300;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + 20), // 20 gap hai
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollability();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      scrollElement.addEventListener("scroll", checkScrollability);
      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
        scrollElement.removeEventListener("scroll", checkScrollability);
      };
    }
  }, [checkScrollability, handleScroll]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  let renderedData =  PRODUCTS || shopTheBestProducts ;
  return (
    <section className="w-full bg-[#f6f1e8] h-screen py-10 sm:py-8 lg:py-10 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div  className="mb-10 flex flex-col text-center items-center  sm:items-center sm:text-center">
          <div className="flex items-center gap-2 mb-3">
            <span style={{
                fontFamily: "'gotham', sans-serif",
                fontWeight: 100,

                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }} className="text-[10px] text-center w-fit  mx-auto sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.35em] text-black uppercase">
              GO THROUGH OUR BEST
            </span>
          </div>
          <h2 style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,

              fontSize: '38px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7523]">
            Shop The Best
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="
              flex absolute left-[-19px]
              top-[45%] -translate-y-1/2 z-[60]
              h-12 w-12
              items-center justify-center
              rounded-full bg-white shadow-xl
              hover:bg-[#316763] transition-all active:scale-90
            "
            aria-label="Scroll left"
          >
            <img src={Arrow2} alt="Previous" className="h-6 w-6" />
          </button>

          {/* Products Carousel */}
          <div
            ref={scrollRef}
            className="
              flex gap-4 overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              pb-6 px-4 sm:px-2
            "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {renderedData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isSelected={product.id === selectedId}
                onSelect={() => setSelectedId(product.id)}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="
              flex absolute right-[-12px]
              top-[45%] -translate-y-1/2 z-[60]
              h-12 w-12
              items-center justify-center
              rounded-full bg-white shadow-xl
              hover:bg-[#316763] transition-all active:scale-90
              "
            aria-label="Scroll right"
          >
            <img src={Arrow1} alt="Next" className="h-6 w-6" />
          </button>
        </div>
        <div className="flex sm:hidden justify-center items-center gap-2 mt-8 lg:mt-10">
          {renderedData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProduct(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentIndex === index
                  ? "w-8 bg-[#316763]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
