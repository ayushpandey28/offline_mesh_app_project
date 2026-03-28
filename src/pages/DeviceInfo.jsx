import React from 'react';
import { Card } from '../components/UI';
import { Smartphone, Cpu, HardDrive, Wifi } from 'lucide-react';

const DeviceInfo = () => {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">Device Information</h1>
      <div className="card-grid">
        <Card style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Smartphone size={32} color="var(--accent)" />
          <div>
             <h3 style={{ margin: 0 }}>Device Name</h3>
             <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Pixel 6 Pro (Simulated)</p>
          </div>
        </Card>
        <Card style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Wifi size={32} color="var(--accent)" />
          <div>
             <h3 style={{ margin: 0 }}>Current Network</h3>
             <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Library Node A (Repeater)</p>
          </div>
        </Card>
        <Card style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Cpu size={32} color="var(--text-secondary)" />
          <div>
             <h3 style={{ margin: 0 }}>Mesh Protocol</h3>
             <p style={{ margin: 0, color: 'var(--text-secondary)' }}>BATMAN-adv v1.5</p>
          </div>
        </Card>
        <Card style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <HardDrive size={32} color="var(--text-secondary)" />
          <div>
             <h3 style={{ margin: 0 }}>Storage Allocated</h3>
             <p style={{ margin: 0, color: 'var(--text-secondary)' }}>1.2 GB / 5.0 GB</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DeviceInfo;
