
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Calendar, User, ArrowRight, X, Share2, MessageCircle, Facebook, Twitter, Copy } from 'lucide-react';

const ALL_NEWS = [
  {
    id: 1,
    title: "કપાસના ભાવમાં રેકોર્ડ બ્રેક ઉછાળો",
    date: "12 May 2024",
    source: "APMC સમાચાર",
    category: "Market",
    image: "https://images.unsplash.com/photo-1594314489370-17e57c617b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: "ગુજરાતના વિવિધ માર્કેટ યાર્ડમાં કપાસના ભાવ ઐતિહાસિક સપાટીએ પહોંચ્યા છે. ખેડૂતોમાં આનંદની લાગણી."
  },
  {
    id: 2,
    title: "ચોમાસુ 2024: ગુજરાતમાં સામાન્ય કરતા વધુ વરસાદની આગાહી",
    date: "10 May 2024",
    source: "હવામાન વિભાગ",
    category: "Weather",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: "ભારતીય હવામાન વિભાગે આ વર્ષે સારા વરસાદની આગાહી કરી છે, જે ખરીફ પાક માટે ખૂબ જ ફાયદાકારક રહેશે."
  },
  {
    id: 3,
    title: "પ્રાકૃતિક ખેતી કરતા ખેડૂતો માટે વિશેષ પેકેજ જાહેર",
    date: "08 May 2024",
    source: "ગાંધીનગર",
    category: "Government",
    image: "https://images.unsplash.com/photo-1625246333195-5848c428173f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: "રાજ્ય સરકાર દ્વારા ગાય આધારિત ખેતી કરતા ખેડૂતો માટે પ્રતિ માસ 900 રૂપિયા સહાય ચાલુ રાખવાની જાહેરાત."
  },
  {
    id: 4,
    title: "મગફળીના ટેકાના ભાવમાં વધારો",
    date: "05 May 2024",
    source: "દિલ્હી",
    category: "Policy",
    image: "https://images.unsplash.com/photo-1565553752796-0373d5415754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: "કેન્દ્ર સરકારે આગામી સીઝન માટે મગફળીના ટેકાના ભાવમાં ક્વિન્ટલ દીઠ 300 રૂપિયાનો વધારો કર્યો છે."
  },
  {
    id: 5,
    title: "ડ્રોન ટેકનોલોજીથી દવાનો છંટકાવ: નવી સબસિડી",
    date: "01 May 2024",
    source: "કૃષિ વિભાગ",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: "ખેડૂતો હવે ડ્રોન ખરીદવા પર 40% સુધી સબસિડી મેળવી શકશે. શ્રમ અને સમય બંને બચશે."
  },
  {
    id: 6,
    title: "સૌર ઊર્જા પંપ યોજના: નવા ફોર્મ ભરાવાના શરૂ",
    date: "28 April 2024",
    source: "i-Khedut Portal",
    category: "Government",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: "ખેડૂતોને દિવસે વીજળી મળી રહે તે માટે સોલર પંપ યોજના હેઠળ નવા ફોર્મ ભરવાની પ્રક્રિયા શરૂ થઈ છે."
  }
];

const News: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState('All');
  const [selectedNews, setSelectedNews] = useState<typeof ALL_NEWS[0] | null>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const filteredNews = filter === 'All' ? ALL_NEWS : ALL_NEWS.filter(n => n.category === filter);

  // Sync URL params to selectedNews state
  useEffect(() => {
    const newsId = searchParams.get('id');
    if (newsId) {
      const item = ALL_NEWS.find(n => n.id === Number(newsId));
      if (item) {
        setSelectedNews(item);
      }
    } else {
      setSelectedNews(null);
    }
  }, [searchParams]);

  const openNews = (item: typeof ALL_NEWS[0]) => {
    setSearchParams({ id: item.id.toString() });
  };

  const closeNews = () => {
    setSearchParams({});
    setShowShareMenu(false);
  };

  const handleShare = async () => {
    if (!selectedNews) return;
    setIsSharing(true);
    
    // Ensure URL matches the current news item
    const shareUrl = window.location.href;
    const shareData: ShareData = {
      title: selectedNews.title,
      text: selectedNews.desc,
      url: shareUrl,
    };

    // Attempt to share Image + Text using Web Share API Level 2
    if (navigator.share && navigator.canShare) {
      try {
        // Fetch image as blob
        const response = await fetch(selectedNews.image);
        const blob = await response.blob();
        const file = new File([blob], "news-image.jpg", { type: "image/jpeg" });
        
        const fileShareData = {
          files: [file],
          title: selectedNews.title,
          text: `${selectedNews.desc}\n\nRead more at: ${shareUrl}`,
        };

        if (navigator.canShare(fileShareData)) {
          await navigator.share(fileShareData);
          setIsSharing(false);
          return;
        }
      } catch (error) {
        console.warn('File sharing failed, falling back to link sharing:', error);
      }
    }

    // Fallback: Standard Link Sharing
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Desktop Fallback: Toggle Menu
      setShowShareMenu(!showShareMenu);
    }
    setIsSharing(false);
  };

  const shareToWhatsapp = () => {
    if (!selectedNews) return;
    const text = `*${selectedNews.title}*\n${selectedNews.desc}\n\nRead more: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    setShowShareMenu(false);
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    setShowShareMenu(false);
  };

  const shareToTwitter = () => {
    if (!selectedNews) return;
    const text = selectedNews.title;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
    setShowShareMenu(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
    setShowShareMenu(false);
  };

  return (
    <div className="bg-stone-50 min-h-screen font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('news.title')}</h1>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('news.subtitle')}</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
           {['All', 'Market', 'Weather', 'Government', 'Technology', 'Policy'].map(cat => (
             <button 
               key={cat}
               onClick={() => setFilter(cat)}
               className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                 filter === cat 
                 ? 'bg-green-700 text-white shadow-lg' 
                 : 'bg-white text-gray-600 border border-gray-200 hover:bg-green-50'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredNews.map(item => (
             <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="relative h-52 overflow-hidden group">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded shadow-sm text-green-800 uppercase tracking-wide">
                     {item.category}
                   </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-medium uppercase tracking-wide">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="flex items-center gap-1"><User size={12} /> {item.source}</span>
                   </div>
                   <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-green-700 cursor-pointer transition-colors" onClick={() => openNews(item)}>{item.title}</h2>
                   <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">{item.desc}</p>
                   <button 
                      onClick={() => openNews(item)}
                      className="text-green-700 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto group w-fit">
                      {t('news.readMore')} <ArrowRight size={16} className="group-hover:text-green-500 transition-colors" />
                   </button>
                </div>
             </article>
           ))}
        </div>
      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={closeNews}>
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200" 
            onClick={e => e.stopPropagation()}
          >
            {/* Header Image Area */}
            <div className="relative h-56 sm:h-72 shrink-0">
              <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <button 
                onClick={closeNews}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/20 z-10"
              >
                <X size={20} />
              </button>
              
              <div className="absolute bottom-6 left-6 right-6">
                 <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg mb-3 border border-green-500">
                   {selectedNews.category}
                 </span>
                 <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-md">
                   {selectedNews.title}
                 </h2>
              </div>
            </div>
            
            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar bg-white">
               <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {selectedNews.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {selectedNews.source}</span>
               </div>
               
               <div className="prose prose-green max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p className="font-semibold text-lg text-gray-900">{selectedNews.desc}</p>
                  <p>
                    વિગતવાર સમાચાર: આ અંગે વધુ માહિતી આપતા વિભાગીય અધિકારીએ જણાવ્યું હતું કે ખેડૂતોના હિતમાં આ નિર્ણય લેવામાં આવ્યો છે. 
                    આવનારા સમયમાં ખેડૂતોને આનો સીધો લાભ મળશે અને ઉત્પાદનમાં પણ વધારો થશે. બજાર નિષ્ણાતોના મતે આ ફેરફાર લાંબા ગાળે ફાયદાકારક સાબિત થશે.
                  </p>
                  <p>
                    વધુમાં, સરકારે ખેડૂતોને અપીલ કરી છે કે તેઓ આ યોજનાનો લાભ લેવા માટે નજીકના કેન્દ્ર પર નોંધણી કરાવે. 
                    આગામી સપ્તાહમાં આ અંગે વધુ જાહેરાતો કરવામાં આવશે. ખેતીવાડી ઉત્પન્ન બજાર સમિતિ દ્વારા પણ આ અંગે જાગૃતિ અભિયાન ચલાવવામાં આવી રહ્યું છે.
                  </p>
                  <p>
                     નિષ્ણાતોનું માનવું છે કે આ પગલાંથી ખેડૂતોની આવકમાં નોંધપાત્ર વધારો થશે અને તેઓ આર્થિક રીતે સક્ષમ બનશે. 
                     તમામ જિલ્લાઓમાં આ અંગે વિશેષ શિબિરોનું આયોજન કરવામાં આવશે.
                  </p>
               </div>
            </div>
            
            {/* Fixed Footer with Share Menu */}
            <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-end shrink-0 gap-3 relative">
               {showShareMenu && (
                 <div className="absolute bottom-full right-4 mb-3 bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1 min-w-[200px] animate-in slide-in-from-bottom-2 z-50">
                    <button onClick={shareToWhatsapp} className="flex items-center gap-3 w-full p-2.5 hover:bg-green-50 rounded-lg text-green-700 font-medium transition-colors text-left">
                       <MessageCircle size={18} /> WhatsApp
                    </button>
                    <button onClick={shareToFacebook} className="flex items-center gap-3 w-full p-2.5 hover:bg-blue-50 rounded-lg text-blue-700 font-medium transition-colors text-left">
                       <Facebook size={18} /> Facebook
                    </button>
                    <button onClick={shareToTwitter} className="flex items-center gap-3 w-full p-2.5 hover:bg-sky-50 rounded-lg text-sky-500 font-medium transition-colors text-left">
                       <Twitter size={18} /> Twitter
                    </button>
                    <div className="h-px bg-gray-100 my-1"></div>
                    <button onClick={copyToClipboard} className="flex items-center gap-3 w-full p-2.5 hover:bg-gray-50 rounded-lg text-gray-700 font-medium transition-colors text-left">
                       <Copy size={18} /> Copy Link
                    </button>
                 </div>
               )}

               <button 
                 onClick={closeNews}
                 className="px-6 py-2.5 rounded-xl font-bold text-gray-700 hover:bg-gray-200 transition"
               >
                 Close
               </button>
               <button 
                 onClick={handleShare}
                 disabled={isSharing}
                 className="bg-green-700 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-800 transition shadow-lg shadow-green-200 flex items-center gap-2 disabled:opacity-70"
               >
                 {isSharing ? (
                   <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></span>
                 ) : (
                   <Share2 size={16} />
                 )}
                 Share
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
    