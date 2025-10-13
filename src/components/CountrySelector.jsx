import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useCurrency, COUNTRIES } from '../contexts/CurrencyContext';

const CountrySelector = () => {
  const { selectedCountry, setSelectedCountry, getCurrencySymbol } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  // Filter countries based on search term
  const filteredCountries = COUNTRIES.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country.name);
    setIsOpen(false);
    setSearchTerm('');
  };

  const selectedCountryData = COUNTRIES.find(c => c.name === selectedCountry);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-text-primary hover:bg-white/20 transition-all duration-200 min-w-[140px]"
      >
        <Globe className="w-4 h-4 text-accent-primary" />
        <span className="text-sm font-medium truncate">
          {selectedCountryData?.flag} {selectedCountryData?.code}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-text-secondary" />
        </motion.div>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-border-color z-50 overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-3 border-b border-border-color">
              <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary"
                autoFocus
              />
            </div>

            {/* Country List */}
            <div className="max-h-64 overflow-y-auto">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => (
                  <motion.button
                    key={country.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.02 }}
                    onClick={() => handleCountrySelect(country)}
                    className={`w-full px-4 py-3 text-left hover:bg-accent-primary/10 transition-colors flex items-center justify-between ${
                      selectedCountry === country.name ? 'bg-accent-primary/20' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{country.flag}</span>
                      <div>
                        <div className="font-medium text-text-primary">{country.name}</div>
                        <div className="text-xs text-text-secondary">{country.code}</div>
                      </div>
                    </div>
                    {selectedCountry === country.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-accent-primary rounded-full"
                      />
                    )}
                  </motion.button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-text-secondary">
                  <Globe className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No countries found</p>
                </div>
              )}
            </div>

            {/* Currency Info */}
            <div className="p-3 bg-secondary border-t border-border-color">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Currency:</span>
                <span className="font-medium text-text-primary">
                  {getCurrencySymbol()} {selectedCountryData?.code}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountrySelector;
