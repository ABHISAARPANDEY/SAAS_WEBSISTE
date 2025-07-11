import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Store, 
  ArrowLeft,
  User, 
  Bell, 
  Search, 
  Menu, 
  X, 
  ShoppingCart, 
  BarChart3, 
  Package, 
  Users, 
  Settings, 
  LogOut,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  DollarSign,
  Gift,
  Tag,
  Percent,
  Clock,
  Calendar,
  ChevronRight,
  CheckCircle,
  Truck
} from 'lucide-react';

const RetailPOS = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pos');
  const [cart, setCart] = useState([
    { id: 1, name: 'T-Shirt - Black', price: 24.99, quantity: 2, image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, name: 'Jeans - Blue', price: 49.99, quantity: 1, image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ]);
  
  const updateQuantity = (id, change) => {
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + change) } 
        : item
    ));
  };
  
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  
  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };
  
  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };
  
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </button>
      </div>
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 font-bold text-xl text-gray-900">RetailPOS</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab('pos')}
                className={`font-medium ${activeTab === 'pos' ? 'text-purple-600' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Point of Sale
              </button>
              <button 
                onClick={() => setActiveTab('inventory')}
                className={`font-medium ${activeTab === 'inventory' ? 'text-purple-600' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Inventory
              </button>
              <button 
                onClick={() => setActiveTab('customers')}
                className={`font-medium ${activeTab === 'customers' ? 'text-purple-600' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Customers
              </button>
              <button 
                onClick={() => setActiveTab('reports')}
                className={`font-medium ${activeTab === 'reports' ? 'text-purple-600' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Reports
              </button>
            </nav>
            
            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-purple-600">
                <Bell className="w-5 h-5" />
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <User className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700">Admin</span>
                </button>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-gray-500 hover:text-purple-600"
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
              <button 
                onClick={() => setActiveTab('pos')}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium ${
                  activeTab === 'pos' 
                    ? 'bg-purple-100 text-purple-600' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Point of Sale
              </button>
              <button 
                onClick={() => setActiveTab('inventory')}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium ${
                  activeTab === 'inventory' 
                    ? 'bg-purple-100 text-purple-600' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Inventory
              </button>
              <button 
                onClick={() => setActiveTab('customers')}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium ${
                  activeTab === 'customers' 
                    ? 'bg-purple-100 text-purple-600' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Customers
              </button>
              <button 
                onClick={() => setActiveTab('reports')}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium ${
                  activeTab === 'reports' 
                    ? 'bg-purple-100 text-purple-600' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Reports
              </button>
            </div>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Point of Sale */}
        {activeTab === 'pos' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Catalog */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Products</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
              
              {/* Categories */}
              <div className="flex overflow-x-auto space-x-4 pb-4 mb-6">
                {['All', 'Clothing', 'Shoes', 'Accessories', 'Electronics', 'Home', 'Beauty'].map((category, index) => (
                  <button 
                    key={index}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      index === 0 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { id: 1, name: 'T-Shirt - Black', price: 24.99, image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=800' },
                  { id: 2, name: 'Jeans - Blue', price: 49.99, image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800' },
                  { id: 3, name: 'Sneakers - White', price: 79.99, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800' },
                  { id: 4, name: 'Watch - Silver', price: 129.99, image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800' },
                  { id: 5, name: 'Backpack', price: 59.99, image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800' },
                  { id: 6, name: 'Sunglasses', price: 34.99, image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800' },
                  { id: 7, name: 'Hoodie - Gray', price: 44.99, image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800' },
                  { id: 8, name: 'Beanie - Black', price: 19.99, image: 'https://images.pexels.com/photos/1070058/pexels-photo-1070058.jpeg?auto=compress&cs=tinysrgb&w=800' }
                ].map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      const existingItem = cart.find(item => item.id === product.id);
                      if (existingItem) {
                        updateQuantity(product.id, 1);
                      } else {
                        setCart([...cart, { ...product, quantity: 1 }]);
                      }
                    }}
                  >
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-gray-900 text-sm">{product.name}</h3>
                      <p className="font-bold text-purple-600">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Cart */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 h-fit">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Current Sale</h2>
              
              {/* Cart Items */}
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                        <p className="text-purple-600 font-bold">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4 text-gray-500" />
                        </button>
                        <span className="px-2 text-gray-700">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Discount Code */}
              <div className="mb-6">
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Discount code" 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
              
              {/* Cart Summary */}
              {cart.length > 0 && (
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (8%)</span>
                    <span>${calculateTax().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              )}
              
              {/* Payment Options */}
              <div className="space-y-3">
                <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Pay with Card
                </button>
                <button className="w-full bg-gray-100 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Pay with Cash
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Gift className="w-5 h-5" />
                  Gift Card
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Other tabs would be implemented similarly */}
        {(activeTab === 'inventory' || activeTab === 'customers' || activeTab === 'reports') && (
          <div className="flex items-center justify-center h-[calc(100vh-200px)]">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <Settings className="w-8 h-8 text-purple-600 animate-spin" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
              <p className="text-gray-600 max-w-md">
                This section is currently under development. Check back soon for updates!
              </p>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 font-bold text-xl text-gray-900">RetailPOS</span>
              </div>
              <p className="text-gray-600 text-sm">
                Modern point of sale system for retail businesses of all sizes.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600">Point of Sale</a></li>
                <li><a href="#" className="hover:text-purple-600">Inventory Management</a></li>
                <li><a href="#" className="hover:text-purple-600">Customer Management</a></li>
                <li><a href="#" className="hover:text-purple-600">Reporting & Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-600">API Documentation</a></li>
                <li><a href="#" className="hover:text-purple-600">Tutorials</a></li>
                <li><a href="#" className="hover:text-purple-600">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600">About Us</a></li>
                <li><a href="#" className="hover:text-purple-600">Careers</a></li>
                <li><a href="#" className="hover:text-purple-600">Contact</a></li>
                <li><a href="#" className="hover:text-purple-600">Partners</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; 2025 RetailPOS. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-purple-600">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RetailPOS;