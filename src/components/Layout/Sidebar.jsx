import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, MessageSquare, Radio, Activity, User, Settings, 
  File, Bell, ScrollText, Smartphone, Send, PieChart, 
  Shield, Palette, History, HelpCircle, Info
} from 'lucide-react';

const navItems = [
  { path: '/', name: 'Dashboard', icon: Home },
  { path: '/chat', name: 'Chat', icon: MessageSquare },
  { path: '/discover', name: 'Discover', icon: Radio },
  { path: '/network', name: 'Network Status', icon: Activity },
  { path: '/broadcast', name: 'Broadcast', icon: Send },
  { path: '/files', name: 'Files', icon: File },
  { path: '/notifications', name: 'Notifications', icon: Bell },
  { path: '/analytics', name: 'Analytics', icon: PieChart },
  { path: '/profile', name: 'Profile', icon: User },
  { path: '/logs', name: 'Logs & Activity', icon: ScrollText },
  { path: '/device', name: 'Device Info', icon: Smartphone },
  { path: '/history', name: 'Connection History', icon: History },
  { path: '/security', name: 'Security', icon: Shield },
  { path: '/theme', name: 'Theme', icon: Palette },
  { path: '/settings', name: 'Settings', icon: Settings },
  { path: '/help', name: 'Help', icon: HelpCircle },
  { path: '/about', name: 'About', icon: Info },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Activity size={24} color="var(--accent)" />
          <span>MeshNet</span>
        </div>
        <nav className="nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink 
                key={item.path} 
                to={item.path} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={() => window.innerWidth <= 768 && toggleSidebar()}
              >
                <Icon size={20} className="nav-icon" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
