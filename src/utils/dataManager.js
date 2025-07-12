// Centralized data management for admin panel and quote submissions
export class DataManager {
  constructor() {
    this.STORAGE_KEYS = {
      REQUESTS: 'admin_requests',
      ANALYTICS: 'admin_analytics',
      SETTINGS: 'admin_settings'
    };
    this.initializeData();
  }

  initializeData() {
    // Initialize with mock data if no data exists
    if (!this.getRequests().length) {
      this.seedMockData();
    }
  }

  // Request Management
  getRequests() {
    try {
      const requests = localStorage.getItem(this.STORAGE_KEYS.REQUESTS);
      const parsed = requests ? JSON.parse(requests) : [];
      
      // Ensure we always return an array
      if (!Array.isArray(parsed)) {
        console.warn('Stored requests is not an array, resetting to empty array');
        localStorage.setItem(this.STORAGE_KEYS.REQUESTS, JSON.stringify([]));
        return [];
      }
      
      // Normalize services data to ensure consistent format
      return parsed.map(request => ({
        ...request,
        services: this.normalizeServices(request.services),
        industry: this.normalizeIndustry(request.industry)
      }));
    } catch (error) {
      console.error('Error loading requests:', error);
      // Reset corrupted data
      localStorage.setItem(this.STORAGE_KEYS.REQUESTS, JSON.stringify([]));
      return [];
    }
  }

  // Normalize services to always be an array of service IDs/names (strings)
  normalizeServices(services) {
    if (!services) {
      return [];
    }
    
    // If it's already an array
    if (Array.isArray(services)) {
      return services.map(service => {
        // If service is an object, extract the id or name
        if (typeof service === 'object' && service !== null) {
          return service.id || service.name || 'Unknown Service';
        }
        // If it's already a string, return as is
        return String(service);
      });
    }
    
    // If it's a single object
    if (typeof services === 'object' && services !== null) {
      return [services.id || services.name || 'Unknown Service'];
    }
    
    // If it's a single string
    if (typeof services === 'string') {
      return [services];
    }
    
    // Fallback
    return [];
  }

  // Normalize industry to always be a string
  normalizeIndustry(industry) {
    if (!industry) {
      return 'Not specified';
    }
    
    // If it's already a string, return as is
    if (typeof industry === 'string') {
      return industry;
    }
    
    // If it's an object, extract the name, title, or id
    if (typeof industry === 'object' && industry !== null) {
      return industry.name || industry.title || industry.id || 'Unknown Industry';
    }
    
    // Fallback to string conversion
    return String(industry);
  }

  addRequest(requestData) {
    try {
      // Validate input data
      if (!requestData || typeof requestData !== 'object') {
        throw new Error('Invalid request data provided');
      }

      const requests = this.getRequests();
      const newRequest = {
        ...requestData,
        id: this.generateRequestId(),
        timestamp: new Date().toISOString(),
        status: 'pending',
        trackingNumber: this.generateTrackingNumber(),
        // Ensure consistent property names for admin dashboard
        companyName: requestData.company || requestData.companyName || '',
        contactName: requestData.fullName || requestData.contactName || ''
      };
      
      // Ensure the new request has all required fields
      if (!newRequest.fullName && !newRequest.clientName) {
        newRequest.clientName = 'Unknown Client';
      }
      if (!newRequest.email) {
        newRequest.email = 'no-email@example.com';
      }
      if (!newRequest.services) {
        newRequest.services = [];
      }
      if (!newRequest.industry) {
        newRequest.industry = 'Not specified';
      }
      
      requests.unshift(newRequest);
      localStorage.setItem(this.STORAGE_KEYS.REQUESTS, JSON.stringify(requests));
      
      // Update analytics
      this.updateAnalytics();
      
      return newRequest;
    } catch (error) {
      console.error('Error adding request:', error);
      throw new Error('Failed to save request');
    }
  }

  updateRequestStatus(requestId, status, notes = '') {
    try {
      if (!requestId) {
        throw new Error('Request ID is required');
      }

      const requests = this.getRequests();
      const requestIndex = requests.findIndex(req => req.id === requestId);
      
      if (requestIndex !== -1) {
        requests[requestIndex] = {
          ...requests[requestIndex],
          status,
          notes: requests[requestIndex].notes + (notes ? `\n${notes}` : ''),
          lastUpdated: new Date().toISOString()
        };
        
        localStorage.setItem(this.STORAGE_KEYS.REQUESTS, JSON.stringify(requests));
        this.updateAnalytics();
        return requests[requestIndex];
      }
      
      throw new Error('Request not found');
    } catch (error) {
      console.error('Error updating request:', error);
      throw error;
    }
  }

  deleteRequest(requestId) {
    try {
      if (!requestId) {
        throw new Error('Request ID is required');
      }

      const requests = this.getRequests();
      const requestIndex = requests.findIndex(req => req.id === requestId);
      
      if (requestIndex !== -1) {
        const deletedRequest = requests.splice(requestIndex, 1)[0];
        localStorage.setItem(this.STORAGE_KEYS.REQUESTS, JSON.stringify(requests));
        this.updateAnalytics();
        return deletedRequest;
      }
      
      throw new Error('Request not found');
    } catch (error) {
      console.error('Error deleting request:', error);
      throw error;
    }
  }

  // Analytics Management
  getAnalytics() {
    const requests = this.getRequests();
    return this.calculateAnalytics(requests);
  }

  calculateAnalytics(requests) {
    // Ensure requests is always an array
    if (!Array.isArray(requests)) {
      console.warn('Requests is not an array:', requests);
      requests = [];
    }

    const now = new Date();
    const last7Days = [];
    
    // Generate last 7 days data
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayRequests = requests.filter(req => 
        req.timestamp.split('T')[0] === dateStr
      );
      
      last7Days.push({
        date: dateStr,
        requests: dayRequests.length,
        conversions: dayRequests.filter(req => req.status === 'completed').length
      });
    }

    // Service popularity
    const serviceCount = {};
    requests.forEach((req, index) => {
      try {
        if (req && req.services && Array.isArray(req.services)) {
          req.services.forEach((service, serviceIndex) => {
            try {
              const serviceName = typeof service === 'object' && service !== null 
                ? service.name 
                : service;
              if (serviceName && typeof serviceName === 'string') {
                serviceCount[serviceName] = (serviceCount[serviceName] || 0) + 1;
              }
            } catch (serviceError) {
              console.error(`Error processing service ${serviceIndex} for request ${index}:`, serviceError, service);
            }
          });
        }
      } catch (requestError) {
        console.error(`Error processing request ${index}:`, requestError, req);
      }
    });

    const servicePopularity = Object.entries(serviceCount)
      .map(([name, count]) => ({
        name,
        value: Math.round((count / requests.length) * 100) || 0,
        color: this.getServiceColor(name)
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);

    // Industry breakdown
    const industryCount = {};
    requests.forEach((req, index) => {
      try {
        if (req && req.industry) {
          const industryName = typeof req.industry === 'object' && req.industry !== null 
            ? req.industry.name 
            : req.industry;
          if (industryName && typeof industryName === 'string') {
            industryCount[industryName] = (industryCount[industryName] || 0) + 1;
          }
        }
      } catch (industryError) {
        console.error(`Error processing industry for request ${index}:`, industryError, req);
      }
    });

    const industryBreakdown = Object.entries(industryCount)
      .map(([industry, requestCount]) => ({ 
        industry: industry.toString(), 
        requests: requestCount 
      }))
      .sort((a, b) => b.requests - a.requests);

    return {
      weeklyTrends: last7Days,
      servicePopularity,
      industryBreakdown,
      apiInventory: this.generateApiInventory(),
      totalRequests: requests.length,
      pendingRequests: requests.filter(req => req.status === 'pending').length,
      conversionRate: requests.length > 0 
        ? Math.round((requests.filter(req => req.status === 'completed').length / requests.length) * 100)
        : 0
    };
  }

  updateAnalytics() {
    // Analytics are calculated on-demand, no need to store separately
    // This method exists for future enhancements
  }

  // Utility Methods
  generateRequestId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `REQ-${timestamp}-${random}`;
  }

  generateTrackingNumber() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  getServiceColor(serviceName) {
    const colors = {
      'Web Development': '#3B82F6',
      'Mobile App Development': '#10B981',
      'AI Solutions': '#8B5CF6',
      'Custom Software Solutions': '#F59E0B',
      'Blockchain Integration': '#EF4444',
      'Process Automation': '#06B6D4',
      'Product Development': '#84CC16',
      'Digital Transformation': '#F97316'
    };
    return colors[serviceName] || '#6B7280';
  }

  generateApiInventory() {
    return [
      { name: 'Email Service API', stock: 850, threshold: 100, status: 'healthy' },
      { name: 'Payment Gateway API', stock: 45, threshold: 50, status: 'low' },
      { name: 'Maps & Location API', stock: 320, threshold: 100, status: 'healthy' },
      { name: 'Analytics API', stock: 15, threshold: 50, status: 'critical' },
      { name: 'Authentication API', stock: 180, threshold: 100, status: 'healthy' },
      { name: 'SMS API', stock: 75, threshold: 100, status: 'low' },
      { name: 'Cloud Storage API', stock: 500, threshold: 100, status: 'healthy' }
    ];
  }

  seedMockData() {
    const mockRequests = this.generateMockRequests();
    localStorage.setItem(this.STORAGE_KEYS.REQUESTS, JSON.stringify(mockRequests));
  }

  generateMockRequests() {
    const industries = ['Healthcare', 'Finance', 'E-commerce', 'Education', 'Manufacturing', 'Retail', 'Travel'];
    const services = ['Web Development', 'Mobile App Development', 'AI Solutions', 'Custom Software Solutions', 'Blockchain Integration'];
    const statuses = ['pending', 'contacted', 'in-progress', 'completed'];
    const names = ['John Smith', 'Sarah Johnson', 'Michael Brown', 'Emily Davis', 'David Wilson', 'Lisa Anderson', 'Robert Taylor'];
    
    const requests = [];
    
    for (let i = 1; i <= 30; i++) {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomIndustry = industries[Math.floor(Math.random() * industries.length)];
      const randomServices = services.slice(0, Math.floor(Math.random() * 3) + 1);
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      
      // Generate dates within last 30 days
      const daysAgo = Math.floor(Math.random() * 30);
      const timestamp = new Date();
      timestamp.setDate(timestamp.getDate() - daysAgo);
      
      requests.push({
        id: `REQ-${Date.now() + i}-${Math.floor(Math.random() * 1000)}`,
        fullName: randomName,
        contactName: randomName,
        email: `${randomName.toLowerCase().replace(' ', '.')}@example.com`,
        phone: `+1 (555) ${String(Math.floor(Math.random() * 900) + 100)}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
        company: Math.random() > 0.5 ? `${randomName.split(' ')[1]} Corp` : '',
        companyName: Math.random() > 0.5 ? `${randomName.split(' ')[1]} Corp` : '',
        industry: randomIndustry,
        services: randomServices,
        projectDescription: `Looking for ${randomServices.join(' and ')} solutions for our ${randomIndustry.toLowerCase()} business.`,
        budget: ['under-10k', '10k-25k', '25k-50k', '50k-100k', 'over-100k'][Math.floor(Math.random() * 5)],
        timeline: ['asap', '1-3-months', '3-6-months', '6-12-months', 'flexible'][Math.floor(Math.random() * 5)],
        status: randomStatus,
        timestamp: timestamp.toISOString(),
        trackingNumber: this.generateTrackingNumber(),
        notes: `Initial consultation request for ${randomServices.join(', ')} in ${randomIndustry} industry.`
      });
    }
    
    return requests.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }

  // Data validation and sanitization
  validateRequestData(data) {
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data format');
    }

    const required = ['fullName', 'email', 'phone', 'industry', 'services', 'projectDescription'];
    const missing = required.filter(field => {
      const value = data[field];
      return !value || (Array.isArray(value) && value.length === 0) || (typeof value === 'string' && value.trim() === '');
    });
    
    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email format');
    }

    return true;
  }

  sanitizeData(data) {
    if (!data || typeof data !== 'object') {
      return {};
    }

    const sanitized = {};
    
    Object.keys(data).forEach(key => {
      try {
        if (typeof data[key] === 'string') {
          sanitized[key] = data[key].trim().substring(0, 1000);
        } else if (Array.isArray(data[key])) {
          sanitized[key] = data[key].slice(0, 20); // Limit array size
        } else {
          sanitized[key] = data[key];
        }
      } catch (error) {
        console.error(`Error sanitizing field ${key}:`, error);
        sanitized[key] = null;
      }
    });

    return sanitized;
  }

  // User Management (mock data for admin dashboard)
  getUsers() {
    // Return mock user data for dashboard analytics
    // In a real application, this would fetch from a user management system
    return [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active' },
      { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'user', status: 'inactive' },
      { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'user', status: 'active' },
      { id: 5, name: 'Tom Brown', email: 'tom@example.com', role: 'user', status: 'active' }
    ];
  }

  // Real-time updates simulation
  subscribeToUpdates(callback) {
    if (typeof callback !== 'function') {
      console.error('Callback must be a function');
      return () => {};
    }

    // In a real application, this would use WebSockets or Server-Sent Events
    const interval = setInterval(() => {
      try {
        callback(this.getAnalytics());
      } catch (error) {
        console.error('Error in update callback:', error);
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }
}

// Create singleton instance
export const dataManager = new DataManager();

// Named exports for compatibility with admin dashboard
export const getQuotes = () => dataManager.getRequests();
export const getUsers = () => dataManager.getUsers();
export const getAnalytics = () => dataManager.getAnalytics();
export const updateQuoteStatus = (requestId, status, notes) => dataManager.updateRequestStatus(requestId, status, notes);
export const deleteQuote = (requestId) => dataManager.deleteRequest(requestId);