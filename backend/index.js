const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the CORS middleware
const signupRouter = require('./authController'); // Import the router for signup

const config = require('./config');

const app = express();
const PORT = 8080;

// Connect to MongoDB
mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Use CORS middleware to allow requests from all origins
app.use(cors());

// Define routes
app.use('/', signupRouter); // Mount the signup router under the '/api' prefix

// Start the server
app.listen(PORT, () => {
  console.log('App is running on port ' + PORT);
});
