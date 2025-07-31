import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import FreeTools from './pages/FreeTools';
import Automation from './pages/Automation';
import AutomationDetail from './pages/AutomationDetail';
import Marketplace from './pages/Marketplace';
import Portfolio from './pages/Portfolio';
import ProductDetail from './pages/ProductDetail';
import ApiDetail from './pages/ApiDetail';
import GetQuote from './pages/GetQuote';
import RequestQuote from './pages/RequestQuote';
import HealthTrackPro from './pages/ProductDemos/HealthTrackPro';
import FinTechSuite from './pages/ProductDemos/FinTechSuite';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import EcommercePro from './pages/ProductDemos/EcommercePro';
import EducationPlatform from './pages/ProductDemos/EducationPlatform';
import BankingCore from './pages/ProductDemos/BankingCore';
import PropertyManager from './pages/ProductDemos/PropertyManager';
import TravelBooking from './pages/ProductDemos/TravelBooking';
import StreamingPlatform from './pages/ProductDemos/StreamingPlatform';
import FoodieDelivery from './pages/ProductDemos/FoodieDelivery';
import RetailPOS from './pages/ProductDemos/RetailPOS';
import QuoteConfirmation from './pages/QuoteConfirmation';
import About from './pages/About';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';
import { initScrollEffects } from './utils/intersectionObserver';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  // Check if the current route is a product demo
  const isProductDemo = pathname.includes('/product-demos/');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { pathname } = useLocation();

  // Initialize scroll effects
  useEffect(() => {
    const cleanup = initScrollEffects();
    return cleanup;
  }, []);
  
  // Check if the current route is a product demo
  const isProductDemo = pathname.includes('/product-demos/');
  
  return (
    <>
      <ScrollToTop />
      {isProductDemo ? (
        <Routes>
          <Route path="/product-demos/healthtrack-pro" element={<HealthTrackPro />} />
          <Route path="/product-demos/fintech-suite" element={<FinTechSuite />} />
          <Route path="/product-demos/ecommerce-pro" element={<EcommercePro />} />
          <Route path="/product-demos/edulearn-platform" element={<EducationPlatform />} />
          <Route path="/product-demos/banking-core" element={<BankingCore />} />
          <Route path="/product-demos/property-manager" element={<PropertyManager />} />
          <Route path="/product-demos/travel-booking" element={<TravelBooking />} />
          <Route path="/product-demos/streaming-platform" element={<StreamingPlatform />} />
          <Route path="/product-demos/foodie-delivery" element={<FoodieDelivery />} />
          <Route path="/product-demos/retail-pos" element={<RetailPOS />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/free-tools" element={<FreeTools />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/automation/:templateId" element={<AutomationDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/marketplace/product/:productId" element={<ProductDetail />} />
            <Route path="/marketplace/api/:apiId" element={<ApiDetail />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/quote-confirmation" element={<QuoteConfirmation />} />
            <Route path="/about" element={<About />} />
            <Route path="/svc-admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;