import { Home, ShoppingBag, UserPlus, HelpCircle, MessageCircle } from 'lucide-react';
import { NavItem, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'મુખ્ય પૃષ્ઠ', translationKey: 'nav.home', path: '/', icon: Home },
  { label: 'બજાર (Market)', translationKey: 'nav.market', path: '/market', icon: ShoppingBag },
  { label: 'કૃષિ સલાહકાર', translationKey: 'nav.advisor', path: '/ai-advisor', icon: MessageCircle },
  { label: 'રજીસ્ટ્રેશન', translationKey: 'nav.register', path: '/register', icon: UserPlus },
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
  'ડેરી પ્રોડક્ટ્સ'
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'ગીર કેસર કેરી',
    category: 'ફળ',
    price: 1200,
    unit: '20 કિલો',
    farmerName: 'રામજીભાઈ પટેલ',
    location: 'તાલાલા, ગીર',
    image: 'https://picsum.photos/400/300?random=1',
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
    image: 'https://picsum.photos/400/300?random=2',
    rating: 4.9
  },
  {
    id: '3',
    name: 'તાજા ટામેટા',
    category: 'શાકભાજી',
    price: 20,
    unit: '1 કિલો',
    farmerName: 'સુરેશભાઈ ઠાકોર',
    location: 'ડીસા',
    image: 'https://picsum.photos/400/300?random=3',
    rating: 4.5
  },
  {
    id: '4',
    name: 'જીરું (ઉત્તમ ગુણવત્તા)',
    category: 'મસાલા',
    price: 3500,
    unit: '20 કિલો',
    farmerName: 'પટેલ એગ્રો ફાર્મ',
    location: 'ઊંઝા',
    image: 'https://picsum.photos/400/300?random=4',
    rating: 4.7
  },
  {
    id: '5',
    name: 'બાજરી',
    category: 'અનાજ',
    price: 450,
    unit: '20 કિલો',
    farmerName: 'ભરતભાઈ ચૌધરી',
    location: 'બનાસકાંઠા',
    image: 'https://picsum.photos/400/300?random=5',
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
    image: 'https://picsum.photos/400/300?random=6',
    rating: 4.9
  }
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