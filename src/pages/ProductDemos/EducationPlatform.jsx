import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  ArrowLeft,
  Book, 
  Video, 
  Users, 
  Award, 
  Search, 
  Bell, 
  User, 
  Menu, 
  X, 
  Calendar, 
  Clock, 
  CheckCircle, 
  BarChart, 
  FileText, 
  Settings, 
  LogOut,
  ChevronRight,
  Play,
  Download,
  Star
} from 'lucide-react';

const EducationPlatform = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </button>
      </div>
      
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="ml-3 font-bold text-xl">EduLearn</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-medium text-white">Dashboard</a>
              <a href="#" className="font-medium text-indigo-200 hover:text-white">Courses</a>
              <a href="#" className="font-medium text-indigo-200 hover:text-white">Calendar</a>
              <a href="#" className="font-medium text-indigo-200 hover:text-white">Resources</a>
              <a href="#" className="font-medium text-indigo-200 hover:text-white">Community</a>
            </nav>
            
            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-indigo-200 hover:text-white">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-indigo-200 hover:text-white">
                <Bell className="w-5 h-5" />
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden md:block text-sm font-medium">Alex Johnson</span>
                </button>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-indigo-200 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-indigo-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-white font-medium bg-indigo-700">Dashboard</a>
              <a href="#" className="block px-3 py-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500">Courses</a>
              <a href="#" className="block px-3 py-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500">Calendar</a>
              <a href="#" className="block px-3 py-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500">Resources</a>
              <a href="#" className="block px-3 py-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500">Community</a>
            </div>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
          <p className="text-gray-600">Welcome back, Alex! Continue your learning journey.</p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Courses</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">12</h3>
            <p className="text-gray-600 text-sm">Enrolled courses</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">Progress</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">68%</h3>
            <p className="text-gray-600 text-sm">Average completion</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">Certificates</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">5</h3>
            <p className="text-gray-600 text-sm">Earned certificates</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-sm text-gray-500">Learning</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">42h</h3>
            <p className="text-gray-600 text-sm">Total learning time</p>
          </div>
        </div>
        
        {/* In Progress Courses */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">In Progress</h2>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Introduction to Machine Learning', 
                instructor: 'Dr. Sarah Chen', 
                progress: 75, 
                image: 'https://images.pexels.com/photos/4144144/pexels-photo-4144144.jpeg?auto=compress&cs=tinysrgb&w=800',
                color: 'blue'
              },
              { 
                title: 'Web Development Bootcamp', 
                instructor: 'Mark Williams', 
                progress: 45, 
                image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
                color: 'green'
              },
              { 
                title: 'Business Analytics Fundamentals', 
                instructor: 'Jennifer Lopez', 
                progress: 30, 
                image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
                color: 'purple'
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-1">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.instructor}</p>
                  
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div 
                        className={`h-2 rounded-full bg-${course.color}-600`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Upcoming Schedule */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Schedule</h2>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
              Full Calendar <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                { 
                  title: 'Machine Learning Live Session', 
                  time: 'Today, 2:00 PM - 3:30 PM', 
                  instructor: 'Dr. Sarah Chen',
                  type: 'Live Session'
                },
                { 
                  title: 'Group Project Meeting', 
                  time: 'Tomorrow, 10:00 AM - 11:00 AM', 
                  instructor: 'Team Alpha',
                  type: 'Meeting'
                },
                { 
                  title: 'Web Development Assignment Due', 
                  time: 'Mar 25, 11:59 PM', 
                  instructor: 'Mark Williams',
                  type: 'Deadline'
                },
                { 
                  title: 'Business Analytics Quiz', 
                  time: 'Mar 27, 3:00 PM - 4:00 PM', 
                  instructor: 'Jennifer Lopez',
                  type: 'Assessment'
                }
              ].map((event, index) => (
                <div key={index} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{event.title}</h4>
                        <p className="text-gray-600 text-sm">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Recommended Courses */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recommended For You</h2>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
              Browse Catalog <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                title: 'Data Science Fundamentals', 
                instructor: 'Michael Brown', 
                rating: 4.8,
                students: 12540,
                image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              { 
                title: 'UX/UI Design Principles', 
                instructor: 'Emma Wilson', 
                rating: 4.9,
                students: 8920,
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              { 
                title: 'Digital Marketing Mastery', 
                instructor: 'Robert Garcia', 
                rating: 4.7,
                students: 15300,
                image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              { 
                title: 'Python for Data Analysis', 
                instructor: 'Lisa Chen', 
                rating: 4.9,
                students: 18700,
                image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-32 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{course.instructor}</p>
                  
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 font-medium">{course.rating}</span>
                    </div>
                    <span className="text-gray-500">{course.students.toLocaleString()} students</span>
                  </div>
                  
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 font-bold text-xl text-gray-900">EduLearn</span>
              </div>
              <p className="text-gray-600 text-sm">
                Transforming education through technology. Learn at your own pace, anytime, anywhere.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-indigo-600">Browse Courses</a></li>
                <li><a href="#" className="hover:text-indigo-600">Become an Instructor</a></li>
                <li><a href="#" className="hover:text-indigo-600">Learning Paths</a></li>
                <li><a href="#" className="hover:text-indigo-600">Enterprise Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-indigo-600">Help Center</a></li>
                <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-600">Tutorials</a></li>
                <li><a href="#" className="hover:text-indigo-600">Contact Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; 2025 EduLearn Platform. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-indigo-600">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Terms</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EducationPlatform;