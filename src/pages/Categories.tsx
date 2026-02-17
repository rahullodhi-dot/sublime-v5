import React, { useState } from 'react';
import SEO from '../components/SEO';
import CategoryHero from '../components/CategoryHero';
import CategoryNavbar from '../components/CategoryNavbar';
import Breadcrumb from '../components/Breadcrumb';
import ProductsGrid from '../components/ProductsGrid';
import TeaDetailModal from '../components/TeaDetailModal';
import BulkOrderBanner from '../components/BulkOrderBanner';
import FilterModal, { type FilterOptions } from '../components/FilterModal';
import { productSchema } from '../utils/schemas';
import { teaProductsData } from '../data/teaProducts';
import BlogSection from '../components/BlogSection';

const Categories: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('VIEW ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  
  // Debug: Log state changes
  console.log('Categories render - showFilterModal:', showFilterModal);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState<FilterOptions>({
    sortBy: 'featured',
    benefits: [],
    collections: [],
    priceRange: { min: 0, max: 10000 },
  });

  const filtersList = ['VIEW ALL', 'GREEN TEA', 'BLACK TEA', 'HERBAL TEA', 'WHITE TEA'];

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

  const handleFilterApply = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    setSortBy(newFilters.sortBy);
  };

  // Filter products based on active filter
  const getFilteredProducts = () => {
    let filtered = [...teaProductsData]; // Duplicate data for testing

    // Apply category filter
    if (activeFilter !== 'VIEW ALL') {
      filtered = filtered.filter(product => {
        return (product as any).category === activeFilter;
      });
    }

    // Apply sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();
  

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
          filters={filtersList}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          showFilterDropdown={showFilterDropdown}
          onToggleFilterDropdown={() => setShowFilterDropdown(!showFilterDropdown)}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          onOpenFilterModal={() => {
            console.log('Opening filter modal...');
            setShowFilterModal(true);
          }}
        />

        <div className="bg-white border-b border-gray-200">
          
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-3">
            <Breadcrumb items={[{ label: 'Loose Tea' }, { label: 'View All' }]} />
          </div>
        </div>

        {/* DEBUG TEST BUTTON */}
        <div className="bg-red-500 p-8 text-center">
          <button 
            onClick={() => {
              alert('Button clicked!');
              console.log('BEFORE:', showFilterModal);
              setShowFilterModal(true);
              console.log('AFTER: Should be true');
            }}
            className="bg-white text-black px-8 py-4 text-2xl font-bold rounded"
          >
            CLICK ME TO OPEN MODAL
          </button>
          <p className="text-white mt-4">Modal State: {showFilterModal ? 'OPEN' : 'CLOSED'}</p>
        </div>

        <ProductsGrid
          products={filteredProducts}
          viewMode={viewMode}
          onProductClick={handleProductClick}
        />

        {/* Debug Test */}
        <div style={{ 
          width: '100%', 
          height: '200px', 
          backgroundColor: 'red', 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          zIndex: 9999
        }}>
          TEST - IF YOU SEE THIS, SECTIONS BELOW SHOULD WORK
        </div>

        {/* Bulk Order Banner */}
        <BulkOrderBanner />

        {/* Blog Section */}
        <BlogSection />

        <TeaDetailModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        <FilterModal
          isOpen={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          onApply={handleFilterApply}
          currentFilters={filters}
        />
        
      </div>
    </>
  );
};

export default Categories;
