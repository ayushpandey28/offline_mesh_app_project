export const dummyUsers = [
  { id: 'u1', name: 'Alice Smith', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d', status: 'online', signal: 'excellent' },
  { id: 'u2', name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', status: 'offline', signal: 'weak' },
  { id: 'u3', name: 'Charlie Davis', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d', status: 'online', signal: 'good' },
  { id: 'u4', name: 'Diana Clark', avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d', status: 'online', signal: 'excellent' },
];

export const dummyMessages = [
  { id: 'm1', senderId: 'u2', text: 'Hey, are you in the library?', timestamp: new Date(Date.now() - 3600000).toISOString() },
  { id: 'm2', senderId: 'me', text: 'Yeah, on the second floor.', timestamp: new Date(Date.now() - 3500000).toISOString() },
  { id: 'm3', senderId: 'u2', text: 'Great, bringing the notes.', timestamp: new Date(Date.now() - 3400000).toISOString() },
];

export const dummyNodes = [
  { id: 'n1', name: 'Main Campus Router', type: 'Gateway', load: '45%' },
  { id: 'n2', name: 'Library Node A', type: 'Repeater', load: '82%' },
  { id: 'n3', name: 'Dormitory Node B', type: 'Endpoint', load: '12%' },
];

export const dummyLogs = [
  { id: 'l1', time: new Date(Date.now() - 50000).toISOString(), event: 'Connected to Library Node A', type: 'info' },
  { id: 'l2', time: new Date(Date.now() - 150000).toISOString(), event: 'Packet loss detected on Gateway', type: 'warning' },
];

export const dummyFiles = [
  { id: 'f1', name: 'cs101_notes.pdf', size: '2.4 MB', owner: 'Alice Smith' },
  { id: 'f2', name: 'project_draft.docx', size: '1.1 MB', owner: 'Charlie Davis' },
];
