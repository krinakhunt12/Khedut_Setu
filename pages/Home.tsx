
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, ShoppingCart, ShoppingBag, ShieldCheck, Truck, 
  UserCheck, Sprout, Wheat, CheckCircle,
  Smartphone, IndianRupee, HeartHandshake, ArrowRight,
  Users, BarChart2, Calendar, MapPin, Cloud, Sun, CloudRain
} from 'lucide-react';
import { SEO_KEYWORDS, MOCK_SCHEMES, MOCK_NEWS, MOCK_WEATHER } from '../constants';

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
      case 'Sun': return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'Cloud': return <Cloud className="w-8 h-8 text-gray-400" />;
      case 'CloudRain': return <CloudRain className="w-8 h-8 text-blue-400" />;
      default: return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative bg-green-900 text-white overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-fade-in" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center animate-slide-up">
          <div className="inline-block px-4 py-1 mb-4 border border-yellow-400 rounded-full bg-yellow-400/20 backdrop-blur-sm">
            <span className="text-yellow-300 font-bold tracking-wide text-sm">{t('hero.tagline')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-100 font-medium drop-shadow-md">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link 
              to="/register" 
              className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-lg transition shadow-xl flex items-center justify-center gap-2 border-2 border-green-500 hover:scale-105 transform duration-200"
            >
              <Sprout className="w-6 h-6" />
              {t('hero.ctaFarmer')}
            </Link>
            <Link 
              to="/register" 
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold rounded-xl text-lg transition shadow-xl flex items-center justify-center gap-2 hover:scale-105 transform duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              {t('hero.ctaBuyer')}
            </Link>
          </div>
          <a 
            href="#how-it-works" 
            onClick={scrollToHowItWorks}
            className="mt-8 text-green-200 hover:text-white underline decoration-dotted underline-offset-4 cursor-pointer animate-bounce"
          >
             {t('hero.learnMore')}
          </a>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-green-800 text-white py-8 border-t border-green-700">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 text-yellow-400 mb-2" />
            <span className="text-2xl font-bold">50,000+</span>
            <span className="text-sm opacity-80">{t('stats.farmers')}</span>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingBag className="w-8 h-8 text-yellow-400 mb-2" />
            <span className="text-2xl font-bold">10,000+</span>
            <span className="text-sm opacity-80">{t('stats.products')}</span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-yellow-400 mb-2" />
            <span className="text-2xl font-bold">1,200+</span>
            <span className="text-sm opacity-80">{t('stats.villages')}</span>
          </div>
          <div className="flex flex-col items-center">
            <IndianRupee className="w-8 h-8 text-yellow-400 mb-2" />
            <span className="text-2xl font-bold">₹5 Cr+</span>
            <span className="text-sm opacity-80">{t('stats.revenue')}</span>
          </div>
        </div>
      </section>

      {/* Weather Widget Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-8">
             <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
               <Cloud className="text-blue-500" /> {t('weather.title')}
             </h2>
             <p className="text-gray-600">{t('weather.subtitle')}</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {MOCK_WEATHER.map((w, idx) => (
               <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-center justify-between">
                 <div>
                   <h3 className="font-bold text-gray-800">{w.city}</h3>
                   <p className="text-sm text-gray-500">{w.condition}</p>
                 </div>
                 <div className="text-right">
                   {getWeatherIcon(w.icon)}
                   <span className="font-bold text-lg text-gray-900 block">{w.temp}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 3. Key Value Proposition */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-green-900">{t('benefits.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: UserCheck, title: t('benefits.items.directTrade'), desc: t('benefits.items.directTradeDesc') },
              { icon: IndianRupee, title: t('benefits.items.fairPrice'), desc: t('benefits.items.fairPriceDesc') },
              { icon: Sprout, title: t('benefits.items.freshProduce'), desc: t('benefits.items.freshProduceDesc') },
              { icon: ShieldCheck, title: t('benefits.items.securePayment'), desc: t('benefits.items.securePaymentDesc') }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-4 rounded-full text-green-700 mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section id="how-it-works" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900">{t('howItWorks.title')}</h2>
            <p className="mt-3 text-lg text-gray-600">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-green-100 -z-10"></div>

            {[1, 2, 3].map((step) => (
              <div key={step} className="text-center relative group">
                <div className="w-24 h-24 mx-auto bg-white text-green-600 border-4 border-green-600 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  {step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t(`howItWorks.step${step}Title`)}</h3>
                <p className="text-gray-600 px-4 leading-relaxed">{t(`howItWorks.step${step}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Categories */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{t('categories.title')}</h2>
              <p className="text-gray-600 mt-2">{t('categories.subtitle')}</p>
            </div>
            <Link to="/market" className="hidden sm:flex items-center text-green-700 font-bold hover:text-green-800 transition">
              {t('categories.viewAll')} <ArrowRight className="ml-1 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: t('categories.items.grains'), icon: Wheat, color: 'bg-amber-100 text-amber-700' },
              { name: t('categories.items.vegetables'), icon: Sprout, color: 'bg-green-100 text-green-700' },
              { name: t('categories.items.pulses'), icon: CheckCircle, color: 'bg-orange-100 text-orange-700' },
              { name: t('categories.items.spices'), icon: TrendingUp, color: 'bg-red-100 text-red-700' },
              { name: t('categories.items.fruits'), icon: Sprout, color: 'bg-pink-100 text-pink-700' },
              { name: t('categories.items.organic'), icon: HeartHandshake, color: 'bg-emerald-100 text-emerald-700' },
            ].map((cat, idx) => (
              <Link to="/market" key={idx} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center border border-stone-100 hover:-translate-y-1">
                <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${cat.color}`}>
                  <cat.icon size={28} />
                </div>
                <h3 className="font-bold text-gray-800">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Schemes & News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Schemes */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-gray-900">{t('schemes.title')}</h2>
            </div>
            <p className="text-gray-600 mb-6">{t('schemes.subtitle')}</p>
            <div className="space-y-4">
              {MOCK_SCHEMES.map((scheme, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-blue-900">{scheme.title}</h3>
                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">{scheme.tag}</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">{scheme.desc}</p>
                  <button className="text-blue-600 text-sm font-bold mt-3 hover:underline">{t('schemes.viewDetails')} &rarr;</button>
                </div>
              ))}
            </div>
          </div>

          {/* News */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BarChart2 className="text-green-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-gray-900">{t('news.title')}</h2>
            </div>
            <p className="text-gray-600 mb-6">{t('news.subtitle')}</p>
            <div className="space-y-4">
              {MOCK_NEWS.map((news, idx) => (
                <div key={idx} className="bg-green-50 p-4 rounded-xl border border-green-100 hover:shadow-md transition flex gap-4 items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center min-w-[60px]">
                    <Calendar className="w-5 h-5 text-green-600 mx-auto" />
                    <span className="text-xs font-bold text-gray-600 block mt-1">{news.date.split(' ')[0]}</span>
                    <span className="text-[10px] text-gray-400 uppercase">{news.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{news.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                       <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded border">{news.source}</span>
                       <button className="text-green-700 text-xs font-bold hover:underline">{t('news.readMore')}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Live Features */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('liveFeatures.title')}</h2>
              <div className="space-y-6">
                {[
                  { title: t('liveFeatures.livePrice'), desc: t('liveFeatures.livePriceDesc') },
                  { title: t('liveFeatures.gpsSearch'), desc: t('liveFeatures.gpsSearchDesc') },
                  { title: t('liveFeatures.securePay'), desc: t('liveFeatures.securePayDesc') },
                  { title: t('liveFeatures.auction'), desc: t('liveFeatures.auctionDesc') }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-yellow-500 rounded-full p-1 h-6 w-6 flex items-center justify-center shrink-0 shadow-lg shadow-yellow-500/50">
                      <CheckCircle size={14} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-300">{feature.title}</h3>
                      <p className="text-emerald-100 opacity-90">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl">
               <div className="bg-white text-gray-900 rounded-xl p-6 shadow-inner">
                 <div className="flex items-center justify-between mb-4 border-b pb-4">
                    <span className="font-bold text-lg flex items-center gap-2">
                       <TrendingUp className="text-green-600" />
                       {t('liveFeatures.liveUpdates')}
                    </span>
                    <span className="text-red-500 text-sm font-bold animate-pulse flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span> Live
                    </span>
                 </div>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center bg-gray-50 p-3 rounded hover:bg-gray-100 transition">
                     <span>{t('categories.items.grains')} (Wheat)</span>
                     <span className="font-bold text-green-700">₹600 / 20kg</span>
                   </div>
                   <div className="flex justify-between items-center bg-gray-50 p-3 rounded hover:bg-gray-100 transition">
                     <span>Cotton (Shankar)</span>
                     <span className="font-bold text-green-700">₹1600 / 20kg</span>
                   </div>
                   <div className="flex justify-between items-center bg-gray-50 p-3 rounded hover:bg-gray-100 transition">
                     <span>{t('categories.items.spices')} (Jeera)</span>
                     <span className="font-bold text-green-700">₹5500 / 20kg</span>
                   </div>
                   <div className="flex justify-between items-center bg-gray-50 p-3 rounded hover:bg-gray-100 transition">
                     <span>Onion (Nasik)</span>
                     <span className="font-bold text-green-700">₹350 / 20kg</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900">{t('testimonials.title')}</h2>
            <p className="mt-3 text-lg text-gray-600">{t('testimonials.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-green-500 relative">
              <div className="text-green-200 text-6xl font-serif absolute top-4 left-4 opacity-30">"</div>
              <p className="text-gray-700 italic mb-6 pt-4 relative z-10 text-lg">
                "{t('testimonials.farmerQuote')}"
              </p>
              <div className="flex items-center gap-4 mt-6 border-t pt-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-800 text-xl border border-green-200">
                  {t('testimonials.farmerName').charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t('testimonials.farmerName')}</h4>
                  <p className="text-sm text-green-600 font-medium">{t('testimonials.farmerRole')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 relative">
              <div className="text-yellow-200 text-6xl font-serif absolute top-4 left-4 opacity-30">"</div>
              <p className="text-gray-700 italic mb-6 pt-4 relative z-10 text-lg">
                "{t('testimonials.buyerQuote')}"
              </p>
              <div className="flex items-center gap-4 mt-6 border-t pt-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center font-bold text-yellow-800 text-xl border border-yellow-200">
                   {t('testimonials.buyerName').charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t('testimonials.buyerName')}</h4>
                  <p className="text-sm text-yellow-600 font-medium">{t('testimonials.buyerRole')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Trust & Security */}
      <section className="py-12 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div className="flex flex-col items-center group">
               <ShieldCheck className="w-12 h-12 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
               <h3 className="text-white font-bold">{t('trust.payment')}</h3>
               <p className="text-sm mt-1">{t('trust.paymentDesc')}</p>
             </div>
             <div className="flex flex-col items-center group">
               <Smartphone className="w-12 h-12 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
               <h3 className="text-white font-bold">{t('trust.otp')}</h3>
               <p className="text-sm mt-1">{t('trust.otpDesc')}</p>
             </div>
             <div className="flex flex-col items-center group">
               <Truck className="w-12 h-12 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
               <h3 className="text-white font-bold">{t('trust.tracking')}</h3>
               <p className="text-sm mt-1">{t('trust.trackingDesc')}</p>
             </div>
             <div className="flex flex-col items-center group">
               <HeartHandshake className="w-12 h-12 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
               <h3 className="text-white font-bold">{t('trust.support')}</h3>
               <p className="text-sm mt-1">{t('trust.supportDesc')}</p>
             </div>
          </div>
        </div>
      </section>

      {/* 10. Bottom CTA */}
      <section className="py-20 bg-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{t('ctaFinal.title')}</h2>
          <p className="text-xl mb-10 opacity-90 font-medium">{t('ctaFinal.subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-white text-green-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl transform hover:-translate-y-1"
            >
              {t('ctaFinal.startBtn')}
            </Link>
            <Link 
              to="/market" 
              className="bg-green-700 text-white border-2 border-green-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition shadow-xl transform hover:-translate-y-1"
            >
              {t('ctaFinal.marketBtn')}
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Keywords Footer */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">{t('footer.popularSearches')}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {SEO_KEYWORDS.map((keyword, index) => (
              <span key={index} className="text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200 hover:border-green-300 hover:text-green-700 transition cursor-default">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
