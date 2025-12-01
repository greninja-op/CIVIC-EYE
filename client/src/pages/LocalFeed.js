import React from 'react';

function LocalFeed() {
  const issues = [
    { id: 1, type: 'Roads', desc: 'Pothole on Main Street', upvotes: 12, time: '2 hours ago' },
    { id: 2, type: 'Lights', desc: 'Streetlight not working', upvotes: 8, time: '5 hours ago' },
    { id: 3, type: 'Garbage', desc: 'Overflowing bin', upvotes: 15, time: '1 day ago' }
  ];

  return (
    <div className="container">
      <div className="page">
        <h1>📍 Local Feed</h1>
        <p>Recent issues in your neighborhood</p>
        
        <div style={{ marginTop: '30px' }}>
          {issues.map(issue => (
            <div key={issue.id} style={{
              background: '#f7fafc',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '15px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ background: '#667eea', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.9rem' }}>
                    {issue.type}
                  </span>
                  <h3 style={{ margin: '10px 0' }}>{issue.desc}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>{issue.time}</p>
                </div>
                <button className="btn btn-primary">
                  👍 {issue.upvotes}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocalFeed;
