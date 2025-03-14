// backend/routes/seeker.js
const express = require('express');
const router = express.Router();
const Seeker = require('../models/Seeker');

// Registration Endpoint
router.post('/register', async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;
    const newSeeker = new Seeker({ fullName, username, email, password });
    await newSeeker.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Error during registration', error: err.message });
  }
});

// Login Endpoint
router.post('/login', async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;
    // Find seeker by username or email
    const seeker = await Seeker.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      password: password  // For production, use hashed passwords and compare using bcrypt
    });

    if (!seeker) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', seeker });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Error during login', error: err.message });
  }
});

module.exports = router;
