import React from 'react';
import { Card } from '../components/UI';
import { Clock } from 'lucide-react';

const History = () => {
  const history = [
    { id: 1, node: 'Library Node A', duration: '2 hours', time: 'Today, 10:00 AM' },
    { id: 2, node: 'Main Campus Router', duration: '45 mins', time: 'Yesterday, 3:30 PM' },
    { id: 3, node: 'Dormitory Node B', duration: '5 hours', time: 'Yesterday, 8:00 PM' }
  ];

  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">Connection History</h1>
      <Card style={{ padding: 0 }}>
        {history.map((h, i) => (
          <div key={h.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderBottom: i === history.length - 1 ? 'none' : '1px solid var(--border-color)', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500', fontSize: '16px', marginBottom: '4px' }}>{h.node}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} /> Duration: {h.duration}
              </div>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{h.time}</div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default History;
