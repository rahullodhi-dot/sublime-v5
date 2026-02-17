import React, { useState } from 'react';
import SEO from '../components/SEO';
import CategoryHero from '../components/CategoryHero';
import CategoryNavbar from '../components/CategoryNavbar';
import Breadcrumb from '../components/Breadcrumb';
import ProductsGrid from '../components/ProductsGrid';
import TeaDetailModal from '../components/TeaDetailModal';
import { productSchema } from '../utils/schemas';
import { teaProductsData } from '../data/teaProducts';
import BulkOrderBanner from '../components/BulkOrderBanner';
import BlogSection from '../components/BlogSection';

const CategoriesTest: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('VIEW ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const filters = ['VIEW ALL', 'GREEN TEA', 'BLACK TEA', 'HERBAL TEA', 'WHITE TEA'];

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setShowFilterDropdown(false);
  };

  const structuredData = teaProductsData.map(product =>
    productSchema({
      name: product.name,
      description: product.description,
      image: `https://sublimehousetea.com${product.image}`,
      price: product.price,
      rating: 4.8,
      reviewCount: 125,
      availability: 'InStock',
      brand: 'Sublime House of Tea'
    })
  );

  return (
    <>
      <SEO
        title="Loose Tea Collection - Premium Tea Varieties | Sublime House of Tea"
        description="Explore our exquisite collection of loose leaf teas. From Nilgiris BOP to Masala Chai, Lavender Tea to Energising Elaichi. Premium quality teas sourced from the finest tea gardens of India."
        keywords="loose tea, premium tea, Nilgiris tea, masala chai, lavender tea, elaichi tea, rose tea, black tea, green tea, herbal tea, Indian tea, tea collection"
        url="https://sublimehousetea.com/categories"
        structuredData={structuredData}
      />

      <div className="bg-[#f5f1e8] min-h-screen">
        <CategoryHero title="LOOSE TEA" />

        <CategoryNavbar
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          showFilterDropdown={showFilterDropdown}
          onToggleFilterDropdown={() => setShowFilterDropdown(!showFilterDropdown)}
          sortBy={sortBy}
          onSortChange={handleSortChange}
        />
{/* 
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-3">
            <Breadcrumb items={[{ label: 'Loose Tea' }, { label: 'View All' }]} />
          </div>
        </div> */}


        <ProductsGrid
          products={teaProductsData}
          viewMode={viewMode}
          onProductClick={handleProductClick}
        />

        <BulkOrderBanner/>
        <BlogSection/>

        <TeaDetailModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default CategoriesTest;
