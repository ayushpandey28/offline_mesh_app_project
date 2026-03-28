import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card } from '../components/UI';
import { AlertTriangle, Info } from 'lucide-react';

const Logs = () => {
  const { logs } = useAppContext();

  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">System Logs</h1>
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        {logs.map((log, idx) => (
          <div key={log.id} style={{ 
            display: 'flex', gap: '16px', padding: '16px', 
            borderBottom: idx === logs.length - 1 ? 'none' : '1px solid var(--border-color)',
            alignItems: 'center'
          }}>
            {log.type === 'warning' ? <AlertTriangle size={20} color="var(--error)" /> : <Info size={20} color="var(--accent)" />}
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '15px' }}>{log.event}</span>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {new Date(log.time).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Logs;
