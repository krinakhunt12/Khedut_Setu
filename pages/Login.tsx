
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Phone, Lock, Sprout, Lightbulb } from 'lucide-react';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    // Simulate API login
    setTimeout(() => {
      setLoading(false);
      // For demo, we assume success
      navigate('/market');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
       <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row-reverse">
        
        {/* Right Side Info Panel (on Desktop) */}
        <div className="bg-yellow-500 text-green-900 md:w-5/12 p-8 flex flex-col justify-center relative overflow-hidden">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full opacity-50"></div>
           <div className="relative z-10">
             <div className="flex items-center gap-2 mb-6 text-green-900">
               <Sprout size={28} />
               <span className="font-bold text-xl">ખેડૂત સેતુ</span>
             </div>
             
             <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
               <h3 className="flex items-center gap-2 font-bold text-xl mb-3">
                 <Lightbulb className="text-green-900" />
                 {t('loginInfo.title')}
               </h3>
               <p className="font-medium leading-relaxed">
                 "{t('loginInfo.tip')}"
               </p>
             </div>
           </div>
        </div>

        {/* Left Side Form */}
        <div className="md:w-7/12 p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {t('auth.loginTitle')}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {t('auth.noAccount')}{' '}
              <Link to="/register" className="font-bold text-green-600 hover:text-green-500 hover:underline">
                {t('auth.registerLink')}
              </Link>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('auth.phone')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all"
                    placeholder="9876543210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('auth.password')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all"
                    placeholder="********"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  {t('auth.rememberMe')}
                </label>
              </div>
              
              <div className="text-sm">
                <a href="#" className="font-medium text-green-600 hover:text-green-500 hover:underline">
                  Forgot password?
                </a>
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
                <span className="flex items-center gap-2">
                   <LogIn size={18} /> {t('auth.loginBtn')}
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
