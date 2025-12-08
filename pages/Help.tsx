import React from 'react';
import { ChevronDown, Mail, Phone } from 'lucide-react';

const Help: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">સહાયતા કેન્દ્ર (Help Center)</h1>
      
      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="bg-yellow-400 w-2 h-6 rounded"></span>
          વારંવાર પૂછાતા પ્રશ્નો (FAQ)
        </h2>
        
        <div className="space-y-4">
          <details className="group border border-gray-200 rounded-lg p-4 cursor-pointer">
            <summary className="flex justify-between items-center font-medium text-gray-800 list-none">
              <span>શું રજીસ્ટ્રેશન માટે કોઈ ચાર્જ છે?</span>
              <ChevronDown className="group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-gray-600 mt-3 pl-2 border-l-2 border-green-500">
              ના, ખેડૂતો અને ગ્રાહકો બંને માટે રજીસ્ટ્રેશન સંપૂર્ણપણે મફત છે.
            </p>
          </details>
          
          <details className="group border border-gray-200 rounded-lg p-4 cursor-pointer">
            <summary className="flex justify-between items-center font-medium text-gray-800 list-none">
              <span>પેમેન્ટ કેવી રીતે કરવામાં આવે છે?</span>
              <ChevronDown className="group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-gray-600 mt-3 pl-2 border-l-2 border-green-500">
              તમે UPI, ક્રેડિટ/ડેબિટ કાર્ડ અથવા નેટ બેન્કિંગ દ્વારા સુરક્ષિત રીતે ચૂકવણી કરી શકો છો. ઓર્ડર મળ્યા પછી પેમેન્ટ ખેડૂતને આપવામાં આવે છે.
            </p>
          </details>
          
          <details className="group border border-gray-200 rounded-lg p-4 cursor-pointer">
            <summary className="flex justify-between items-center font-medium text-gray-800 list-none">
              <span>ખરાબ માલ આવે તો શું કરવું?</span>
              <ChevronDown className="group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-gray-600 mt-3 pl-2 border-l-2 border-green-500">
              ડિલિવરીના 24 કલાકમાં તમે ફરિયાદ કરી શકો છો. જો માલ યોગ્ય ન હોય તો પૈસા પરત કરવાની ગેરંટી છે.
            </p>
          </details>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-green-800 text-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">અમારો સંપર્ક કરો</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center p-6 bg-green-700 rounded-lg">
            <Phone className="w-10 h-10 mb-4 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">હેલ્પલાઇન નંબર</h3>
            <p className="text-xl">1800-123-4567</p>
            <p className="text-xs mt-2 opacity-75">(સવારે 9 થી સાંજે 6)</p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 bg-green-700 rounded-lg">
            <Mail className="w-10 h-10 mb-4 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">ઇમેઇલ સપોર્ટ</h3>
            <p className="text-xl">help@khedutsetu.com</p>
            <p className="text-xs mt-2 opacity-75">(24 કલાકમાં જવાબ)</p>
          </div>
        </div>
        
        <form className="mt-8 space-y-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="તમારું નામ" 
            className="w-full p-3 rounded bg-green-900 border border-green-600 text-white placeholder-green-300 focus:outline-none focus:border-yellow-400"
          />
          <textarea 
            placeholder="તમારો સંદેશ..." 
            rows={3}
            className="w-full p-3 rounded bg-green-900 border border-green-600 text-white placeholder-green-300 focus:outline-none focus:border-yellow-400"
          ></textarea>
          <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition">
            સંદેશ મોકલો
          </button>
        </form>
      </div>
    </div>
  );
};

export default Help;
