const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/db');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.post('/',
  authenticateToken,
  [
    body('serviceId').isInt(),
    body('bookingDate').isDate(),
    body('bookingTime').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    body('address').trim().notEmpty(),
    body('zipCode').optional().trim()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      serviceId,
      bookingDate,
      bookingTime,
      address,
      city = 'Indianapolis',
      state = 'Indiana',
      zipCode,
      specialInstructions
    } = req.body;

    try {
      const serviceResult = await db.query(
        'SELECT * FROM services WHERE id = $1 AND active = true',
        [serviceId]
      );

      if (serviceResult.rows.length === 0) {
        return res.status(404).json({ error: 'Service not found' });
      }

      const service = serviceResult.rows[0];

      const existingBooking = await db.query(
        'SELECT * FROM bookings WHERE booking_date = $1 AND booking_time = $2 AND status != $3',
        [bookingDate, bookingTime, 'cancelled']
      );

      if (existingBooking.rows.length > 0) {
        return res.status(400).json({ error: 'This time slot is already booked' });
      }

      const result = await db.query(
        `INSERT INTO bookings (
          user_id, service_id, booking_date, booking_time, 
          address, city, state, zip_code, special_instructions, 
          total_price, status, payment_status
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING *`,
        [
          req.user.id,
          serviceId,
          bookingDate,
          bookingTime,
          address,
          city,
          state,
          zipCode,
          specialInstructions,
          service.price,
          'pending',
          'pending'
        ]
      );

      res.status(201).json({
        message: 'Booking created successfully',
        booking: result.rows[0]
      });
    } catch (error) {
      console.error('Create booking error:', error);
      res.status(500).json({ error: 'Failed to create booking' });
    }
  }
);

router.get('/my-bookings', authenticateToken, async (req, res) => {
  try {
    const result = await db.query(
      `SELECT b.*, s.name as service_name, s.category, s.package_type, s.duration
       FROM bookings b
       JOIN services s ON b.service_id = s.id
       WHERE b.user_id = $1
       ORDER BY b.booking_date DESC, b.booking_time DESC`,
      [req.user.id]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Get user bookings error:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const result = await db.query(
      `SELECT b.*, s.name as service_name, s.category, s.package_type, s.duration, s.features
       FROM bookings b
       JOIN services s ON b.service_id = s.id
       WHERE b.id = $1 AND b.user_id = $2`,
      [req.params.id, req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({ error: 'Failed to fetch booking' });
  }
});

router.patch('/:id/cancel', authenticateToken, async (req, res) => {
  try {
    const result = await db.query(
      `UPDATE bookings 
       SET status = 'cancelled', updated_at = CURRENT_TIMESTAMP
       WHERE id = $1 AND user_id = $2 AND status = 'pending'
       RETURNING *`,
      [req.params.id, req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found or cannot be cancelled' });
    }

    res.json({
      message: 'Booking cancelled successfully',
      booking: result.rows[0]
    });
  } catch (error) {
    console.error('Cancel booking error:', error);
    res.status(500).json({ error: 'Failed to cancel booking' });
  }
});

router.get('/availability/:date', async (req, res) => {
  try {
    const result = await db.query(
      `SELECT booking_time FROM bookings 
       WHERE booking_date = $1 AND status != 'cancelled'`,
      [req.params.date]
    );

    const bookedTimes = result.rows.map(row => row.booking_time);
    
    const businessHours = [];
    for (let hour = 8; hour < 18; hour++) {
      businessHours.push(`${hour.toString().padStart(2, '0')}:00`);
      businessHours.push(`${hour.toString().padStart(2, '0')}:30`);
    }

    const availableTimes = businessHours.filter(time => !bookedTimes.includes(time));

    res.json({ availableTimes });
  } catch (error) {
    console.error('Get availability error:', error);
    res.status(500).json({ error: 'Failed to fetch availability' });
  }
});

module.exports = router;
