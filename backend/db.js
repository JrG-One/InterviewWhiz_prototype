// db.js
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://ojaswavarshney:12345678oj@cluster0.0bu1e29.mongodb.net/data', {
      useNewUrlParser: true,
      useUnifiedTopology: true // Remove useCreateIndex option
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}

module.exports = connectDB;
