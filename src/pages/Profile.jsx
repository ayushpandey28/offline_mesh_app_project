import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Card, Button } from '../components/UI';
import { Save, User as UserIcon } from 'lucide-react';

const Profile = () => {
  const { userProfile, setUserProfile } = useAppContext();
  const [name, setName] = useState(userProfile.name);
  const [status, setStatus] = useState(userProfile.status);

  const handleSave = () => {
    setUserProfile({ ...userProfile, name, status });
  };

  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">My Profile</h1>
      <Card style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--hover-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: 'var(--text-secondary)' }}>
            <UserIcon size={48} />
          </div>
          <Button variant="outline">Change Avatar</Button>
        </div>

        <div className="input-group">
          <label className="input-label">Display Name</label>
          <input className="input-field" value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div className="input-group">
          <label className="input-label">Status Info</label>
          <input className="input-field" value={status} onChange={e => setStatus(e.target.value)} />
        </div>

        <Button icon={Save} onClick={handleSave} style={{ width: '100%', marginTop: '16px' }}>Save Changes</Button>
      </Card>
    </div>
  );
};

export default Profile;
