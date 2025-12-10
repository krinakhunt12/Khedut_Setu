
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, ShoppingCart, ShoppingBag, ShieldCheck, Truck, 
  UserCheck, Sprout, Wheat, CheckCircle,
  Smartphone, IndianRupee, HeartHandshake, ArrowRight,
  Users, BarChart2, Calendar, MapPin, Cloud, Sun, CloudRain, Play, Download,
  Star
} from 'lucide-react';
import { SEO_KEYWORDS, MOCK_SCHEMES, MOCK_NEWS, MOCK_WEATHER, MOCK_VIDEOS } from '../constants';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWeatherIcon = (iconName: string) => {
    switch(iconName) {
      case 'Sun': return <Sun className="w-10 h-10 text-white drop-shadow-md" />;
      case 'Cloud': return <Cloud className="w-10 h-10 text-white drop-shadow-md" />;
      case 'CloudRain': return <CloudRain className="w-10 h-10 text-white drop-shadow-md" />;
      default: return <Sun className="w-10 h-10 text-white drop-shadow-md" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-stone-50">
      
      {/* 1. Hero Section (Split Layout with Photos) */}
      <section className="relative bg-green-900 text-white overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-36">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start animate-slide-up">
              <div className="inline-block px-4 py-1.5 mb-6 border border-yellow-400/50 rounded-full bg-yellow-400/10 backdrop-blur-sm">
                <span className="text-yellow-300 font-bold tracking-wide text-xs md:text-sm uppercase flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-300" />
                  {t('hero.tagline')}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                 <span className="text-white block">{t('hero.title').split('.')[0]}</span>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 block mt-2">
                   {t('hero.title').split('.')[1]}
                 </span>
              </h1>
              
              <p className="text-lg md:text-xl mb-10 max-w-2xl text-green-100 font-medium leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link 
                  to="/register" 
                  className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-full text-lg transition shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                  <Sprout className="w-5 h-5" />
                  {t('hero.ctaFarmer')}
                </Link>
                <Link 
                  to="/register" 
                  className="px-8 py-4 bg-white text-green-900 font-bold rounded-full text-lg transition shadow-lg hover:shadow-xl hover:bg-gray-50 flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {t('hero.ctaBuyer')}
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-10 flex items-center gap-6 text-sm text-green-200/80 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" /> 100% Verified
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Direct Trade
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Best Price
                </div>
              </div>
            </div>
            
            {/* Right Column: Photo Collage */}
            <div className="relative hidden lg:block h-[600px] w-full animate-fade-in delay-200">
               {/* Main Image (Farmer) */}
               <div className="absolute top-0 right-0 w-[85%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 z-10 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Indian Farmer using technology" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
               </div>

               {/* Secondary Image (Vegetables) */}
               <div className="absolute bottom-8 left-4 w-[55%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Fresh Vegetables" 
                    className="w-full h-full object-cover"
                  />
               </div>

               {/* Floating Stats Card */}
               <div className="absolute top-1/3 left-0 -ml-6 bg-white p-4 pr-6 rounded-2xl shadow-xl z-30 animate-bounce-slow border-l-4 border-green-500 flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-700">
                     <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase">Daily Volume</p>
                    <p className="text-gray-900 font-bold text-xl">25 Tons+</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Floating Stats Bar */}
      <div className="relative -mt-10 z-30 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl shadow-green-900/5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 border border-gray-100">
          <div className="flex flex-col items-center border-r border-gray-100 last:border-0 hover:bg-gray-50 p-2 rounded-xl transition-colors">
            <Users className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-3xl font-bold text-gray-900">50k+</span>
            <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">{t('stats.farmers')}</span>
          </div>
          <div className="flex flex-col items-center border-r border-gray-100 last:border-0 hover:bg-gray-50 p-2 rounded-xl transition-colors">
            <ShoppingBag className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-3xl font-bold text-gray-900">10k+</span>
            <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">{t('stats.products')}</span>
          </div>
          <div className="flex flex-col items-center border-r border-gray-100 last:border-0 hover:bg-gray-50 p-2 rounded-xl transition-colors">
            <MapPin className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-3xl font-bold text-gray-900">1.2k+</span>
            <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">{t('stats.villages')}</span>
          </div>
          <div className="flex flex-col items-center hover:bg-gray-50 p-2 rounded-xl transition-colors">
            <IndianRupee className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-3xl font-bold text-gray-900">₹5 Cr+</span>
            <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">{t('stats.revenue')}</span>
          </div>
        </div>
      </div>

      {/* 3. Weather Widget Section */}
      <section id="weather" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <div className="flex items-center justify-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Live Updates</span>
             </div>
             <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
               {t('weather.title')}
             </h2>
             <p className="text-gray-600 mt-2">{t('weather.subtitle')}</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {MOCK_WEATHER.map((w, idx) => (
               <div key={idx} className={`relative overflow-hidden rounded-2xl shadow-lg p-6 bg-gradient-to-br ${w.bg || 'from-blue-500 to-blue-400'} text-white transform hover:-translate-y-2 transition-transform duration-300`}>
                 <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white opacity-20 rounded-full blur-xl"></div>
                 <div className="flex justify-between items-start z-10 relative">
                   <div>
                     <h3 className="font-bold text-lg mb-1">{w.city}</h3>
                     <p className="text-white/80 text-sm font-medium">{w.condition}</p>
                   </div>
                   {getWeatherIcon(w.icon)}
                 </div>
                 <div className="mt-6 z-10 relative">
                    <span className="text-4xl font-bold">{w.temp}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 4. Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{t('categories.title')}</h2>
              <p className="text-gray-500 mt-2">{t('categories.subtitle')}</p>
            </div>
            <Link to="/market" className="hidden sm:flex items-center text-green-700 font-bold hover:text-green-800 transition bg-green-50 px-4 py-2 rounded-full">
              {t('categories.viewAll')} <ArrowRight className="ml-1 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: t('categories.items.grains'), icon: Wheat, color: 'bg-amber-100 text-amber-700' },
              { name: t('categories.items.vegetables'), icon: Sprout, color: 'bg-green-100 text-green-700' },
              { name: t('categories.items.pulses'), icon: CheckCircle, color: 'bg-orange-100 text-orange-700' },
              { name: t('categories.items.spices'), icon: TrendingUp, color: 'bg-red-100 text-red-700' },
              { name: t('categories.items.fruits'), icon: Sprout, color: 'bg-pink-100 text-pink-700' },
              { name: t('categories.items.organic'), icon: HeartHandshake, color: 'bg-emerald-100 text-emerald-700' },
            ].map((cat, idx) => (
              <Link to="/market" key={idx} className="group flex flex-col items-center bg-gray-50 p-6 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:shadow-gray-200 border border-transparent hover:border-gray-100">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-sm ${cat.color}`}>
                  <cat.icon size={30} />
                </div>
                <h3 className="font-bold text-gray-800 group-hover:text-green-700 transition-colors">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Video Gallery Section */}
      <section className="py-20 bg-stone-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
               <div>
                  <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                     <Play className="fill-red-500 text-red-500" /> {t('videos.title')}
                  </h2>
                  <p className="text-gray-400 mt-2">{t('videos.subtitle')}</p>
               </div>
               <button className="hidden md:block text-sm border border-gray-600 px-4 py-2 rounded-full hover:bg-gray-800 transition">View All Videos</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {MOCK_VIDEOS.map((video: any, idx) => (
                  <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" key={idx} className="bg-stone-800 rounded-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-1 block">
                     <div className="relative h-40">
                        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                              <Play className="w-5 h-5 fill-white text-white ml-1" />
                           </div>
                        </div>
                        <span className="absolute bottom-2 right-2 bg-black/80 text-xs px-2 py-1 rounded text-white font-mono">
                           {video.duration}
                        </span>
                     </div>
                     <div className="p-4">
                        <h3 className="font-bold text-lg mb-2 line-clamp-2 leading-snug group-hover:text-green-400 transition-colors">{video.title}</h3>
                        <p className="text-xs text-gray-500">{video.views} views • 2 days ago</p>
                     </div>
                  </a>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Schemes & News (Masonry Style) */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Schemes (Left 7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-8">
                <CheckCircle className="text-blue-600 w-6 h-6" />
                <h2 className="text-2xl font-bold text-gray-900">{t('schemes.title')}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MOCK_SCHEMES.map((scheme: any, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-blue-100 hover:shadow-lg transition hover:border-blue-300 group">
                    <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-full uppercase tracking-wider">{scheme.tag}</span>
                    <h3 className="font-bold text-gray-900 mt-3 text-lg leading-tight group-hover:text-blue-700 transition-colors">{scheme.title}</h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-3">{scheme.desc}</p>
                    <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-bold mt-4 flex items-center gap-1 group-hover:gap-2 transition-all inline-flex">
                      {t('schemes.viewDetails')} <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* News (Right 5 cols) */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-8">
                <BarChart2 className="text-green-600 w-6 h-6" />
                <h2 className="text-2xl font-bold text-gray-900">{t('news.title')}</h2>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                 <div className="space-y-6">
                  {MOCK_NEWS.map((news, idx) => (
                    <div key={idx} className="flex gap-4 items-start group border-b border-gray-50 last:border-0 last:pb-0 pb-4">
                      <div className="bg-green-50 p-2 rounded-lg text-center min-w-[60px] group-hover:bg-green-100 transition-colors">
                        <span className="text-xl font-bold text-green-700 block leading-none">{news.date.split(' ')[0]}</span>
                        <span className="text-[10px] text-green-600 uppercase font-bold">{news.date.split(' ')[1]}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 leading-snug group-hover:text-green-700 transition-colors cursor-pointer">{news.title}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{news.source}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                 </div>
                 <button className="w-full mt-6 py-2 text-center text-sm font-bold text-green-700 border border-green-200 rounded-xl hover:bg-green-50 transition">
                    View All News
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Live Features with improved visuals */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-green-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">{t('liveFeatures.title')}</h2>
              <div className="space-y-8 mt-10">
                {[
                  { title: t('liveFeatures.livePrice'), desc: t('liveFeatures.livePriceDesc') },
                  { title: t('liveFeatures.gpsSearch'), desc: t('liveFeatures.gpsSearchDesc') },
                  { title: t('liveFeatures.securePay'), desc: t('liveFeatures.securePayDesc') },
                  { title: t('liveFeatures.auction'), desc: t('liveFeatures.auctionDesc') }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="mt-1 bg-white/10 group-hover:bg-yellow-400 group-hover:text-green-900 transition-colors rounded-xl p-3 h-12 w-12 flex items-center justify-center shrink-0 backdrop-blur-sm">
                      <CheckCircle size={20} className="text-current" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">{feature.title}</h3>
                      <p className="text-emerald-100/70 mt-1 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 transform rotate-6 rounded-3xl"></div>
               <div className="bg-white/10 p-1 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl relative">
                  <div className="bg-white text-gray-900 rounded-[22px] overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs font-mono text-gray-400">live_market.js</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                          <span className="font-bold text-lg flex items-center gap-2">
                            <TrendingUp className="text-green-600" />
                            {t('liveFeatures.liveUpdates')}
                          </span>
                          <span className="text-red-500 text-xs font-bold bg-red-50 px-2 py-1 rounded animate-pulse">
                            ● LIVE
                          </span>
                      </div>
                      <div className="space-y-4">
                        {[
                           {name: "Grains (Wheat)", price: "₹600", unit: "20kg", trend: "up"},
                           {name: "Cotton (Shankar)", price: "₹1600", unit: "20kg", trend: "up"},
                           {name: "Spices (Jeera)", price: "₹5500", unit: "20kg", trend: "down"},
                           {name: "Onion (Nasik)", price: "₹350", unit: "20kg", trend: "up"},
                        ].map((item, i) => (
                           <div key={i} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition cursor-default">
                              <span className="font-medium text-gray-700">{item.name}</span>
                              <div className="text-right">
                                 <div className="font-bold text-green-700">{item.price} <span className="text-xs text-gray-400 font-normal">/ {item.unit}</span></div>
                                 <div className={`text-[10px] font-bold ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                    {item.trend === 'up' ? '▲ +2.4%' : '▼ -1.2%'}
                                 </div>
                              </div>
                           </div>
                        ))}
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 8. Download App Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-yellow-400 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl shadow-yellow-500/20">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10 md:w-2/3">
                 <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4">{t('download.title')}</h2>
                 <p className="text-green-900/80 text-lg font-medium mb-8">{t('download.subtitle')}</p>
                 <button className="bg-green-900 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-green-800 transition shadow-lg">
                    <Download size={20} />
                    {t('download.btn')}
                 </button>
              </div>
              <div className="relative z-10 mt-8 md:mt-0 md:w-1/3 flex justify-center">
                  <Smartphone className="w-32 h-32 text-green-900 rotate-12 drop-shadow-2xl" />
              </div>
           </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900">{t('testimonials.title')}</h2>
            <p className="mt-3 text-lg text-gray-600">{t('testimonials.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-t-3xl"></div>
              <div className="text-green-100 text-8xl font-serif absolute top-4 left-6 -z-0 opacity-50">"</div>
              <p className="text-gray-700 italic mb-8 pt-4 relative z-10 text-lg leading-relaxed">
                {t('testimonials.farmerQuote')}
              </p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-800 text-2xl border-2 border-green-200">
                  {t('testimonials.farmerName').charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t('testimonials.farmerName')}</h4>
                  <p className="text-sm text-green-600 font-bold uppercase tracking-wide">{t('testimonials.farmerRole')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-3xl"></div>
              <div className="text-yellow-100 text-8xl font-serif absolute top-4 left-6 -z-0 opacity-50">"</div>
              <p className="text-gray-700 italic mb-8 pt-4 relative z-10 text-lg leading-relaxed">
                {t('testimonials.buyerQuote')}
              </p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center font-bold text-yellow-800 text-2xl border-2 border-yellow-200">
                   {t('testimonials.buyerName').charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t('testimonials.buyerName')}</h4>
                  <p className="text-sm text-yellow-600 font-bold uppercase tracking-wide">{t('testimonials.buyerRole')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-24 bg-green-900 relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-800 to-green-900"></div>
         <div className="relative z-10 max-w-4xl mx-auto px-4">
             <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{t('ctaFinal.title')}</h2>
             <p className="text-xl text-green-100 mb-10">{t('ctaFinal.subtitle')}</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register" className="px-10 py-4 bg-yellow-400 text-green-900 font-bold rounded-full text-lg shadow-lg hover:bg-yellow-300 transition hover:-translate-y-1">
                   {t('ctaFinal.startBtn')}
                </Link>
             </div>
         </div>
      </section>

      {/* SEO Keywords Footer */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">{t('footer.popularSearches')}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {SEO_KEYWORDS.map((keyword, index) => (
              <span key={index} className="text-[10px] md:text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200 hover:border-green-300 hover:text-green-700 transition cursor-default shadow-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
