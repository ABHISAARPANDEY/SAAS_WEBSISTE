import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Utensils, 
  ArrowLeft,
  ShoppingCart, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Star, 
  Heart, 
  Plus, 
  Minus, 
  ChevronRight, 
  Filter, 
  Truck, 
  Coffee, 
  Pizza, 
  Beef, 
  Salad, 
  Sandwich, 
  IceCream,
  Search,
  User
} from 'lucide-react';

const FoodieDelivery = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  console.debug('Rendering FoodieDelivery component');
  const [cartOpen, setCartOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </button>
      </div>
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 font-bold text-xl text-gray-900">Foodie</span>
            </div>
            
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search for food, restaurants..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            
            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-red-500 relative">
                <MapPin className="w-5 h-5" />
              </button>
              <button 
                className="p-2 text-gray-500 hover:text-red-500 relative"
                onClick={() => setCartOpen(!cartOpen)}
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                </button>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-gray-500 hover:text-red-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Search Bar - Mobile */}
              <div className="relative w-full mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search for food, restaurants..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <a href="#" className="block px-3 py-2 rounded-md text-gray-900 font-medium hover:bg-gray-100">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-900 font-medium hover:bg-gray-100">Restaurants</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-900 font-medium hover:bg-gray-100">Orders</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-900 font-medium hover:bg-gray-100">Profile</a>
            </div>
          </div>
        )}
      </header>
      
      {/* Shopping Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setCartOpen(false)}
            ></div>
            <div className="absolute inset-y-0 right-0 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
                      <button 
                        className="text-gray-400 hover:text-gray-500"
                        onClick={() => setCartOpen(false)}
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="divide-y divide-gray-200">
                          {[
                            { 
                              name: 'Margherita Pizza', 
                              restaurant: 'Pizza Palace', 
                              price: 12.99, 
                              quantity: 1,
                              image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=800'
                            },
                            { 
                              name: 'Chicken Burger', 
                              restaurant: 'Burger Joint', 
                              price: 9.99, 
                              quantity: 1,
                              image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800'
                            },
                            { 
                              name: 'Caesar Salad', 
                              restaurant: 'Green Eats', 
                              price: 8.49, 
                              quantity: 1,
                              image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800'
                            }
                          ].map((item, index) => (
                            <li key={index} className="py-6 flex">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{item.name}</h3>
                                    <p className="ml-4">${item.price.toFixed(2)}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{item.restaurant}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex items-center border border-gray-300 rounded-full">
                                    <button className="p-1 rounded-l-full hover:bg-gray-100">
                                      <Minus className="w-4 h-4 text-gray-500" />
                                    </button>
                                    <span className="px-2">{item.quantity}</span>
                                    <button className="p-1 rounded-r-full hover:bg-gray-100">
                                      <Plus className="w-4 h-4 text-gray-500" />
                                    </button>
                                  </div>
                                  
                                  <button className="font-medium text-red-500 hover:text-red-600">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                      <p>Subtotal</p>
                      <p>$31.47</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <p>Delivery Fee</p>
                      <p>$2.99</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <p>Tax</p>
                      <p>$2.83</p>
                    </div>
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                      <p>Total</p>
                      <p>$37.29</p>
                    </div>
                    <button className="w-full bg-red-500 text-white py-3 px-4 rounded-full font-medium hover:bg-red-600 transition-colors">
                      Checkout
                    </button>
                    <div className="mt-4 flex justify-center text-sm text-gray-500">
                      <p>
                        or <button className="text-red-500 font-medium hover:text-red-600">Continue Ordering</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 mb-8 text-white">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-4">Delicious food delivered to your door</h1>
            <p className="text-white/90 mb-6">
              Order from your favorite restaurants and track your delivery in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-red-500 py-3 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Order Now
              </button>
              <button className="bg-white/20 text-white py-3 px-6 rounded-full font-medium hover:bg-white/30 transition-colors">
                View Restaurants
              </button>
            </div>
          </div>
        </div>
        
        {/* Food Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: 'Pizza', icon: Pizza, color: 'bg-red-100 text-red-600' },
              { name: 'Burgers', icon: Beef, color: 'bg-orange-100 text-orange-600' },
              { name: 'Salads', icon: Salad, color: 'bg-green-100 text-green-600' },
              { name: 'Sandwiches', icon: Sandwich, color: 'bg-yellow-100 text-yellow-600' },
              { name: 'Desserts', icon: IceCream, color: 'bg-pink-100 text-pink-600' },
              { name: 'Coffee', icon: Coffee, color: 'bg-brown-100 text-amber-800' }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-2`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <p className="font-medium text-gray-900">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured Restaurants */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Featured Restaurants</h2>
            <a href="#" className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                name: 'Pizza Palace', 
                image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=800',
                rating: 4.8,
                reviews: 245,
                cuisine: 'Italian',
                deliveryTime: '25-35 min',
                deliveryFee: '$2.99'
              },
              { 
                name: 'Burger Joint', 
                image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800',
                rating: 4.6,
                reviews: 189,
                cuisine: 'American',
                deliveryTime: '20-30 min',
                deliveryFee: '$1.99'
              },
              { 
                name: 'Sushi Express', 
                image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800',
                rating: 4.9,
                reviews: 320,
                cuisine: 'Japanese',
                deliveryTime: '30-40 min',
                deliveryFee: '$3.49'
              }
            ].map((restaurant, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{restaurant.name}</h3>
                    <div className="flex items-center bg-green-100 px-2 py-1 rounded-md">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-900">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{restaurant.cuisine}</span>
                    <span className="mx-2">•</span>
                    <span>{restaurant.reviews} reviews</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {restaurant.deliveryTime}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Truck className="w-4 h-4 mr-1" />
                      {restaurant.deliveryFee}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-full font-medium hover:bg-red-600 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Popular Meals */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Popular Right Now</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                <Filter className="w-5 h-5 text-gray-500" />
              </button>
              <a href="#" className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { 
                name: 'Margherita Pizza', 
                restaurant: 'Pizza Palace',
                image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=800',
                price: 12.99,
                rating: 4.8
              },
              { 
                name: 'Chicken Burger', 
                restaurant: 'Burger Joint',
                image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
                price: 9.99,
                rating: 4.6
              },
              { 
                name: 'Salmon Sushi Roll', 
                restaurant: 'Sushi Express',
                image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800',
                price: 14.99,
                rating: 4.9
              },
              { 
                name: 'Caesar Salad', 
                restaurant: 'Green Eats',
                image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800',
                price: 8.49,
                rating: 4.5
              }
            ].map((meal, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={meal.image} 
                    alt={meal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{meal.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{meal.restaurant}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm text-gray-700">{meal.rating}</span>
                    </div>
                    <span className="font-bold text-gray-900">${meal.price.toFixed(2)}</span>
                  </div>
                  
                  <button className="w-full mt-3 bg-red-500 text-white py-2 rounded-full text-sm font-medium hover:bg-red-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 font-bold text-xl text-gray-900">Foodie</span>
              </div>
              <p className="text-gray-600 text-sm">
                Delicious food delivered to your doorstep. Fast, reliable, and tasty.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Explore</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-red-500">Restaurants</a></li>
                <li><a href="#" className="hover:text-red-500">Cuisines</a></li>
                <li><a href="#" className="hover:text-red-500">Popular Dishes</a></li>
                <li><a href="#" className="hover:text-red-500">Cities</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Get Help</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-red-500">Order Status</a></li>
                <li><a href="#" className="hover:text-red-500">Delivery Issues</a></li>
                <li><a href="#" className="hover:text-red-500">Payment Options</a></li>
                <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Join Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-red-500">Become a Partner</a></li>
                <li><a href="#" className="hover:text-red-500">Add Your Restaurant</a></li>
                <li><a href="#" className="hover:text-red-500">Sign Up to Deliver</a></li>
                <li><a href="#" className="hover:text-red-500">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; 2025 Foodie Delivery. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-red-500">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-red-500">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-red-500">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FoodieDelivery;