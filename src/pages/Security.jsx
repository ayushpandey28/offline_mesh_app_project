import React from 'react';
import { Card, Button } from '../components/UI';
import { Shield, Key, EyeOff } from 'lucide-react';

const Security = () => {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">Security & Privacy</h1>
      <Card style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <Shield color="var(--accent)" size={24} />
          <div>
            <h3 style={{ margin: 0 }}>End-to-End Encryption</h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>All messages are encrypted using libsodium.</p>
          </div>
        </div>
        <Button variant="outline" icon={Key}>Verify Keys</Button>
      </Card>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <EyeOff color="var(--accent)" size={24} />
          <div>
            <h3 style={{ margin: 0 }}>Incognito Mode</h3>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>Hide your device from discovery scans.</p>
          </div>
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input type="checkbox" style={{ transform: 'scale(1.2)', accentColor: 'var(--accent)' }} />
          Enable Incognito Mode
        </label>
      </Card>
    </div>
  );
};

export default Security;
