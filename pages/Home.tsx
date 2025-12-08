import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, ShoppingCart, ShieldCheck, Truck, 
  UserCheck, Sprout, Wheat, CheckCircle,
  Smartphone, IndianRupee, HeartHandshake, ArrowRight
} from 'lucide-react';
import { SEO_KEYWORDS } from '../constants';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative bg-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1 mb-4 border border-yellow-400 rounded-full bg-yellow-400/20 backdrop-blur-sm">
            <span className="text-yellow-300 font-bold tracking-wide text-sm">{t('hero.tagline')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-200 font-medium">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link 
              to="/register" 
              className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-lg transition shadow-lg flex items-center justify-center gap-2 border-2 border-green-500"
            >
              <Sprout className="w-6 h-6" />
              {t('hero.ctaFarmer')}
            </Link>
            <Link 
              to="/register" 
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold rounded-xl text-lg transition shadow-lg flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-6 h-6" />
              {t('hero.ctaBuyer')}
            </Link>
          </div>
          <a href="#how-it-works" className="mt-6 text-green-200 hover:text-white underline decoration-dotted underline-offset-4">
             {t('hero.learnMore')}
          </a>
        </div>
      </section>

      {/* 2. Key Value Proposition */}
      <section className="py-12 bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
             <h2 className="text-2xl font-bold text-green-900">{t('benefits.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: UserCheck, title: t('benefits.items.directTrade'), desc: t('benefits.items.directTradeDesc') },
              { icon: IndianRupee, title: t('benefits.items.fairPrice'), desc: t('benefits.items.fairPriceDesc') },
              { icon: Sprout, title: t('benefits.items.freshProduce'), desc: t('benefits.items.freshProduceDesc') },
              { icon: ShieldCheck, title: t('benefits.items.securePayment'), desc: t('benefits.items.securePaymentDesc') }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-green-100">
                <div className="bg-green-100 p-3 rounded-full text-green-700 shrink-0">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900">{t('howItWorks.title')}</h2>
            <p className="mt-3 text-lg text-gray-600">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-green-100 -z-10"></div>

            <div className="text-center relative">
              <div className="w-24 h-24 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-6 border-4 border-white">1</div>
              <h3 className="text-xl font-bold mb-3">{t('howItWorks.step1Title')}</h3>
              <p className="text-gray-600 px-4">{t('howItWorks.step1Desc')}</p>
            </div>

            <div className="text-center relative">
              <div className="w-24 h-24 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-6 border-4 border-white">2</div>
              <h3 className="text-xl font-bold mb-3">{t('howItWorks.step2Title')}</h3>
              <p className="text-gray-600 px-4">{t('howItWorks.step2Desc')}</p>
            </div>

            <div className="text-center relative">
              <div className="w-24 h-24 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-6 border-4 border-white">3</div>
              <h3 className="text-xl font-bold mb-3">{t('howItWorks.step3Title')}</h3>
              <p className="text-gray-600 px-4">{t('howItWorks.step3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{t('categories.title')}</h2>
              <p className="text-gray-600 mt-2">{t('categories.subtitle')}</p>
            </div>
            <Link to="/market" className="hidden sm:flex items-center text-green-700 font-bold hover:text-green-800">
              {t('categories.viewAll')} <ArrowRight className="ml-1 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: t('categories.items.grains'), icon: Wheat, color: 'bg-yellow-100 text-yellow-700' },
              { name: t('categories.items.vegetables'), icon: Sprout, color: 'bg-green-100 text-green-700' },
              { name: t('categories.items.pulses'), icon: CheckCircle, color: 'bg-orange-100 text-orange-700' },
              { name: t('categories.items.spices'), icon: TrendingUp, color: 'bg-red-100 text-red-700' },
              { name: t('categories.items.fruits'), icon: Sprout, color: 'bg-pink-100 text-pink-700' },
              { name: t('categories.items.organic'), icon: HeartHandshake, color: 'bg-blue-100 text-blue-700' },
            ].map((cat, idx) => (
              <Link to="/market" key={idx} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center border border-gray-100">
                <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${cat.color}`}>
                  <cat.icon size={28} />
                </div>
                <h3 className="font-bold text-gray-800">{cat.name}</h3>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/market" className="inline-flex items-center text-green-700 font-bold">
              {t('categories.viewAll')} <ArrowRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Live Features */}
      <section className="py-20 bg-green-900 text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-green-800 rounded-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-800 rounded-full opacity-50"></div>

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
                    <div className="mt-1 bg-yellow-500 rounded-full p-1 h-6 w-6 flex items-center justify-center shrink-0">
                      <CheckCircle size={14} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-300">{feature.title}</h3>
                      <p className="text-green-100 opacity-90">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
               <div className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl">
                 <div className="flex items-center justify-between mb-4 border-b pb-4">
                    <span className="font-bold text-lg">{t('liveFeatures.liveUpdates')}</span>
                    <span className="text-red-500 text-sm font-bold animate-pulse">● Live Updates</span>
                 </div>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                     <span>{t('categories.items.grains')} (Wheat)</span>
                     <span className="font-bold text-green-700">₹600 / 20kg</span>
                   </div>
                   <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                     <span>Cotton (Shankar)</span>
                     <span className="font-bold text-green-700">₹1600 / 20kg</span>
                   </div>
                   <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                     <span>{t('categories.items.spices')} (Jeera)</span>
                     <span className="font-bold text-green-700">₹5500 / 20kg</span>
                   </div>
                   <button className="w-full mt-2 text-center text-green-600 text-sm font-bold">...</button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900">{t('testimonials.title')}</h2>
            <p className="mt-3 text-lg text-gray-600">{t('testimonials.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50 p-8 rounded-2xl relative">
              <div className="text-yellow-500 text-4xl font-serif absolute top-4 left-4">"</div>
              <p className="text-gray-700 italic mb-6 pt-4">
                "{t('testimonials.farmerQuote')}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center font-bold text-green-800">
                  {t('testimonials.farmerName').charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t('testimonials.farmerName')}</h4>
                  <p className="text-xs text-gray-500">{t('testimonials.farmerRole')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg relative transform md:-translate-y-2">
              <div className="text-yellow-500 text-4xl font-serif absolute top-4 left-4">"</div>
              <p className="text-gray-700 italic mb-6 pt-4">
                "{t('testimonials.buyerQuote')}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-800">
                   {t('testimonials.buyerName').charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t('testimonials.buyerName')}</h4>
                  <p className="text-xs text-gray-500">{t('testimonials.buyerRole')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Trust & Security */}
      <section className="py-12 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div className="flex flex-col items-center">
               <ShieldCheck className="w-12 h-12 text-green-500 mb-3" />
               <h3 className="text-white font-bold">{t('trust.payment')}</h3>
               <p className="text-sm">{t('trust.paymentDesc')}</p>
             </div>
             <div className="flex flex-col items-center">
               <Smartphone className="w-12 h-12 text-green-500 mb-3" />
               <h3 className="text-white font-bold">{t('trust.otp')}</h3>
               <p className="text-sm">{t('trust.otpDesc')}</p>
             </div>
             <div className="flex flex-col items-center">
               <Truck className="w-12 h-12 text-green-500 mb-3" />
               <h3 className="text-white font-bold">{t('trust.tracking')}</h3>
               <p className="text-sm">{t('trust.trackingDesc')}</p>
             </div>
             <div className="flex flex-col items-center">
               <HeartHandshake className="w-12 h-12 text-green-500 mb-3" />
               <h3 className="text-white font-bold">{t('trust.support')}</h3>
               <p className="text-sm">{t('trust.supportDesc')}</p>
             </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('ctaFinal.title')}</h2>
          <p className="text-xl mb-10 opacity-90">{t('ctaFinal.subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-white text-green-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              {t('ctaFinal.startBtn')}
            </Link>
            <Link 
              to="/market" 
              className="bg-green-700 text-white border border-green-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition"
            >
              {t('ctaFinal.marketBtn')}
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Keywords Footer (Subtle) */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-gray-500 mb-3">{t('footer.popularSearches')}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {SEO_KEYWORDS.map((keyword, index) => (
              <span key={index} className="text-xs text-gray-400 bg-white px-2 py-1 rounded border border-gray-200">
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