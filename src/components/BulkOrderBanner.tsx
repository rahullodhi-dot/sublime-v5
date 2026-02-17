import React from 'react';
import { Link } from 'react-router-dom';
import bulk from "../assets/images/bulk.png"

const BulkOrderBanner: React.FC = () => {
  console.log('BulkOrderBanner rendering...');
  
  return (
    <section className="bg-[#f5f1e8] py-8 sm:py-12 lg:py-16 w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div 
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl h-[500px] sm:h-[350px] lg:h-[600px] flex items-center justify-center bg-gradient-to-br from-green-900 to-green-700"
          style={{
            backgroundImage: `url(${bulk})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div> */}
          
          {/* Content */}
          <div className="relative z-10 text-start  mr-auto px-8 sm:px-12 max-w-3xl">
            <p className="font-karla font-medium text-[10px] sm:text-[12px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/90 mb-3 sm:mb-4">
              GIVE LOVED ONES
            </p>
            
            <h2 className="font-lora font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight">
              For Bulk Order
            </h2>
            
            <p className="font-karla font-light text-sm sm:text-base md:text-lg text-white/95 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              Reliable supply, consistent quality, and<br className="hidden sm:block" />
              exclusive bulk pricing for your business
            </p>
            
            <Link
              to="/bulk-order"
              style={{fontFamily:"gotham-book"}}
              className="inline-block bg-[#f6f1e8] font-semibold hover:bg-[#f6f1e8] text-[#9a7523] font-karla  text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-3.5 rounded-md uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg"
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrderBanner;
