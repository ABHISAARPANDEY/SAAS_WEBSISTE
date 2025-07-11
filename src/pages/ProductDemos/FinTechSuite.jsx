import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  ArrowLeft,
  DollarSign, 
  BarChart3, 
  PieChart, 
  ArrowUpRight, 
  ArrowDownRight, 
  User, 
  Bell, 
  Settings, 
  LogOut,
  Search,
  Plus,
  ChevronRight,
  Wallet,
  Repeat,
  Send,
  Clock,
  Shield,
  Landmark,
  Briefcase
} from 'lucide-react';

const FinTechSuite = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-dark-primary text-text-primary">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center gap-2 bg-dark-tertiary text-white px-4 py-2 rounded-full hover:bg-dark-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </button>
      </div>
      
      {/* Header */}
      <header className="bg-dark-secondary border-b border-dark p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <span className="font-orbitron font-bold text-xl">FinTech Suite</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`font-medium ${activeTab === 'dashboard' ? 'text-neon-cyan' : 'text-text-secondary hover:text-text-primary'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('accounts')}
              className={`font-medium ${activeTab === 'accounts' ? 'text-neon-cyan' : 'text-text-secondary hover:text-text-primary'}`}
            >
              Accounts
            </button>
            <button 
              onClick={() => setActiveTab('transactions')}
              className={`font-medium ${activeTab === 'transactions' ? 'text-neon-cyan' : 'text-text-secondary hover:text-text-primary'}`}
            >
              Transactions
            </button>
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`font-medium ${activeTab === 'analytics' ? 'text-neon-cyan' : 'text-text-secondary hover:text-text-primary'}`}
            >
              Analytics
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-text-secondary hover:text-neon-cyan">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-text-secondary hover:text-neon-cyan">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-dark-tertiary border border-neon-cyan flex items-center justify-center">
              <User className="w-5 h-5 text-neon-cyan" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-orbitron font-bold">Welcome back, Alex</h1>
                <p className="text-text-secondary">Here's your financial overview for today</p>
              </div>
              
              <div className="flex gap-3">
                <button className="btn-neon px-4 py-2 rounded-lg font-orbitron font-semibold flex items-center gap-2">
                  <Plus className="w-4 h-4 text-dark-primary" />
                  New Transaction
                </button>
                <button className="glass-effect text-neon-cyan px-4 py-2 rounded-lg font-orbitron font-semibold border border-neon-cyan hover:neon-glow-cyan transition-all duration-300">
                  <Send className="w-4 h-4" />
                  <span className="hidden md:inline ml-2">Send Money</span>
                </button>
              </div>
            </div>
            
            {/* Account Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-dark-secondary rounded-xl p-6 border border-dark"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-dark-tertiary border border-neon-cyan flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div className="flex items-center gap-1 text-neon-green">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-sm">+2.4%</span>
                  </div>
                </div>
                <h3 className="text-sm text-text-secondary mb-1">Total Balance</h3>
                <p className="text-2xl font-bold text-text-primary">$24,562.80</p>
                <p className="text-text-secondary text-sm mt-2">Across all accounts</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-dark-secondary rounded-xl p-6 border border-dark"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-dark-tertiary border border-neon-green flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-neon-green" />
                  </div>
                  <div className="flex items-center gap-1 text-neon-green">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-sm">+5.2%</span>
                  </div>
                </div>
                <h3 className="text-sm text-text-secondary mb-1">Income</h3>
                <p className="text-2xl font-bold text-text-primary">$8,350.00</p>
                <p className="text-text-secondary text-sm mt-2">This month</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-dark-secondary rounded-xl p-6 border border-dark"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-dark-tertiary border border-neon-pink flex items-center justify-center">
                    <ArrowDownRight className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div className="flex items-center gap-1 text-neon-pink">
                    <ArrowDownRight className="w-4 h-4" />
                    <span className="text-sm">-1.8%</span>
                  </div>
                </div>
                <h3 className="text-sm text-text-secondary mb-1">Expenses</h3>
                <p className="text-2xl font-bold text-text-primary">$5,240.50</p>
                <p className="text-text-secondary text-sm mt-2">This month</p>
              </motion.div>
            </div>
            
            {/* Recent Transactions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-dark-secondary rounded-xl border border-dark"
            >
              <div className="p-6 border-b border-dark flex items-center justify-between">
                <h2 className="text-xl font-orbitron font-bold">Recent Transactions</h2>
                <button className="text-neon-cyan hover:text-neon-cyan/80 text-sm flex items-center">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="divide-y divide-dark">
                {[
                  { icon: Landmark, color: 'neon-green', name: 'Salary Deposit', category: 'Income', amount: '+$3,500.00', date: 'Today, 9:15 AM' },
                  { icon: CreditCard, color: 'neon-pink', name: 'Amazon Purchase', category: 'Shopping', amount: '-$129.99', date: 'Yesterday, 2:34 PM' },
                  { icon: Repeat, color: 'neon-cyan', name: 'Transfer to Savings', category: 'Transfer', amount: '-$500.00', date: 'Yesterday, 10:45 AM' },
                  { icon: CreditCard, color: 'neon-pink', name: 'Grocery Store', category: 'Food', amount: '-$85.75', date: 'Mar 15, 6:30 PM' },
                  { icon: CreditCard, color: 'neon-pink', name: 'Netflix Subscription', category: 'Entertainment', amount: '-$14.99', date: 'Mar 14, 12:00 AM' }
                ].map((transaction, index) => (
                  <div key={index} className="p-4 hover:bg-dark-tertiary/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg bg-dark-tertiary border border-${transaction.color} flex items-center justify-center`}>
                          <transaction.icon className={`w-5 h-5 text-${transaction.color}`} />
                        </div>
                        <div>
                          <p className="font-medium">{transaction.name}</p>
                          <p className="text-text-secondary text-sm">{transaction.category}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className={`font-medium ${transaction.amount.startsWith('+') ? 'text-neon-green' : 'text-neon-pink'}`}>
                          {transaction.amount}
                        </p>
                        <p className="text-text-secondary text-sm">{transaction.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Financial Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-dark-secondary rounded-xl border border-dark"
              >
                <div className="p-6 border-b border-dark">
                  <h2 className="text-xl font-orbitron font-bold">Spending Categories</h2>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-center h-48 mb-4">
                    <div className="w-32 h-32 rounded-full border-8 border-neon-cyan relative flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border-8 border-neon-pink relative flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-8 border-neon-green"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-4 h-4 bg-neon-cyan rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium">Housing</p>
                      <p className="text-text-secondary text-xs">35%</p>
                    </div>
                    <div className="text-center">
                      <div className="w-4 h-4 bg-neon-pink rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium">Food</p>
                      <p className="text-text-secondary text-xs">25%</p>
                    </div>
                    <div className="text-center">
                      <div className="w-4 h-4 bg-neon-green rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium">Transport</p>
                      <p className="text-text-secondary text-xs">15%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-dark-secondary rounded-xl border border-dark"
              >
                <div className="p-6 border-b border-dark">
                  <h2 className="text-xl font-orbitron font-bold">Upcoming Bills</h2>
                </div>
                
                <div className="divide-y divide-dark">
                  {[
                    { name: 'Rent Payment', amount: '$1,200.00', date: 'Mar 31, 2025', status: 'Upcoming' },
                    { name: 'Electricity Bill', amount: '$85.50', date: 'Apr 05, 2025', status: 'Upcoming' },
                    { name: 'Internet Service', amount: '$59.99', date: 'Apr 10, 2025', status: 'Upcoming' },
                    { name: 'Car Insurance', amount: '$120.75', date: 'Apr 15, 2025', status: 'Upcoming' }
                  ].map((bill, index) => (
                    <div key={index} className="p-4 hover:bg-dark-tertiary/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{bill.name}</p>
                          <p className="text-text-secondary text-sm">{bill.date}</p>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-medium">{bill.amount}</p>
                          <p className="text-neon-cyan text-sm">{bill.status}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Financial Goals */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-dark-secondary rounded-xl border border-dark"
            >
              <div className="p-6 border-b border-dark flex items-center justify-between">
                <h2 className="text-xl font-orbitron font-bold">Financial Goals</h2>
                <button className="btn-neon px-3 py-1 rounded-lg text-sm font-orbitron font-semibold flex items-center gap-1">
                  <Plus className="w-4 h-4 text-dark-primary" />
                  Add Goal
                </button>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Emergency Fund', target: '$10,000', current: '$6,500', progress: 65, color: 'neon-green' },
                  { name: 'Vacation', target: '$3,000', current: '$1,200', progress: 40, color: 'neon-cyan' },
                  { name: 'New Car', target: '$25,000', current: '$5,000', progress: 20, color: 'neon-pink' }
                ].map((goal, index) => (
                  <div key={index} className="bg-dark-tertiary rounded-lg p-4 border border-dark">
                    <h3 className="font-medium mb-2">{goal.name}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-text-secondary text-sm">Target: {goal.target}</p>
                      <p className="text-text-secondary text-sm">Current: {goal.current}</p>
                    </div>
                    <div className="w-full h-2 bg-dark-primary rounded-full mb-2">
                      <div 
                        className={`h-2 rounded-full bg-${goal.color}`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-sm text-text-secondary">{goal.progress}% complete</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
        
        {/* Other tabs would be implemented similarly */}
        {(activeTab === 'accounts' || activeTab === 'transactions' || activeTab === 'analytics') && (
          <div className="flex items-center justify-center h-[calc(100vh-73px)]">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dark-tertiary border border-neon-cyan flex items-center justify-center">
                <Settings className="w-8 h-8 text-neon-cyan animate-spin" />
              </div>
              <h2 className="text-2xl font-orbitron font-bold mb-2">Coming Soon</h2>
              <p className="text-text-secondary max-w-md">
                This section is currently under development. Check back soon for updates!
              </p>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-dark-secondary border-t border-dark p-4 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-neon-green" />
            <span className="text-text-secondary text-sm">Bank-grade security with end-to-end encryption</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-text-secondary hover:text-neon-cyan text-sm">Privacy Policy</button>
            <button className="text-text-secondary hover:text-neon-cyan text-sm">Terms of Service</button>
            <button className="text-text-secondary hover:text-neon-cyan text-sm">Help Center</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinTechSuite;