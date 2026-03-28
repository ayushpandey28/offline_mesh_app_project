import React from 'react';
import { Card } from '../components/UI';
import { Info, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">About</h1>
      <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ backgroundColor: 'var(--hover-bg)', padding: '20px', borderRadius: '50%', marginBottom: '16px', color: 'var(--accent)' }}>
          <Info size={40} />
        </div>
        <h2 style={{ margin: '0 0 8px 0' }}>MeshNet Offline App</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '0 0 24px 0' }}>Version 1.0.0-mockup</p>
        <p style={{ fontSize: '14px', lineHeight: '1.6', maxWidth: '400px', margin: '0 0 24px 0' }}>
          This is a simulated frontend architecture demonstrating a modern, responsive, WhatsApp/Telegram style offline mesh networking application. Built with React and Vite.
        </p>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', padding: '10px 16px', border: '1px solid var(--border-color)', borderRadius: '6px' }}>
          <Code size={20} /> View Source
        </a>
      </Card>
    </div>
  );
};

export default About;
