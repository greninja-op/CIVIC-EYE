import React from 'react';

function TicketTracker() {
  const timeline = [
    { status: 'Received', time: '10:00 AM', completed: true },
    { status: 'Worker Assigned', time: '10:30 AM', completed: true },
    { status: 'In Progress', time: '11:00 AM', completed: false },
    { status: 'Fixed', time: 'Pending', completed: false }
  ];

  return (
    <div className="container">
      <div className="page">
        <h1>📋 Ticket Tracker</h1>
        <p>Track your grievance status</p>
        
        <div style={{ marginTop: '40px' }}>
          {timeline.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px',
              opacity: item.completed ? 1 : 0.5
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: item.completed ? '#48bb78' : '#cbd5e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                {item.completed ? '✓' : index + 1}
              </div>
              <div style={{ marginLeft: '20px' }}>
                <h3>{item.status}</h3>
                <p style={{ color: '#666' }}>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicketTracker;
