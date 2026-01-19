const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings');
const serviceRoutes = require('./routes/services');
const reviewRoutes = require('./routes/reviews');
const galleryRoutes = require('./routes/gallery');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('trust proxy', 1);

app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Three Space Shine API',
    status: 'running',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      services: '/api/services',
      bookings: '/api/bookings',
      reviews: '/api/reviews',
      gallery: '/api/gallery',
      admin: '/api/admin'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Three Space Shine API is running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/admin', adminRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Three Space Shine API running on port ${PORT}`);
  console.log(`📍 Location: Indianapolis, Indiana`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}\n`);
});

module.exports = app;
