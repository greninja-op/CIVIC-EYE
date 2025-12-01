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

- **Frontend**: React.js + Tailwind CSS
- **Core Backend**: PHP (Laravel) - Handles Users, Tickets, Bills
- **Real-Time Service**: Node.js - WebSocket for live updates
- **AI Service**: Python (Flask) - Image analysis & predictions
- **Database**: MySQL (Single source of truth)
- **Containerization**: Docker

## Architecture

```
┌─────────────────┐
│  React Frontend │ (Port 80)
│  + Tailwind CSS │
└────────┬────────┘
         │
    ┌────┴────┬──────────┬──────────┐
    │         │          │          │
┌───▼───┐ ┌──▼──┐  ┌────▼────┐ ┌──▼──┐
│Laravel│ │Node │  │  Flask  │ │MySQL│
│  PHP  │ │ JS  │  │ Python  │ │  DB │
│ :8000 │ │:3001│  │  :5000  │ │:3306│
└───────┘ └─────┘  └─────────┘ └─────┘
```

## Quick Start

### Using Docker (Recommended)

```bash
# Build and run all services
docker-compose up --build

# Access the app
Frontend: http://localhost
Laravel API: http://localhost:8000
Node.js Real-time: http://localhost:3001
Flask AI: http://localhost:5000
```

### Manual Setup

**1. Backend (Laravel)**
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve --port=8000
```

**2. Real-time Service (Node.js)**
```bash
cd realtime
npm install
node index.js
```

**3. AI Service (Flask)**
```bash
cd ai-service
pip install -r requirements.txt
python app.py
```

**4. Frontend (React)**
```bash
cd client
npm install
npm start
```

## Database Schema

**MySQL Tables:**
- `users` - User accounts
- `grievances` - Citizen complaints with AI tags
- `bills` - Municipal bills
- `buses` - Live bus tracking data
- `parking_spots` - Parking availability
- `sos_alerts` - Emergency alerts
- `hospitals` - Hospital bed data

## API Endpoints

### Laravel (Core API)
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/grievances/report` - Report issue
- `GET /api/grievances/feed` - Get local issues
- `GET /api/services/bills` - Get bills
- `POST /api/services/bills/pay` - Pay bill

### Node.js (Real-time)
- `GET /realtime/buses` - Live bus locations
- `GET /realtime/parking` - Parking availability
- WebSocket: `sos_alert` - Emergency broadcasts

### Flask (AI)
- `POST /ai/analyze-image` - Auto-tag grievance images
- `POST /ai/predict-traffic` - Traffic predictions
- `GET /ai/hospital-demand` - Bed demand forecast

## Project Structure

```
civic-eye/
├── client/              # React + Tailwind frontend
│   ├── src/
│   ├── Dockerfile
│   └── nginx.conf
├── backend/             # Laravel PHP backend
│   ├── app/
│   ├── routes/
│   ├── database/
│   └── Dockerfile
├── realtime/            # Node.js WebSocket service
│   ├── index.js
│   └── Dockerfile
├── ai-service/          # Flask Python AI service
│   ├── app.py
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Contributing

Pull requests are welcome!

## License

MIT
