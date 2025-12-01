import React, { useState } from 'react';

function BillPayment() {
  const [paying, setPaying] = useState(false);

  const bills = [
    { type: 'Property Tax', amount: 2500, due: '15 Dec 2025' },
    { type: 'Water Bill', amount: 450, due: '10 Dec 2025' },
    { type: 'Traffic Fine', amount: 500, due: '5 Dec 2025' }
  ];

  const handlePayment = () => {
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      alert('Payment Successful!');
    }, 2000);
  };

  return (
    <div className="container">
      <div className="page">
        <h1>💳 Bill Payment</h1>
        <p>Pay all your municipal bills in one place</p>
        
        <div style={{ marginTop: '30px' }}>
          {bills.map((bill, index) => (
            <div key={index} style={{
              background: '#f7fafc',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3>{bill.type}</h3>
                <p style={{ color: '#666' }}>Due: {bill.due}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <h2 style={{ color: '#667eea' }}>₹{bill.amount}</h2>
                <button className="btn btn-primary" onClick={handlePayment} disabled={paying}>
                  {paying ? 'Processing...' : 'Pay Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3>Total Pending: ₹{bills.reduce((sum, b) => sum + b.amount, 0)}</h3>
        </div>
      </div>
    </div>
  );
}

export default BillPayment;
