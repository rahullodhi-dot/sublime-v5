import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TeaProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  slug?: string;
  viewMode?: "grid" | "list";
}

const TeaProductCard: React.FC<TeaProductCardProps> = ({
  name,
  description,
  price,
  image,
  viewMode = "grid",
}) => {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const isList = viewMode === "list";

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted((prev) => !prev);
  };

  return (
    <div
      onClick={() => navigate(`/productDetails`)}
      className={`group relative cursor-pointer bg-[#f1e4b0] rounded-xl transition-all duration-300
      ${
        isList
          ? "flex flex-col sm:flex-row gap-6 sm:gap-8 p-4 sm:p-5"
          : "flex flex-col p-3 px-4"
      }
      `}
    >
      {/* IMAGE */}
      <div
        className={`relative  rounded-lg flex items-center justify-center
        ${
          isList
            ? "w-full sm:w-[220px] h-[220px] shrink-0"
            : "aspect-square"
        }
      `}
      >
        <button
          className="absolute top-3 right-3 z-10"
          onClick={handleWishlistClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 26 26"
            fill={isWishlisted ? "#9a7523" : "#000"}
          >
            <path d="M12.8881 5.90682L12.3082 6.46525..." fill="white" />
          </svg>
        </button>

        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain  rounded-lg"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between flex-1 gap-4">

        <div className="flex flex-col gap-3">
          <h3
            style={{ fontFamily: "gotham2" }}
            className={`${
              isList
                ? "text-xl sm:text-2xl lg:text-[26px] text-[#9a7523]"
                : "text-lg sm:text-[20px] text-black"
            }`}
          >
            {name}
          </h3>

          {isList ? (
            <p
              style={{ fontFamily: "gotham-book" }}
              className="text-sm sm:text-[15px] text-gray-600 line-clamp-3"
            >
              {description}
            </p>
          ) : (
            <p className="text-sm text-[#9A7523]">
              New Weight 100g
            </p>
          )}
        </div>

        {/* PRICE + BUTTON */}
        <div
          className={`flex ${
            isList
              ? "flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              : "items-center justify-between"
          }`}
        >
          <span
            style={{ fontFamily: "gotham-light" }}
            className={`${
              isList
                ? "text-xl sm:text-2xl lg:text-[26px]"
                : "text-lg sm:text-[20px]"
            } text-[#9A7522] font-semibold`}
          >
            ₹{price}
          </span>

          <button
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: "gotham-book" }}
            className="bg-[#9a7523] text-white px-4 py-2.5 sm:py-3 tracking-wider rounded-lg text-sm transition hover:bg-[#316763]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeaProductCard;
