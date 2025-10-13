import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

// Currency conversion rates (approximate rates, in production you'd fetch from an API)
// Base currency is now INR, so INR = 1
const CURRENCY_RATES = {
  INR: 1,
  USD: 0.012, // 1 INR = 0.012 USD (1 USD = 83.5 INR)
  EUR: 0.010, // 1 INR = 0.010 EUR (1 EUR = 98.2 INR)
  GBP: 0.0087, // 1 INR = 0.0087 GBP (1 GBP = 115 INR)
  CAD: 0.015, // 1 INR = 0.015 CAD (1 CAD = 66.7 INR)
  AUD: 0.016, // 1 INR = 0.016 AUD (1 AUD = 62.5 INR)
  JPY: 1.32, // 1 INR = 1.32 JPY (1 JPY = 0.76 INR)
  CNY: 0.086, // 1 INR = 0.086 CNY (1 CNY = 11.6 INR)
  AED: 0.044, // 1 INR = 0.044 AED (1 AED = 22.7 INR)
  SAR: 0.045, // 1 INR = 0.045 SAR (1 SAR = 22.2 INR)
  QAR: 0.044, // 1 INR = 0.044 QAR (1 QAR = 22.9 INR)
  KWD: 0.0037, // 1 INR = 0.0037 KWD (1 KWD = 270 INR)
  BHD: 0.0045, // 1 INR = 0.0045 BHD (1 BHD = 222 INR)
  OMR: 0.0046 // 1 INR = 0.0046 OMR (1 OMR = 217 INR)
};

// Country to currency mapping
const COUNTRY_CURRENCY_MAP = {
  'India': 'INR',
  'United States': 'USD',
  'United Kingdom': 'GBP',
  'Canada': 'CAD',
  'Australia': 'AUD',
  'Japan': 'JPY',
  'China': 'CNY',
  'Germany': 'EUR',
  'France': 'EUR',
  'Italy': 'EUR',
  'Spain': 'EUR',
  'Netherlands': 'EUR',
  'Belgium': 'EUR',
  'Austria': 'EUR',
  'Portugal': 'EUR',
  'Ireland': 'EUR',
  'Finland': 'EUR',
  'Greece': 'EUR',
  'Luxembourg': 'EUR',
  'Malta': 'EUR',
  'Cyprus': 'EUR',
  'Slovenia': 'EUR',
  'Slovakia': 'EUR',
  'Estonia': 'EUR',
  'Latvia': 'EUR',
  'Lithuania': 'EUR',
  'United Arab Emirates': 'AED',
  'Saudi Arabia': 'SAR',
  'Qatar': 'QAR',
  'Kuwait': 'KWD',
  'Bahrain': 'BHD',
  'Oman': 'OMR'
};

// Currency symbols
const CURRENCY_SYMBOLS = {
  USD: '$',
  INR: '₹',
  EUR: '€',
  GBP: '£',
  CAD: 'C$',
  AUD: 'A$',
  JPY: '¥',
  CNY: '¥',
  AED: 'د.إ',
  SAR: 'ر.س',
  QAR: 'ر.ق',
  KWD: 'د.ك',
  BHD: 'د.ب',
  OMR: 'ر.ع.د'
};

// Country list for dropdown
export const COUNTRIES = [
  { name: 'India', code: 'IN', flag: '🇮🇳' },
  { name: 'United States', code: 'US', flag: '🇺🇸' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵' },
  { name: 'China', code: 'CN', flag: '🇨🇳' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  { name: 'Spain', code: 'ES', flag: '🇪🇸' },
  { name: 'Netherlands', code: 'NL', flag: '🇳🇱' },
  { name: 'Belgium', code: 'BE', flag: '🇧🇪' },
  { name: 'Austria', code: 'AT', flag: '🇦🇹' },
  { name: 'Portugal', code: 'PT', flag: '🇵🇹' },
  { name: 'Ireland', code: 'IE', flag: '🇮🇪' },
  { name: 'Finland', code: 'FI', flag: '🇫🇮' },
  { name: 'Greece', code: 'GR', flag: '🇬🇷' },
  { name: 'Luxembourg', code: 'LU', flag: '🇱🇺' },
  { name: 'Malta', code: 'MT', flag: '🇲🇹' },
  { name: 'Cyprus', code: 'CY', flag: '🇨🇾' },
  { name: 'Slovenia', code: 'SI', flag: '🇸🇮' },
  { name: 'Slovakia', code: 'SK', flag: '🇸🇰' },
  { name: 'Estonia', code: 'EE', flag: '🇪🇪' },
  { name: 'Latvia', code: 'LV', flag: '🇱🇻' },
  { name: 'Lithuania', code: 'LT', flag: '🇱🇹' },
  { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪' },
  { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦' },
  { name: 'Qatar', code: 'QA', flag: '🇶🇦' },
  { name: 'Kuwait', code: 'KW', flag: '🇰🇼' },
  { name: 'Bahrain', code: 'BH', flag: '🇧🇭' },
  { name: 'Oman', code: 'OM', flag: '🇴🇲' }
];

export const CurrencyProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [currency, setCurrency] = useState('INR');
  const [rates, setRates] = useState(CURRENCY_RATES);

  // Update currency when country changes
  useEffect(() => {
    const newCurrency = COUNTRY_CURRENCY_MAP[selectedCountry] || 'INR';
    setCurrency(newCurrency);
    
    // Save to localStorage
    localStorage.setItem('selectedCountry', selectedCountry);
    localStorage.setItem('selectedCurrency', newCurrency);
  }, [selectedCountry]);

  // Load saved preferences on mount
  useEffect(() => {
    const savedCountry = localStorage.getItem('selectedCountry');
    const savedCurrency = localStorage.getItem('selectedCurrency');
    
    if (savedCountry && COUNTRY_CURRENCY_MAP[savedCountry]) {
      setSelectedCountry(savedCountry);
      setCurrency(savedCurrency || COUNTRY_CURRENCY_MAP[savedCountry]);
    }
  }, []);

  // Convert price from INR to current currency
  const convertPrice = (inrPrice) => {
    if (!inrPrice || typeof inrPrice !== 'number') return 0;
    const convertedPrice = inrPrice * rates[currency];
    return Math.round(convertedPrice);
  };

  // Format price with currency symbol
  const formatPrice = (inrPrice, showSymbol = true) => {
    const convertedPrice = convertPrice(inrPrice);
    const symbol = CURRENCY_SYMBOLS[currency] || '₹';
    
    if (showSymbol) {
      return `${symbol}${convertedPrice.toLocaleString()}`;
    }
    return convertedPrice.toLocaleString();
  };

  // Get currency symbol
  const getCurrencySymbol = () => {
    return CURRENCY_SYMBOLS[currency] || '₹';
  };

  // Get current rate
  const getCurrentRate = () => {
    return rates[currency] || 1;
  };

  const value = {
    selectedCountry,
    setSelectedCountry,
    currency,
    setCurrency,
    rates,
    convertPrice,
    formatPrice,
    getCurrencySymbol,
    getCurrentRate,
    CURRENCY_SYMBOLS,
    COUNTRY_CURRENCY_MAP,
    COUNTRIES
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
