import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const formatPageName = (pathname) => {
  if (pathname === '/') return 'Dashboard';
  let name = pathname.substring(1).replace('-', ' ');
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const PageLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const pageName = formatPageName(location.pathname);

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(prev => !prev)} />
      <div className="main-content">
        <Navbar toggleSidebar={() => setSidebarOpen(prev => !prev)} pageName={pageName} />
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
