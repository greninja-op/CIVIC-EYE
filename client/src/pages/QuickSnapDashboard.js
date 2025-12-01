import React, { useState } from 'react';
import axios from 'axios';

function QuickSnapDashboard() {
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);

  const categories = ['Roads', 'Garbage', 'Water', 'Lights'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('category', category);
    formData.append('image', file);
    
    try {
      await axios.post('/api/grievances/report', formData);
      alert('Issue reported successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="page">
        <h1>📸 Quick-Snap Dashboard</h1>
        <p>Report civic issues instantly</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', margin: '30px 0' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn ${category === cat ? 'btn-primary' : ''}`}
              onClick={() => setCategory(cat)}
              style={{ padding: '40px', fontSize: '1.2rem' }}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {category && (
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ marginBottom: '20px' }}
            />
            <button type="submit" className="btn btn-primary">Submit Report</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default QuickSnapDashboard;
