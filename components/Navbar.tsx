import React, { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NAV_ITEMS } from '../constants';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <Sprout className="h-8 w-8 text-yellow-300" />
              <span className="font-bold text-xl tracking-wider">ખેડૂત સેતુ</span>
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-2 lg:space-x-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                      isActive
                        ? 'bg-green-800 text-white'
                        : 'text-green-100 hover:bg-green-600'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  {t(item.translationKey)}
                </NavLink>
              ))}
            </div>
            <div className="ml-4 pl-4 border-l border-green-600">
               <LanguageSwitcher />
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-100 hover:text-white hover:bg-green-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                    isActive
                      ? 'bg-green-800 text-white'
                      : 'text-green-100 hover:bg-green-600'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {t(item.translationKey)}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;