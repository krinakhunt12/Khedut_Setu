import React, { useState } from 'react';
import { Filter, Star, MapPin } from 'lucide-react';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';

const Marketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('તમામ');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'તમામ' || product.category === selectedCategory;
    const matchesSearch = product.name.includes(searchQuery) || product.location.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-4 md:mb-0">બજાર (Marketplace)</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <input 
              type="text" 
              placeholder="શોધો (ઉદા. કેરી, ઘઉં, રાજકોટ)..." 
              className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories (Horizontal Scroll on Mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-6 gap-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-green-700 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded text-black">
                  {product.category}
                </span>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <div className="flex items-center bg-green-50 px-1.5 py-0.5 rounded">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-bold text-green-800 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {product.location}
                </div>
                
                <div className="text-sm text-gray-600 mb-4">
                  ખેડૂત: <span className="font-medium">{product.farmerName}</span>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-bold text-green-700">₹{product.price}</span>
                    <span className="text-xs text-gray-500 ml-1">/ {product.unit}</span>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    ઓર્ડર કરો
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Filter className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg">કોઈ પ્રોડક્ટ મળી નથી. ફરીથી પ્રયાસ કરો.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
