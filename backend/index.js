// backend/index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://192.168.2.21:27017/support-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
import seekerRoutes from './routes/Seeker.js';

app.use('/api/seeker', seekerRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
  });
  