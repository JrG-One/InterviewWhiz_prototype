// authController.js

const UserModel = require('../models/user');

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Create a new user instance
    const newUser = new UserModel({
      name,
      email,
      password
    });

    // Save the user to the database
    await newUser.save();

    // Return a success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Return an error response if something goes wrong
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};