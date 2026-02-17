import React, { useState } from 'react';

interface TeaProduct {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  ingredients: string;
  benefits: string[];
  brewingInstructions: string;
  origin: string;
  weight: string;
}

interface TeaDetailModalProps {
  product: TeaProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeaDetailModal: React.FC<TeaDetailModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // TODO: Add to cart logic
    console.log('Adding to cart:', product.id, quantity);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-5xl w-full my-8 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-10">
          {/* Left Side - Product Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-yellow-50 rounded-lg aspect-square flex items-center justify-center p-8">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="flex flex-col">
            <h2 className="section-heading text-[32px] sm:text-[40px] mb-4">
              {product.name}
            </h2>
            
            <p className="text-karla font-light text-[17px] leading-[28px] text-gray-700 mb-6">
              {product.fullDescription}
            </p>

            {/* Origin & Weight */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-karla font-medium text-[14px] text-gray-500 mb-1">Origin</p>
                <p className="text-karla font-medium text-[16px] text-gray-900">{product.origin}</p>
              </div>
              <div>
                <p className="text-karla font-medium text-[14px] text-gray-500 mb-1">Weight</p>
                <p className="text-karla font-medium text-[16px] text-gray-900">{product.weight}</p>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h3 className="text-lora font-semibold text-[18px] text-[#316763] mb-2">Ingredients</h3>
              <p className="text-karla font-light text-[15px] leading-[24px] text-gray-700">
                {product.ingredients}
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="text-lora font-semibold text-[18px] text-[#316763] mb-2">Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#316763] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-karla font-light text-[15px] leading-[24px] text-gray-700">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brewing Instructions */}
            <div className="mb-6">
              <h3 className="text-lora font-semibold text-[18px] text-[#316763] mb-2">Brewing Instructions</h3>
              <p className="text-karla font-light text-[15px] leading-[24px] text-gray-700">
                {product.brewingInstructions}
              </p>
            </div>

            {/* Price and Add to Cart */}
            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lora font-semibold text-[28px] text-[#316763]">
                  ₹{product.price}
                </span>
                
                {/* Quantity Selector */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange('decrement')}
                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-karla font-medium text-[18px] w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange('increment')}
                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-[#316763] text-white py-4 rounded text-karla font-medium text-[16px] hover:bg-[#1A302A] transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaDetailModal;
