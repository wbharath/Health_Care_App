import express from 'express';
import Seeker from '../models/Seeker.js';
import bcrypt from 'bcrypt'
import Provider from '../models/Provider.js';
const router = express.Router();
const saltRounds = 10;

router.post('/register', async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newProvider = new Provider({
      fullName,
      username,
      email,
      password: hashedPassword
    });
    await newProvider.save();
    res.status(201).json({ message: 'Provider registration successful' });
  } catch (error) {
    console.error('Provider registration error:', error);
    res.status(500).json({ message: 'Error during provider registration', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;
    const provider = await Provider.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
    });
    if (!provider) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, provider.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Provider login successful', provider });
  } catch (error) {
    console.error('Provider login error:', error);
    res.status(500).json({ message: 'Error during provider login', error: error.message });
  }
});

export default router