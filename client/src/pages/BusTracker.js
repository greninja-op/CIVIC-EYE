import React, { useState, useEffect } from 'react';

function BusTracker() {
  const [buses, setBuses] = useState([
    { id: 'B101', route: 'City Center - Airport', eta: 4, status: 'On Time' },
    { id: 'B205', route: 'Station - Mall', eta: 8, status: 'Delayed' },
    { id: 'B312', route: 'Park - Hospital', eta: 2, status: 'On Time' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBuses(prev => prev.map(bus => ({
        ...bus,
        eta: Math.max(0, bus.eta - 1)
      })));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="page">
        <h1>🚌 Live Bus Tracker</h1>
        <p>Track buses in real-time</p>
        
        <div style={{ marginTop: '30px' }}>
          {buses.map(bus => (
            <div key={bus.id} style={{
              background: '#f7fafc',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '15px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3>Bus {bus.id}</h3>
                  <p style={{ color: '#666' }}>{bus.route}</p>
                  <span style={{
                    background: bus.status === 'On Time' ? '#48bb78' : '#ed8936',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}>
                    {bus.status}
                  </span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <h2 style={{ color: '#667eea' }}>{bus.eta} min</h2>
                  <p style={{ color: '#666' }}>Arriving</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusTracker;
