import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ArrowLeft,
  Calendar, 
  User, 
  Clock, 
  Activity, 
  FileText, 
  Video, 
  Bell, 
  Settings, 
  LogOut,
  Plus,
  Search,
  ChevronRight,
  MessageSquare,
  Phone
} from 'lucide-react';

const HealthTrackPro = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-dark-primary text-text-primary flex">
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
      
      {/* Sidebar */}
      <div className="w-20 lg:w-64 bg-dark-secondary border-r border-dark flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-dark flex items-center justify-center lg:justify-start">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="hidden lg:block ml-3 font-orbitron font-bold text-xl">HealthTrack</span>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center p-3 lg:px-4 ${
                  activeTab === 'dashboard' 
                    ? 'bg-dark-tertiary border-r-4 border-neon-pink text-neon-pink' 
                    : 'text-text-secondary hover:bg-dark-tertiary/50'
                }`}
              >
                <Activity className="w-6 h-6 mx-auto lg:mx-0" />
                <span className="hidden lg:block ml-3">Dashboard</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('appointments')}
                className={`w-full flex items-center p-3 lg:px-4 ${
                  activeTab === 'appointments' 
                    ? 'bg-dark-tertiary border-r-4 border-neon-pink text-neon-pink' 
                    : 'text-text-secondary hover:bg-dark-tertiary/50'
                }`}
              >
                <Calendar className="w-6 h-6 mx-auto lg:mx-0" />
                <span className="hidden lg:block ml-3">Appointments</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('patients')}
                className={`w-full flex items-center p-3 lg:px-4 ${
                  activeTab === 'patients' 
                    ? 'bg-dark-tertiary border-r-4 border-neon-pink text-neon-pink' 
                    : 'text-text-secondary hover:bg-dark-tertiary/50'
                }`}
              >
                <User className="w-6 h-6 mx-auto lg:mx-0" />
                <span className="hidden lg:block ml-3">Patients</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('records')}
                className={`w-full flex items-center p-3 lg:px-4 ${
                  activeTab === 'records' 
                    ? 'bg-dark-tertiary border-r-4 border-neon-pink text-neon-pink' 
                    : 'text-text-secondary hover:bg-dark-tertiary/50'
                }`}
              >
                <FileText className="w-6 h-6 mx-auto lg:mx-0" />
                <span className="hidden lg:block ml-3">Medical Records</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('telemedicine')}
                className={`w-full flex items-center p-3 lg:px-4 ${
                  activeTab === 'telemedicine' 
                    ? 'bg-dark-tertiary border-r-4 border-neon-pink text-neon-pink' 
                    : 'text-text-secondary hover:bg-dark-tertiary/50'
                }`}
              >
                <Video className="w-6 h-6 mx-auto lg:mx-0" />
                <span className="hidden lg:block ml-3">Telemedicine</span>
              </button>
            </li>
          </ul>
        </nav>
        
        {/* Bottom Menu */}
        <div className="p-4 border-t border-dark">
          <ul className="space-y-2">
            <li>
              <button className="w-full flex items-center p-2 text-text-secondary hover:bg-dark-tertiary/50 rounded-lg">
                <Bell className="w-5 h-5 mx-auto lg:mx-0" />
                <span className="hidden lg:block ml-3">Notifications</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center p-2 text-text-secondary hover:bg-dark-tertiary/50 rounded-lg">
                <Settings className="w-5 h-5 mx-auto lg:mx-0" />
                <span className="hidden lg:block ml-3">Settings</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center p-2 text-text-secondary hover:bg-dark-tertiary/50 rounded-lg">
                <LogOut className="w-5 h-5 mx-auto lg:mx-0" />
                <span className="hidden lg:block ml-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-dark-secondary border-b border-dark p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-orbitron font-bold">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'appointments' && 'Appointments'}
                {activeTab === 'patients' && 'Patients'}
                {activeTab === 'records' && 'Medical Records'}
                {activeTab === 'telemedicine' && 'Telemedicine'}
              </h1>
              <p className="text-text-secondary text-sm">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="py-2 pl-10 pr-4 bg-dark-tertiary border border-dark rounded-lg text-text-primary focus:ring-2 focus:ring-neon-pink focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-dark-tertiary border border-neon-pink flex items-center justify-center">
                  <User className="w-5 h-5 text-neon-pink" />
                </div>
                <div className="hidden md:block">
                  <p className="text-text-primary font-medium">Dr. Sarah Wilson</p>
                  <p className="text-text-secondary text-sm">Cardiologist</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="p-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-dark-secondary rounded-xl p-6 border border-dark"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-dark-tertiary border border-neon-pink flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-neon-pink" />
                  </div>
                  <span className="text-text-secondary text-sm">Today</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">8</h3>
                <p className="text-text-secondary">Appointments</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-dark-secondary rounded-xl p-6 border border-dark"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-dark-tertiary border border-neon-green flex items-center justify-center">
                    <User className="w-6 h-6 text-neon-green" />
                  </div>
                  <span className="text-text-secondary text-sm">Total</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">1,248</h3>
                <p className="text-text-secondary">Patients</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-dark-secondary rounded-xl p-6 border border-dark"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-dark-tertiary border border-neon-cyan flex items-center justify-center">
                    <Activity className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <span className="text-text-secondary text-sm">This Week</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">42</h3>
                <p className="text-text-secondary">New Records</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-dark-secondary rounded-xl p-6 border border-dark"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-dark-tertiary border border-neon-green flex items-center justify-center">
                    <Video className="w-6 h-6 text-neon-green" />
                  </div>
                  <span className="text-text-secondary text-sm">Upcoming</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">5</h3>
                <p className="text-text-secondary">Telemedicine Calls</p>
              </motion.div>
            </div>
            
            {/* Upcoming Appointments */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-dark-secondary rounded-xl border border-dark mb-8"
            >
              <div className="p-6 border-b border-dark">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-orbitron font-bold">Today's Appointments</h2>
                  <button className="text-neon-pink hover:text-neon-pink/80 text-sm flex items-center">
                    View All <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
              
              <div className="divide-y divide-dark">
                {[
                  { time: '09:00 AM', name: 'James Wilson', type: 'Check-up', status: 'Confirmed' },
                  { time: '10:30 AM', name: 'Emily Johnson', type: 'Follow-up', status: 'In Progress' },
                  { time: '11:45 AM', name: 'Michael Brown', type: 'Consultation', status: 'Waiting' },
                  { time: '02:15 PM', name: 'Sophia Davis', type: 'Test Results', status: 'Confirmed' },
                  { time: '03:30 PM', name: 'Robert Miller', type: 'Telemedicine', status: 'Confirmed' }
                ].map((appointment, index) => (
                  <div key={index} className="p-4 hover:bg-dark-tertiary/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-dark-tertiary border border-neon-pink flex items-center justify-center">
                          <User className="w-5 h-5 text-neon-pink" />
                        </div>
                        <div>
                          <p className="font-medium">{appointment.name}</p>
                          <p className="text-text-secondary text-sm">{appointment.type}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">{appointment.time}</p>
                          <p className={`text-sm ${
                            appointment.status === 'Confirmed' ? 'text-neon-green' :
                            appointment.status === 'In Progress' ? 'text-neon-cyan' :
                            'text-neon-pink'
                          }`}>{appointment.status}</p>
                        </div>
                        
                        <div className="flex gap-2">
                          <button className="p-2 bg-dark-tertiary rounded-lg border border-neon-green text-neon-green hover:bg-dark-tertiary/80">
                            <MessageSquare className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-dark-tertiary rounded-lg border border-neon-cyan text-neon-cyan hover:bg-dark-tertiary/80">
                            <Phone className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Recent Activity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-dark-secondary rounded-xl border border-dark"
            >
              <div className="p-6 border-b border-dark">
                <h2 className="text-xl font-orbitron font-bold">Recent Activity</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {[
                    { icon: FileText, color: 'neon-green', text: 'Updated medical records for Emily Johnson', time: '35 minutes ago' },
                    { icon: Calendar, color: 'neon-cyan', text: 'Rescheduled appointment with Robert Miller', time: '2 hours ago' },
                    { icon: Video, color: 'neon-pink', text: 'Completed telemedicine call with James Wilson', time: '3 hours ago' },
                    { icon: User, color: 'neon-green', text: 'New patient registration: Sophia Davis', time: '5 hours ago' },
                    { icon: Activity, color: 'neon-cyan', text: 'Reviewed lab results for Michael Brown', time: '1 day ago' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full bg-dark-tertiary border border-${activity.color} flex items-center justify-center flex-shrink-0`}>
                        <activity.icon className={`w-5 h-5 text-${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-text-primary">{activity.text}</p>
                        <p className="text-text-secondary text-sm">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
        
        {/* Appointments Content */}
        {activeTab === 'appointments' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-dark-tertiary border border-neon-pink text-neon-pink rounded-lg">
                  Today
                </button>
                <button className="px-4 py-2 bg-dark-tertiary border border-dark text-text-secondary rounded-lg">
                  This Week
                </button>
                <button className="px-4 py-2 bg-dark-tertiary border border-dark text-text-secondary rounded-lg">
                  This Month
                </button>
              </div>
              
              <button className="btn-neon px-4 py-2 rounded-lg font-orbitron font-semibold flex items-center gap-2">
                <Plus className="w-5 h-5 text-dark-primary" />
                New Appointment
              </button>
            </div>
            
            <div className="bg-dark-secondary rounded-xl border border-dark">
              <div className="grid grid-cols-7 text-text-secondary text-sm border-b border-dark">
                <div className="p-4 font-medium">Time</div>
                <div className="p-4 font-medium">Patient</div>
                <div className="p-4 font-medium">Type</div>
                <div className="p-4 font-medium">Doctor</div>
                <div className="p-4 font-medium">Room</div>
                <div className="p-4 font-medium">Status</div>
                <div className="p-4 font-medium">Actions</div>
              </div>
              
              <div className="divide-y divide-dark">
                {[
                  { time: '09:00 AM', patient: 'James Wilson', type: 'Check-up', doctor: 'Dr. Sarah Wilson', room: '101', status: 'Confirmed' },
                  { time: '10:30 AM', patient: 'Emily Johnson', type: 'Follow-up', doctor: 'Dr. Sarah Wilson', room: '103', status: 'In Progress' },
                  { time: '11:45 AM', patient: 'Michael Brown', type: 'Consultation', doctor: 'Dr. Sarah Wilson', room: '105', status: 'Waiting' },
                  { time: '02:15 PM', patient: 'Sophia Davis', type: 'Test Results', doctor: 'Dr. Sarah Wilson', room: '102', status: 'Confirmed' },
                  { time: '03:30 PM', patient: 'Robert Miller', type: 'Telemedicine', doctor: 'Dr. Sarah Wilson', room: 'Virtual', status: 'Confirmed' },
                  { time: '04:45 PM', patient: 'Jennifer Lee', type: 'Check-up', doctor: 'Dr. Sarah Wilson', room: '104', status: 'Confirmed' },
                  { time: '05:30 PM', patient: 'William Taylor', type: 'Follow-up', doctor: 'Dr. Sarah Wilson', room: '101', status: 'Confirmed' }
                ].map((appointment, index) => (
                  <div key={index} className="grid grid-cols-7 hover:bg-dark-tertiary/50 transition-colors">
                    <div className="p-4 flex items-center">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-text-secondary" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                    <div className="p-4 flex items-center">{appointment.patient}</div>
                    <div className="p-4 flex items-center">{appointment.type}</div>
                    <div className="p-4 flex items-center">{appointment.doctor}</div>
                    <div className="p-4 flex items-center">{appointment.room}</div>
                    <div className="p-4 flex items-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        appointment.status === 'Confirmed' ? 'bg-dark-tertiary text-neon-green border border-neon-green' :
                        appointment.status === 'In Progress' ? 'bg-dark-tertiary text-neon-cyan border border-neon-cyan' :
                        'bg-dark-tertiary text-neon-pink border border-neon-pink'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                    <div className="p-4 flex items-center gap-2">
                      <button className="p-2 bg-dark-tertiary rounded-lg border border-neon-green text-neon-green hover:bg-dark-tertiary/80">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-dark-tertiary rounded-lg border border-neon-cyan text-neon-cyan hover:bg-dark-tertiary/80">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-dark-tertiary rounded-lg border border-neon-pink text-neon-pink hover:bg-dark-tertiary/80">
                        <Video className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Other tabs would be implemented similarly */}
        {(activeTab === 'patients' || activeTab === 'records' || activeTab === 'telemedicine') && (
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
      </div>
    </div>
  );
};

export default HealthTrackPro;