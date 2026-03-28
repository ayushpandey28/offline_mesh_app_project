import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card, Button } from '../components/UI';
import { UserPlus, CircleDot } from 'lucide-react';

const Discover = () => {
  const { users } = useAppContext();

  return (
    <div className="page-container animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 className="page-title" style={{ margin: 0 }}>Discover Devices</h1>
        <Button variant="outline" icon={CircleDot}>Scanning...</Button>
      </div>

      <div className="card-grid">
        {users.map(user => (
          <Card key={user.id} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src={user.avatar} alt={user.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: '500', fontSize: '16px' }}>{user.name}</div>
              <div style={{ fontSize: '12px', color: user.status === 'online' ? 'var(--accent)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: user.status === 'online' ? 'var(--accent)' : 'var(--text-secondary)' }}></span>
                {user.status} • Signal: {user.signal}
              </div>
            </div>
            <button style={{ backgroundColor: 'transparent', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>
              <UserPlus size={20} />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Discover;
