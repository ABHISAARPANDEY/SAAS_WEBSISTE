import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Play, 
  ArrowLeft,
  Search, 
  User, 
  Bell, 
  Menu, 
  X, 
  Film, 
  Tv, 
  Music, 
  Star, 
  Heart, 
  Plus, 
  Info, 
  ChevronRight, 
  Download, 
  Share, 
  Settings, 
  LogOut,
  Bookmark,
  Clock,
  TrendingUp,
  Award
} from 'lucide-react';

const StreamingPlatform = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </button>
      </div>
      
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Play className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="ml-3 font-bold text-xl">StreamVibe</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-medium text-white">Home</a>
              <a href="#" className="font-medium text-gray-400 hover:text-white">Movies</a>
              <a href="#" className="font-medium text-gray-400 hover:text-white">TV Shows</a>
              <a href="#" className="font-medium text-gray-400 hover:text-white">New & Popular</a>
              <a href="#" className="font-medium text-gray-400 hover:text-white">My List</a>
            </nav>
            
            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-gray-400 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-white font-medium bg-gray-800">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800">Movies</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800">TV Shows</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800">New & Popular</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800">My List</a>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Banner */}
      <div className="relative">
        <div className="aspect-[21/9] max-h-[70vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Featured Movie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Cosmic Odyssey</h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-2 py-1 bg-gray-800 rounded text-sm">2025</span>
              <span className="px-2 py-1 bg-gray-800 rounded text-sm">Sci-Fi</span>
              <span className="px-2 py-1 bg-gray-800 rounded text-sm">2h 35m</span>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="ml-1 text-sm">9.2</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl">
              A groundbreaking journey through space and time as humanity faces its greatest challenge yet. 
              When a mysterious signal from deep space threatens Earth, a team of astronauts must venture 
              beyond our solar system to save mankind.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black py-3 px-8 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" fill="black" />
                Play
              </button>
              <button className="bg-gray-800 text-white py-3 px-8 rounded-full font-medium hover:bg-gray-700 transition-colors flex items-center gap-2">
                <Info className="w-5 h-5" />
                More Info
              </button>
              <button className="bg-gray-800/80 text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
      <main className="py-8">
        {/* Trending Now */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Trending Now</h2>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-medium flex items-center">
                See All <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { 
                  title: 'Neon Shadows', 
                  image: 'https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=800',
                  type: 'Movie',
                  rating: 8.7
                },
                { 
                  title: 'Eternal Winter', 
                  image: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=800',
                  type: 'Series',
                  rating: 9.1
                },
                { 
                  title: 'Desert Storm', 
                  image: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=800',
                  type: 'Movie',
                  rating: 8.5
                },
                { 
                  title: 'Midnight City', 
                  image: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=800',
                  type: 'Series',
                  rating: 8.9
                },
                { 
                  title: 'Ocean Depths', 
                  image: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800',
                  type: 'Documentary',
                  rating: 9.3
                },
                { 
                  title: 'Sky Limit', 
                  image: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=800',
                  type: 'Movie',
                  rating: 8.8
                }
              ].map((item, index) => (
                <div key={index} className="group relative rounded-md overflow-hidden cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{item.type}</span>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="ml-1">{item.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30">
                        <Play className="w-4 h-4" fill="white" />
                      </button>
                      <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30">
                        <Plus className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Continue Watching */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Continue Watching</h2>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-medium flex items-center">
                See All <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { 
                  title: 'Cosmic Odyssey', 
                  image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=800',
                  progress: 35,
                  episode: 'S1:E4 "New Horizons"'
                },
                { 
                  title: 'Dark Waters', 
                  image: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=800',
                  progress: 75,
                  episode: 'S2:E8 "The Deep"'
                },
                { 
                  title: 'Mountain Peak', 
                  image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
                  progress: 50,
                  episode: 'S1:E6 "Summit"'
                },
                { 
                  title: 'City Lights', 
                  image: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=800',
                  progress: 90,
                  episode: 'S3:E2 "Nightfall"'
                }
              ].map((item, index) => (
                <div key={index} className="group relative rounded-md overflow-hidden cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-4">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.episode}</p>
                    <div className="mt-2 w-full h-1 bg-gray-700 rounded-full">
                      <div 
                        className="h-1 bg-red-600 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 bg-white text-black py-1.5 rounded-md font-medium text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-1">
                        <Play className="w-4 h-4" fill="black" />
                        Resume
                      </button>
                      <button className="p-1.5 bg-gray-800 rounded-md hover:bg-gray-700">
                        <Info className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Categories */}
        <section className="mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Popular Categories</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { 
                  title: 'Action & Adventure', 
                  icon: Film,
                  color: 'from-red-600 to-orange-600',
                  count: '1,245 titles'
                },
                { 
                  title: 'Sci-Fi & Fantasy', 
                  icon: Tv,
                  color: 'from-blue-600 to-cyan-600',
                  count: '865 titles'
                },
                { 
                  title: 'Comedy', 
                  icon: Film,
                  color: 'from-yellow-500 to-amber-500',
                  count: '1,120 titles'
                },
                { 
                  title: 'Drama', 
                  icon: Tv,
                  color: 'from-purple-600 to-pink-600',
                  count: '1,530 titles'
                }
              ].map((category, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-1">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Award Winners */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Award Winners</h2>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-medium flex items-center">
                See All <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { 
                  title: 'The Last Journey', 
                  image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
                  award: 'Best Picture'
                },
                { 
                  title: 'Eternal Sunshine', 
                  image: 'https://images.pexels.com/photos/1738434/pexels-photo-1738434.jpeg?auto=compress&cs=tinysrgb&w=800',
                  award: 'Best Director'
                },
                { 
                  title: 'Midnight Express', 
                  image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=800',
                  award: 'Best Screenplay'
                },
                { 
                  title: 'Ocean\'s Depth', 
                  image: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=800',
                  award: 'Best Cinematography'
                },
                { 
                  title: 'The Forgotten', 
                  image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=800',
                  award: 'Best Actor'
                },
                { 
                  title: 'Silent Echo', 
                  image: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800',
                  award: 'Best Actress'
                }
              ].map((item, index) => (
                <div key={index} className="group relative rounded-md overflow-hidden cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 right-0 bg-yellow-500 text-black px-2 py-1 text-xs font-bold">
                    <Award className="w-3 h-3 inline mr-1" />
                    {item.award}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <div className="flex gap-2 mt-2">
                      <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30">
                        <Play className="w-4 h-4" fill="white" />
                      </button>
                      <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30">
                        <Plus className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" fill="white" />
                </div>
                <span className="ml-3 font-bold text-xl">StreamVibe</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your ultimate streaming destination for movies, TV shows, and more.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-500">Home</a></li>
                <li><a href="#" className="hover:text-purple-500">Movies</a></li>
                <li><a href="#" className="hover:text-purple-500">TV Shows</a></li>
                <li><a href="#" className="hover:text-purple-500">New & Popular</a></li>
                <li><a href="#" className="hover:text-purple-500">My List</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-500">Terms of Use</a></li>
                <li><a href="#" className="hover:text-purple-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-500">Cookie Preferences</a></li>
                <li><a href="#" className="hover:text-purple-500">Corporate Information</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Help</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-500">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-purple-500">Supported Devices</a></li>
                <li><a href="#" className="hover:text-purple-500">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 StreamVibe. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-500">English</a>
              <a href="#" className="text-gray-400 hover:text-purple-500">USD</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StreamingPlatform;