const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/db');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.post('/',
  authenticateToken,
  [
    body('bookingId').isInt(),
    body('rating').isInt({ min: 1, max: 5 }),
    body('comment').optional().trim()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { bookingId, rating, comment } = req.body;

    try {
      const bookingResult = await db.query(
        'SELECT * FROM bookings WHERE id = $1 AND user_id = $2 AND status = $3',
        [bookingId, req.user.id, 'completed']
      );

      if (bookingResult.rows.length === 0) {
        return res.status(404).json({ error: 'Completed booking not found' });
      }

      const existingReview = await db.query(
        'SELECT * FROM reviews WHERE booking_id = $1',
        [bookingId]
      );

      if (existingReview.rows.length > 0) {
        return res.status(400).json({ error: 'Review already exists for this booking' });
      }

      const result = await db.query(
        `INSERT INTO reviews (booking_id, user_id, rating, comment)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [bookingId, req.user.id, rating, comment]
      );

      res.status(201).json({
        message: 'Review submitted successfully',
        review: result.rows[0]
      });
    } catch (error) {
      console.error('Create review error:', error);
      res.status(500).json({ error: 'Failed to submit review' });
    }
  }
);

router.get('/', async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;

    const result = await db.query(
      `SELECT r.*, u.first_name, u.last_name, b.service_id, s.category
       FROM reviews r
       JOIN users u ON r.user_id = u.id
       JOIN bookings b ON r.booking_id = b.id
       JOIN services s ON b.service_id = s.id
       ORDER BY r.created_at DESC
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Get reviews error:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

router.get('/stats', async (req, res) => {
  try {
    const result = await db.query(
      `SELECT 
        COUNT(*) as total_reviews,
        AVG(rating) as average_rating,
        COUNT(CASE WHEN rating = 5 THEN 1 END) as five_star,
        COUNT(CASE WHEN rating = 4 THEN 1 END) as four_star,
        COUNT(CASE WHEN rating = 3 THEN 1 END) as three_star,
        COUNT(CASE WHEN rating = 2 THEN 1 END) as two_star,
        COUNT(CASE WHEN rating = 1 THEN 1 END) as one_star
       FROM reviews`
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get review stats error:', error);
    res.status(500).json({ error: 'Failed to fetch review statistics' });
  }
});

module.exports = router;
