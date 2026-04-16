import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import PageLayout from './components/Layout/PageLayout';

// Lazy loading pages for better performance
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Chat = lazy(() => import('./pages/Chat'));
const Discover = lazy(() => import('./pages/Discover'));
const NetworkStatus = lazy(() => import('./pages/NetworkStatus'));
const Broadcast = lazy(() => import('./pages/Broadcast'));


const Profile = lazy(() => import('./pages/Profile'));
const Logs = lazy(() => import('./pages/Logs'));


const App = () => {
  return (
    <AppProvider>
      <Router>
        <PageLayout>
          <Suspense fallback={<div className="page-container">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/network" element={<NetworkStatus />} />
              <Route path="/broadcast" element={<Broadcast />} />
              
              
            
              <Route path="/profile" element={<Profile />} />
              <Route path="/logs" element={<Logs />} />
              
              
            </Routes>
          </Suspense>
        </PageLayout>
      </Router>
    </AppProvider>
  );
};
// hello
export default App;
