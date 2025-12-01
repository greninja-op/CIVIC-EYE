const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'mysql',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'civic_user',
  password: process.env.DB_PASSWORD || 'civic_pass',
  database: process.env.DB_NAME || 'civiceye',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Real-time bus tracking
app.get('/realtime/buses', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM buses WHERE active = 1');
    res.json({ buses: rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Real-time parking updates
app.get('/realtime/parking', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM parking_spots');
    res.json({ spots: rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// WebSocket for SOS alerts
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('sos_alert', async (data) => {
    console.log('SOS Alert received:', data);
    
    // Broadcast to all admin clients
    io.emit('new_sos', {
      id: Date.now(),
      latitude: data.latitude,
      longitude: data.longitude,
      timestamp: new Date(),
      type: data.type || 'emergency'
    });

    // Store in database
    try {
      await pool.query(
        'INSERT INTO sos_alerts (latitude, longitude, type, status) VALUES (?, ?, ?, ?)',
        [data.latitude, data.longitude, data.type || 'emergency', 'active']
      );
    } catch (error) {
      console.error('Error storing SOS:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Simulate bus location updates
setInterval(async () => {
  try {
    const [buses] = await pool.query('SELECT * FROM buses WHERE active = 1');
    io.emit('bus_update', buses);
  } catch (error) {
    console.error('Error updating buses:', error);
  }
}, 5000);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Real-time service running on port ${PORT}`);
});
