import React, { useState } from 'react';
import { UserType } from '../types';

const Register: React.FC = () => {
  const [userType, setUserType] = useState<UserType>(UserType.FARMER);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            સ્વાગત છે!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {userType === UserType.FARMER 
              ? 'તમારો પાક વેચવા માટે નોંધણી કરો' 
              : 'તાજી પેદાશો ખરીદવા માટે નોંધણી કરો'}
          </p>
        </div>

        <div className="flex justify-center bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setUserType(UserType.FARMER)}
            className={`w-1/2 py-2 text-sm font-medium rounded-md transition-all ${
              userType === UserType.FARMER
                ? 'bg-white text-green-700 shadow'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            ખેડૂત (વેચનાર)
          </button>
          <button
            onClick={() => setUserType(UserType.BUYER)}
            className={`w-1/2 py-2 text-sm font-medium rounded-md transition-all ${
              userType === UserType.BUYER
                ? 'bg-white text-green-700 shadow'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            ગ્રાહક (ખરીદનાર)
          </button>
        </div>

        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">પૂરું નામ</label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="દા.ત. રમેશભાઈ પટેલ"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">મોબાઇલ નંબર</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="9876543210"
              />
            </div>
            
            {userType === UserType.FARMER && (
              <div className="mb-4">
                <label htmlFor="village" className="block text-sm font-medium text-gray-700 mb-1">ગામ / તાલુકો</label>
                <input
                  id="village"
                  name="village"
                  type="text"
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="તમારું ગામ"
                />
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">પાસવર્ડ</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="********"
              />
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
                મને યાદ રાખો
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              રજીસ્ટ્રેશન કરો
            </button>
          </div>
          
          <div className="text-center text-xs text-gray-500">
            રજીસ્ટર કરીને તમે અમારી <span className="text-green-600 cursor-pointer">શરતો અને નીતિઓ</span> સાથે સંમત થાઓ છો.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
