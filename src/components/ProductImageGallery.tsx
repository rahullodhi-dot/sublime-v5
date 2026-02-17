import { useState } from 'react';
import { Play } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const displayImages =
    images.length > 0
      ? images
      : [
          'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80',
          'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80',
          'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80',
          'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=400&q=80',
        ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: productName,
        text: `Check out ${productName}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-2xl overflow-hidden py-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">

     

          {/* Main Image */}
          <div className="relative w-full max-w-[543px]">

            <div className="relative bg-white rounded-[10px] overflow-hidden shadow-2xl
                            w-full aspect-[543/566]">

              <img
                src={displayImages[selectedImage]}
                alt={productName}
                className="w-full h-full object-cover"
              />

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="absolute top-3 right-3 sm:top-4 sm:right-4
                           w-10 h-10 sm:w-12 sm:h-12
                           bg-white rounded-full flex items-center justify-center
                           shadow-lg hover:scale-110 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                  <path d="M18 8L12 3V6C7 7 5 10 4 14C6 12 9 11 12 11V14L18 8Z" fill="#9A7522" />
                </svg>
              </button>

              {/* Wishlist Button */}
              <button
                className="absolute top-16 sm:top-20 right-3 sm:right-4
                           w-10 h-10 sm:w-12 sm:h-12
                           bg-white rounded-full flex items-center justify-center
                           shadow-lg hover:scale-110 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
                  <path d="M12 21s-6-4.35-9-8.5C0 8 3 3 7.5 3c2.1 0 3.4 1.1 4.5 2.3C13.1 4.1 14.4 3 16.5 3C21 3 24 8 21 12.5 18 16.65 12 21 12 21Z" fill="#9A7522"/>
                </svg>
              </button>
            </div>

            {/* Mobile Thumbnails (Below Main Image) */}
            <div className=" flex gap-3 overflow-x-auto mt-4 px-2 pb-2">
              {displayImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className="flex-shrink-0"
                >
                  <div
                    className={`w-16 h-16 lg:w-24 lg:h-24 rounded-lg overflow-hidden shadow-md transition
                    ${selectedImage === index ? 'ring-2 ring-[#9A7522] scale-105' : 'opacity-70'}`}
                  >
                    <img
                      src={image}
                      alt={`thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
