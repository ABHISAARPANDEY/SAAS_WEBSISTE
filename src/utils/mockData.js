// Mock data for admin dashboard
export const generateMockRequests = () => {
  const industries = ['Healthcare', 'Finance', 'E-commerce', 'Education', 'Manufacturing'];
  const services = ['Web Development', 'Mobile App', 'AI Solutions', 'Blockchain', 'Custom Software'];
  const statuses = ['pending', 'contacted', 'in-progress', 'completed'];
  
  const requests = [];
  
  for (let i = 1; i <= 25; i++) {
    const randomIndustry = industries[Math.floor(Math.random() * industries.length)];
    const randomServices = services.slice(0, Math.floor(Math.random() * 3) + 1);
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    requests.push({
      id: `REQ-${String(i).padStart(4, '0')}`,
      clientName: `Client ${i}`,
      email: `client${i}@example.com`,
      phone: `+1 (555) ${String(Math.floor(Math.random() * 900) + 100)}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      industry: randomIndustry,
      services: randomServices,
      status: randomStatus,
      timestamp: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
      notes: `Initial consultation request for ${randomServices.join(', ')} in ${randomIndustry} industry.`
    });
  }
  
  return requests.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
};

export const generateAnalyticsData = () => {
  const last7Days = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    last7Days.push({
      date: date.toISOString().split('T')[0],
      requests: Math.floor(Math.random() * 15) + 5,
      conversions: Math.floor(Math.random() * 8) + 2
    });
  }
  
  return {
    weeklyTrends: last7Days,
    servicePopularity: [
      { name: 'Web Development', value: 35, color: '#3B82F6' },
      { name: 'Mobile Apps', value: 25, color: '#10B981' },
      { name: 'AI Solutions', value: 20, color: '#8B5CF6' },
      { name: 'Custom Software', value: 15, color: '#F59E0B' },
      { name: 'Blockchain', value: 5, color: '#EF4444' }
    ],
    apiInventory: [
      { name: 'Email Service API', stock: 850, threshold: 100, status: 'healthy' },
      { name: 'Payment Gateway API', stock: 45, threshold: 50, status: 'low' },
      { name: 'Maps & Location API', stock: 320, threshold: 100, status: 'healthy' },
      { name: 'Analytics API', stock: 15, threshold: 50, status: 'critical' },
      { name: 'Authentication API', stock: 180, threshold: 100, status: 'healthy' }
    ]
  };
};