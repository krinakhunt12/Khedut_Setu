
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { UserType } from '../types';
import { User, Phone, MapPin, Lock, CheckCircle, Sprout } from 'lucide-react';

const Register: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>(UserType.FARMER);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate registration API call
    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side Info Panel */}
        <div className="bg-green-800 text-white md:w-1/2 p-10 flex flex-col justify-center relative overflow-hidden">
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-green-700 rounded-full opacity-50 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-700 rounded-full opacity-50 blur-3xl"></div>
           
           <div className="relative z-10">
             <Link to="/" className="flex items-center gap-2 mb-8">
               <Sprout className="w-8 h-8 text-yellow-400" />
               <span className="text-2xl font-bold">ખેડૂત સેતુ</span>
             </Link>
             <h2 className="text-3xl font-bold mb-6">{t('registerInfo.title')}</h2>
             <ul className="space-y-4">
               {(t('registerInfo.list', { returnObjects: true }) as string[]).map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                   <div className="bg-green-700 p-1 rounded-full mt-1">
                     <CheckCircle size={16} className="text-yellow-400" />
                   </div>
                   <span className="text-lg opacity-90">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {t('auth.registerTitle')}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {userType === UserType.FARMER 
                ? t('auth.farmerDesc') 
                : t('auth.buyerDesc')}
            </p>
          </div>

          <div className="flex justify-center bg-gray-100 p-1 rounded-lg mb-8">
            <button
              onClick={() => setUserType(UserType.FARMER)}
              className={`w-1/2 py-2 text-sm font-medium rounded-md transition-all ${
                userType === UserType.FARMER
                  ? 'bg-white text-green-700 shadow'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t('auth.farmer')}
            </button>
            <button
              onClick={() => setUserType(UserType.BUYER)}
              className={`w-1/2 py-2 text-sm font-medium rounded-md transition-all ${
                userType === UserType.BUYER
                  ? 'bg-white text-green-700 shadow'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t('auth.buyer')}
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">{t('auth.fullName')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    required
                    className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all"
                    placeholder={userType === UserType.FARMER ? "Ramjibhai Patel" : "Ramesh Kumar"}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('auth.phone')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all"
                    placeholder="9876543210"
                  />
                </div>
              </div>
              
              {userType === UserType.FARMER && (
                <div>
                  <label htmlFor="village" className="block text-sm font-medium text-gray-700 mb-1">{t('auth.village')}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="village"
                      name="village"
                      type="text"
                      className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all"
                      placeholder="Talala, Gir"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">{t('auth.password')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all"
                    placeholder="********"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all disabled:opacity-70 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                t('auth.registerBtn')
              )}
            </button>
            
            <div className="text-center text-sm">
               <span className="text-gray-600">{t('auth.haveAccount')} </span>
               <Link to="/login" className="font-bold text-green-700 hover:text-green-600 hover:underline">
                 {t('auth.loginLink')}
               </Link>
            </div>

            <div className="text-center text-xs text-gray-500">
              {t('auth.agree', { terms: t('auth.terms') })}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
