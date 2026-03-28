import React from 'react';
import { Card } from '../components/UI';
import { Bell, FileText, UserPlus } from 'lucide-react';

const Notifications = () => {
  const notifs = [
    { id: 1, icon: UserPlus, text: 'Charlie Davis joined the mesh', time: '5m ago' },
    { id: 2, icon: FileText, text: 'Alice Smith requested "cs101_notes.pdf"', time: '1hr ago' },
    { id: 3, icon: Bell, text: 'Emergency broadcast received', time: '2hrs ago', alert: true },
  ];

  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">Notifications</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {notifs.map(n => (
          <Card key={n.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', margin: 0, borderLeft: n.alert ? '4px solid var(--error)' : '1px solid var(--border-color)' }}>
            <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: n.alert ? 'rgba(234, 0, 56, 0.1)' : 'var(--hover-bg)', color: n.alert ? 'var(--error)' : 'var(--accent)' }}>
              <n.icon size={20} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: '15px' }}>{n.text}</p>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{n.time}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
