import React, { useState } from 'react';

function SOSButton() {
  const [countdown, setCountdown] = useState(null);
  const [alertSent, setAlertSent] = useState(false);

  const handleSOS = () => {
    let count = 3;
    setCountdown(count);
    
    const timer = setInterval(() => {
      count--;
      if (count === 0) {
        clearInterval(timer);
        setCountdown(null);
        setAlertSent(true);
        setTimeout(() => setAlertSent(false), 5000);
      } else {
        setCountdown(count);
      }
    }, 1000);
  };

  return (
    <div className="container">
      <div className="page" style={{ textAlign: 'center' }}>
        <h1>🚨 Emergency SOS</h1>
        <p>Press the button in case of emergency</p>
        
        <div style={{ margin: '50px 0' }}>
          {!countdown && !alertSent && (
            <button
              onClick={handleSOS}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: '#f56565',
                color: 'white',
                fontSize: '2rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(245,101,101,0.4)',
                transition: 'transform 0.2s'
              }}
              onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
            >
              SOS
            </button>
          )}
          
          {countdown && (
            <div>
              <h2 style={{ fontSize: '4rem', color: '#f56565' }}>{countdown}</h2>
              <p>Sending alert...</p>
            </div>
          )}
          
          {alertSent && (
            <div style={{ background: '#48bb78', color: 'white', padding: '30px', borderRadius: '12px' }}>
              <h2>✓ Alert Sent!</h2>
              <p>Help is on the way. Stay safe.</p>
            </div>
          )}
        </div>
        
        <div style={{ marginTop: '40px', textAlign: 'left', background: '#f7fafc', padding: '20px', borderRadius: '8px' }}>
          <h3>Emergency Contacts:</h3>
          <p>🚓 Police: 100</p>
          <p>🚑 Ambulance: 108</p>
          <p>🚒 Fire: 101</p>
        </div>
      </div>
    </div>
  );
}

export default SOSButton;
