# CIVIC-EYE Setup Guide

## Prerequisites

- Docker & Docker Compose
- Git

## Quick Start (Docker - Recommended)

```bash
# Clone the repository
git clone https://github.com/greninja-op/CIVIC-EYE.git
cd CIVIC-EYE

# Start all services
docker-compose up --build

# Wait for all services to start (2-3 minutes)
# Access the application at http://localhost
```

## Services & Ports

| Service | Port | Description |
|---------|------|-------------|
| Frontend | 80 | React + Tailwind UI |
| Laravel | 8000 | PHP Backend API |
| Node.js | 3001 | Real-time WebSocket |
| Flask | 5000 | AI/ML Service |
| MySQL | 3306 | Database |

## Manual Setup (Development)

### 1. Database Setup

```bash
# Start MySQL
docker run -d -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=civic123 \
  -e MYSQL_DATABASE=civiceye \
  -e MYSQL_USER=civic_user \
  -e MYSQL_PASSWORD=civic_pass \
  --name civic-mysql mysql:8.0

# Import schema
mysql -h localhost -u civic_user -pcivic_pass civiceye < database/init.sql
```

### 2. Laravel Backend

```bash
cd backend

# Install dependencies
composer install

# Setup environment
cp .env.example .env
php artisan key:generate

# Run migrations
php artisan migrate

# Start server
php artisan serve --port=8000
```

### 3. Node.js Real-time Service

```bash
cd realtime

# Install dependencies
npm install

# Start service
node index.js
```

### 4. Flask AI Service

```bash
cd ai-service

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start service
python app.py
```

### 5. React Frontend

```bash
cd client

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Start development server
npm start
```

## Testing the Application

### 1. Test Laravel API
```bash
curl http://localhost:8000/api/grievances/feed
```

### 2. Test Node.js Real-time
```bash
curl http://localhost:3001/realtime/buses
```

### 3. Test Flask AI
```bash
curl http://localhost:5000/ai/health
```

### 4. Test Frontend
Open browser: http://localhost (or http://localhost:3000 in dev mode)

## Docker Commands

```bash
# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild specific service
docker-compose up --build laravel

# Access MySQL
docker exec -it civic-eye-db mysql -u civic_user -pcivic_pass civiceye
```

## Troubleshooting

### Port Already in Use
```bash
# Check what's using the port
netstat -ano | findstr :8000

# Kill the process or change port in docker-compose.yml
```

### Database Connection Failed
```bash
# Wait for MySQL to be ready
docker-compose logs mysql

# Check health
docker exec civic-eye-db mysqladmin ping -h localhost
```

### Laravel Errors
```bash
# Clear cache
docker exec civic-eye-laravel php artisan cache:clear
docker exec civic-eye-laravel php artisan config:clear
```

## Default Credentials

**Admin User:**
- Email: admin@civiceye.com
- Password: password

**Test Citizen:**
- Email: john@example.com
- Password: password

## Next Steps

1. Configure environment variables in `.env` files
2. Set up proper authentication tokens
3. Add real ML models to Flask service
4. Configure production database credentials
5. Set up SSL certificates for production

## Support

For issues, visit: https://github.com/greninja-op/CIVIC-EYE/issues
