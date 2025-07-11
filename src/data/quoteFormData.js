import { 
  Building2, 
  CreditCard, 
  ShoppingCart, 
  GraduationCap, 
  Utensils, 
  Store, 
  Plane, 
  Play,
  Smartphone, 
  Globe, 
  Zap, 
  Code, 
  Lightbulb, 
  Shield, 
  TrendingUp, 
  Bot 
} from 'lucide-react';

export const industries = [
  { id: 'healthcare', name: 'Healthcare', icon: Building2 },
  { id: 'finance', name: 'Finance', icon: CreditCard },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'food-delivery', name: 'Food Delivery', icon: Utensils },
  { id: 'retail', name: 'Retail', icon: Store },
  { id: 'travel', name: 'Travel', icon: Plane },
  { id: 'entertainment', name: 'Entertainment', icon: Play },
];

export const services = [
  { id: 'mobile-app', name: 'Mobile App Development', icon: Smartphone },
  { id: 'web-development', name: 'Web Development', icon: Globe },
  { id: 'process-automation', name: 'Process Automation', icon: Zap },
  { id: 'custom-software', name: 'Custom Software Solutions', icon: Code },
  { id: 'product-development', name: 'Product Development', icon: Lightbulb },
  { id: 'blockchain-integration', name: 'Blockchain Integration', icon: Shield },
  { id: 'digital-transformation', name: 'Digital Transformation', icon: TrendingUp },
  { id: 'agentic-ai', name: 'Agentic AI Solutions', icon: Bot },
];

export const getIndustryById = (id) => {
  return industries.find(industry => industry.id === id);
};

export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};