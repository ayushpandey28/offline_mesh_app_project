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
const Files = lazy(() => import('./pages/Files'));
const Notifications = lazy(() => import('./pages/Notifications'));
const Analytics = lazy(() => import('./pages/Analytics'));
const Profile = lazy(() => import('./pages/Profile'));
const Logs = lazy(() => import('./pages/Logs'));
const DeviceInfo = lazy(() => import('./pages/DeviceInfo'));
const History = lazy(() => import('./pages/History'));
const Security = lazy(() => import('./pages/Security'));
const Theme = lazy(() => import('./pages/Theme'));
const Settings = lazy(() => import('./pages/Settings'));
const Help = lazy(() => import('./pages/Help'));
const About = lazy(() => import('./pages/About'));

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
              <Route path="/files" element={<Files />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/device" element={<DeviceInfo />} />
              <Route path="/history" element={<History />} />
              <Route path="/security" element={<Security />} />
              <Route path="/theme" element={<Theme />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </PageLayout>
      </Router>
    </AppProvider>
  );
};
// hello
export default App;
