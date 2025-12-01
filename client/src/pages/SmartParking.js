import React from 'react';

function SmartParking() {
  const parkingSpots = [
    { id: 'P1', location: 'City Mall', available: 12, total: 50 },
    { id: 'P2', location: 'Central Station', available: 0, total: 30 },
    { id: 'P3', location: 'Hospital', available: 8, total: 25 },
    { id: 'P4', location: 'Park Plaza', available: 20, total: 40 }
  ];

  return (
    <div className="container">
      <div className="page">
        <h1>🅿️ Smart Parking</h1>
        <p>Find available parking spots</p>
        
        <div style={{ marginTop: '30px' }}>
          {parkingSpots.map(spot => {
            const percentage = (spot.available / spot.total) * 100;
            const color = percentage > 30 ? '#48bb78' : percentage > 0 ? '#ed8936' : '#f56565';
            
            return (
              <div key={spot.id} style={{
                background: '#f7fafc',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '15px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3>{spot.location}</h3>
                    <p style={{ color: '#666' }}>Spot ID: {spot.id}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <h2 style={{ color }}>{spot.available}/{spot.total}</h2>
                    <p style={{ color: '#666' }}>Available</p>
                    {spot.available > 0 && (
                      <button className="btn btn-primary" style={{ marginTop: '10px' }}>
                        Reserve
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SmartParking;
