import React from 'react';
import TeaProductCard from './TeaProductCard';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductsGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
  onProductClick: (product: Product) => void;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products, viewMode, onProductClick }) => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8">
      {/* Products Header - Only for List View */}
      {/* {viewMode === 'list' && (
        <div className="bg-[#d6c27a] px-5 py-3 mb-4 grid grid-cols-[1fr_150px_180px] gap-8 items-center">
          <div className="flex items-center">
            <div className="w-[248px] flex items-center justify-center">
              <span className="font-karla font-normal text-[20px] leading-[100%] tracking-[0.04em] uppercase text-[#316763]">
                PRODUCTS
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="font-karla font-normal text-[20px] leading-[100%] tracking-[0.04em] uppercase text-[#316763]">
              PRICE
            </span>
          </div>
          <div className="flex items-center justify-center">
            <span className="font-karla font-normal text-[20px] leading-[100%] tracking-[0.04em] uppercase text-[#316763]">
              CART
            </span>
          </div>
        </div>
      )} */}

      {/* Products List/Grid */}
<div
  className={
    viewMode === "list"
      ? "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  }
>


        {[...products,...products,...products].map((product) => (
          <TeaProductCard
            key={product.id}
            {...product}
            viewMode={viewMode}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
