import React, { useState, useEffect } from 'react';

function HospitalBeds() {
  const [hospitals, setHospitals] = useState([
    { name: 'City Hospital', icu: 4, general: 12, ventilators: 2 },
    { name: 'Central Medical', icu: 0, general: 8, ventilators: 1 },
    { name: 'District Hospital', icu: 6, general: 20, ventilators: 3 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHospitals(prev => prev.map(h => ({
        ...h,
        icu: Math.max(0, Math.min(10, h.icu + Math.floor(Math.random() * 3) - 1)),
        general: Math.max(0, Math.min(30, h.general + Math.floor(Math.random() * 5) - 2))
      })));
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="page">
        <h1>🏥 Hospital Bed Availability</h1>
        <p>Real-time bed status</p>
        
        <div style={{ marginTop: '30px' }}>
          {hospitals.map((hospital, index) => (
            <div key={index} style={{
              background: '#f7fafc',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '15px'
            }}>
              <h3>{hospital.name}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '15px' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: '#666' }}>ICU Beds</p>
                  <h2 style={{ color: hospital.icu > 0 ? '#48bb78' : '#f56565' }}>{hospital.icu}</h2>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: '#666' }}>General Beds</p>
                  <h2 style={{ color: hospital.general > 0 ? '#48bb78' : '#f56565' }}>{hospital.general}</h2>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: '#666' }}>Ventilators</p>
                  <h2 style={{ color: hospital.ventilators > 0 ? '#48bb78' : '#f56565' }}>{hospital.ventilators}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HospitalBeds;
