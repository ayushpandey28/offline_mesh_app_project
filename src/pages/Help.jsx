import React from 'react';
import { Card } from '../components/UI';
import { HelpCircle, Book } from 'lucide-react';

const Help = () => {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">Help & Guide</h1>
      <Card style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <Book color="var(--accent)" size={24} />
          <h3 style={{ margin: 0 }}>How MeshNet Works</h3>
        </div>
        <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)', fontSize: '14px' }}>
          MeshNet uses decentralized points (nodes) to route messages and files without internet access. 
          Your device acts as a relay, passing data securely to nearby nodes until it reaches the destination.
        </p>
      </Card>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <HelpCircle color="var(--accent)" size={24} />
          <h3 style={{ margin: 0 }}>FAQ</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '14px' }}>Is my data safe?</h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>Yes. All direct messages are end-to-end encrypted.</p>
          </div>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '14px' }}>What does "Repeater" mean?</h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>A repeater forwards your message to extend network range.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Help;
