import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { collectionPageSchema, productSchema } from '../utils/schemas';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Tea product data
  const products = [
    { id: 1, name: 'Premium Green Tea', category: 'green', price: 24.99, rating: 4.8, emoji: '🍃', desc: 'Organic green tea from China' },
    { id: 2, name: 'Earl Grey Classic', category: 'black', price: 19.99, rating: 4.6, emoji: '🫖', desc: 'Traditional black tea with bergamot' },
    { id: 3, name: 'Chamomile Herbal', category: 'herbal', price: 16.99, rating: 4.5, emoji: '🌼', desc: 'Soothing herbal blend' },
    { id: 4, name: 'Oolong Master', category: 'oolong', price: 29.99, rating: 4.7, emoji: '🌿', desc: 'Premium oolong tea' },
    { id: 5, name: 'Jasmine Pearl', category: 'green', price: 34.99, rating: 4.9, emoji: '🌸', desc: 'Hand-rolled jasmine pearls' },
    { id: 6, name: 'English Breakfast', category: 'black', price: 18.99, rating: 4.4, emoji: '☕', desc: 'Classic morning blend' },
    { id: 7, name: 'Peppermint Herbal', category: 'herbal', price: 14.99, rating: 4.6, emoji: '🌿', desc: 'Refreshing mint blend' },
    { id: 8, name: 'White Tea Silver Needle', category: 'white', price: 39.99, rating: 4.8, emoji: '🥄', desc: 'Delicate white tea buds' },
    { id: 9, name: 'Pu-erh Aged', category: 'pu-erh', price: 49.99, rating: 4.7, emoji: '🍂', desc: 'Aged fermented tea' },
    { id: 10, name: 'Rooibos Vanilla', category: 'herbal', price: 22.99, rating: 4.5, emoji: '🌾', desc: 'South African red bush tea' },
    { id: 11, name: 'Matcha Ceremonial', category: 'green', price: 44.99, rating: 4.9, emoji: '🍵', desc: 'Premium ceremonial grade' },
    { id: 12, name: 'Darjeeling First Flush', category: 'black', price: 36.99, rating: 4.8, emoji: '🏔️', desc: 'Himalayan mountain tea' },
  ];

  const categories = ['all', 'green', 'black', 'herbal', 'oolong', 'white', 'pu-erh'];

  // Generate structured data for products
  const productStructuredData = products.map(product => 
    productSchema({
      name: product.name,
      description: product.desc,
      price: product.price,
      image: `https://sublimehousetea.com/images/${product.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      rating: product.rating,
      reviewCount: Math.floor(Math.random() * 50) + 10, // Mock review count
      availability: 'InStock',
      brand: 'Sublime House Tea'
    })
  );

  const collectionStructuredData = collectionPageSchema({
    name: 'Tea Collection',
    description: 'Browse our extensive collection of premium teas from around the world',
    url: 'https://sublimehousetea.com/products',
    productCount: products.length
  });

  const structuredData = [collectionStructuredData, ...productStructuredData];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <>
      <SEO
        title="Tea Collection - Premium Tea Blends"
        description="Browse our extensive collection of premium teas. Green tea, black tea, herbal tea, oolong tea and more. Quality guaranteed with authentic flavors."
        keywords="tea collection, premium teas, green tea, black tea, herbal tea, oolong tea, white tea, pu-erh tea, tea shop"
        url="https://sublimehousetea.com/products"
        structuredData={structuredData}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Tea Collection
          </h1>
          <p className="text-lg text-gray-600">
            Discover our carefully curated collection of premium teas
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Tea Types</option>
                <option value="green">Green Tea</option>
                <option value="black">Black Tea</option>
                <option value="herbal">Herbal Tea</option>
                <option value="oolong">Oolong Tea</option>
                <option value="white">White Tea</option>
                <option value="pu-erh">Pu-erh Tea</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <span className="text-sm text-gray-600">
                {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:scale-105 border border-gray-100">
              <div className="h-56 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 flex items-center justify-center relative overflow-hidden">
                <span className="text-7xl group-hover:scale-125 transition-transform duration-500 filter drop-shadow-lg">{product.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <span className="text-xs font-semibold text-green-700 capitalize">{product.category}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-yellow-400 text-yellow-900 rounded-full px-2 py-1 shadow-lg">
                    <div className="flex items-center space-x-1">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-bold">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {product.desc}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-green-600 mb-1">
                      ${product.price}
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                    View Details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
