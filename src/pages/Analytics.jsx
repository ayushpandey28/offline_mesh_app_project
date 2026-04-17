import React from 'react';
import { Card } from '../components/UI';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const data = [
  { time: '08:00', nodes: 20 },
  { time: '10:00', nodes: 45 },
  { time: '12:00', nodes: 80 },
  { time: '14:00', nodes: 120 },
  { time: '16:00', nodes: 90 },
  { time: '18:00', nodes: 50 },
];

const trafficData = [
  { name: 'Gateway', val: 4000 },
  { name: 'Repeater', val: 3000 },
  { name: 'Endpoint', val: 2000 },
];

const pieColors = ['#00a884', '#128C7E', '#25D366'];

const Analytics = () => {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">Network Analytics</h1>
      
      <div className="card-grid">
        <Card style={{ gridColumn: '1 / -1', height: '300px' }}>
          <h2 style={{ fontSize: '16px', marginBottom: '16px' }}>Active Nodes Over Time</h2>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorNodes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--accent)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="time" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip contentStyle={{ backgroundColor: 'var(--panel-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)' }} />
              <Area type="monotone" dataKey="nodes" stroke="var(--accent)" fillOpacity={1} fill="url(#colorNodes)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card style={{ height: '300px' }}>
          <h2 style={{ fontSize: '16px', marginBottom: '16px' }}>Traffic by Node Type</h2>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={trafficData}>
              <XAxis dataKey="name" stroke="var(--text-secondary)" />
              <Tooltip contentStyle={{ backgroundColor: 'var(--panel-bg)', border: 'none', borderRadius: '8px', color: 'var(--text-primary)' }} cursor={{fill: 'var(--hover-bg)'}} />
              <Bar dataKey="val" fill="var(--accent)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card style={{ height: '300px' }}>
          <h2 style={{ fontSize: '16px', marginBottom: '16px' }}>Node Distribution</h2>
          <ResponsiveContainer width="100%" height="80%">
            <PieChart>
              <Pie data={trafficData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="val">
                {trafficData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: 'var(--panel-bg)', border: 'none', borderRadius: '8px', color: 'var(--text-primary)' }} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};
// Hello
export default Analytics;
