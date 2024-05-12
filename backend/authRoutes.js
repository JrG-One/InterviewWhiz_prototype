// authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./user');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  try {
    console.log('Received signup request:', req.body); // Log request body

    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    console.log('User created successfully:', newUser); // Log newly created user
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error signing up:', error); // Log signup error
    res.status(500).json({ message: error.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    console.log('Received login request:', req.body); // Log request body

    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Invalid credentials');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log('Login successful:', user); // Log user details
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error); // Log login error
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
