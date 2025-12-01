import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>🏙️ CIVIC-EYE</h1>
        <p className="tagline">Your Smart City Platform</p>
        
        <div className="modules">
          <div className="module-card">
            <h2>🔧 Infrastructure</h2>
            <p>Report and track civic issues</p>
            <Link to="/report" className="btn btn-primary">Report Issue</Link>
          </div>
          
          <div className="module-card">
            <h2>💳 Services</h2>
            <p>Pay bills and access documents</p>
            <Link to="/bills" className="btn btn-primary">View Bills</Link>
          </div>
          
          <div className="module-card">
            <h2>🚌 Mobility</h2>
            <p>Track buses and find parking</p>
            <Link to="/bus" className="btn btn-primary">Track Bus</Link>
          </div>
          
          <div className="module-card">
            <h2>🚨 Safety</h2>
            <p>Emergency services and alerts</p>
            <Link to="/sos" className="btn btn-danger">SOS</Link>
          </div>
          
          <div className="module-card">
            <h2>📢 Engagement</h2>
            <p>City notices and community polls</p>
            <Link to="/notices" className="btn btn-primary">View Notices</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
