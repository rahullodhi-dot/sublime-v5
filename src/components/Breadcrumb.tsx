import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav style={{fontFamily:"gotham"}} className="flex  max-w-[1280px]  mx-auto items-center space-x-2 bg-[] text-sm" aria-label="Breadcrumb">
      <Link 
      style={{fontFamily:"gotham-light"}}
        to="/" 
        className="text-karla font-light text-[14px] text-[#9a7523] hover:text-[#316763] transition-colors"
      >
        Home
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <svg className="w-4 h-4 text-[#9a7523]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          
          {item.path ? (
            <Link 
            style={{fontFamily:` ${item.isBold ? "gotham" : "gotham-light"}`}}
              to={`/${item.path}`}
              className={`text-karla font-light text-[14px]   capitalize transition-colors ${item.isBold ? 'font-bold text-[#9a7523] ' : 'text-[#9a7523]'}`}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{fontFamily:"gotham"}} className="text-karla capitalize font-bold text-[14px] text-[#9a7523] hover:text-[#316763]">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
