import React, { useState } from 'react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterOptions) => void;
  currentFilters: FilterOptions;
}

export interface FilterOptions {
  sortBy: string;
  benefits: string[];
  collections: string[];
  priceRange: { min: number; max: number };
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onApply, currentFilters }) => {
  const [sortBy, setSortBy] = useState(currentFilters.sortBy);
  const [expandedSection, setExpandedSection] = useState<string | null>('SORT BY');

  console.log('FilterModal render - isOpen:', isOpen);

  const sortOptions = [
    { value: 'featured', label: 'FEATURED' },
    { value: 'best-sellers', label: 'BEST SELLERS' },
    { value: 'a-z', label: 'ALPHABETICALLY, A-Z' },
    { value: 'z-a', label: 'ALPHABETICALLY, Z-A' },
    { value: 'price-low', label: 'PRICE, LOW TO HIGH' },
    { value: 'price-high', label: 'PRICE, HIGH TO LOW' },
    { value: 'date-old', label: 'DATE, OLD TO NEW' },
    { value: 'date-new', label: 'DATE, NEW TO OLD' },
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleApply = () => {
    onApply({
      sortBy,
      benefits: [],
      collections: [],
      priceRange: { min: 0, max: 10000 },
    });
    onClose();
  };

  const handleClearAll = () => {
    setSortBy('featured');
  };

  if (!isOpen) {
    console.log('FilterModal not rendering - isOpen is false');
    return null;
  }

  console.log('FilterModal IS RENDERING - isOpen is true');

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute left-0 top-0 bottom-0 w-full max-w-[400px] bg-[#F5F3ED] shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#F5F3ED] border-b border-gray-300 px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-lg font-semibold uppercase tracking-wider text-gray-800">
            FILTER & SORT
          </h2>
          <div className="w-6" /> {/* Spacer for centering */}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* SORT BY Section */}
          <div className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleSection('SORT BY')}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#316763]">
                SORT BY
              </span>
              <svg
                className={`w-5 h-5 text-[#316763] transition-transform ${
                  expandedSection === 'SORT BY' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedSection === 'SORT BY' && (
              <div className="mt-4 space-y-3">
                {sortOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div className="relative flex items-center">
                      <input
                        type="radio"
                        name="sortBy"
                        value={option.value}
                        checked={sortBy === option.value}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-4 h-4 text-[#316763] border-gray-400 focus:ring-[#316763] cursor-pointer"
                      />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* BENEFITS Section */}
          <div className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleSection('BENEFITS')}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#316763]">
                BENEFITS
              </span>
              <svg
                className={`w-5 h-5 text-[#316763] transition-transform ${
                  expandedSection === 'BENEFITS' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedSection === 'BENEFITS' && (
              <div className="mt-4 text-sm text-gray-600">
                No filters available
              </div>
            )}
          </div>

          {/* COLLECTIONS Section */}
          <div className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleSection('COLLECTIONS')}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#316763]">
                COLLECTIONS
              </span>
              <svg
                className={`w-5 h-5 text-[#316763] transition-transform ${
                  expandedSection === 'COLLECTIONS' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedSection === 'COLLECTIONS' && (
              <div className="mt-4 text-sm text-gray-600">
                No filters available
              </div>
            )}
          </div>

          {/* PRICE RANGE Section */}
          <div className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleSection('PRICE RANGE')}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#316763]">
                PRICE RANGE
              </span>
              <svg
                className={`w-5 h-5 text-[#316763] transition-transform ${
                  expandedSection === 'PRICE RANGE' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedSection === 'PRICE RANGE' && (
              <div className="mt-4 text-sm text-gray-600">
                No filters available
              </div>
            )}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="sticky bottom-0 bg-[#F5F3ED] border-t border-gray-300 p-6 flex gap-4">
          <button
            onClick={handleClearAll}
            className="flex-1 px-6 py-3 border-2 border-gray-400 text-gray-700 font-medium uppercase tracking-wider rounded hover:bg-gray-100 transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-6 py-3 bg-[#316763] text-white font-medium uppercase tracking-wider rounded hover:bg-[#285853] transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
