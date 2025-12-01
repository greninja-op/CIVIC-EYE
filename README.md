# CIVIC-EYE 🏙️

Smart City Platform for Infrastructure, Municipal Services, Mobility, Safety & Citizen Engagement

## Modules

### 1. Infrastructure & Grievance (The "Fix It" Module)
- Quick-Snap Dashboard for reporting issues
- Ticket Tracker with live timeline
- Local Feed to prevent duplicate reports
- Task Resolution Interface for field workers

### 2. Municipal Services (The "No Queues" Module)
- Unified Bill Payment
- Document Vault (DigiLocker-style)
- Bulk Waste Booking
- Water Supply Schedule

### 3. Smart Mobility (The "Commute" Module)
- Live Bus & Metro Tracker
- Smart Parking Map
- Route Traffic Predictor
- E-Challan & Traffic Fines

### 4. Safety & Health (The "Emergency" Module)
- One-Touch SOS
- Safe Route Map
- Hospital Bed Availability
- Disaster Dispatch Control

### 5. Engagement & Transparency (The "Voice" Module)
- City Notices & Alerts
- Community Polls
- Budget Transparency Dashboard
- Mayor's Eye Analytics

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Containerization**: Docker

## Quick Start

### Using Docker (Recommended)

```bash
# Build and run
docker-compose up --build

# Access the app
http://localhost:5000
```

### Manual Setup

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Run development servers
npm run dev
```

## Environment Variables

Create `.env` file in server directory:

```
MONGODB_URI=mongodb://localhost:27017/civiceye
PORT=5000
JWT_SECRET=your_secret_key
```

## Project Structure

```
civic-eye/
├── client/          # React frontend
├── server/          # Node.js backend
├── docker-compose.yml
├── Dockerfile
└── README.md
```

## Contributing

Pull requests are welcome!

## License

MIT
