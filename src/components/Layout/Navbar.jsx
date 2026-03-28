import React from 'react';
import { Menu, Wifi } from 'lucide-react';

const Navbar = ({ toggleSidebar, pageName }) => {
  return (
    <header className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button className="hamburger" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <span style={{ fontSize: '18px', fontWeight: '500' }}>{pageName}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)' }}>
        <Wifi size={20} />
        <span style={{ fontSize: '14px', fontWeight: '500' }}>Mesh Active</span>
      </div>
    </header>
  );
};

export default Navbar;
