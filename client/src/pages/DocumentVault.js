import React from 'react';

function DocumentVault() {
  const documents = [
    { name: 'Birth Certificate', status: 'Available', icon: '📄' },
    { name: 'Income Certificate', status: 'Pending Approval', icon: '📋' },
    { name: 'Property Tax Receipt', status: 'Available', icon: '🧾' }
  ];

  return (
    <div className="container">
      <div className="page">
        <h1>📁 Document Vault</h1>
        <p>Access your official documents</p>
        
        <div style={{ marginTop: '30px' }}>
          {documents.map((doc, index) => (
            <div key={index} style={{
              background: '#f7fafc',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '2rem' }}>{doc.icon}</span>
                <div>
                  <h3>{doc.name}</h3>
                  <p style={{ color: doc.status === 'Available' ? '#48bb78' : '#ed8936' }}>
                    {doc.status}
                  </p>
                </div>
              </div>
              {doc.status === 'Available' && (
                <button className="btn btn-primary">Download</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DocumentVault;
