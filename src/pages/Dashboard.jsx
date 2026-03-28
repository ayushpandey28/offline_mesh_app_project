import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card } from '../components/UI';
import { Users, Radio, Activity, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { users, nodes, messages } = useAppContext();
  
  const stats = [
    { title: 'Active Nodes', value: nodes.length, icon: Activity, path: '/network' },
    { title: 'Nearby Users', value: users.length, icon: Users, path: '/discover' },
    { title: 'Unread Messages', value: messages.length, icon: MessageSquare, path: '/chat' },
    { title: 'Signal Strength', value: 'Excellent', icon: Radio, path: '/device' },
  ];

  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">Welcome to MeshNet</h1>
      
      <div className="card-grid">
        {stats.map((stat, idx) => (
          <Link to={stat.path} style={{ textDecoration: 'none', color: 'inherit' }} key={idx}>
            <Card className="hover-card" style={{ display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }}>
              <div style={{ padding: '16px', backgroundColor: 'var(--hover-bg)', borderRadius: '50%', color: 'var(--accent)' }}>
                <stat.icon size={28} />
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px' }}>{stat.title}</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{stat.value}</div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="card-grid">
        <Card>
          <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Recent Activity</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
             <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>You connected to "Library Node A"</p>
             <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Received offline messages.</p>
          </div>
        </Card>
        <Card>
          <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Network Status Overview</h2>
          <div style={{ height: '8px', background: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden', marginTop: '16px' }}>
            <div style={{ height: '100%', width: '85%', background: 'var(--accent)' }}></div>
          </div>
          <p style={{ fontSize: '12px', marginTop: '8px', color: 'var(--text-secondary)' }}>85% Optimal Connectivity</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
