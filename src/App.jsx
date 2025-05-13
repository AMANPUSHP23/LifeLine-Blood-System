
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import DonorDashboardPage from '@/pages/DonorDashboardPage';
import HospitalDashboardPage from '@/pages/HospitalDashboardPage';
import AdminDashboardPage from '@/pages/AdminDashboardPage';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence, motion } from 'framer-motion';

const PageLayout = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};


function App() {
  const location = useLocation();
  const noNavFooterPaths = ['/login', '/register'];
  const showNavFooter = !noNavFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {showNavFooter && <Navbar />}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
            <Route path="/login" element={<PageLayout><LoginPage /></PageLayout>} />
            <Route path="/register" element={<PageLayout><RegisterPage /></PageLayout>} />
            <Route path="/donor-dashboard" element={<PageLayout><DonorDashboardPage /></PageLayout>} />
            <Route path="/hospital-dashboard" element={<PageLayout><HospitalDashboardPage /></PageLayout>} />
            <Route path="/admin-dashboard" element={<PageLayout><AdminDashboardPage /></PageLayout>} />
            {/* Add other routes here */}
          </Routes>
        </AnimatePresence>
      </main>
      {showNavFooter && <Footer />}
      <Toaster />
    </div>
  );
}

export default App;
  