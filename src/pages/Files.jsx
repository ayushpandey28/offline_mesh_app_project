import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card, Button } from '../components/UI';
import { File as FileIcon, Download, Upload } from 'lucide-react';

const Files = () => {
  const { files } = useAppContext();

  return (
    <div className="page-container animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 className="page-title" style={{ margin: 0 }}>Shared Files</h1>
        <Button icon={Upload}>Upload File</Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {files.map(file => (
          <Card key={file.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', margin: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--hover-bg)', borderRadius: '8px', color: 'var(--text-secondary)' }}>
                <FileIcon size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '15px', margin: '0 0 4px 0' }}>{file.name}</h3>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>
                  {file.size} • Shared by {file.owner}
                </p>
              </div>
            </div>
            <Button variant="outline" icon={Download}>Download</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Files;
