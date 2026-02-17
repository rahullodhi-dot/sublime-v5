import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import NewsletterBanner from '../components/NewsletterBanner';
import TopBar from '../components/TopBar';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showTopBar, setshowTopBar] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f1e8] flex flex-col overflow-x-hidden">
  {/* {showTopBar && <TopBar showCloseBtn={()=>setshowTopBar(false)}/>} */}
      <Header onSidebarToggle={toggleSidebar} />
      <div className="flex flex-1 relative overflow-x-hidden">
        {/* Sidebar - Slides in from left when open */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        {/* Main Content - Adjusts when sidebar is open */}
        <main className={`flex-grow transition-all duration-300 overflow-x-hidden `}>
          <Outlet />
        </main>
      </div>
        <NewsletterBanner/>
      <Footer />
    </div>
  );
};

export default Layout;
