
import React, { useState, useMemo } from 'react';
import { 
  Filter, Star, MapPin, X, Check, TrendingUp, BadgeCheck, 
  ShoppingCart, SlidersHorizontal, ChevronDown, Clock, Heart, 
  Trash2, ShoppingBag 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MOCK_PRODUCTS, CATEGORIES, MARKET_RATES_TICKER } from '../constants';
import { Product } from '../types';

const Marketplace: React.FC = () => {
  const { t } = useTranslation();
  
  // States
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState(10000); // Max price state
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [sortBy, setSortBy] = useState('featured'); // featured, lowToHigh, highToLow, rating
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Order State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderStatus, setOrderStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [quantity, setQuantity] = useState(1);

  // Derived Data
  const locations = useMemo(() => {
    const locs = Array.from(new Set(MOCK_PRODUCTS.map(p => p.location.split(',')[0].trim())));
    return ['All', ...locs];
  }, []);

  const filteredProducts = useMemo(() => {
    let result = MOCK_PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === CATEGORIES[0] || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price <= priceRange;
      const matchesLocation = selectedLocation === 'All' || product.location.includes(selectedLocation);
      
      return matchesCategory && matchesSearch && matchesPrice && matchesLocation;
    });

    // Sorting
    if (sortBy === 'lowToHigh') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'highToLow') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, priceRange, selectedLocation, sortBy]);

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

  const resetFilters = () => {
    setSelectedCategory(CATEGORIES[0]);
    setPriceRange(10000);
    setSelectedLocation('All');
    setSortBy('featured');
    setSearchQuery('');
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-20">
      
      {/* 1. Live Market Rates Ticker */}
      <div className="bg-gray-900 text-white py-2 overflow-hidden whitespace-nowrap relative flex items-center border-b border-gray-800 z-40">
        <div className="bg-green-600 px-4 py-2 absolute left-0 z-10 font-bold text-xs md:text-sm shadow-xl flex items-center gap-2 skew-x-12 -ml-2">
           <div className="-skew-x-12 flex items-center gap-2">
             <TrendingUp size={16} className="text-white" />
             {t('liveFeatures.liveUpdates')}
           </div>
        </div>
        <div className="animate-marquee inline-block pl-36 md:pl-44 text-green-300">
           {MARKET_RATES_TICKER.map((rate, idx) => (
             <span key={idx} className="mx-6 text-sm font-mono font-medium">
               {rate} <span className="text-green-500 mx-1">▲</span>
             </span>
           ))}
           {MARKET_RATES_TICKER.map((rate, idx) => (
             <span key={`dup-${idx}`} className="mx-6 text-sm font-mono font-medium">
               {rate} <span className="text-green-500 mx-1">▲</span>
             </span>
           ))}
        </div>
      </div>

      {/* 2. Deal of the Day Banner */}
      <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 animate-pulse">
                {t('market.dealOfTheDay')}
              </div>
              <h1 className="text-3xl md:text-5xl font-black mb-2 text-white drop-shadow-md">
                50% {t('market.discount')} <span className="text-yellow-100">on Organic Mangoes</span>
              </h1>
              <p className="text-white/90 font-medium text-lg mb-6 flex items-center justify-center md:justify-start gap-2">
                 <Clock size={20} /> {t('market.hurryUp')} <span className="font-mono font-bold text-yellow-100 bg-orange-600 px-2 rounded">04:30:00</span>
              </p>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-50 transition transform hover:-translate-y-1">
                 {t('market.orderBtn')}
              </button>
            </div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
               <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
               <img 
                 src="https://images.unsplash.com/photo-1601493700631-2b16ec4f4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                 alt="Mango Deal" 
                 className="w-full h-full object-contain drop-shadow-2xl rotate-12 transition-transform hover:rotate-6 duration-500 rounded-2xl"
               />
               <div className="absolute -top-4 -right-4 bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-white rotate-12">
                 -50%
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Search & Filter Mobile Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 sticky top-16 md:relative z-30 bg-gray-50 md:bg-transparent py-2 md:py-0">
          <button 
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden w-full bg-white border border-gray-200 p-3 rounded-xl flex items-center justify-center gap-2 font-bold text-gray-700 shadow-sm"
          >
            <SlidersHorizontal size={18} /> {t('market.filters')}
          </button>
          
          <div className="relative w-full md:w-96 group">
             <input 
               type="text" 
               placeholder={t('market.searchPlaceholder')} 
               className="border-2 border-gray-200 rounded-full px-5 py-3 w-full pl-11 focus:outline-none focus:border-green-500 focus:ring-0 shadow-sm transition-all group-hover:border-green-300"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
             <Filter className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 group-hover:text-green-500 transition-colors" />
             {searchQuery && (
               <button onClick={() => setSearchQuery('')} className="absolute right-4 top-3.5 text-gray-400 hover:text-red-500">
                 <X size={18} />
               </button>
             )}
          </div>

          <div className="hidden md:flex items-center gap-3">
             <span className="text-gray-500 text-sm font-medium">{filteredProducts.length} {t('market.results')}</span>
             <div className="relative group">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm font-bold text-gray-700 focus:outline-none focus:border-green-500 cursor-pointer shadow-sm"
                >
                  <option value="featured">{t('market.sortFeatured')}</option>
                  <option value="lowToHigh">{t('market.sortLowHigh')}</option>
                  <option value="highToLow">{t('market.sortHighLow')}</option>
                  <option value="rating">{t('market.sortRating')}</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-green-600" />
             </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop & Mobile) */}
          <aside className={`lg:w-1/4 ${mobileFiltersOpen ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden lg:block'}`}>
             <div className="flex justify-between items-center mb-6 lg:hidden">
                <h2 className="text-xl font-bold">{t('market.filters')}</h2>
                <button onClick={() => setMobileFiltersOpen(false)}><X size={24} /></button>
             </div>
             
             <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <SlidersHorizontal size={18} className="text-green-600" />
                    {t('market.filters')}
                  </h3>
                  <button onClick={resetFilters} className="text-xs text-red-500 font-bold hover:underline flex items-center gap-1">
                     <Trash2 size={12} /> {t('market.clearFilters')}
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-8">
                   <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">{t('market.categories')}</h4>
                   <div className="space-y-2">
                      {CATEGORIES.map(cat => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                           <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedCategory === cat ? 'bg-green-600 border-green-600' : 'border-gray-300 group-hover:border-green-400'}`}>
                              {selectedCategory === cat && <Check size={14} className="text-white" />}
                           </div>
                           <input 
                             type="radio" 
                             name="category" 
                             className="hidden" 
                             checked={selectedCategory === cat}
                             onChange={() => setSelectedCategory(cat)}
                           />
                           <span className={`text-sm ${selectedCategory === cat ? 'font-bold text-green-700' : 'text-gray-600 group-hover:text-gray-900'}`}>{cat}</span>
                        </label>
                      ))}
                   </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                   <div className="flex justify-between mb-2">
                     <h4 className="text-xs font-bold text-gray-400 uppercase">{t('market.priceRange')}</h4>
                     <span className="text-xs font-bold text-green-700">₹0 - ₹{priceRange}</span>
                   </div>
                   <input 
                     type="range" 
                     min="100" 
                     max="10000" 
                     step="100" 
                     value={priceRange}
                     onChange={(e) => setPriceRange(Number(e.target.value))}
                     className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                   />
                   <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                      <span>₹100</span>
                      <span>{t('market.maxPrice')}</span>
                   </div>
                </div>

                {/* Location Filter */}
                <div>
                   <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">{t('market.locations')}</h4>
                   <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                      {locations.map(loc => (
                         <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                           <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedLocation === loc ? 'border-4 border-green-600' : 'border-gray-300 group-hover:border-green-400'}`}></div>
                           <input 
                             type="radio" 
                             name="location" 
                             className="hidden"
                             checked={selectedLocation === loc}
                             onChange={() => setSelectedLocation(loc)}
                           />
                           <span className={`text-sm ${selectedLocation === loc ? 'font-bold text-green-700' : 'text-gray-600'}`}>{loc}</span>
                         </label>
                      ))}
                   </div>
                </div>

                {/* Mobile Apply Button */}
                <button 
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-bold lg:hidden"
                >
                  Apply Filters
                </button>
             </div>
          </aside>

          {/* Product Grid Area */}
          <div className="lg:w-3/4">
             {filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                  <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                     <Filter className="w-10 h-10 text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{t('market.noProducts')}</h3>
                  <button onClick={resetFilters} className="mt-4 text-green-600 font-bold hover:underline">
                    {t('market.clearFilters')}
                  </button>
                </div>
             ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => {
                    // Generate Mock Data for Visuals (Stock & Discount)
                    const discount = Math.floor(Math.random() * 20) + 5;
                    const stock = Math.floor(Math.random() * 50) + 5;
                    const isLowStock = stock < 15;

                    return (
                      <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col h-full">
                        <div className="relative h-52 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                          
                          <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-gray-100 uppercase tracking-wide">
                            {product.category}
                          </span>
                          
                          {/* Discount Badge */}
                          <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                            {discount}% {t('market.discount')}
                          </span>
                          
                          {/* Wishlist Button */}
                          <button className="absolute bottom-3 right-3 bg-white/30 backdrop-blur-md p-2 rounded-full hover:bg-white hover:text-red-500 text-white transition-all shadow-sm">
                             <Heart size={16} />
                          </button>
                        </div>
                        
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-green-700 transition-colors">{product.name}</h3>
                            <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-100">
                               <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                               <span className="text-xs font-bold text-yellow-700">{product.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-gray-500 text-xs font-medium mb-3">
                            <MapPin className="w-3 h-3 mr-1 text-gray-400" />
                            {product.location}
                          </div>

                          <div className="mb-4">
                             <div className="text-sm text-gray-600 flex items-center gap-2 mb-2">
                                <BadgeCheck className="w-4 h-4 text-blue-500" />
                                <span className="font-semibold text-gray-700">{product.farmerName}</span>
                             </div>
                             {isLowStock && (
                               <p className="text-[10px] font-bold text-orange-600 flex items-center gap-1 animate-pulse">
                                  <Clock size={10} /> {t('market.stockLeft')}: {stock} {product.unit.split(' ')[1] || 'units'}
                               </p>
                             )}
                          </div>
                          
                          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                            <div>
                              <span className="text-2xl font-black text-gray-900">₹{product.price}</span>
                              <span className="text-xs text-gray-400 font-medium ml-1">/ {product.unit}</span>
                            </div>
                            <button 
                              onClick={() => handleOrderClick(product)}
                              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-lg shadow-green-200 hover:-translate-y-0.5 flex items-center gap-2"
                            >
                              <ShoppingBag size={16} /> {t('market.addToCart')}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
             )}
          </div>
        </div>
      </div>

      {/* Order Modal (Same as before but with better visuals) */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
            {orderStatus === 'success' ? (
              <div className="p-10 text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce shadow-inner">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-black text-green-800 mb-3">{t('market.success')}</h3>
                <p className="text-gray-600 mb-8 px-4 leading-relaxed font-medium">
                  {t('market.successMsg')}
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-green-400"></div>
                   <div className="flex justify-between mb-4 border-b border-dashed pb-4">
                     <span className="text-gray-500 text-xs uppercase tracking-wide">Receipt ID</span>
                     <span className="font-mono font-bold text-gray-800">#KS-{Math.floor(Math.random() * 10000)}</span>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-gray-800 font-bold text-lg">{t('market.totalPrice')}</span>
                     <span className="font-black text-green-700 text-2xl">₹{selectedProduct.price * quantity}</span>
                   </div>
                </div>
                <button 
                  onClick={closeOrderModal} 
                  className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg"
                >
                  {t('market.close')}
                </button>
              </div>
            ) : (
              <>
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                  <h3 className="text-lg font-bold text-gray-800">{t('market.confirmOrder')}</h3>
                  <button onClick={closeOrderModal} className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-200 transition">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-8">
                  <div className="flex gap-5 mb-8">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-24 h-24 rounded-2xl object-cover shadow-md border border-gray-100" 
                    />
                    <div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wide">{selectedProduct.category}</span>
                      <h4 className="font-bold text-xl text-gray-900 mt-1 leading-tight">{selectedProduct.name}</h4>
                      <p className="text-sm text-gray-500 flex items-center gap-1 mt-1 mb-2">
                        <MapPin className="w-3 h-3" /> {selectedProduct.location}
                      </p>
                      <p className="text-green-700 font-bold text-lg">₹{selectedProduct.price} <span className="text-xs text-gray-500 font-normal">/ {selectedProduct.unit}</span></p>
                    </div>
                  </div>
                  
                  <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{t('market.quantity')}</label>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <button 
                           onClick={() => setQuantity(Math.max(1, quantity - 1))}
                           className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-200 font-bold text-gray-600 hover:border-green-500 hover:text-green-600 transition"
                         >-</button>
                         <span className="font-bold text-xl w-8 text-center">{quantity}</span>
                         <button 
                           onClick={() => setQuantity(quantity + 1)}
                           className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-200 font-bold text-gray-600 hover:border-green-500 hover:text-green-600 transition"
                         >+</button>
                       </div>
                       <div className="text-right">
                          <p className="text-xs text-gray-500 mb-1">{t('market.totalPrice')}</p>
                          <p className="font-black text-green-700 text-2xl">₹{selectedProduct.price * quantity}</p>
                       </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={closeOrderModal} 
                      className="flex-1 py-4 border-2 border-gray-200 rounded-xl text-gray-600 font-bold hover:bg-gray-50 hover:border-gray-300 transition"
                    >
                      {t('market.cancel')}
                    </button>
                    <button 
                      onClick={handleConfirmOrder}
                      disabled={orderStatus === 'processing'}
                      className="flex-[2] py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 disabled:opacity-70 flex justify-center items-center gap-2 transition shadow-xl shadow-green-200 hover:-translate-y-1"
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af; 
        }
      `}</style>
    </div>
  );
};

export default Marketplace;
