import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">ખેડૂત સેતુ (Khedut Setu)</h3>
          <p className="text-sm leading-relaxed">
            {t('footer.description')}
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-white mb-4">{t('footer.linksTitle')}</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">{t('footer.terms')}</a></li>
            <li><a href="#" className="hover:text-green-400">{t('footer.privacy')}</a></li>
            <li><a href="#" className="hover:text-green-400">{t('footer.security')}</a></li>
            <li><a href="#" className="hover:text-green-400">{t('footer.faq')}</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-white mb-4">{t('footer.contactTitle')}</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-green-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-green-500" />
              <span>support@khedutsetu.guj</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-green-500" />
              <span>Gandhinagar, Gujarat</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;