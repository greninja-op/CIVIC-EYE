import React, { useState } from 'react';

function CommunityPolls() {
  const [polls, setPolls] = useState([
    { id: 1, question: 'Should we rename Central Park?', yes: 45, no: 32, voted: false },
    { id: 2, question: 'Do we need a new bridge on River Road?', yes: 78, no: 15, voted: false },
    { id: 3, question: 'Extend library hours to 10 PM?', yes: 62, no: 28, voted: false }
  ]);

  const handleVote = (pollId, vote) => {
    setPolls(prev => prev.map(poll => {
      if (poll.id === pollId && !poll.voted) {
        return {
          ...poll,
          yes: vote === 'yes' ? poll.yes + 1 : poll.yes,
          no: vote === 'no' ? poll.no + 1 : poll.no,
          voted: true
        };
      }
      return poll;
    }));
  };

  return (
    <div className="container">
      <div className="page">
        <h1>🗳️ Community Polls</h1>
        <p>Your voice matters - vote on city decisions</p>
        
        <div style={{ marginTop: '30px' }}>
          {polls.map(poll => {
            const total = poll.yes + poll.no;
            const yesPercent = (poll.yes / total) * 100;
            const noPercent = (poll.no / total) * 100;
            
            return (
              <div key={poll.id} style={{
                background: '#f7fafc',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <h3>{poll.question}</h3>
                
                {!poll.voted ? (
                  <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleVote(poll.id, 'yes')}
                      style={{ flex: 1 }}
                    >
                      Yes
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleVote(poll.id, 'no')}
                      style={{ flex: 1, background: '#cbd5e0' }}
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <div style={{ marginTop: '15px' }}>
                    <div style={{ marginBottom: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span>Yes</span>
                        <span>{yesPercent.toFixed(1)}%</span>
                      </div>
                      <div style={{ background: '#e2e8f0', borderRadius: '4px', height: '20px', overflow: 'hidden' }}>
                        <div style={{ background: '#48bb78', height: '100%', width: `${yesPercent}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span>No</span>
                        <span>{noPercent.toFixed(1)}%</span>
                      </div>
                      <div style={{ background: '#e2e8f0', borderRadius: '4px', height: '20px', overflow: 'hidden' }}>
                        <div style={{ background: '#f56565', height: '100%', width: `${noPercent}%` }}></div>
                      </div>
                    </div>
                    <p style={{ color: '#48bb78', marginTop: '10px', fontWeight: 'bold' }}>✓ You voted!</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CommunityPolls;
