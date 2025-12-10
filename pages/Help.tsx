
import React from 'react';
import { ChevronDown, Mail, Phone, Shield, AlertTriangle, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Help: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-green-900 mb-2">{t('help.title')}</h1>
        <div className="h-1 w-20 bg-yellow-400 mx-auto rounded"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Cards */}
        <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-start gap-4 hover:shadow-md transition">
          <div className="bg-green-100 p-3 rounded-full text-green-700">
            <Phone size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Helpline</h3>
            <p className="text-green-700 font-bold text-xl mt-1">1800-123-4567</p>
            <p className="text-sm text-gray-500 mt-1">Mon-Sat (9 AM - 6 PM)</p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-start gap-4 hover:shadow-md transition">
          <div className="bg-green-100 p-3 rounded-full text-green-700">
            <Mail size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Email Support</h3>
            <p className="text-green-700 font-bold text-xl mt-1">support@khedutsetu.com</p>
            <p className="text-sm text-gray-500 mt-1">Response within 24 hrs</p>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
          <MessageSquare className="text-yellow-500" />
          {t('help.faqTitle')}
        </h2>
        
        <div className="space-y-4">
          <details className="group border border-gray-100 rounded-xl p-4 cursor-pointer bg-gray-50 open:bg-white open:shadow-sm transition-all">
            <summary className="flex justify-between items-center font-bold text-gray-800 list-none">
              <span>Is registration free for farmers?</span>
              <ChevronDown className="group-open:rotate-180 transition-transform text-gray-400" />
            </summary>
            <p className="text-gray-600 mt-3 pl-4 border-l-2 border-green-500 leading-relaxed">
              Yes, registration is completely free for both farmers and buyers. We do not charge any joining fees.
            </p>
          </details>
          
          <details className="group border border-gray-100 rounded-xl p-4 cursor-pointer bg-gray-50 open:bg-white open:shadow-sm transition-all">
            <summary className="flex justify-between items-center font-bold text-gray-800 list-none">
              <span>How does payment work?</span>
              <ChevronDown className="group-open:rotate-180 transition-transform text-gray-400" />
            </summary>
            <p className="text-gray-600 mt-3 pl-4 border-l-2 border-green-500 leading-relaxed">
              Buyers pay online to Khedut Setu's secure escrow account. Once the farmer delivers the goods and buyer confirms quality, the money is transferred to the farmer's bank account instantly.
            </p>
          </details>
          
          <details className="group border border-gray-100 rounded-xl p-4 cursor-pointer bg-gray-50 open:bg-white open:shadow-sm transition-all">
            <summary className="flex justify-between items-center font-bold text-gray-800 list-none">
              <span>What if I receive bad quality produce?</span>
              <ChevronDown className="group-open:rotate-180 transition-transform text-gray-400" />
            </summary>
            <p className="text-gray-600 mt-3 pl-4 border-l-2 border-green-500 leading-relaxed">
              You can reject the delivery at the doorstep. If you have already accepted it, you can raise a complaint within 24 hours. Our quality team will verify and initiate a refund if applicable.
            </p>
          </details>
        </div>
      </div>

      {/* Safety Tips */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-12">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-red-800">
           <Shield className="w-6 h-6" />
           {t('help.safetyTitle')}
        </h2>
        <p className="text-red-700 mb-4 text-sm">{t('help.safetyDesc')}</p>
        <ul className="grid md:grid-cols-2 gap-3">
           {(t('help.tips', { returnObjects: true }) as string[]).map((tip, idx) => (
             <li key={idx} className="flex items-start gap-2 text-red-900 text-sm bg-white/60 p-2 rounded">
               <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
               {tip}
             </li>
           ))}
        </ul>
      </div>

      {/* Contact Form */}
      <div className="bg-green-900 text-white rounded-3xl shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full -mr-10 -mt-10 opacity-50"></div>
        <div className="p-8 relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('help.contactTitle')}</h2>
          
          <form className="space-y-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div>
               <label className="text-xs font-bold text-green-200 uppercase tracking-wide ml-1">{t('help.formName')}</label>
               <input 
                type="text" 
                className="w-full p-3 mt-1 rounded-xl bg-green-800 border border-green-700 text-white placeholder-green-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
              />
            </div>
            <div>
               <label className="text-xs font-bold text-green-200 uppercase tracking-wide ml-1">{t('help.formMsg')}</label>
               <textarea 
                rows={4}
                className="w-full p-3 mt-1 rounded-xl bg-green-800 border border-green-700 text-white placeholder-green-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-yellow-400 text-green-900 font-bold rounded-xl hover:bg-yellow-300 transition shadow-lg text-lg">
              {t('help.sendBtn')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
