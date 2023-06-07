require('dotenv').config();
// const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./dB/connectDB');
const authRoutes = require('./routes/loginAuthentication');

const ticketRoutes = require('./routes/ticket');

// connect to the database
connectDB();

// middleware
const app = express();
app.use(express.json());

// r outes
app.use('/api/auth', authRoutes);
app.use('/api', ticketRoutes);

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`http://localhost:${port}`) });
