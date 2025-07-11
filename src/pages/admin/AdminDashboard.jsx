import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Package, 
  Search, 
  Filter, 
  ChevronDown, 
  Eye, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  X, 
  RefreshCw,
  Download,
  Loader
} from 'lucide-react';
import AdminHeader from '../../components/admin/AdminHeader';
import ErrorBoundary from '../../components/admin/ErrorBoundary';
import { getQuoteRequests, updateQuoteStatus, deleteQuoteRequest, checkDatabaseConnection } from '../../utils/supabaseClient';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [quotes, setQuotes] = useState([]);
  const [filteredQuotes, setFilteredQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [dbConnectionStatus, setDbConnectionStatus] = useState({ connected: false, message: 'Checking connection...' });

  // Check database connection
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const result = await checkDatabaseConnection();
        setDbConnectionStatus({
          connected: result.success,
          message: result.success ? 'Connected to database' : `Connection error: ${result.error}`
        });
      } catch (error) {
        console.error('Connection check error:', error);
        setDbConnectionStatus({
          connected: false,
          message: `Connection error: ${error.message}`
        });
      }
    };
    
    checkConnection();
  }, []);

  // Load dashboard data
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setIsLoading(true);
        setError('');
        
        // Check if we can connect to the database
        const connectionResult = await checkDatabaseConnection();
        if (!connectionResult.success) {
          throw new Error(`Database connection failed: ${connectionResult.error}`);
        }
        
        // Fetch quote requests
        const quotesData = await getQuoteRequests();
        console.log('Loaded quotes:', quotesData);
        
        setQuotes(quotesData);
        setFilteredQuotes(quotesData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        setError(error.message || 'Failed to load dashboard data');
        console.error('Error details:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadDashboardData();
  }, []);

  // Filter quotes when search term or status filter changes
  useEffect(() => {
    if (!quotes.length) return;
    
    let filtered = [...quotes];
    
    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(quote => quote.status === statusFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(quote => 
        (quote.full_name && quote.full_name.toLowerCase().includes(term)) ||
        (quote.email && quote.email.toLowerCase().includes(term)) ||
        (quote.company_name && quote.company_name.toLowerCase().includes(term))
      );
    }
    
    setFilteredQuotes(filtered);
  }, [quotes, searchTerm, statusFilter]);

  // Open quote detail modal
  const openQuoteModal = (quote) => {
    setSelectedQuote(quote);
    setIsModalOpen(true);
  };

  // Close quote detail modal
  const closeQuoteModal = () => {
    setIsModalOpen(false);
    setSelectedQuote(null);
  };

  // Update quote status
  const handleStatusUpdate = async (quoteId, newStatus) => {
    try {
      setIsUpdatingStatus(true);
      
      const result = await updateQuoteStatus(quoteId, newStatus);
      
      if (result.success) {
        // Update quotes in state
        setQuotes(prev => prev.map(quote => 
          quote.id === quoteId ? { ...quote, status: newStatus } : quote
        ));
        
        // Update selected quote if modal is open
        if (selectedQuote && selectedQuote.id === quoteId) {
          setSelectedQuote(prev => ({ ...prev, status: newStatus }));
        }
      } else {
        throw new Error(result.error || 'Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert(`Failed to update status: ${error.message}`);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // Delete quote
  const handleDeleteQuote = async (quoteId) => {
    if (!window.confirm('Are you sure you want to delete this quote request?')) {
      return;
    }
    
    try {
      const result = await deleteQuoteRequest(quoteId);
      
      if (result.success) {
        // Remove quote from state
        setQuotes(prev => prev.filter(quote => quote.id !== quoteId));
        
        // Close modal if open
        if (isModalOpen && selectedQuote && selectedQuote.id === quoteId) {
          closeQuoteModal();
        }
      } else {
        throw new Error(result.error || 'Failed to delete quote');
      }
    } catch (error) {
      console.error('Error deleting quote:', error);
      alert(`Failed to delete quote: ${error.message}`);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      console.error('Date formatting error:', error);
      return dateString;
    }
  };

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-dark-tertiary text-yellow-500 border border-yellow-500';
      case 'contacted':
        return 'bg-dark-tertiary text-blue-500 border border-blue-500';
      case 'in-progress':
        return 'bg-dark-tertiary text-purple-500 border border-purple-500';
      case 'completed':
        return 'bg-dark-tertiary text-green-500 border border-green-500';
      default:
        return 'bg-dark-tertiary text-gray-500 border border-gray-500';
    }
  };

  // Refresh data
  const refreshData = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      const quotesData = await getQuoteRequests();
      
      setQuotes(quotesData);
      setFilteredQuotes(quotesData);
    } catch (error) {
      console.error('Error refreshing data:', error);
      setError('Failed to refresh data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-dark-primary">
        <AdminHeader />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Database Connection Status */}
          {!dbConnectionStatus.connected && (
            <div className="mb-6 bg-dark-tertiary border border-neon-pink/50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-neon-pink flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neon-pink">Database Connection Error</h4>
                  <p className="text-text-secondary">{dbConnectionStatus.message}</p>
                  <p className="text-text-secondary mt-2">Using local storage fallback for demo purposes.</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-dark-tertiary border border-neon-pink/50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-neon-pink flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-neon-pink">Error</h4>
                  <p className="text-text-secondary">{error}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-orbitron font-bold text-text-primary">Admin Dashboard</h1>
              <p className="text-text-secondary">Manage quote requests and monitor performance</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={refreshData}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 bg-dark-tertiary border border-neon-green text-neon-green rounded-lg hover:bg-dark-tertiary/80 transition-colors"
              >
                {isLoading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <RefreshCw className="w-5 h-5" />
                )}
                Refresh
              </button>
            </div>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex border-b border-dark mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'overview' 
                  ? 'text-neon-green border-b-2 border-neon-green' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'requests' 
                  ? 'text-neon-green border-b-2 border-neon-green' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Quote Requests
            </button>
          </div>
          
          {/* Loading State */}
          {isLoading && (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <RefreshCw className="w-8 h-8 animate-spin text-neon-green mx-auto mb-4" />
                <p className="text-text-secondary">Loading dashboard data...</p>
              </div>
            </div>
          )}
          
          {/* Overview Tab */}
          {!isLoading && activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-dark-secondary rounded-xl p-6 border border-dark">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-dark-tertiary border border-neon-green rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-neon-green" />
                    </div>
                    <span className="text-text-secondary text-sm">Total</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">{quotes.length}</h3>
                  <p className="text-text-secondary">Quote requests</p>
                </div>
                
                <div className="bg-dark-secondary rounded-xl p-6 border border-dark">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-dark-tertiary border border-neon-cyan rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <span className="text-text-secondary text-sm">Pending</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {quotes.filter(q => q.status === 'pending').length}
                  </h3>
                  <p className="text-text-secondary">Awaiting response</p>
                </div>
                
                <div className="bg-dark-secondary rounded-xl p-6 border border-dark">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-dark-tertiary border border-neon-pink rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-neon-pink" />
                    </div>
                    <span className="text-text-secondary text-sm">Completed</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {quotes.filter(q => q.status === 'completed').length}
                  </h3>
                  <p className="text-text-secondary">Processed requests</p>
                </div>
                
                <div className="bg-dark-secondary rounded-xl p-6 border border-dark">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-dark-tertiary border border-neon-green rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-neon-green" />
                    </div>
                    <span className="text-text-secondary text-sm">Conversion</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {quotes.length > 0 
                      ? Math.round((quotes.filter(q => q.status === 'completed').length / quotes.length) * 100)
                      : 0}%
                  </h3>
                  <p className="text-text-secondary">Completion rate</p>
                </div>
              </div>
              
              {/* Recent Requests */}
              <div className="bg-dark-secondary rounded-xl border border-dark">
                <div className="p-6 border-b border-dark flex items-center justify-between">
                  <h2 className="text-xl font-orbitron font-bold text-text-primary">Recent Quote Requests</h2>
                  <button
                    onClick={() => setActiveTab('requests')}
                    className="text-neon-cyan hover:text-neon-cyan/80 text-sm flex items-center"
                  >
                    View All
                  </button>
                </div>
                
                {quotes.length === 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-text-secondary">No quote requests found</p>
                  </div>
                ) : (
                  <div className="divide-y divide-dark">
                    {quotes.slice(0, 5).map((quote) => (
                      <div key={quote.id} className="p-4 hover:bg-dark-tertiary/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-dark-tertiary border border-neon-green rounded-full flex items-center justify-center">
                              <Users className="w-5 h-5 text-neon-green" />
                            </div>
                            <div>
                              <p className="font-medium text-text-primary">{quote.full_name}</p>
                              <p className="text-text-secondary text-sm">{quote.email}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-text-secondary text-sm">{formatDate(quote.created_at)}</p>
                              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(quote.status)}`}>
                                {quote.status || 'pending'}
                              </span>
                            </div>
                            
                            <button
                              onClick={() => openQuoteModal(quote)}
                              className="p-2 bg-dark-tertiary border border-neon-cyan text-neon-cyan rounded-lg hover:bg-dark-tertiary/80 transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Requests Tab */}
          {!isLoading && activeTab === 'requests' && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by name, email, or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-dark-tertiary border border-dark rounded-lg text-text-primary focus:ring-2 focus:ring-neon-green focus:border-transparent"
                  />
                </div>
                
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none w-full pl-4 pr-10 py-2 bg-dark-tertiary border border-dark rounded-lg text-text-primary focus:ring-2 focus:ring-neon-green focus:border-transparent"
                  >
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="contacted">Contacted</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5 pointer-events-none" />
                </div>
              </div>
              
              {/* Requests Table */}
              <div className="bg-dark-secondary rounded-xl border border-dark overflow-hidden">
                {filteredQuotes.length === 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-text-secondary">No quote requests found</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-dark-tertiary border-b border-dark">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Client</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Contact</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-dark">
                        {filteredQuotes.map((quote) => (
                          <tr key={quote.id} className="hover:bg-dark-tertiary/50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-dark-tertiary border border-neon-green rounded-full flex items-center justify-center">
                                  <Users className="h-5 w-5 text-neon-green" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-text-primary">{quote.full_name}</div>
                                  <div className="text-sm text-text-secondary">{quote.company_name}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-text-primary">{quote.email}</div>
                              <div className="text-sm text-text-secondary">{quote.phone_number}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                              {formatDate(quote.created_at)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(quote.status)}`}>
                                {quote.status || 'pending'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => openQuoteModal(quote)}
                                className="text-neon-cyan hover:text-neon-cyan/80 mr-3"
                              >
                                <Eye className="w-5 h-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
        
        {/* Quote Detail Modal */}
        {isModalOpen && selectedQuote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-dark-secondary rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-dark flex items-center justify-between">
                <h2 className="text-2xl font-orbitron font-bold text-text-primary">
                  Quote Request Details
                </h2>
                <button
                  onClick={closeQuoteModal}
                  className="text-text-secondary hover:text-neon-pink"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Client Information */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Client Information
                  </h3>
                  <div className="bg-dark-tertiary rounded-xl p-6 border border-dark">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-text-secondary text-sm mb-1">Full Name</p>
                        <p className="text-text-primary font-medium">{selectedQuote.full_name}</p>
                      </div>
                      <div>
                        <p className="text-text-secondary text-sm mb-1">Company</p>
                        <p className="text-text-primary font-medium">{selectedQuote.company_name || 'Not provided'}</p>
                      </div>
                      <div>
                        <p className="text-text-secondary text-sm mb-1">Email</p>
                        <p className="text-text-primary font-medium">{selectedQuote.email}</p>
                      </div>
                      <div>
                        <p className="text-text-secondary text-sm mb-1">Phone</p>
                        <p className="text-text-primary font-medium">{selectedQuote.phone_number}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Requirements */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Project Requirements
                  </h3>
                  <div className="bg-dark-tertiary rounded-xl p-6 border border-dark">
                    <p className="text-text-primary whitespace-pre-line">{selectedQuote.requirements}</p>
                  </div>
                </div>
                
                {/* Status Management */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Status Management
                  </h3>
                  <div className="bg-dark-tertiary rounded-xl p-6 border border-dark">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <p className="text-text-secondary text-sm mb-2">Current Status</p>
                        <span className={`px-3 py-1.5 inline-flex text-sm font-semibold rounded-full ${getStatusColor(selectedQuote.status)}`}>
                          {selectedQuote.status || 'pending'}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-text-secondary text-sm mb-2">Update Status</p>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => handleStatusUpdate(selectedQuote.id, 'pending')}
                            disabled={selectedQuote.status === 'pending' || isUpdatingStatus}
                            className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
                              selectedQuote.status === 'pending'
                                ? 'bg-dark-primary text-yellow-500 border border-yellow-500'
                                : 'bg-dark-primary text-text-secondary border border-dark hover:border-yellow-500 hover:text-yellow-500'
                            }`}
                          >
                            Pending
                          </button>
                          
                          <button
                            onClick={() => handleStatusUpdate(selectedQuote.id, 'contacted')}
                            disabled={selectedQuote.status === 'contacted' || isUpdatingStatus}
                            className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
                              selectedQuote.status === 'contacted'
                                ? 'bg-dark-primary text-blue-500 border border-blue-500'
                                : 'bg-dark-primary text-text-secondary border border-dark hover:border-blue-500 hover:text-blue-500'
                            }`}
                          >
                            Contacted
                          </button>
                          
                          <button
                            onClick={() => handleStatusUpdate(selectedQuote.id, 'in-progress')}
                            disabled={selectedQuote.status === 'in-progress' || isUpdatingStatus}
                            className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
                              selectedQuote.status === 'in-progress'
                                ? 'bg-dark-primary text-purple-500 border border-purple-500'
                                : 'bg-dark-primary text-text-secondary border border-dark hover:border-purple-500 hover:text-purple-500'
                            }`}
                          >
                            In Progress
                          </button>
                          
                          <button
                            onClick={() => handleStatusUpdate(selectedQuote.id, 'completed')}
                            disabled={selectedQuote.status === 'completed' || isUpdatingStatus}
                            className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
                              selectedQuote.status === 'completed'
                                ? 'bg-dark-primary text-green-500 border border-green-500'
                                : 'bg-dark-primary text-text-secondary border border-dark hover:border-green-500 hover:text-green-500'
                            }`}
                          >
                            Completed
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-dark">
                  <button
                    onClick={() => handleDeleteQuote(selectedQuote.id)}
                    className="px-4 py-2 bg-dark-tertiary text-neon-pink border border-neon-pink rounded-lg hover:bg-dark-tertiary/80 transition-colors"
                  >
                    Delete Request
                  </button>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={closeQuoteModal}
                      className="px-4 py-2 bg-dark-tertiary text-text-secondary border border-dark rounded-lg hover:bg-dark-tertiary/80 transition-colors"
                    >
                      Close
                    </button>
                    
                    <button
                      onClick={() => {
                        // Export quote data as JSON
                        const dataStr = JSON.stringify(selectedQuote, null, 2);
                        const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
                        
                        const exportName = `quote-${selectedQuote.id}.json`;
                        
                        const linkElement = document.createElement('a');
                        linkElement.setAttribute('href', dataUri);
                        linkElement.setAttribute('download', exportName);
                        linkElement.click();
                      }}
                      className="px-4 py-2 bg-dark-tertiary text-neon-green border border-neon-green rounded-lg hover:bg-dark-tertiary/80 transition-colors flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default AdminDashboard;