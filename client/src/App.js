import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Module 1: Infrastructure & Grievance
import QuickSnapDashboard from './pages/QuickSnapDashboard';
import TicketTracker from './pages/TicketTracker';
import LocalFeed from './pages/LocalFeed';

// Module 2: Municipal Services
import BillPayment from './pages/BillPayment';
import DocumentVault from './pages/DocumentVault';

// Module 3: Smart Mobility
import BusTracker from './pages/BusTracker';
import SmartParking from './pages/SmartParking';

// Module 4: Safety & Health
import SOSButton from './pages/SOSButton';
import HospitalBeds from './pages/HospitalBeds';

// Module 5: Engagement
import CityNotices from './pages/CityNotices';
import CommunityPolls from './pages/CommunityPolls';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Module 1 */}
          <Route path="/report" element={<QuickSnapDashboard />} />
          <Route path="/track" element={<TicketTracker />} />
          <Route path="/feed" element={<LocalFeed />} />
          
          {/* Module 2 */}
          <Route path="/bills" element={<BillPayment />} />
          <Route path="/documents" element={<DocumentVault />} />
          
          {/* Module 3 */}
          <Route path="/bus" element={<BusTracker />} />
          <Route path="/parking" element={<SmartParking />} />
          
          {/* Module 4 */}
          <Route path="/sos" element={<SOSButton />} />
          <Route path="/hospitals" element={<HospitalBeds />} />
          
          {/* Module 5 */}
          <Route path="/notices" element={<CityNotices />} />
          <Route path="/polls" element={<CommunityPolls />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
