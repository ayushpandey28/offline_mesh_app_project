import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card } from '../components/UI';
import { GitCommit, Server, Wifi } from 'lucide-react';

const NetworkStatus = () => {
  const { nodes } = useAppContext();

  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">Network Status</h1>
      <div className="card-grid">
        {nodes.map(node => (
          <Card key={node.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                 <div style={{ padding: '10px', backgroundColor: 'rgba(0,168,132,0.1)', borderRadius: '8px', color: 'var(--accent)' }}>
                   {node.type === 'Gateway' ? <Server size={24} /> : <GitCommit size={24} />}
                 </div>
                 <div>
                   <h3 style={{ fontSize: '16px', margin: 0 }}>{node.name}</h3>
                   <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Type: {node.type}</span>
                 </div>
              </div>
              <Wifi size={20} color="var(--accent)" />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px', color: 'var(--text-secondary)' }}>
                <span>Node Load</span>
                <span>{node.load}</span>
              </div>
              <div style={{ height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: node.load, background: 'var(--accent)' }}></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NetworkStatus;
