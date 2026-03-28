import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card, Button } from '../components/UI';
import { Bell, Wifi, Battery } from 'lucide-react';

const Settings = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">Settings</h1>
      
      <Card style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '16px', marginBottom: '16px' }}>Preferences</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Bell size={20} color="var(--text-secondary)" />
            <span>Push Notifications</span>
          </div>
          <input type="checkbox" defaultChecked style={{ accentColor: 'var(--accent)', transform: 'scale(1.2)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '20px', textAlign: 'center' }}>🌗</span>
            <span>Dark Mode</span>
          </div>
          <Button variant="outline" size="sm" onClick={toggleTheme}>Toggle Theme</Button>
        </div>
      </Card>

      <Card>
        <h2 style={{ fontSize: '16px', marginBottom: '16px' }}>Mesh Network</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Wifi size={20} color="var(--text-secondary)" />
            <span>Auto-Connect to Best Node</span>
          </div>
          <input type="checkbox" defaultChecked style={{ accentColor: 'var(--accent)', transform: 'scale(1.2)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Battery size={20} color="var(--text-secondary)" />
            <span>Battery Saver Mode</span>
          </div>
          <input type="checkbox" style={{ accentColor: 'var(--accent)', transform: 'scale(1.2)' }} />
        </div>
      </Card>
    </div>
  );
};

export default Settings;
