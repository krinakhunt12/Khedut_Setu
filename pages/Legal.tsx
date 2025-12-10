
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Lock, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalProps {
  type: 'terms' | 'privacy';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const { t } = useTranslation();

  const isTerms = type === 'terms';

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-green-700 font-bold mb-8 hover:underline">
          <ArrowLeft size={20} />
          {t('nav.home')}
        </Link>
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
             <div className="bg-green-100 p-4 rounded-full text-green-700">
                {isTerms ? <FileText size={32} /> : <Lock size={32} />}
             </div>
             <h1 className="text-3xl font-bold text-gray-900">
               {isTerms ? t('footer.terms') : t('footer.privacy')}
             </h1>
          </div>

          <div className="prose prose-green max-w-none text-gray-600 space-y-6">
             {/* Dynamic Content based on type */}
             {isTerms ? (
               <>
                 <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">1. પરિચય (Introduction)</h3>
                   <p>ખેડૂત સેતુ પર આપનું સ્વાગત છે. આ પ્લેટફોર્મનો ઉપયોગ કરીને તમે અમારી શરતો સાથે સંમત થાઓ છો. અમારો ઉદ્દેશ્ય ખેડૂતો અને ખરીદદારો વચ્ચે પારદર્શક વેપાર કરાવવાનો છે.</p>
                 </div>
                 
                 <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">2. ખેડૂતો માટે નિયમો (For Farmers)</h3>
                   <ul className="list-disc pl-5 space-y-2">
                     <li>તમારા પાકની સાચી અને સચોટ માહિતી આપવી ફરજિયાત છે.</li>
                     <li>ખોટા ફોટા કે કિંમત મૂકવી એ નિયમોનું ઉલ્લંઘન ગણાશે.</li>
                     <li>ઓર્ડર મળ્યા બાદ સમયસર ડિલિવરી કરવાની જવાબદારી ખેડૂતની રહેશે.</li>
                   </ul>
                 </div>
                 
                 <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">3. ખરીદદારો માટે નિયમો (For Buyers)</h3>
                   <ul className="list-disc pl-5 space-y-2">
                     <li>ઓર્ડર કરતી વખતે પેમેન્ટ સુરક્ષિત રીતે એપ દ્વારા જ કરવું.</li>
                     <li>ડિલિવરી સમયે માલની ગુણવત્તા તપાસી લેવી.</li>
                     <li>કોઈપણ તકરાર માટે 24 કલાકમાં જાણ કરવી.</li>
                   </ul>
                 </div>
               </>
             ) : (
               <>
                 <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">1. માહિતી એકત્રીકરણ (Data Collection)</h3>
                   <p>અમે તમારું નામ, મોબાઈલ નંબર, અને સરનામું ફક્ત ઓર્ડર પ્રોસેસિંગ અને ડિલિવરી માટે જ લઈએ છીએ.</p>
                 </div>
                 
                 <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">2. ડેટાનો ઉપયોગ (Data Usage)</h3>
                   <p>તમારો ડેટા સુરક્ષિત છે. અમે કોઈપણ ત્રીજા પક્ષ (Third Party) ને તમારો ડેટા વેચતા નથી. તેનો ઉપયોગ ફક્ત તમને નજીકના ખેડૂતો કે ગ્રાહકો શોધવા માટે થાય છે.</p>
                 </div>

                 <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">3. પેમેન્ટ સુરક્ષા (Payment Security)</h3>
                   <p>તમારા તમામ ઓનલાઇન વ્યવહારો એન્ક્રિપ્ટેડ અને સુરક્ષિત છે. અમે તમારી બેંક વિગતો સેવ કરતા નથી.</p>
                 </div>
               </>
             )}
             
             <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 rounded-r-lg">
                <div className="flex gap-3">
                  <ShieldCheck className="text-blue-600 w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">સુરક્ષા ખાતરી</h4>
                    <p className="text-sm text-blue-700 font-medium">
                      ખેડૂત સેતુ એ ભારત સરકારના IT નિયમોનું પાલન કરે છે અને વપરાશકર્તાની સુરક્ષા માટે કટિબદ્ધ છે.
                    </p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
