import React from 'react';

function CityNotices() {
  const notices = [
    { id: 1, title: 'Water Supply Schedule Change', content: 'Water supply in Zone 4 will be from 6 PM to 8 PM starting tomorrow.', time: '2 hours ago', priority: 'high' },
    { id: 2, title: 'Road Closure Alert', content: 'Main Street will be closed for repairs on Dec 5-7.', time: '5 hours ago', priority: 'medium' },
    { id: 3, title: 'Community Meeting', content: 'Town hall meeting scheduled for Dec 10 at 5 PM.', time: '1 day ago', priority: 'low' }
  ];

  const priorityColors = {
    high: '#f56565',
    medium: '#ed8936',
    low: '#48bb78'
  };

  return (
    <div className="container">
      <div className="page">
        <h1>📢 City Notices & Alerts</h1>
        <p>Stay updated with official announcements</p>
        
        <div style={{ marginTop: '30px' }}>
          {notices.map(notice => (
            <div key={notice.id} style={{
              background: '#f7fafc',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '15px',
              borderLeft: `4px solid ${priorityColors[notice.priority]}`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3>{notice.title}</h3>
                  <p style={{ color: '#666', margin: '10px 0' }}>{notice.content}</p>
                  <p style={{ color: '#999', fontSize: '0.9rem' }}>{notice.time}</p>
                </div>
                <span style={{
                  background: priorityColors[notice.priority],
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase'
                }}>
                  {notice.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CityNotices;
