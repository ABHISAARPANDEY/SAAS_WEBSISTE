import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  ArrowLeft,
  User, 
  Bell, 
  Search, 
  Menu, 
  X, 
  CreditCard, 
  DollarSign, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  Shield, 
  Settings, 
  LogOut,
  ChevronRight,
  Users,
  BarChart3,
  PieChart,
  Calendar,
  FileText,
  Lock,
  Send,
  Download,
  Landmark
} from 'lucide-react';

const BankingCore = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-900 transition-colors"
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
              <div className="w-10 h-10 rounded-lg bg-blue-800 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 font-bold text-xl text-blue-900">BankCore</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-medium text-blue-900">Dashboard</a>
              <a href="#" className="font-medium text-gray-500 hover:text-blue-900">Accounts</a>
              <a href="#" className="font-medium text-gray-500 hover:text-blue-900">Transactions</a>
              <a href="#" className="font-medium text-gray-500 hover:text-blue-900">Reports</a>
              <a href="#" className="font-medium text-gray-500 hover:text-blue-900">Support</a>
            </nav>
            
            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-blue-900">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-blue-900 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-800" />
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700">John Smith</span>
                </button>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-gray-500 hover:text-blue-900"
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
              <a href="#" className="block px-3 py-2 rounded-md text-white font-medium bg-blue-800">Dashboard</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-500 hover:text-blue-900 hover:bg-blue-50">Accounts</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-500 hover:text-blue-900 hover:bg-blue-50">Transactions</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-500 hover:text-blue-900 hover:bg-blue-50">Reports</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-500 hover:text-blue-900 hover:bg-blue-50">Support</a>
            </div>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Banking Dashboard</h1>
          <p className="text-gray-600">Welcome back, John! Here's your financial overview.</p>
        </div>
        
        {/* Account Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-blue-800" />
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">+1.2%</span>
              </div>
            </div>
            <h3 className="text-sm text-gray-500 mb-1">Checking Account</h3>
            <p className="text-2xl font-bold text-gray-900">$12,456.78</p>
            <p className="text-gray-500 text-sm mt-2">**** **** **** 4567</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">+3.5%</span>
              </div>
            </div>
            <h3 className="text-sm text-gray-500 mb-1">Savings Account</h3>
            <p className="text-2xl font-bold text-gray-900">$45,890.21</p>
            <p className="text-gray-500 text-sm mt-2">**** **** **** 8901</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex items-center gap-1 text-red-600">
                <ArrowDownRight className="w-4 h-4" />
                <span className="text-sm">-0.8%</span>
              </div>
            </div>
            <h3 className="text-sm text-gray-500 mb-1">Credit Card</h3>
            <p className="text-2xl font-bold text-gray-900">$2,345.50</p>
            <p className="text-gray-500 text-sm mt-2">**** **** **** 1234</p>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Send className="w-6 h-6 text-blue-800 mb-2" />
              <span className="text-sm font-medium text-gray-900">Transfer</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Download className="w-6 h-6 text-green-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Deposit</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <CreditCard className="w-6 h-6 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Pay Bills</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
              <Landmark className="w-6 h-6 text-yellow-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Loans</span>
            </button>
          </div>
        </div>
        
        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 mb-8">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="divide-y divide-gray-100">
            {[
              { icon: Landmark, color: 'green', name: 'Salary Deposit', category: 'Income', amount: '+$3,500.00', date: 'Today, 9:15 AM' },
              { icon: CreditCard, color: 'red', name: 'Amazon Purchase', category: 'Shopping', amount: '-$129.99', date: 'Yesterday, 2:34 PM' },
              { icon: Send, color: 'blue', name: 'Transfer to Savings', category: 'Transfer', amount: '-$500.00', date: 'Yesterday, 10:45 AM' },
              { icon: CreditCard, color: 'red', name: 'Grocery Store', category: 'Food', amount: '-$85.75', date: 'Mar 15, 6:30 PM' },
              { icon: CreditCard, color: 'red', name: 'Netflix Subscription', category: 'Entertainment', amount: '-$14.99', date: 'Mar 14, 12:00 AM' }
            ].map((transaction, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-${transaction.color}-100 flex items-center justify-center`}>
                      <transaction.icon className={`w-5 h-5 text-${transaction.color}-600`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{transaction.name}</p>
                      <p className="text-gray-500 text-sm">{transaction.category}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className={`font-medium ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount}
                    </p>
                    <p className="text-gray-500 text-sm">{transaction.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Financial Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Spending Categories</h2>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-center h-48 mb-4">
                <div className="w-32 h-32 rounded-full border-8 border-blue-500 relative flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-8 border-green-500 relative flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-8 border-purple-500"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Housing</p>
                  <p className="text-gray-500 text-xs">35%</p>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Food</p>
                  <p className="text-gray-500 text-xs">25%</p>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Transport</p>
                  <p className="text-gray-500 text-xs">15%</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Bills</h2>
            </div>
            
            <div className="divide-y divide-gray-100">
              {[
                { name: 'Rent Payment', amount: '$1,200.00', date: 'Mar 31, 2025', status: 'Upcoming' },
                { name: 'Electricity Bill', amount: '$85.50', date: 'Apr 05, 2025', status: 'Upcoming' },
                { name: 'Internet Service', amount: '$59.99', date: 'Apr 10, 2025', status: 'Upcoming' },
                { name: 'Car Insurance', amount: '$120.75', date: 'Apr 15, 2025', status: 'Upcoming' }
              ].map((bill, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{bill.name}</p>
                      <p className="text-gray-500 text-sm">{bill.date}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{bill.amount}</p>
                      <p className="text-blue-600 text-sm">{bill.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-800 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 font-bold text-xl text-blue-900">BankCore</span>
              </div>
              <p className="text-gray-600 text-sm">
                Secure, reliable banking solutions for modern financial institutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Products</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-800">Core Banking</a></li>
                <li><a href="#" className="hover:text-blue-800">Digital Banking</a></li>
                <li><a href="#" className="hover:text-blue-800">Payment Solutions</a></li>
                <li><a href="#" className="hover:text-blue-800">Lending Platform</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-800">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-800">API Reference</a></li>
                <li><a href="#" className="hover:text-blue-800">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-800">Support Center</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-800">About Us</a></li>
                <li><a href="#" className="hover:text-blue-800">Careers</a></li>
                <li><a href="#" className="hover:text-blue-800">Contact</a></li>
                <li><a href="#" className="hover:text-blue-800">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; 2025 BankCore. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-blue-800">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-800">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-blue-800">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BankingCore;