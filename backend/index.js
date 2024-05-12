// server.js or index.js
const express = require('express');
const bodyParser = require('body-parser'); // If you're using body-parser middleware
const cors = require('cors'); // Import CORS middleware
const connectDB = require('./db');
const authRoutes = require('./authRoutes'); // Import your auth routes

const app = express();

// Middleware
app.use(cors({
  origin: 'https://interview-whiz.vercel.app',
  methods: ['GET', 'POST', 'DELETE'], // Add other methods if needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Add other headers if needed
}));
app.use(bodyParser.json()); // Use body-parser middleware if needed
app.use('/api', authRoutes); // Mount the auth routes under the /api path

// Connect to MongoDB Atlas
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
