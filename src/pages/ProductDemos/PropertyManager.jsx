import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, User, Bell, Search, Menu, X, Building, MapPin, DollarSign, Calendar, Users, Settings, LogOut, ChevronRight, Plus, Clock, CheckCircle, AlertCircle, FileText, PenTool as Tool, MessageSquare, ArrowLeft } from 'lucide-react';

const PropertyManager = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full hover:bg-teal-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </button>
      </div>
      
      {/* Header */}
      <header className="bg-teal-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <Home className="w-6 h-6 text-teal-700" />
              </div>
              <span className="ml-3 font-bold text-xl">PropertyHub</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-medium text-white">Dashboard</a>
              <a href="#" className="font-medium text-teal-200 hover:text-white">Properties</a>
              <a href="#" className="font-medium text-teal-200 hover:text-white">Tenants</a>
              <a href="#" className="font-medium text-teal-200 hover:text-white">Maintenance</a>
              <a href="#" className="font-medium text-teal-200 hover:text-white">Reports</a>
            </nav>
            
            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-teal-200 hover:text-white">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-teal-200 hover:text-white relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden md:block text-sm font-medium">Sarah Wilson</span>
                </button>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-teal-200 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-teal-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-white font-medium bg-teal-800">Dashboard</a>
              <a href="#" className="block px-3 py-2 rounded-md text-teal-200 hover:text-white hover:bg-teal-800">Properties</a>
              <a href="#" className="block px-3 py-2 rounded-md text-teal-200 hover:text-white hover:bg-teal-800">Tenants</a>
              <a href="#" className="block px-3 py-2 rounded-md text-teal-200 hover:text-white hover:bg-teal-800">Maintenance</a>
              <a href="#" className="block px-3 py-2 rounded-md text-teal-200 hover:text-white hover:bg-teal-800">Reports</a>
            </div>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Property Dashboard</h1>
          <p className="text-gray-600">Welcome back, Sarah! Here's your property management overview.</p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <Building className="w-6 h-6 text-teal-700" />
              </div>
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">24</h3>
            <p className="text-gray-600 text-sm">Properties managed</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-700" />
              </div>
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">42</h3>
            <p className="text-gray-600 text-sm">Active tenants</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-700" />
              </div>
              <span className="text-sm text-gray-500">Monthly</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$48,350</h3>
            <p className="text-gray-600 text-sm">Rental income</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Tool className="w-6 h-6 text-yellow-700" />
              </div>
              <span className="text-sm text-gray-500">Open</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">8</h3>
            <p className="text-gray-600 text-sm">Maintenance requests</p>
          </div>
        </div>
        
        {/* Property Occupancy */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Property Occupancy</h2>
            <a href="#" className="text-teal-700 hover:text-teal-900 text-sm font-medium flex items-center">
              View All Properties <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="divide-y divide-gray-200">
            {[
              { 
                name: 'Oakwood Apartments', 
                address: '123 Main St, Anytown', 
                units: 12, 
                occupied: 10, 
                occupancyRate: 83,
                image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              { 
                name: 'Riverside Condos', 
                address: '456 River Rd, Anytown', 
                units: 8, 
                occupied: 8, 
                occupancyRate: 100,
                image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              { 
                name: 'Parkview Townhomes', 
                address: '789 Park Ave, Anytown', 
                units: 6, 
                occupied: 4, 
                occupancyRate: 67,
                image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              { 
                name: 'Sunset Villas', 
                address: '321 Sunset Blvd, Anytown', 
                units: 10, 
                occupied: 9, 
                occupancyRate: 90,
                image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
            ].map((property, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={property.image} 
                      alt={property.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-gray-900 truncate">{property.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        property.occupancyRate === 100 
                          ? 'bg-green-100 text-green-800' 
                          : property.occupancyRate >= 80 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {property.occupancyRate}% Occupied
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{property.address}</span>
                    </div>
                    
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div 
                        className={`h-2 rounded-full ${
                          property.occupancyRate === 100 
                            ? 'bg-green-600' 
                            : property.occupancyRate >= 80 
                              ? 'bg-blue-600' 
                              : 'bg-yellow-600'
                        }`}
                        style={{ width: `${property.occupancyRate}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <span>{property.occupied} of {property.units} units occupied</span>
                      <a href="#" className="text-teal-700 hover:text-teal-900 font-medium">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Upcoming Lease Events & Maintenance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Upcoming Lease Events */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Lease Events</h2>
              <a href="#" className="text-teal-700 hover:text-teal-900 text-sm font-medium flex items-center">
                View Calendar <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="divide-y divide-gray-200">
              {[
                { 
                  type: 'Lease Renewal', 
                  tenant: 'Michael Johnson', 
                  property: 'Oakwood Apartments, Unit 3B', 
                  date: 'Mar 31, 2025',
                  daysLeft: 7
                },
                { 
                  type: 'Lease Expiration', 
                  tenant: 'Emily Davis', 
                  property: 'Riverside Condos, Unit 8', 
                  date: 'Apr 15, 2025',
                  daysLeft: 22
                },
                { 
                  type: 'Move-In', 
                  tenant: 'Robert Wilson', 
                  property: 'Parkview Townhomes, Unit 2', 
                  date: 'Apr 1, 2025',
                  daysLeft: 8
                },
                { 
                  type: 'Rent Increase', 
                  tenant: 'Jennifer Brown', 
                  property: 'Sunset Villas, Unit 5A', 
                  date: 'May 1, 2025',
                  daysLeft: 38
                }
              ].map((event, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-teal-700" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-gray-900">{event.type}</h4>
                          <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs">
                            {event.daysLeft} days
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{event.tenant} - {event.property}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{event.date}</p>
                      <button className="text-teal-700 hover:text-teal-900 text-sm">Manage</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Maintenance Requests */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Maintenance Requests</h2>
              <a href="#" className="text-teal-700 hover:text-teal-900 text-sm font-medium flex items-center">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="divide-y divide-gray-200">
              {[
                { 
                  issue: 'Leaking Faucet', 
                  tenant: 'Sarah Thompson', 
                  property: 'Oakwood Apartments, Unit 5C', 
                  status: 'Urgent',
                  date: 'Today, 8:30 AM'
                },
                { 
                  issue: 'Broken Dishwasher', 
                  tenant: 'David Miller', 
                  property: 'Riverside Condos, Unit 3', 
                  status: 'In Progress',
                  date: 'Yesterday, 3:15 PM'
                },
                { 
                  issue: 'HVAC Maintenance', 
                  tenant: 'Jessica White', 
                  property: 'Parkview Townhomes, Unit 6', 
                  status: 'Scheduled',
                  date: 'Mar 18, 10:00 AM'
                },
                { 
                  issue: 'Garage Door Repair', 
                  tenant: 'Thomas Anderson', 
                  property: 'Sunset Villas, Unit 2B', 
                  status: 'Completed',
                  date: 'Mar 15, 2:45 PM'
                }
              ].map((request, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Tool className="w-5 h-5 text-yellow-700" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-gray-900">{request.issue}</h4>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${
                            request.status === 'Urgent' 
                              ? 'bg-red-100 text-red-800' 
                              : request.status === 'In Progress' 
                                ? 'bg-blue-100 text-blue-800' 
                                : request.status === 'Scheduled'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-green-100 text-green-800'
                          }`}>
                            {request.status}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{request.tenant} - {request.property}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">{request.date}</p>
                      <button className="text-teal-700 hover:text-teal-900 text-sm">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Financial Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Financial Summary</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm text-gray-500 mb-1">Monthly Income</h3>
                <p className="text-2xl font-bold text-gray-900">$48,350</p>
                <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+2.5% from last month</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm text-gray-500 mb-1">Monthly Expenses</h3>
                <p className="text-2xl font-bold text-gray-900">$12,840</p>
                <div className="flex items-center gap-1 text-red-600 text-sm mt-1">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+1.8% from last month</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm text-gray-500 mb-1">Net Cash Flow</h3>
                <p className="text-2xl font-bold text-gray-900">$35,510</p>
                <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+2.8% from last month</span>
                </div>
              </div>
            </div>
            
            <div className="h-64 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Monthly income chart would be displayed here</p>
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
                <div className="w-10 h-10 rounded-lg bg-teal-700 flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 font-bold text-xl text-gray-900">PropertyHub</span>
              </div>
              <p className="text-gray-600 text-sm">
                Streamlining property management for landlords and property managers.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-teal-700">Property Management</a></li>
                <li><a href="#" className="hover:text-teal-700">Tenant Screening</a></li>
                <li><a href="#" className="hover:text-teal-700">Rent Collection</a></li>
                <li><a href="#" className="hover:text-teal-700">Maintenance Tracking</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-teal-700">Help Center</a></li>
                <li><a href="#" className="hover:text-teal-700">Blog</a></li>
                <li><a href="#" className="hover:text-teal-700">Guides</a></li>
                <li><a href="#" className="hover:text-teal-700">API Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-teal-700">About Us</a></li>
                <li><a href="#" className="hover:text-teal-700">Careers</a></li>
                <li><a href="#" className="hover:text-teal-700">Contact</a></li>
                <li><a href="#" className="hover:text-teal-700">Partners</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; 2025 PropertyHub. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-teal-700">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-teal-700">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-teal-700">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropertyManager;