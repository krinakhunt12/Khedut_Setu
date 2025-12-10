
import { Home, ShoppingBag, UserPlus, HelpCircle, MessageCircle, LogIn } from 'lucide-react';
import { NavItem, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'મુખ્ય પૃષ્ઠ', translationKey: 'nav.home', path: '/', icon: Home },
  { label: 'બજાર (Market)', translationKey: 'nav.market', path: '/market', icon: ShoppingBag },
  { label: 'કૃષિ સલાહકાર', translationKey: 'nav.advisor', path: '/ai-advisor', icon: MessageCircle },
  { label: 'રજીસ્ટ્રેશન', translationKey: 'nav.register', path: '/register', icon: UserPlus },
  { label: 'લોગિન', translationKey: 'nav.login', path: '/login', icon: LogIn },
  { label: 'મદદ', translationKey: 'nav.help', path: '/help', icon: HelpCircle },
];

export const CATEGORIES = [
  'તમામ',
  'અનાજ',
  'શાકભાજી',
  'દાળ અને કઠોળ',
  'મસાલા',
  'ફળ',
  'ઓર્ગેનિક',
  'ડેરી પ્રોડક્ટ્સ',
  'બિયારણ',
  'ખેતી ઓજારો'
];

export const MOCK_WEATHER = [
  { city: "અમરેલી (Amreli)", temp: "32°C", condition: "ચોખ્ખું આકાશ", icon: "Sun", bg: "from-orange-400 to-yellow-300" },
  { city: "રાજકોટ (Rajkot)", temp: "34°C", condition: "આંશિક વાદળછાયું", icon: "Cloud", bg: "from-blue-400 to-blue-200" },
  { city: "સુરત (Surat)", temp: "30°C", condition: "ભેજવાળું", icon: "CloudRain", bg: "from-gray-600 to-gray-400" },
  { city: "બનાસકાંઠા (B.K.)", temp: "35°C", condition: "તડકો", icon: "Sun", bg: "from-orange-500 to-yellow-400" }
];

export const MOCK_VIDEOS = [
  {
    title: "કપાસના ઉત્પાદનમાં વધારો કેવી રીતે કરવો?",
    duration: "10:05",
    thumbnail: "https://images.unsplash.com/photo-1473649687982-f5c1d46d0130?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    views: "1.2K",
    videoUrl: "https://www.youtube.com/results?search_query=cotton+farming+increase+production+gujarati"
  },
  {
    title: "પ્રાકૃતિક ખેતી: જીવામૃત બનાવવાની રીત",
    duration: "15:30",
    thumbnail: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    views: "5.5K",
    videoUrl: "https://www.youtube.com/results?search_query=jivamrut+banavani+rit+gujarati"
  },
  {
    title: "ટપક સિંચાઈ પદ્ધતિના ફાયદા",
    duration: "08:20",
    thumbnail: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    views: "3.1K",
    videoUrl: "https://www.youtube.com/results?search_query=drip+irrigation+benefits+gujarati"
  },
  {
    title: "શિયાળુ પાકનું આયોજન",
    duration: "12:45",
    thumbnail: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    views: "2.8K",
    videoUrl: "https://www.youtube.com/results?search_query=rabi+crops+gujarat+planning"
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'ગીર કેસર કેરી (Gir Kesar)',
    category: 'ફળ',
    price: 1200,
    unit: '20 કિલો',
    farmerName: 'રામજીભાઈ પટેલ',
    location: 'તાલાલા, ગીર',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4f4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.8
  },
  {
    id: '2',
    name: 'દેશી ઘઉં (ટુકડા)',
    category: 'અનાજ',
    price: 600,
    unit: '20 કિલો',
    farmerName: 'કાનજીભાઈ આહિર',
    location: 'ભાલ પ્રદેશ',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.9
  },
  {
    id: '3',
    name: 'તાજા ટામેટા',
    category: 'શાકભાજી',
    price: 400,
    unit: '20 કિલો',
    farmerName: 'સુરેશભાઈ ઠાકોર',
    location: 'ડીસા',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.5
  },
  {
    id: '4',
    name: 'જીરું (ઉત્તમ ગુણવત્તા)',
    category: 'મસાલા',
    price: 5500,
    unit: '20 કિલો',
    farmerName: 'પટેલ એગ્રો ફાર્મ',
    location: 'ઊંઝા',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.7
  },
  {
    id: '5',
    name: 'બાજરી (દેશી)',
    category: 'અનાજ',
    price: 450,
    unit: '20 કિલો',
    farmerName: 'ભરતભાઈ ચૌધરી',
    location: 'બનાસકાંઠા',
    image: 'https://images.unsplash.com/photo-1621255755146-2f1908d4eb0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.6
  },
  {
    id: '6',
    name: 'ઓર્ગેનિક મગ',
    category: 'દાળ અને કઠોળ',
    price: 120,
    unit: '1 કિલો',
    farmerName: 'દિનેશભાઈ સોલંકી',
    location: 'જૂનાગઢ',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe9c6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.9
  },
  {
    id: '7',
    name: 'લાલ ડુંગળી',
    category: 'શાકભાજી',
    price: 300,
    unit: '20 કિલો',
    farmerName: 'મનસુખભાઈ વઘાસિયા',
    location: 'મહુવા, ભાવનગર',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.4
  },
  {
    id: '8',
    name: 'મગફળી (દાણા)',
    category: 'તેલીબિયાં',
    price: 1300,
    unit: '20 કિલો',
    farmerName: 'રાજેશ્વરી ફાર્મ',
    location: 'અમરેલી',
    image: 'https://images.unsplash.com/photo-1565553752796-0373d5415754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.8
  },
  {
    id: '9',
    name: 'કપાસ (શંકર-6)',
    category: 'તેલીબિયાં',
    price: 1650,
    unit: '20 કિલો',
    farmerName: 'રમેશભાઈ',
    location: 'જામનગર',
    image: 'https://images.unsplash.com/photo-1594314489370-17e57c617b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.7
  },
  {
    id: '10',
    name: 'શુદ્ધ ગાયનું ઘી',
    category: 'ડેરી પ્રોડક્ટ્સ',
    price: 900,
    unit: '1 લીટર',
    farmerName: 'ગોપાલ ડેરી ફાર્મ',
    location: 'ગીર સોમનાથ',
    image: 'https://images.unsplash.com/photo-1626127161642-4f9e1e2c9e7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 5.0
  },
  {
    id: '11',
    name: 'હળદર પાવડર',
    category: 'મસાલા',
    price: 200,
    unit: '500 ગ્રામ',
    farmerName: 'પ્રાકૃતિક ખેતી ફાર્મ',
    location: 'સાબરકાંઠા',
    image: 'https://images.unsplash.com/photo-1615485500704-8e99099928b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.6
  },
  {
    id: '12',
    name: 'સરગવો (Drumsticks)',
    category: 'શાકભાજી',
    price: 40,
    unit: '1 કિલો',
    farmerName: 'નટુભાઈ',
    location: 'વડોદરા',
    image: 'https://images.unsplash.com/photo-1541595126-5541e217578b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.3
  }
];

export const MOCK_SCHEMES = [
  {
    title: "પ્રધાનમંત્રી કિસાન સન્માન નિધિ",
    desc: "દરેક ખેડૂત પરિવારને વાર્ષિક ₹6,000 ની આર્થિક સહાય. સીધા બેંક ખાતામાં જમા.",
    tag: "કેન્દ્ર સરકાર",
    link: "https://pmkisan.gov.in/"
  },
  {
    title: "તાર ફેન્સીંગ યોજના (i-Khedut)",
    desc: "ખેતરની ફરતે કાંટાળી તારની વાડ કરવા માટે સરકાર તરફથી સબસિડી સહાય.",
    tag: "ગુજરાત સરકાર",
    link: "https://ikhedut.gujarat.gov.in/"
  },
  {
    title: "સોઈલ હેલ્થ કાર્ડ યોજના",
    desc: "જમીનની ફળદ્રુપતા ચકાસવા અને ખાતરનો યોગ્ય ઉપયોગ કરવા માટે મફત ટેસ્ટિંગ.",
    tag: "ખેતીવાડી ખાતું",
    link: "https://soilhealth.dac.gov.in/"
  },
  {
    title: "કિસાન ક્રેડિટ કાર્ડ (KCC)",
    desc: "ખેતીના ખર્ચ માટે ઓછા વ્યાજ દરે ટૂંકા ગાળાની લોન સુવિધા.",
    tag: "બેંકિંગ",
    link: "https://www.myscheme.gov.in/schemes/kcc"
  }
];

export const MOCK_NEWS = [
  {
    title: "કપાસના ભાવમાં રેકોર્ડ બ્રેક ઉછાળો",
    date: "12 May 2024",
    source: "APMC સમાચાર"
  },
  {
    title: "ચોમાસુ 2024: ગુજરાતમાં સામાન્ય કરતા વધુ વરસાદની આગાહી",
    date: "10 May 2024",
    source: "હવામાન વિભાગ"
  },
  {
    title: "પ્રાકૃતિક ખેતી કરતા ખેડૂતો માટે વિશેષ પેકેજ જાહેર",
    date: "08 May 2024",
    source: "ગાંધીનગર"
  }
];

export const SUGGESTED_QUESTIONS = [
  "આજે કપાસનો ભાવ શું છે?",
  "જીરું પકવવા માટે કઈ દવા સારી?",
  "ચોમાસુ ક્યારે બેસશે?",
  "ઓર્ગેનિક ખેતી કેવી રીતે કરવી?",
  "સરકારી સબસિડીની માહિતી આપો",
  "મગફળીમાં ઈયળનો ઉપાય"
];

export const MARKET_RATES_TICKER = [
  "કપાસ: ₹1500-1650", "જીરું: ₹5000-5800", "ઘઉં: ₹550-650", "મગફળી: ₹1200-1400", "ચણા: ₹900-1050", "એરંડા: ₹1100-1200", "બાજરી: ₹400-500"
];

export const SEO_KEYWORDS = [
  "ખેડૂત ઓનલાઇન માર્કેટ",
  "સીધું ખરીદો ખેડૂત પાસેથી",
  "ગુજરાત ફાર્મિંગ પ્લેટફોર્મ",
  "મધ્યસ્થી વગરની ખેતી બજાર",
  "Online Market Gujarat Farmer",
  "APMC alternative Gujarat",
  "Organic Vegetables Gujarat",
  "Khedut Setu App",
  "Gujarat Agriculture Market",
  "Direct Farmer to Buyer",
  "Khedut Portal Gujarat",
  "Village to City Delivery",
  "Fresh Farm Produce Gujarat",
  "Farmers Market Online",
  "શાકભાજી હોમ ડિલિવરી",
  "અનાજ ઓનલાઇન ખરીદી",
  "ઓર્ગેનિક ખેતી ગુજરાત",
  "સજીવ ખેતી ઉત્પાદનો",
  "ખેડૂતથી સીધો માલ",
  "સીધું વેચાણ પ્લેટફોર્મ",
  "ખેડૂત ઓનલાઇન માર્કેટ",
  "Agriculture Marketplace India",
  "ગુજરાતી ખેડૂત બજાર"
];
