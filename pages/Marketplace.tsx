
import React, { useState } from 'react';
import { Filter, Star, MapPin, X, Check, TrendingUp, BadgeCheck, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MOCK_PRODUCTS, CATEGORIES, MARKET_RATES_TICKER } from '../constants';
import { Product } from '../types';

const Marketplace: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Order State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderStatus, setOrderStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [quantity, setQuantity] = useState(1);

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === CATEGORIES[0] || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setOrderStatus('idle');
    setQuantity(1);
  };

  const handleConfirmOrder = () => {
    setOrderStatus('processing');
    setTimeout(() => {
      setOrderStatus('success');
    }, 1500);
  };

  const closeOrderModal = () => {
    setSelectedProduct(null);
    setOrderStatus('idle');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12 font-sans">
      
      {/* 1. Live Market Rates Ticker */}
      <div className="bg-green-900 text-white py-2 overflow-hidden whitespace-nowrap relative flex items-center">
        <div className="bg-green-800 px-4 py-2 absolute left-0 z-10 font-bold text-xs md:text-sm shadow-md flex items-center gap-2">
           <TrendingUp size={16} className="text-yellow-400" />
           {t('liveFeatures.liveUpdates')}
        </div>
        <div className="animate-marquee inline-block pl-32 md:pl-40">
           {MARKET_RATES_TICKER.map((rate, idx) => (
             <span key={idx} className="mx-4 text-sm font-medium opacity-90">
               {rate} <span className="text-green-400 mx-1">▲</span>
             </span>
           ))}
           {/* Duplicate for seamless loop */}
           {MARKET_RATES_TICKER.map((rate, idx) => (
             <span key={`dup-${idx}`} className="mx-4 text-sm font-medium opacity-90">
               {rate} <span className="text-green-400 mx-1">▲</span>
             </span>
           ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-green-900">{t('market.title')}</h1>
            <p className="text-gray-500 text-sm mt-1">{filteredProducts.length} {t('stats.products')} available</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
             <div className="relative w-full sm:w-80">
                <input 
                  type="text" 
                  placeholder={t('market.searchPlaceholder')} 
                  className="border border-gray-300 rounded-full px-5 py-2.5 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Filter className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 cursor-pointer hover:text-green-600" />
             </div>
          </div>
        </div>

        {/* Categories (Horizontal Scroll on Mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-6 gap-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-green-700 text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-green-50 hover:border-green-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-md">
                  {product.category}
                </span>
                <span className="absolute top-2 right-2 bg-white text-green-700 text-xs font-bold px-2 py-1 rounded-md shadow flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current text-yellow-500" /> {product.rating}
                </span>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1 text-green-600" />
                  {product.location}
                </div>
                
                <div className="text-sm text-gray-600 mb-4 flex items-center gap-1">
                  <span className="bg-green-100 p-1 rounded-full"><BadgeCheck className="w-3 h-3 text-green-700" /></span>
                  <span className="font-medium">{product.farmerName}</span>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-bold text-green-800">₹{product.price}</span>
                    <span className="text-xs text-gray-500 ml-1">/ {product.unit}</span>
                  </div>
                  <button 
                    onClick={() => handleOrderClick(product)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-green-200 shadow-lg"
                  >
                    {t('market.orderBtn')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
               <Filter className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-700">{t('market.noProducts')}</h3>
            <p className="text-gray-500 mt-2">Try changing the category or search term.</p>
          </div>
        )}
      </div>

      {/* Order Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
            {orderStatus === 'success' ? (
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">{t('market.success')}</h3>
                <p className="text-gray-600 mb-6 px-4">
                  {t('market.successMsg')}
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left text-sm border border-gray-100">
                   <p className="flex justify-between mb-2">
                     <span className="text-gray-500">Order ID:</span>
                     <span className="font-mono font-bold text-gray-700">#KS-{Math.floor(Math.random() * 10000)}</span>
                   </p>
                   <p className="flex justify-between border-t pt-2 mt-2">
                     <span className="text-gray-800 font-bold">{t('market.totalPrice')}:</span>
                     <span className="font-bold text-green-700 text-lg">₹{selectedProduct.price * quantity}</span>
                   </p>
                </div>
                <button 
                  onClick={closeOrderModal} 
                  className="w-full bg-green-600 text-white py-3.5 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg"
                >
                  {t('market.close')}
                </button>
              </div>
            ) : (
              <>
                <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-green-50">
                  <h3 className="text-lg font-bold text-green-900">{t('market.confirmOrder')}</h3>
                  <button onClick={closeOrderModal} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-white transition">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex gap-4 mb-6 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-24 h-24 rounded-lg object-cover" 
                    />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{selectedProduct.name}</h4>
                      <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {selectedProduct.location}
                      </p>
                      <p className="text-green-700 font-bold mt-2 text-lg">₹{selectedProduct.price} <span className="text-xs text-gray-500 font-normal">/ {selectedProduct.unit}</span></p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('market.quantity')}</label>
                    <div className="flex items-center justify-between bg-gray-50 p-1 rounded-xl border border-gray-200">
                       <button 
                         onClick={() => setQuantity(Math.max(1, quantity - 1))}
                         className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold text-gray-600 hover:text-green-600 transition"
                       >-</button>
                       <input 
                         type="number" 
                         value={quantity}
                         readOnly
                         className="w-full text-center bg-transparent font-bold text-gray-800 text-lg focus:outline-none"
                       />
                       <button 
                         onClick={() => setQuantity(quantity + 1)}
                         className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold text-gray-600 hover:text-green-600 transition"
                       >+</button>
                    </div>
                    <div className="flex justify-between mt-4 text-sm bg-green-50 p-3 rounded-lg border border-green-100">
                       <span className="text-green-900 font-medium">{t('market.totalPrice')}:</span>
                       <span className="font-bold text-green-800 text-xl">₹{selectedProduct.price * quantity}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={closeOrderModal} 
                      className="flex-1 py-3.5 border border-gray-300 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition"
                    >
                      {t('market.cancel')}
                    </button>
                    <button 
                      onClick={handleConfirmOrder}
                      disabled={orderStatus === 'processing'}
                      className="flex-1 py-3.5 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 disabled:opacity-70 flex justify-center items-center gap-2 transition shadow-lg shadow-green-200"
                    >
                      {orderStatus === 'processing' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          {t('market.processing')}
                        </>
                      ) : (
                        t('market.confirm')
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marketplace;
