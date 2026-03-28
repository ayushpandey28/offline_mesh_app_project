import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card, Button } from '../components/UI';
import { Moon, Sun, Palette } from 'lucide-react';

const Theme = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">Theme Customizer</h1>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
            <div>
              <h3 style={{ margin: 0 }}>Appearance</h3>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>Currently using {theme} mode</p>
            </div>
          </div>
          <Button onClick={toggleTheme} variant="outline">Switch to {theme === 'dark' ? 'Light' : 'Dark'}</Button>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
           <Palette size={24} color="var(--accent)" />
           <div>
             <h3 style={{ margin: 0 }}>Accent Color</h3>
             <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>Custom accents coming soon.</p>
           </div>
        </div>
      </Card>
    </div>
  );
};

export default Theme;
