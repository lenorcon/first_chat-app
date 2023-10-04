const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(bodyParser.json());

// MySQL setup
const db = mysql.createConnection({
  host: 'your-mysql-host',
  user: 'your-username',
  password: 'your-password',
  database: 'chat_app',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Socket.io setup
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (message) => {
    // Broadcast the message to all connected clients
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
