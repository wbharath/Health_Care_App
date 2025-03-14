import express from 'express';
import Seeker from '../models/Seeker.js';
import bcrypt from 'bcrypt'
const router = express.Router();


// Define the number of salt rounds for bcrypt (10 is a common default)
const saltRounds = 10;
// Registration Endpoint
router.post('/register', async (req, res) => {
    try {
      const { fullName, username, email, password } = req.body;
      
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      
      const newSeeker = new Seeker({
        fullName,
        username,
        email,
        password: hashedPassword  
      });
      
      await newSeeker.save();
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Error during registration', error: error.message });
    }
  });

// Login Endpoint
// backend/routes/seeker.js
router.post('/login', async (req, res) => {
    try {
      const { usernameOrEmail, password } = req.body;
      // Find the seeker by username or email
      const seeker = await Seeker.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
      });
      
      if (!seeker) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      
      // Compare the entered password with the hashed password
      const isMatch = await bcrypt.compare(password, seeker.password);
      
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      
      res.status(200).json({ message: 'Login successful', seeker });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Error during login', error: error.message });
    }
  });
  
export default router;
