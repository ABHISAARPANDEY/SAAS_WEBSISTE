import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plane, 
  ArrowLeft,
  Car, 
  Compass, 
  Search, 
  Calendar, 
  MapPin, 
  Users, 
  ChevronDown, 
  ChevronRight, 
  Star, 
  Sun, 
  Umbrella, 
  Mountain, 
  Coffee, 
  Heart, 
  Share, 
  Menu, 
  X, 
  User, 
  Bell, 
  HelpCircle, 
  Globe
} from 'lucide-react';

const TravelBooking = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('flights');
  
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-orange-500 px-4 py-2 rounded-full hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </button>
      </div>
      
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Plane className="w-6 h-6 text-orange-500" />
              </div>
              <span className="ml-3 font-bold text-xl">TravelEase</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-medium text-white">Home</a>
              <a href="#" className="font-medium text-white/80 hover:text-white">Flights</a>
              <a href="#" className="font-medium text-white/80 hover:text-white">Hotels</a>
              <a href="#" className="font-medium text-white/80 hover:text-white">Packages</a>
              <a href="#" className="font-medium text-white/80 hover:text-white">Deals</a>
            </nav>
            
            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-white/80 hover:text-white">
                <Globe className="w-5 h-5" />
              </button>
              <button className="p-2 text-white/80 hover:text-white">
                <HelpCircle className="w-5 h-5" />
              </button>
              <button className="hidden md:flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">Sign In</span>
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-white/80 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-white font-medium bg-white/20">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10">Flights</a>
              <a href="#" className="block px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10">Hotels</a>
              <a href="#" className="block px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10">Packages</a>
              <a href="#" className="block px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10">Deals</a>
              <a href="#" className="block px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10">Sign In</a>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
            <p className="text-xl text-white/90 mb-8">
              Find and book the perfect trip with exclusive deals on flights, hotels, and vacation packages.
            </p>
          </div>
          
          {/* Search Tabs */}
          <div className="bg-white rounded-t-xl shadow-md max-w-5xl mx-auto">
            <div className="flex">
              <button 
                onClick={() => setActiveTab('flights')}
                className={`flex-1 py-4 px-6 text-center font-medium rounded-tl-xl ${
                  activeTab === 'flights' 
                    ? 'bg-white text-orange-500' 
                    : 'bg-white/90 text-gray-500 hover:bg-white hover:text-orange-500'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Plane className="w-5 h-5" />
                  <span>Flights</span>
                </div>
              </button>
              
              <button 
                onClick={() => setActiveTab('hotels')}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'hotels' 
                    ? 'bg-white text-orange-500' 
                    : 'bg-white/90 text-gray-500 hover:bg-white hover:text-orange-500'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Home className="w-5 h-5" />
                  <span>Hotels</span>
                </div>
              </button>
              
              <button 
                onClick={() => setActiveTab('cars')}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'cars' 
                    ? 'bg-white text-orange-500' 
                    : 'bg-white/90 text-gray-500 hover:bg-white hover:text-orange-500'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Car className="w-5 h-5" />
                  <span>Cars</span>
                </div>
              </button>
              
              <button 
                onClick={() => setActiveTab('packages')}
                className={`flex-1 py-4 px-6 text-center font-medium rounded-tr-xl ${
                  activeTab === 'packages' 
                    ? 'bg-white text-orange-500' 
                    : 'bg-white/90 text-gray-500 hover:bg-white hover:text-orange-500'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Compass className="w-5 h-5" />
                  <span>Packages</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Form */}
      <div className="bg-white shadow-md mb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {activeTab === 'flights' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="City or airport" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="City or airport" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>2 Adults, 1 Child</option>
                      <option>2 Adults, 2 Children</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-8 rounded-full font-medium hover:shadow-lg transition-shadow flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search Flights
                </button>
              </div>
            </div>
          )}
          
          {/* Other tabs would have similar forms */}
          {(activeTab === 'hotels' || activeTab === 'cars' || activeTab === 'packages') && (
            <div className="flex items-center justify-center h-32">
              <p className="text-gray-500">Search form for {activeTab} would be displayed here</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Destinations */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Destinations</h2>
            <a href="#" className="text-orange-500 hover:text-orange-700 text-sm font-medium flex items-center">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                name: 'Bali, Indonesia', 
                image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=800',
                price: '$899',
                rating: 4.8
              },
              { 
                name: 'Santorini, Greece', 
                image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
                price: '$1,299',
                rating: 4.9
              },
              { 
                name: 'Tokyo, Japan', 
                image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
                price: '$1,099',
                rating: 4.7
              },
              { 
                name: 'Paris, France', 
                image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=800',
                price: '$999',
                rating: 4.8
              }
            ].map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{destination.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-700">{destination.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-sm">Starting from</p>
                    <p className="font-bold text-orange-500">{destination.price}</p>
                  </div>
                  
                  <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:shadow-md transition-shadow text-sm font-medium">
                    Explore Deals
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Special Offers */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Special Offers</h2>
            <a href="#" className="text-orange-500 hover:text-orange-700 text-sm font-medium flex items-center">
              View All Offers <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Summer Beach Getaway', 
                description: 'Enjoy 30% off on beach resorts in the Caribbean',
                image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
                discount: '30% OFF',
                expires: '5 days left'
              },
              { 
                title: 'City Explorer Package', 
                description: 'Discover major cities with our all-inclusive packages',
                image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
                discount: '25% OFF',
                expires: '3 days left'
              },
              { 
                title: 'Adventure Travel Deal', 
                description: 'Book adventure tours and activities at discounted rates',
                image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
                discount: '20% OFF',
                expires: '7 days left'
              }
            ].map((offer, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 font-bold">
                    {offer.discount}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-500 font-medium">{offer.expires}</span>
                    <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:shadow-md transition-shadow text-sm font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Popular Experiences */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Popular Experiences</h2>
            <a href="#" className="text-orange-500 hover:text-orange-700 text-sm font-medium flex items-center">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                title: 'Beach Relaxation', 
                icon: Sun,
                color: 'bg-yellow-100 text-yellow-600',
                destinations: ['Maldives', 'Hawaii', 'Bali', 'Cancun']
              },
              { 
                title: 'Cultural Tours', 
                icon: Compass,
                color: 'bg-blue-100 text-blue-600',
                destinations: ['Rome', 'Kyoto', 'Cairo', 'Istanbul']
              },
              { 
                title: 'Mountain Hiking', 
                icon: Mountain,
                color: 'bg-green-100 text-green-600',
                destinations: ['Swiss Alps', 'Patagonia', 'Himalayas', 'Rockies']
              },
              { 
                title: 'Food & Cuisine', 
                icon: Coffee,
                color: 'bg-red-100 text-red-600',
                destinations: ['Italy', 'Japan', 'Thailand', 'Mexico']
              }
            ].map((experience, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-full ${experience.color} flex items-center justify-center mb-4`}>
                  <experience.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{experience.title}</h3>
                <ul className="space-y-2">
                  {experience.destinations.map((destination, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <ChevronRight className="w-4 h-4 text-orange-500 mr-1" />
                      {destination}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-4 border border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors text-sm font-medium">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 font-bold text-xl text-gray-900">TravelEase</span>
              </div>
              <p className="text-gray-600 text-sm">
                Making travel planning simple, affordable, and stress-free for everyone.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Explore</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-orange-500">Flights</a></li>
                <li><a href="#" className="hover:text-orange-500">Hotels</a></li>
                <li><a href="#" className="hover:text-orange-500">Vacation Packages</a></li>
                <li><a href="#" className="hover:text-orange-500">Car Rentals</a></li>
                <li><a href="#" className="hover:text-orange-500">Cruises</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-orange-500">Travel Guide</a></li>
                <li><a href="#" className="hover:text-orange-500">Travel Insurance</a></li>
                <li><a href="#" className="hover:text-orange-500">COVID-19 Travel Info</a></li>
                <li><a href="#" className="hover:text-orange-500">Travel Blog</a></li>
                <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500">Affiliates</a></li>
                <li><a href="#" className="hover:text-orange-500">Advertising</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; 2025 TravelEase. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-orange-500">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-orange-500">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-orange-500">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelBooking;