import React, { useState } from 'react';
import { Filter, Star, MapPin, X, Check } from 'lucide-react';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';

const Marketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('તમામ');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Order State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderStatus, setOrderStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [quantity, setQuantity] = useState(1);

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'તમામ' || product.category === selectedCategory;
    const matchesSearch = product.name.includes(searchQuery) || product.location.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setOrderStatus('idle');
    setQuantity(1);
  };

  const handleConfirmOrder = () => {
    setOrderStatus('processing');
    // Simulate API call
    setTimeout(() => {
      setOrderStatus('success');
    }, 1500);
  };

  const closeOrderModal = () => {
    setSelectedProduct(null);
    setOrderStatus('idle');
  };

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
                  <button 
                    onClick={() => handleOrderClick(product)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
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

      {/* Order Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200">
            {orderStatus === 'success' ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">ઓર્ડર સફળ!</h3>
                <p className="text-gray-600 mb-6">
                  તમારો ઓર્ડર સ્વીકારવામાં આવ્યો છે.<br/>ખેડૂત ટૂંક સમયમાં તમારો સંપર્ક કરશે.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 mb-6 text-left text-sm border border-gray-100">
                   <p className="flex justify-between mb-1">
                     <span className="text-gray-500">ઓર્ડર ID:</span>
                     <span className="font-mono font-bold text-gray-700">#KS-{Math.floor(Math.random() * 10000)}</span>
                   </p>
                   <p className="flex justify-between">
                     <span className="text-gray-500">કુલ રકમ:</span>
                     <span className="font-bold text-green-700">₹{selectedProduct.price * quantity}</span>
                   </p>
                </div>
                <button 
                  onClick={closeOrderModal} 
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                >
                  બંધ કરો
                </button>
              </div>
            ) : (
              <>
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-green-50">
                  <h3 className="text-lg font-bold text-green-900">ઓર્ડર કન્ફર્મ કરો</h3>
                  <button onClick={closeOrderModal} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200 transition">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex gap-4 mb-6 bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-20 h-20 rounded-lg object-cover" 
                    />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{selectedProduct.name}</h4>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {selectedProduct.location}
                      </p>
                      <p className="text-green-700 font-bold mt-1">₹{selectedProduct.price} / {selectedProduct.unit}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">જથ્થો (Quantity)</label>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                       <button 
                         onClick={() => setQuantity(Math.max(1, quantity - 1))}
                         className="px-4 py-2 bg-gray-100 border-r border-gray-300 hover:bg-gray-200 font-bold text-gray-600"
                       >-</button>
                       <input 
                         type="number" 
                         value={quantity}
                         readOnly
                         className="w-full text-center py-2 focus:outline-none font-bold text-gray-800"
                       />
                       <button 
                         onClick={() => setQuantity(quantity + 1)}
                         className="px-4 py-2 bg-gray-100 border-l border-gray-300 hover:bg-gray-200 font-bold text-gray-600"
                       >+</button>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                       <span className="text-gray-500">કુલ કિંમત:</span>
                       <span className="font-bold text-green-800 text-lg">₹{selectedProduct.price * quantity}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button 
                      onClick={closeOrderModal} 
                      className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                    >
                      રદ કરો
                    </button>
                    <button 
                      onClick={handleConfirmOrder}
                      disabled={orderStatus === 'processing'}
                      className="flex-1 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 disabled:opacity-70 flex justify-center items-center gap-2 transition shadow-md hover:shadow-lg"
                    >
                      {orderStatus === 'processing' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          પ્રોસેસ થાય છે...
                        </>
                      ) : (
                        'ઓર્ડર પુષ્ટિ કરો'
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;