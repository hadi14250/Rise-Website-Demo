import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopOnNav from '../../hooks/useScrollToTop';
import WhatsAppWidget from '../ui/WhatsAppWidget';
import { MobileMenuProvider } from '../../context/MobileMenuContext';

const Layout: React.FC = () => {
  return (
    <MobileMenuProvider>
      <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
        <ScrollToTopOnNav />
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </MobileMenuProvider>
  );
};

export default Layout;
