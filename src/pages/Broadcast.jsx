import React, { useState } from 'react';
import { Card, Button } from '../components/UI';
import { Radio, AlertCircle } from 'lucide-react';

const Broadcast = () => {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleBroadcast = () => {
    if (!message.trim()) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setMessage('');
  };

  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">Broadcast Message</h1>
      <Card>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px', color: 'var(--error)' }}>
          <AlertCircle size={24} />
          <p style={{ fontSize: '14px' }}>Broadcasts are sent to ALL nearby devices on the mesh. Use responsibly.</p>
        </div>
        
        <div className="input-group">
          <label className="input-label">Broadcast Message</label>
          <textarea 
            className="input-field" 
            rows="5"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Type your emergency or campus-wide announcement here..."
            style={{ resize: 'vertical', fontFamily: 'inherit' }}
          ></textarea>
        </div>

        <Button onClick={handleBroadcast} icon={Radio} style={{ width: '100%' }}>
          {sent ? 'Broadcast Sent!' : 'Send Broadcast'}
        </Button>
      </Card>
    </div>
  );
};

export default Broadcast;
